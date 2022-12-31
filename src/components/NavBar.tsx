import { AppBar, Toolbar, Typography, Menu, MenuItem } from "@material-ui/core";
import { useState, useRef } from "react";

interface NavBarProps {
  className: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <AppBar position="static" className={className}>
      <Toolbar>
        <Typography
          variant="h6"
          aria-controls="simple-menu"
          aria-haspopup="true"
        >
          DumbGames
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
