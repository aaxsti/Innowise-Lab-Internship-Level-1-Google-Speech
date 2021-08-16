import styled from 'styled-components';
import Colors from '../../../../../core/constants/colors';

const WordItemWrapper = styled.div<{right: boolean}>`
  transition: 0.3s ease;
  padding: 10px;
  display: flex;
  justify-content: normal;
  align-items: center;
  background-color: ${(props) => (props.right ? Colors.lightGreen : Colors.light)};
  border: 1px solid ${(props) => (props.right ? Colors.lightGreen : Colors.light)};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background-color: ${(props) => (props.right ? Colors.lightGreenHover : Colors.lightHover)};
  }
`;

export default WordItemWrapper;
