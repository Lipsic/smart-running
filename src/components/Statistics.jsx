import { Grid } from "@mui/material";
import Counter from "../layout/Counter";
import { useAtom } from "jotai";
import { readOnlyStatistics } from "../store/statistics";
import Starter from "../map/Starter";
import { useEffect, useState } from "react";
import Mode from "./Mode";


function Statistics() {
  const [start, setStart]=useState(true)
  const [mode, setMode]=useState('')
  const [stats] = useAtom(readOnlyStatistics)

  

function handleStart (sportMode){
  console.log('mode', mode)
  setMode(sportMode)
  setStart(false)
}

// useEffect(()=>{},[stats.distance])
console.log('stats', stats)

 const disabled = stats.distance === 0 || stats.distance === undefined
  
  return (
    <>
    {mode && <Mode mode={mode}/>}
    {start ? <Starter onStart={handleStart} disabled={disabled}/> : <Grid container>
        <Grid item xs={12}>
          <Counter data={stats.duration+"min"} label="duração" />
        </Grid>
        <Grid item xs={4}>
          <Counter data={stats.distance+'km'} label="distância" />
        </Grid>
        <Grid item xs={4}>
          <Counter data={stats.duration * 5.5} label="calorias" />
        </Grid>
        <Grid item xs={4}>
          <Counter data={Math.trunc(stats.duration/stats.distance)} label="ritmo" />
        </Grid>
      </Grid>}
    </>

  );
}

export default Statistics;
