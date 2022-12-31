import { Container, Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="subtitle1" align="center">
          Copyright © 2022 Dumb Games - All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
