import {
    ButtonGroup,
    StartPageWrapper,
    StyledButton,
    StyledCircularProgress,
    StyledLink,
    StyledNavButton,
    StyledSubTitle,
    StyledTitle
} from "./StartPage.styled";
import React, {FC} from "react";
import logo from './../../assets/app-logo.png';
import {Logo} from "../../Global.styled";
import {selectUser} from "../../redux/auth/auth.selectors";
import {useSelector} from "react-redux";
import {selectLoading} from "../../redux/app/app.selectors";

const StartPage: FC = () => {
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectLoading)

    if (isLoading) {
        return <StyledCircularProgress size={80}/>
    }

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
                        <StyledLink to={'/main'}>Start</StyledLink>
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