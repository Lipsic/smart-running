import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="relative"
      variant="secondary"
      sx={{ backgroundColor: "transparent", color: "black" }}
    >
      <Typography variant="h6" marginTop={3} textAlign={"center"} gutterBottom>
        Smart Running
      </Typography>
    </AppBar>
  );
}

export default Header;
