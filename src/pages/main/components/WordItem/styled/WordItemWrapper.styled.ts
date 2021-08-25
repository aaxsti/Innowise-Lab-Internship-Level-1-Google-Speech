import styled from 'styled-components';
import Colors from '../../../../../core/constants/colors';
import SkipWordButton from './SkipWordButton.styled';

enum WordItemColors {
  wordItemBackground = '#e5e5e5',
  wordItemBackgroundHover = '#f0f0f0',
  wordItemCorrectBackground = '#94db9f',
  wordItemCorrectBackgroundHover = '#c0f9c9',
  wordItemSkippedBackground = '#fc9391',
  wordItemSkippedBackgroundHover = '#feb2b0',
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
  
  background-color: ${(props) => {
    if (props.right) {
      return WordItemColors.wordItemCorrectBackground;
    }
    if (props.skipped) {
      return WordItemColors.wordItemSkippedBackground;
    }
    return WordItemColors.wordItemBackground;
  }};
  border: 1px solid ${(props) => (
    props.right ? WordItemColors.wordItemCorrectBackground : WordItemColors.wordItemBackground
  )};

  &:hover {
    box-shadow: none;
    background-color: ${(props) => {
    if (props.right) {
      return WordItemColors.wordItemCorrectBackgroundHover;
    }
    if (props.skipped) {
      return WordItemColors.wordItemSkippedBackgroundHover;
    }
    return WordItemColors.wordItemBackgroundHover;
  }};
  }
  
  &:hover ${SkipWordButton} {
    color: ${Colors.secondaryText};
  }
  
`;

export default WordItemWrapper;
