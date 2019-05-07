import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 65px 0 0;
    font-family:  "Roboto"
  }

  main {
    width: 90%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
