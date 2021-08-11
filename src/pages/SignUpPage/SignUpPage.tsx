import { FC } from 'react';
import { Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Logo } from '../../Global.styled';
import logo from '../../assets/app-logo.png';
import { StyledTitle } from '../StartPage/StartPage.styled';
import AuthForm from '../../components/forms/AuthForm';
import { AuthPageWrapper } from '../LoginPage/LoginPage.styled';
import { selectUser } from '../../redux/auth/auth.selectors';
import { Colors, MainRoutes } from '../../types/enums/enums';

const SignUpPage: FC = () => {
  const user = useSelector(selectUser);

  if (user) {
    return <Redirect to={MainRoutes.Start} />;
  }

  return (
    <AuthPageWrapper>
      <Logo image={logo} />
      <StyledTitle color={Colors.dark} size={30}>
        Sign Up
      </StyledTitle>

      <AuthForm authType="signup" />

      <br />
      <StyledTitle color={Colors.dark} size={14}>
        Already have an account?
      </StyledTitle>
      <br />
      <Button variant="outlined">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          Log in
        </Link>
      </Button>
    </AuthPageWrapper>
  );
};

export default SignUpPage;
