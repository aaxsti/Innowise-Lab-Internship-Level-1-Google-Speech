import { FC } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { AuthPageWrapper } from './LoginPage.styled';
import logo from '../../assets/app-logo.png';
import { Logo } from '../../Global.styled';
import { StyledTitle } from '../StartPage/StartPage.styled';
import { selectUser } from '../../redux/auth/auth.selectors';
import AuthForm from '../../components/forms/AuthForm';
import { Colors, MainRoutes } from '../../types/enums/enums';

const LoginPage: FC = () => {
  const user = useSelector(selectUser);

  if (user) {
    return <Redirect to={MainRoutes.Start} />;
  }

  return (
    <AuthPageWrapper>
      <Logo image={logo} />
      <StyledTitle color={Colors.dark} size={30}>
        Log in
      </StyledTitle>

      <AuthForm authType="login" />

      <br />
      <StyledTitle color={Colors.dark} size={14}>
        {'Don\'t have an account?'}
      </StyledTitle>
      <br />
      <Button variant="outlined">
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          Sign up
        </Link>
      </Button>
    </AuthPageWrapper>
  );
};

export default LoginPage;
