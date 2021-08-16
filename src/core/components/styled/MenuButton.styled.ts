import styled from 'styled-components';
import { Button } from '@material-ui/core';

const MenuButton = styled(Button)<{onClick?: () => void}>`
  height: 50px;

  && {
    font-size: 20px;
    text-transform: capitalize;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  &&:hover {
    box-shadow: none;
  }
`;

export default MenuButton;
