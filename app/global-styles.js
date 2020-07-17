import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    user-select: none;
    user-drag: none;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  html,
  body {
    height: 100%;
    width: 100%;
    min-height: 100%;
    min-width: 100%;
    max-height: 100%;
    max-width: 100%;
  }

  body {
    font-family: 'archiaregular', sans-serif;
    font-size: 16px;
    line-height: 25px;
    color: white;
  }

  p,
  label {
    font-family: 'archiaregular', sans-serif;
    font-size: 16px;
    line-height: 25px;
  }

  a {
    text-decoration: none !important;
    color: white !important;
  }
`;

export default GlobalStyle;
