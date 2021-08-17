import styled from 'styled-components';
import Colors from '../../../../../core/constants/colors';

enum WordItemColors {
  wordItemBackground = '#e5e5e5',
  wordItemBackgroundHover = '#f0f0f0',
  wordItemCorrectBackground = '#a9ffce',
  wordItemCorrectBackgroundHover = '#cfffe4',
}

const WordItemWrapper = styled.div<{right: boolean}>`
  transition: 0.3s ease;
  padding: 10px;
  display: flex;
  justify-content: normal;
  align-items: center;
  background-color: ${(props) => (
    props.right ? WordItemColors.wordItemCorrectBackground : WordItemColors.wordItemBackground
  )};
  border: 1px solid ${(props) => (
    props.right ? WordItemColors.wordItemCorrectBackground : WordItemColors.wordItemBackground
  )};
  box-shadow: 0 4px 4px ${Colors.blockShadow};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background-color: ${(props) => (
    props.right ? WordItemColors.wordItemCorrectBackgroundHover
      : WordItemColors.wordItemBackgroundHover
  )};
  }
`;

export default WordItemWrapper;
