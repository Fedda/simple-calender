import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
     font-size: 62.5%; /* Now 10px = 1rem!  */
    /* font-size:10px; */
    box-sizing: border-box;    
  }

  input,button, textarea, select{
    font-family:  'Roboto';    
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family:  'Roboto';    
    font-size : 1.6rem;    
  }

  .container {
    width: 96%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
