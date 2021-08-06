import {
    ButtonGroup,
    StartPageWrapper,
    StyledButton,
    StyledNavButton,
    StyledSubTitle,
    StyledTitle
} from "./StartPage.styled";
import React, {FC} from "react";

import logo from './../../assets/app-logo.png';
import {Logo} from "../../Global.styled";
import {selectUser} from "../../redux/auth/auth.selectors";
import {useSelector} from "react-redux";

const StartPage: FC = () => {
    const user = useSelector(selectUser);

    return (
        <StartPageWrapper>
            <Logo image={logo}/>

            <StyledTitle size={50}>
                sPeach
            </StyledTitle>

            <StyledSubTitle size={25}>
                Click on the words to hear them sound.
                <br/>
                Click on the button and speak the words into the microphone.
            </StyledSubTitle>

            {
                !!user
                    ? <StyledButton variant="contained" color="primary">
                        Start
                    </StyledButton>
                    :
                    <ButtonGroup>
                        <StyledNavButton to="login" style={{marginRight: '12.5px'}}>
                            Login
                        </StyledNavButton>
                        <StyledNavButton to="signup" style={{marginLeft: '12.5px'}}>
                            Signup
                        </StyledNavButton>
                    </ButtonGroup>
            }


        </StartPageWrapper>
    );
}

export default StartPage;