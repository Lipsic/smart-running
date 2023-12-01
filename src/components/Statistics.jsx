import { useState } from "react";
import { Grid } from "@mui/material";
import Counter from "../layout/Counter";
import { useAtom } from "jotai";
import { readOnlyStatistics } from "../store/statistics";
function Statistics() {
  const [toggle, setToggle]=useState(false)
  const [stats] = useAtom(readOnlyStatistics)

  function handleClick (){
    console.log('stats', stats)
    setToggle(prev=>!prev)
  }
  

  return (
    <Grid container>
      <button onClick={handleClick}>Btn</button>
      <Grid item xs={12}>
        <Counter data="00:23:32" label="duração" />
      </Grid>
      <Grid item xs={4}>
        <Counter data="0,00" label="distância" />
      </Grid>
      <Grid item xs={4}>
        <Counter data="0" label="calorias" />
      </Grid>
      <Grid item xs={4}>
        <Counter data="00:00" label="ritmo" />
      </Grid>
    </Grid>
  );
}

export default Statistics;
