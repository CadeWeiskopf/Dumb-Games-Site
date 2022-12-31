import { AppBar, Toolbar, Typography, Menu, MenuItem } from "@material-ui/core";
import { useState, useRef } from "react";

interface NavBarProps {
  className: string;
}

interface NavBarState {
  anchorEl: HTMLElement | null;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const [state, setState] = useState<NavBarState>({
    anchorEl: null,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setState({
      anchorEl: event.currentTarget,
    });
  };

  const handleClose = () => {
    setState({
      anchorEl: null,
    });
  };

  return (
    <AppBar position="static" className={className}>
      <Toolbar>
        <Typography
          variant="h6"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          DumbGames
        </Typography>
        <Menu
          id="simple-menu"
          anchorEl={state.anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          keepMounted
          open={Boolean(state.anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
