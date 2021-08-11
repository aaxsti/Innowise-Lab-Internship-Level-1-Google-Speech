import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const WordItemWrapper = styled.div`
  padding: 10px;
  display: flex;
  //align-self: center;
  justify-content: normal;
  align-items: center;
  background-color: rgb(229, 229, 229);
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background-color: #f0f0f0;
  }
`;

export const WordInfoBlock = styled.div`
  
`;

export const WordText = styled.div`
  
`;

export const WordTranscription = styled.div`
  color: #5c5c5c;
`;

export const WordItemIcons = styled.div`
  color: #5c5c5c;
  padding-right: 10px;
`;

export const SkipButton = styled(Button)`
  
`;
