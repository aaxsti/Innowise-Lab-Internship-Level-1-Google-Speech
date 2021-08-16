import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/app-logo.png';
import { Logo } from '../../../core/components/styled/Logo.styled';
import { selectUser } from '../../../core/redux/auth/auth.selectors';
import AuthForm from '../components/AuthForm';
import Routes from '../../../core/constants/routes';
import Colors from '../../../core/constants/colors';
import SubTitle from '../../../core/components/styled/SubTitle.styled';
import Title from '../../../core/components/styled/Title.styled';
import CustomLink from '../../../core/components/styled/CustomLink.styled';
import Sizes from '../../../core/constants/sizes';
import AuthPageWrapper from '../components/styled/AuthPageWrapper.styled';

const LoginPage: FC = () => {
  const [t] = useTranslation();
  const user = useSelector(selectUser);

  if (user) {
    return <Redirect to={Routes.Start} />;
  }

  return (
    <AuthPageWrapper>
      <Logo image={logo} />
      <Title ownColor={Colors.dark} size={Sizes.FormTitle}>
        {t('login-title-button-link')}
      </Title>

      <AuthForm authType="login" />

      <br />
      <SubTitle ownColor={Colors.dark} size={Sizes.FormText}>
        {t('auth-pages.login-additional-text')}
      </SubTitle>
      <br />
      <Button variant="outlined" to={Routes.SignUp} component={CustomLink}>
        {t('signup-title-button-link')}
      </Button>
    </AuthPageWrapper>
  );
};

export default LoginPage;
