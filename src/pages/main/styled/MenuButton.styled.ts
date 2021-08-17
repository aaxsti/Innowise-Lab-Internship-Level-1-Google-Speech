import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Colors from '../../../core/constants/colors';

const MenuButton = styled(Button)`
  height: 50px;

  && {
    box-shadow: 0 4px 4px ${Colors.blockShadow};
    border-radius: 10px;
    font-size: 18px;
  }

  &&:hover {
    box-shadow: none;
  }
`;

export default MenuButton;
