import styled from 'styled-components';
import Colors from '../../../core/constants/colors';

const MainPageWrapper = styled.div`
  min-height: 700px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 50px;
  font-size: 18px;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
`;

export default MainPageWrapper;
