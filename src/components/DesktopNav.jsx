import { ButtonGroup, IconButton, Typography } from "@mui/material";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
const content = [
  { label: "feed", icon: <FeedOutlinedIcon /> },
  { label: "community", icon: <GroupsOutlinedIcon /> },
  { label: "activity", icon: <BoltOutlinedIcon /> },
  { label: "statistics", icon: <SignalCellularAltOutlinedIcon /> },
  { label: "profile", icon: <PersonIcon /> },
];
function DesktopNavbar() {
  return (
    <div style={{display: 'flex', alignContent: 'center'}}>
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
          <Link to={btn.label} key={`navmenu-mob__${i}`} style={{textDecoration: 'none'}}>
          <IconButton
            sx={{ display: "grid", justifyItems: "center" }}
          >
            {btn.icon}
            <Typography>{btn.label}</Typography>
          </IconButton>
            </Link>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default DesktopNavbar;
