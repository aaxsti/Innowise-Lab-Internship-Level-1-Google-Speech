import styled from 'styled-components';
import Colors from '../../constants/colors';
import { StyleProps } from '../types/StyleProps';

const Title = styled.h2<StyleProps>`
  font-weight: normal;
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.ownColor ? props.ownColor : Colors.primary)};
  padding: 5px;
`;

export default Title;
