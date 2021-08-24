import styled from 'styled-components';
import Colors from '../../../core/constants/colors';

const MainPageWrapper = styled.div`
  flex-grow: 1;
  padding: 10px 20px;
  background-color: ${Colors.primary};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;

export default MainPageWrapper;
