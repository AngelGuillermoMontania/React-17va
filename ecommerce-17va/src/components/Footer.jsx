import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container
      color="primary"
      title="jksdah"
      fixed
      sx={{ backgroundColor: "#455a64", borderRadius: "10px 10px 0 0" }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </Container>
  );
}
