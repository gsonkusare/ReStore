import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography variant="h3">Oops- page not found!</Typography>
      <Divider></Divider>
      <Button fullWidth component={Link} to="/catlog" size="small">
        Go back to shop
      </Button>
    </Container>
  );
}
