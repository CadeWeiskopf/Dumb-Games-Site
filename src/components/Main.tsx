import { Container, Box } from "@material-ui/core";

const Main: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box my={2} width={"100%"} style={{ textAlign: "center" }}>
        <h2>Welcome to my app!</h2>
        <p>This is the main section of my app.</p>
      </Box>
    </Container>
  );
};

export default Main;
