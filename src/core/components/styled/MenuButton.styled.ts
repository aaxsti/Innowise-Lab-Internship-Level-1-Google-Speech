import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Colors from '../../constants/colors';

const MenuButton = styled(Button)<{onClick?: () => void}>`
  height: 50px;

  && {
    font-size: 20px;
    text-transform: capitalize;
    box-shadow: 0 4px 4px ${Colors.blockShadow};
    border-radius: 10px;
  }

  &&:hover {
    box-shadow: none;
  }
`;

export default MenuButton;
