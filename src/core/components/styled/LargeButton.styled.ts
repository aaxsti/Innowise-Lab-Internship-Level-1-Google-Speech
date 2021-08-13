import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Colors } from '../../constants/colors';
import { CustomButtonProps } from '../types/CustomButtonProps';

export const LargeButton = styled(Button)<CustomButtonProps>`
  && {
    transition: 0.3s ease-in-out;
    background-color: transparent;
    border: 2px ${Colors.primary} solid;
    font-size: 20px;
    border-radius: 30px;
    color: ${Colors.primary};
    height: 60px;
    width: 190px;
  }

  &&:hover {
    background-color: ${Colors.primary};
    color: ${Colors.dark};
  }
`;
