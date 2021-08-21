import styled from 'styled-components';

import background from './assets/background.jpg';
import Colors from './core/constants/colors';

const MainAppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Colors.backgroundFilter}, url(${background}) fixed;
  background-size: cover;
`;

export default MainAppWrapper;
