import { Grid, Button, Typography } from "@mui/material";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import { useState } from "react";

const buttons = [
  {name: "bike", icon: <PedalBikeIcon />},
  {name: "walk", icon: <DirectionsWalkIcon />},
  {name: "running", icon: <DirectionsRunIcon />}
]

const styles = {
  // backgroudColor: '#2880ca',
  // color: 'white'
}

function Starter({onStart, disabled}) {
  const [active, setActive] = useState('walk');

  function clickHandler (name){
    setActive(name)
  }
  return (
    <Grid container gap={1} justifyContent='center'>
      {buttons.map(btn=>(<Grid key={btn.name}item xs={3}>
        <Button variant={btn.name===active?'contained': 'outlined'} fullWidth startIcon={btn.icon} onClick={()=>clickHandler(btn.name)} sx={styles}>{btn.name}</Button>
      </Grid>))}
      <Grid item xs={12}  marginX={10} justifyContent='center'>
        <Typography fontFamily={'Arial'} color={'gray'} >Seclect an end point first to start...</Typography>
      </Grid>
      <Grid item xs={12}  marginX={10} justifyContent='center'>
        <Button variant="contained" fullWidth onClick={()=>onStart(active)} disabled={disabled}>Start</Button>
      </Grid>
    </Grid>
  );
}

export default Starter;
