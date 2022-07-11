import styled from 'styled-components';
import Colors from '../../../core/constants/colors';
import background from '../../../assets/background.jpg';

const StartPageWrapper = styled.div`
  min-height: 100vh;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Colors.backgroundFilter}, url(${background}) fixed;
  background-size: cover;
`;

export default StartPageWrapper;
