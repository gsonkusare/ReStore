import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  message?: string;
}

export default function LoadingComponent({ message = "Loading..." }: Props) {
  return (
    <Backdrop open={true} invisible={true}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignment: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={100} color="secondary"></CircularProgress>
        <Typography
          variant="h4"
          sx={{ justifyContent: "center", position: "fixed", top: "60%" }}
        >{message}
        </Typography>
      </Box>
    </Backdrop>
  );
}
