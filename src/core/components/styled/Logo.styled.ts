import styled from 'styled-components';
import { LogoProps } from '../types/LogoProps';

export const Logo = styled.div<LogoProps>`
  justify-content: flex-start;
  width: 85px;
  height: 85px;
  background: url(${(props) => props.image}) center;
  background-size: cover;
`;
