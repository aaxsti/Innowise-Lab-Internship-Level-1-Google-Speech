import { FC } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../../core/components/styled/Logo.styled';
import logo from '../../../assets/app-logo.png';
import AuthForm from '../components/AuthForm';
import { selectUser } from '../../../core/redux/auth/auth.selectors';
import { Colors } from '../../../core/constants/colors';
import { Routes } from '../../../core/constants/routes';
import { Title } from '../../../core/components/styled/Title.styled';
import { CustomLink } from '../../../core/components/styled/CustomLink.styled';
import { AuthPageWrapper } from '../components/styled/AuthPageWrapper.styled';
import { SubTitle } from '../../../core/components/styled/SubTitle.styled';
import { Sizes } from '../../../core/constants/sizes';

const SignUpPage: FC = () => {
  const [t] = useTranslation();
  const user = useSelector(selectUser);

  if (user) {
    return <Redirect to={Routes.Start} />;
  }

  return (
    <AuthPageWrapper>
      <Logo image={logo} />
      <Title ownColor={Colors.dark} size={Sizes.FormTitle}>
        {t('signup-title-button-link')}
      </Title>

      <AuthForm authType="signup" />

      <br />
      <SubTitle ownColor={Colors.dark} size={Sizes.FormText}>
        {t('auth-pages.signup-additional-text')}
      </SubTitle>
      <br />
      <Button variant="outlined" to={Routes.LogIn} component={CustomLink}>
        {t('login-title-button-link')}
      </Button>
    </AuthPageWrapper>
  );
};

export default SignUpPage;
