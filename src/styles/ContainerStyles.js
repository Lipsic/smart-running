import styled from "styled-components";

export const ContainerStyles = styled.div`
  background-color: ${(props) => props.bg};
  color: ${({ theme }) => theme.colors.div};
  min-width: 100%;
  height: 100vh;
  justify-content: center;
  .leaflet-container {
    margin: 0 auto;
  }
`;
