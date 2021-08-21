import styled from 'styled-components';
import Colors from '../../../core/constants/colors';

const StatisticsPageWrapper = styled.div`
  min-height: 810px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.transparent};
  box-shadow: ${Colors.blockShadow};
`;

export default StatisticsPageWrapper;
