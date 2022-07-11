import styled from 'styled-components';
import background from '../../../assets/background.jpg';
import Colors from '../../../core/constants/colors';

const StatisticsPageBackground = styled.div`
  min-height: 100vh;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Colors.backgroundFilter}, url(${background}) fixed;
  background-size: cover;
`;

export default StatisticsPageBackground;
