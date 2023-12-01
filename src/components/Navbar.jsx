import React from "react";
import { Button, ButtonGroup, IconButton, Typography } from "@mui/material";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import PersonIcon from "@mui/icons-material/Person";

import { NavStyles } from "../styles/navbar";
const content = [
  { label: "feed", icon: <FeedOutlinedIcon /> },
  { label: "community", icon: <GroupsOutlinedIcon /> },
  { label: "activity", icon: <BoltOutlinedIcon /> },
  { label: "statistics", icon: <SignalCellularAltOutlinedIcon /> },
  { label: "profile", icon: <PersonIcon /> },
];
function Navbar() {
  return (
    <NavStyles>
      <ButtonGroup
        variant="text"
        aria-label="outlined primary button group"
        fullWidth
        size="large"
        sx={{
          width: "100%",
          zIndex: "999",
          position: "relatve",
          bottom: 0,
          justifyContent: "space-evenly",
        }}
      >
        {content.map((btn, i) => (
          <IconButton
            key={`navmenu-mob__${i}`}
            sx={{ display: "grid", justifyItems: "center" }}
          >
            {btn.icon}
            <Typography>{btn.label}</Typography>
          </IconButton>
        ))}
      </ButtonGroup>
    </NavStyles>
  );
}

export default Navbar;
