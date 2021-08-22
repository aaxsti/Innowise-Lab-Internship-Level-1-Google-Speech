import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import ElementsSizes from '../../../core/constants/sizes';
import AuthPageWrapper from '../components/styled/AuthPageWrapper.styled';
import ToggleAuthButton from '../components/styled/ToggleAuthButton';

const LoginPage: FC = () => {
  const [t] = useTranslation();
  const user = useSelector(selectUser);

  if (user) {
    return <Redirect to={Routes.Start} />;
  }

  return (
    <AuthPageWrapper>
      <Logo image={logo} />
      <Title color={Colors.mainText} size={ElementsSizes.FormTitle}>
        {t('login-title-button-link')}
      </Title>

      <AuthForm authType="login" />

      <SubTitle color={Colors.mainText} size={ElementsSizes.FormText}>
        {t('auth-pages.login-additional-text')}
      </SubTitle>

      <ToggleAuthButton variant="outlined" to={Routes.SignUp} component={CustomLink}>
        {t('signup-title-button-link')}
      </ToggleAuthButton>
    </AuthPageWrapper>
  );
};

export default LoginPage;
