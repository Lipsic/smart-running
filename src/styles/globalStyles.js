import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
