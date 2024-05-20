import { Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Statistics() {
    // Collectively, the range for normal WS for adults is between 1.2 and 1.4 m/s.73 Others reported WSs in m/min to be compatible with other energy and cadence measurements. Waters and colleagues reported a similar average of 82 m/min for adults.7
  return (
    <div>
      <Link to='/'>
      <IconButton sx={{marginLeft: '10px', marginTop: '10px'}}>
        <ArrowBackIosIcon />
      </IconButton>
      </Link>
      <Typography textAlign='center' sx={{margin: '15px'}}>How it works?</Typography>
      <Typography textAlign={'left'} maxWidth={1000} sx={{margin: '0 auto', padding: '20px'}}>When the profile data is not provided, an average range of data is set to fullfill the missing data. You can set the missing data in the <span><Link to={'/profile'}>profile</Link> </span> section and then all your data will be automatically updated.</Typography>
    </div>
  )
}

export default Statistics