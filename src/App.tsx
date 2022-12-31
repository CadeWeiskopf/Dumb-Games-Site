import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import "./App.css";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ff0080", // retro-style pink color
    },
    secondary: {
      main: "#00bfff", // 80s-style bright blue color
    },
    background: {
      default: "#333333", // dark grey background
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#ffffff", // white text
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
  },
  navbar: {
    background: "linear-gradient(45deg, #ff0080 30%, #ff8c00 90%)",
  },
}));

function App() {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <NavBar className={classes.navbar} />
        <main className={classes.main}>
          <Grid item xs={12}>
            <Main />
          </Grid>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
