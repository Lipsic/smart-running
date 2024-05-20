import { Outlet } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import MainContainer from "../containers/MainContainer";
import { createPortal } from "react-dom";
// import { AppBar } from "@mui/material";
import Profile from "../components/Profile";

const light = {
  colors: {
    div: "black",
  },
};
function RootLayout() {
  const profileModal = createPortal(
    <Profile />,
    document.getElementById("modal")
  );
  return (
    <>
      <ThemeProvider theme={light}>
        <MainContainer>
          <Outlet />
        </MainContainer>
        {false && profileModal}
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default RootLayout;
