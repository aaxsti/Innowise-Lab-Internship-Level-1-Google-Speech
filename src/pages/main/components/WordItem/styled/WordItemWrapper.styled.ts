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
  padding-left: 5px;
  margin: 10px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 19px;
  width: 205px;
  min-height: 70px;
  border-radius: 10px;
  transition: .3s;
  box-shadow: 0 4px 4px ${Colors.blockShadow};
  
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
