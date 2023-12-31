import { Grid, Typography } from "@mui/material";

function Counter({ data, label }) {
  let capitalizedLabel = label.toLowerCase();
  capitalizedLabel = label[0].toUpperCase() + capitalizedLabel.substring(1);
  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
        {String(data)}
      </Typography>
      <Typography variant="h6" color={"grey"}>
        {capitalizedLabel}
      </Typography>
    </Grid>
  );
}

export default Counter;
