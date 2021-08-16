import styled from 'styled-components';
import Colors from '../../../core/constants/colors';

const WordOutput = styled.h2`
  font-weight: lighter;
  margin: 0;
  padding: 0;
  border-bottom: 2px ${Colors.gray} solid;
  min-height: 40px;
  min-width: 270px;
  text-align: center;
`;

export default WordOutput;
