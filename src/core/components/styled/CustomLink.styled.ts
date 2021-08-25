import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../../constants/colors';
import { StyleProps } from '../types/StyleProps';

export const CustomLink = styled(Link)<StyleProps>`
  text-decoration: none;
  color: ${(props) => (props.color ?? Colors.primary)};
`;

export default CustomLink;
