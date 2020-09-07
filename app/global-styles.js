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
    max-width: 100%;
    height: 100%;
    background: #151417;
  }

  body {
    display: flex;
    position: relative; 
    flex-direction: column;
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

  .Popover-below {
    flex-direction: column;
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
  }
   
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }  
`;

export default GlobalStyle;
