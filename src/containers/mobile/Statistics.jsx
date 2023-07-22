import { Grid } from "@mui/material";
import React from "react";
import Counter from "../../layout/Counter";

function Statistics() {
  return (
    <Grid container fluid="false">
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
