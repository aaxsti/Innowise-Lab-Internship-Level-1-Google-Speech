import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { StyleProps } from '../types/StyleProps';

export const SubTitle = styled.p<StyleProps>`
  word-wrap: break-word;
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.ownColor ? props.ownColor : Colors.primary)};
  padding-top: 5px;
`;
