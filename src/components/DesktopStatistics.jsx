import { Box, Grid } from "@mui/material";
import Counter from "../layout/Counter";
import { useAtom } from "jotai";
import { readOnlyStatistics } from "../store/statistics";
import Starter from "../map/Starter";
import { useState } from "react";
import Mode from "./Mode";
import DesktopNavbar from "./DesktopNav";



function Statistics() {
  const [start, setStart]=useState(true)
  const [mode, setMode]=useState('')
  const [stats] = useAtom(readOnlyStatistics)

  

function handleStart (sportMode){
  setMode(sportMode)
  console.log('stats', stats)
  setStart(false)
}


 const disabled = stats.distance === 0 || stats.distance === undefined
  
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '50%'}}>
    {mode && <Mode mode={mode}/>}
    {start ? <Starter onStart={handleStart} disabled={disabled}/> : <Grid container >
        <Grid item xs={3}>
          <Counter data={stats.duration+"min"} label="duração" />
        </Grid>
        <Grid item xs={3}>
          <Counter data={stats.distance+'km'} label="distância" />
        </Grid>
        <Grid item xs={3}>
          <Counter data={stats.duration * 5.5} label="calorias" />
        </Grid>
        <Grid item xs={3}>
          <Counter data={Math.trunc(stats.duration/stats.distance)} label="ritmo" />
        </Grid>
      </Grid>}
      <DesktopNavbar />
    </Box>

  );
}

export default Statistics;
