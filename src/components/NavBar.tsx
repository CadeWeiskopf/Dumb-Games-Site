import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

import GamesIcon from "@material-ui/icons/Games";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";

interface NavBarProps {
  className: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <AppBar position="static" className={className}>
      <Toolbar>
        <Grid
          container
          justifyContent="flex-start"
          spacing={8}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" align="center">
              DumbGames
            </Typography>
          </Grid>
          <Grid item style={{ display: "flex" }}>
            <GamesIcon />
          </Grid>
          <Grid item style={{ display: "flex" }}>
            <InfoIcon />
          </Grid>
          <Grid item style={{ display: "flex" }}>
            <ContactMailIcon />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
