import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    pading: 0;
    box-sizing: border-box
  }

  html {
    font-family: monospace;
    font-size: 16px;
  }

  body {
    padding: 1rem;
  }
`;

export default GlobalStyle;
