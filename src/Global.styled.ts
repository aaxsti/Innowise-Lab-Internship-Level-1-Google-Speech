import { createGlobalStyle } from 'styled-components';
import Fonts from './core/constants/fonts';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    font-family: ${Fonts.mainFont}, sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default Global;
