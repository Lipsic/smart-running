import { MainStyles } from "../styles/main-container";
import { useMediaQuery, Box } from "@mui/material";

const styles = {
  margin: 0,
  padding: 0,
  height: "100%",
  display: "grid",
  columnGap: 0,
  rowGap: 0,
  gridTemplateRows: "50px 1fr 4fr 60px",
  overflow: "hidden",
};

function MainContainer({children}) {
  const mobileSize = useMediaQuery("(min-width:600px)");
  return (
    <MainStyles>
      <Box sx={!mobileSize ? styles : {}}>{children}</Box>
    </MainStyles>
  );
}

export default MainContainer;
