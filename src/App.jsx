import React from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import MapD from "./map/MapD";
import MainContainer from "./containers/MainContainer";
import Header from "./containers/Header";
import Navbar from "./components/mobile/Navbar";
import Statistics from "./containers/mobile/Statistics";
// O marcador permanece sem o formulário ser preenchido

const light = {
  colors: {
    div: "black",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <MainContainer>
          <Header />
          <Statistics />
          <MapD />
          <Navbar />
        </MainContainer>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
