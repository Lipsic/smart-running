import React from "react";
import {
  Container,
  Grid,
  Button,
  ButtonGroup,
  IconButton,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

const iconStyles = {
  backgroundColor: "white",
  border: "1px blue solid",
};
const mainBtnStyles = {
  backgroundColor: "blue",
};
function OverlayButtons() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        width: "100%",
        backgroundColor: "transparet",
        position: "relative",
        top: "-130px",
        zIndex: "999",
      }}
    >
      <ButtonGroup fullWidth sx={{ gap: "15px" }}>
        <IconButton sx={iconStyles} aria-label="música">
          <MusicNoteIcon />
        </IconButton>
        <Button variant={"contained"} aria-label="começar">
          <Grid>
            <Typography>Começar</Typography>
          </Grid>
        </Button>
        <IconButton sx={iconStyles} aria-label="configurações">
          <SettingsIcon />
        </IconButton>
      </ButtonGroup>
    </Container>
  );
}

export default OverlayButtons;
