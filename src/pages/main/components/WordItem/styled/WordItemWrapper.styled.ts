import styled from 'styled-components';
import Colors from '../../../../../core/constants/colors';
import SkipWordButton from './SkipWordButton.styled';

enum WordItemColors {
  wordItemBackground = '#e5e5e5',
  wordItemBackgroundHover = '#f0f0f0',
  wordItemCorrectBackground = '#94db9f',
  wordItemCorrectBackgroundHover = '#c0f9c9',
  wordItemSkippedBackground = '#fc9391',
  wordItemSkippedBackgroundHover = '#ffb7b5',
}

const WordItemWrapper = styled.div<{right: boolean, skipped: boolean}>`
  transition: 0.3s ease;
  padding: 10px;
  display: flex;
  justify-content: normal;
  align-items: center;
  background-color: ${(props) => (
    // eslint-disable-next-line no-nested-ternary
    props.right ? WordItemColors.wordItemCorrectBackground
      : props.skipped ? WordItemColors.wordItemSkippedBackground
        : WordItemColors.wordItemBackground
  )};
  border: 1px solid ${(props) => (
    props.right ? WordItemColors.wordItemCorrectBackground : WordItemColors.wordItemBackground
  )};
  box-shadow: 0 4px 4px ${Colors.blockShadow};
  border-radius: 10px;

  &:hover {
    box-shadow: none;
    background-color: ${(props) => (
    // eslint-disable-next-line no-nested-ternary
    props.right ? WordItemColors.wordItemCorrectBackgroundHover
      : props.skipped ? WordItemColors.wordItemSkippedBackgroundHover
        : WordItemColors.wordItemBackgroundHover
  )};
  }
  
  &:hover ${SkipWordButton} {
    color: ${Colors.secondaryText};
  }
  
`;

export default WordItemWrapper;
