import styled from 'styled-components';
import Colors from '../../../core/constants/colors';

const RightWordsAmount = styled.div<{amount: number}>`
  font-family: Bahnschrift, sans-serif;
  color: ${(props) => (props.amount === 10 ? Colors.green : Colors.dark)};
  font-size: 36px;
  min-height: 40px;
  padding-top: 10px;
`;

export default RightWordsAmount;
