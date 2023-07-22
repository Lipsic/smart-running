import React from "react";
import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="relative"
      variant="secondary"
      sx={{ backgroundColor: "transparent", color: "black" }}
    >
      <Typography variant="h6" textAlign={"center"} gutterBottom>
        Logo
      </Typography>
    </AppBar>
  );
}

export default Header;
