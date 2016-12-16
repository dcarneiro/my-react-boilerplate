import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    font-family: Roboto,sans-serif;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    line-height: 1.1;
  }

  h1 {
    font-size: 4.2rem;
    line-height: 110%;
    margin: 2.1rem 0 1.68rem 0;
  }

  h2 {
    font-size: 3.56rem;
    line-height: 110%;
    margin: 1.78rem 0 1.424rem 0;
  }

  h3 {
    font-size: 2.92rem;
    line-height: 110%;
    margin: 1.46rem 0 1.168rem 0;
  }

  h4 {
    font-size: 2.28rem;
    line-height: 110%;
    margin: 1.14rem 0 0.912rem 0;
  }

  h5 {
    font-size: 1.64rem;
    line-height: 110%;
    margin: 0.82rem 0 0.656rem 0;
  }

  h6 {
    font-size: 1rem;
    line-height: 110%;
    margin: 0.5rem 0 0.4rem 0;
  }

  button, html [type="button"],[type="reset"], [type="submit"] {
    -webkit-appearance: none;
  }
`;
