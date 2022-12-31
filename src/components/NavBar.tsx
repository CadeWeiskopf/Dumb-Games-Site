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
          style={{ maxWidth: "100%" }}
        >
          <Grid item>
            <Typography variant="h6" align="center">
              DumbGames
            </Typography>
          </Grid>
          <Grid item style={{ display: "flex", width: "25px" }}>
            <GamesIcon />
          </Grid>
          <Grid item style={{ display: "flex", width: "25px" }}>
            <InfoIcon />
          </Grid>
          <Grid item style={{ display: "flex", width: "25px" }}>
            <ContactMailIcon />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
