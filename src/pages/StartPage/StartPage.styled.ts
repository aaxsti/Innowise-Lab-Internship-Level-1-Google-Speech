import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Colors } from '../../types/enums/enums';

interface StyleProps {
    size: number
}

export const StartPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2<StyleProps>`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : Colors.primary)};
  padding: 5px;
`;

export const StyledSubTitle = styled.p<StyleProps>`
  word-wrap: break-word;
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : Colors.primary)};
  padding-top: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.primary};
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const StyledLoginButton = styled(Button)<{component: any, to: string}>`
  && {
    font-size: 20px;
    border-radius: 20px;
    background-color: #008d51;
    color: ${Colors.primary};
    height: 60px;
    width: 190px;
  }

  &&:hover {
    background-color: #2da06d;
  }
`;

export const StyledSignupButton = styled(StyledLoginButton)`
  && {
    margin-left: 25px;
    background-color: #0028aa;
  }

  &&:hover {
    background-color: #002ccf;
  }
`;

export const StyledStartButton = styled(StyledLoginButton)`
  && {
    margin-top: 25px;
    background-color: #baa300;
  }

  &&:hover {
    background-color: #e6ca00;
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: ${Colors.primary};
  }
`;
