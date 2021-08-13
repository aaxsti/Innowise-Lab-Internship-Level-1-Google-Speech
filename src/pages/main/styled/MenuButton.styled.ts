import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const MenuButton = styled(Button)`
  height: 50px;

  && {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 18px;
  }

  &&:hover {
    box-shadow: none;
  }
`;
