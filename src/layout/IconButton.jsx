import { Button, ButtonGroup, IconButton, Typography } from "@mui/material";
// import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
// import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
// import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";

import { NavStyles } from "../../styles/navbar";

function Navbar() {
  return (
    <NavStyles>
      <ButtonGroup
        sx={{ zIndex: "999", position: "relatve", bottom: 0 }}
        variant="text"
        aria-label="outlined primary button group"
        fullWidth
      >
        <Button>One</Button>
        <Button>Two</Button>
        <IconButton sx={{ display: "grid", justifyItems: "center" }}>
          <BoltOutlinedIcon />
          <Typography>Atividade</Typography>
        </IconButton>
        <Button>Four</Button>
        <Button>Four</Button>
      </ButtonGroup>
    </NavStyles>
  );
}

export default Navbar;
