import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    min-height: 100%;
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }
  body, input, button {
    font: 14px 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  textarea {
    resize: none;
  }
`;
