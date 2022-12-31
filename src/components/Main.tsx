import { Container, Box } from "@material-ui/core";

const Main: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box my={2} width={"100%"} style={{ textAlign: "center" }}>
        <h2>Welcome to Dumb Games!</h2>
        <p>Have fun poking around.</p>
      </Box>
    </Container>
  );
};

export default Main;
