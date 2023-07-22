import styled from "styled-components";

export const ContainerStyled = styled.div`
  max-width: 100%;
  max-height: 100vh;
  overflow: hidden;
  .sidebar-opened {
    position: absolute;
    width: 15%;
    /* max-width: 10%; */
    height: 100%;

    right: 0;
    z-index: 1001;
    background-color: #fff;
    overflow: hidden;
    transition: 220ms;
  }
  .sidebar-closed {
    position: fixed;
    width: 4%;
    padding-top: 1em;
    height: 100%;
    right: 0;
    z-index: 2;
    background-color: #fff;
    transition: 0.3ms;

    justify-content: center;
  }

  .sidebar-closed svg {
    font-size: 25px;
  }
  .sidebar-opened svg {
    font-size: 25px;
  }

  .transparent-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.3;
    z-index: 1000;
  }
  .leaflet-container {
    max-width: 96%;
    max-height: 90%;
    z-index: -1;
    display: block;
  }

  .btn {
    border: none;
    background-color: transparent;
    margin: 0 auto;
  }
  .btn:hover {
    cursor: pointer;
  }
  .bg-btn {
    width: 30px;
    position: fixed;
    z-index: 1001;
    top: 0;
    right: 0;
  }
  .btn-container {
    margin-top: 1em;
    margin-right: 2em;
    display: grid;
    justify-content: end;
  }
`;

export const ButtonContainerStyled = styled.div`
  display: grid;
  grid-template-rows: 50px;
  gap: 1.5em;
`;
