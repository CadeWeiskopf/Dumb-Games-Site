import { Container, Box, Typography } from "@mui/material";
import { useRef } from "react";
import Donut from "./Donut";

const Main: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box my={2} width={"100%"} style={{ textAlign: "center" }}></Box>
      <Donut />
    </Container>
  );
};

export default Main;
