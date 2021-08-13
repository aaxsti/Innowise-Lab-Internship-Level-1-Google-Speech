import styled from 'styled-components';

import background from './assets/background.jpg';

const MainAppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background}) fixed;
  background-size: cover;
`;

export default MainAppWrapper;
