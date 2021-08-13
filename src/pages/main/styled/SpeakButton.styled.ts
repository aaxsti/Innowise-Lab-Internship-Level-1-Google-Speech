import styled from 'styled-components';
import { MenuButton } from './MenuButton.styled';
import { Colors } from '../../../core/constants/colors';

export const SpeakButton = styled(MenuButton)`
  && {
    background-color: ${Colors.green};
  }

  &&:hover {
    background-color: ${Colors.greenHover};
  }
  
  grid-column: span 2;
`;
