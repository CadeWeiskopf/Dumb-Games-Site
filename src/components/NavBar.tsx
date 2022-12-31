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
          justifyContent="space-between"
          spacing={0}
          alignItems="center"
          style={{ maxWidth: "100%", padding: "12px 12px 12px 12px" }}
        >
          <Grid item>
            <Typography variant="h6" align="center">
              DumbGames
            </Typography>
          </Grid>
          <div style={{ display: "flex", gap: "12px" }}>
            <Grid item style={{ display: "flex" }}>
              <GamesIcon />
            </Grid>
            <Grid item style={{ display: "flex" }}>
              <InfoIcon />
            </Grid>
            <Grid item style={{ display: "flex" }}>
              <ContactMailIcon />
            </Grid>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
