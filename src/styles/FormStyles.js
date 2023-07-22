import styled from "styled-components";

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  padding-top: 2em;
  input {
    width: 6em;
    height: 2em;
    max-width: 150px;
  }
  label {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 6em 6em;
    gap: 1.6em;
    justify-content: start;
    align-items: center;
    font-size: 0.7em;
    font-weight: bold;
    color: gray;
    text-transform: uppercase;
  }
  select {
    width: 6em;

    height: 2em;
    max-width: 150px;
  }
  button {
    margin: 0 auto;
    max-width: 150px;
    width: 6em;
    height: 3em;
  }
`;
