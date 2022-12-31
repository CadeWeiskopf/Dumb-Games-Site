import { Container, Box, Typography } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright © 2022 Dumb Games - All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
