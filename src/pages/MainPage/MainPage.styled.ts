import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../types/enums/enums';

export const MainPageWrapper = styled.div`
  padding: 50px;
  font-weight: bold;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;

export const WordsBlock = styled.div`
  padding-top: 30px;
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  column-gap: 15px;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
`;

export const UserManageBlock = styled.div`
  padding-top: 20px;
  align-self: flex-start;
`;

export const RadioGroupWrapper = styled.div`
  background-color: rgb(229, 229, 229);
  border-radius: 20px;
`;

export const MenuButton = styled(Button)`
  height: 50px;
  
  && {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  &:hover {
    box-shadow: none;
  }
`;

export const SpeakButton = styled(MenuButton)`
  && {
    background-color: #008d51;
  }

  &&:hover {
    background-color: #2da06d;
  }
  
  grid-column: span 2;
`;
