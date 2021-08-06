import styled from "styled-components";
import {colors} from "../../Global.styled";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

interface StyleProps {
    size: number
}

export const StartPageWrapper = styled.div`
  //margin: 0 0 200px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledTitle = styled.h2<StyleProps>`
  font-size: ${props => props.size}px;
  text-align: center;
  color: ${props => props.color ? props.color : colors.primary};
  padding: 5px;
`

export const StyledSubTitle = styled.p<StyleProps>`
  word-wrap: break-word;
  font-size: ${props => props.size}px;
  text-align: center;
  color: ${props => props.color ? props.color : colors.primary};
  padding-top: 5px;
`

export const StyledButton = styled(Button)`
  && {
    font-size: 20px;
    background-color: #008d51;
    color: ${colors.primary};
    height: 60px;
    width: 190px;
    margin-top: 20px;
  }

  &&:hover {
    background-color: #35bc80;
  }
`

export const StyledNavButton = styled(Link)`
  font-weight: normal;
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 1px solid ${colors.primary};
  border-radius: 25px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.dark};
    cursor: pointer;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 25px;
`
