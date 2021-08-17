import styled from 'styled-components';
import { LogoProps } from '../types/LogoProps';

const logoSize = '85';

export const Logo = styled.div<LogoProps>`
  justify-content: flex-start;
  width: ${logoSize}px;
  height: ${logoSize}px;
  background: url(${(props) => props.image}) center;
  background-size: cover;
`;

export default Logo;
