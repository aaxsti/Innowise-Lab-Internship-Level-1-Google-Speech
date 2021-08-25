import styled from 'styled-components';
import Colors from '../../../core/constants/colors';
import Fonts from '../../../core/constants/fonts';
import GameStatusWordsAmount from '../../../core/constants/game-status-words-amount';

enum RightWordsAmountColors {
  allCorrect = '#008d51'
}

const RightWordsAmount = styled.div<{amount: number}>`
  padding-bottom: 20px;
  font-family: ${Fonts.secondaryFont}, sans-serif;

  color: ${(props) => {
    if (props.amount === GameStatusWordsAmount.AllPageWords) {
      return RightWordsAmountColors.allCorrect;
    }
    if (props.amount === GameStatusWordsAmount.NoWords) {
      return Colors.secondaryText;
    }
    return Colors.mainText;
  }};
  
  font-size: 36px;
  min-height: 40px;
  padding-top: 10px;
`;

export default RightWordsAmount;
