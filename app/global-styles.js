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
  }

  body {
    font-family: 'archia', sans-serif;
    font-size: 16px;
    line-height: 25px;
    color: white;
  }

  p,
  label {
    font-family: 'archia', sans-serif;
    font-size: 16px;
    line-height: 25px;
  }
`;

export default GlobalStyle;
