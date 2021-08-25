import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Colors from '../../constants/colors';
import { CustomButtonProps } from '../types/CustomButtonProps';

enum MenuButtonColors {
  background = '#699df4'
}

const MenuButton = styled(Button)<{ onClick?: () => void } & CustomButtonProps>`
  height: 50px;
  width: 220px;

  && {
    margin-bottom: 20px;
    margin-right: 30px;
    text-align: center;
    background-color: ${MenuButtonColors.background};
    font-size: 20px;
    text-transform: capitalize;
    box-shadow: 0 4px 4px ${Colors.blockShadow};
    border-radius: 10px;
  }

  &&:last-child {
    margin-right: 0;
  }

  &&:hover {
    box-shadow: none;
  }
`;

export default MenuButton;
