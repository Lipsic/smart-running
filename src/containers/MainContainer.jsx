import React from "react";
import { MainStyles } from "../styles/main-container";
import { useMediaQuery, Box } from "@mui/material";
const styles = {
  margin: 0,
  padding: 0,
  height: "100%",
  display: "grid",
  columnGap: 3,
  rowGap: 1,
  gridTemplateRows: "50px 1fr 4fr 60px",
};
function MainContainer(props) {
  const mobileSize = useMediaQuery("(min-width:600px)");
  return (
    <MainStyles>
      {/* <Container sx={!mobileSize ? styles : {}}>{props.children}</Container> */}
      <Box sx={!mobileSize ? styles : {}}>{props.children}</Box>
    </MainStyles>
  );
}

export default MainContainer;
