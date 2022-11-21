import { createGlobalStyle } from 'styled-components/macro';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--font);
    font-size: var(--fz-md);
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.04em;
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 10px;
  }

  
  a {
    text-decoration: none;
  }
/* 
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    object-fit: contain;
  }

  main {
    position: relative;
    padding: var(--spacing-xxl) 0;
  }

  .app {
    min-height: 100vh;
  } */

`;

export default GlobalStyle;
