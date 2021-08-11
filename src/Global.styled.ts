import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    font-family: 'Nunito', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Logo = styled.div<{ image: string }>`
  justify-content: flex-start;
  width: 85px;
  height: 85px;
  background: url(${(props) => props.image}) center;
  background-size: cover;
`;
