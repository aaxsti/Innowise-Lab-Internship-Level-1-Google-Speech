import styled from 'styled-components';
import Colors from '../../constants/colors';
import { StyleProps } from '../types/StyleProps';

const SubTitle = styled.p<StyleProps>`
  word-wrap: break-word;
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : Colors.primary)};
  padding-top: 5px;
`;

export default SubTitle;
