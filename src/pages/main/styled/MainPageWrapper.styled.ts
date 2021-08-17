import styled from 'styled-components';
import Colors from '../../../core/constants/colors';

const MainPageWrapper = styled.div`
  min-height: 700px;
  box-shadow: 0 4px 4px ${Colors.blockShadow};
  padding: 40px;
  font-size: 18px;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
`;

export default MainPageWrapper;
