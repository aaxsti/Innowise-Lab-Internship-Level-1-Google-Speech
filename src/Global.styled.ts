import styled, {createGlobalStyle} from "styled-components";

export const colors = {
    primary: '#fff',
    red: '#ac0000',
    light: '#f3f4f6',
    dark: '#1f2937'
    // ...
}

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    font-family: 'Quicksand', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const Logo = styled.div<{ image: string }>`
  justify-content: flex-start;
  width: 85px;
  height: 85px;
  background: url(${props => props.image}) center;
  background-size: cover;
`