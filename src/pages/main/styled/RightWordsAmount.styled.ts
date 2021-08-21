import styled from 'styled-components';
import Colors from '../../../core/constants/colors';
import Fonts from '../../../core/constants/fonts';

enum RightWordsAmountColors {
  allCorrect = '#008d51'
}

const RightWordsAmount = styled.div<{amount: number}>`
  padding-bottom: 20px;
  font-family: ${Fonts.secondaryFont}, sans-serif;

  color: ${(props) => (
    // eslint-disable-next-line no-nested-ternary
    props.amount === 10 ? RightWordsAmountColors.allCorrect
      : props.amount === 0 ? Colors.secondaryText
        : Colors.mainText)};
  font-size: 36px;
  min-height: 40px;
  padding-top: 10px;
`;

export default RightWordsAmount;
