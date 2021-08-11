import { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  ButtonGroup,
  StartPageWrapper,
  StyledCircularProgress,
  StyledLink,
  StyledLoginButton,
  StyledSignupButton,
  StyledStartButton,
  StyledSubTitle,
  StyledTitle,
} from './StartPage.styled';
import logo from '../../assets/app-logo.png';
import { Logo } from '../../Global.styled';
import { selectUser } from '../../redux/auth/auth.selectors';
import { selectLoading } from '../../redux/app/app.selectors';

const StartPage: FC = () => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return <StyledCircularProgress size={80} />;
  }

  return (
    <StartPageWrapper>
      <Logo image={logo} />

      <StyledTitle size={50}>
        sPeach
      </StyledTitle>

      <StyledSubTitle size={25}>
        Click on the words to hear them sound.
        <br />
        Click on the button and speak the words into the microphone.
      </StyledSubTitle>

      {
                user
                  ? (
                    <StyledStartButton variant="contained" color="primary" component={StyledLink} to="/main">
                      Start
                    </StyledStartButton>
                  )
                  : (
                    <ButtonGroup>
                      <StyledLoginButton component={StyledLink} to="/login">
                        Log in
                      </StyledLoginButton>
                      <StyledSignupButton component={StyledLink} to="/signup">
                        Sign up
                      </StyledSignupButton>
                    </ButtonGroup>
                  )
}
    </StartPageWrapper>
  );
};

export default StartPage;
