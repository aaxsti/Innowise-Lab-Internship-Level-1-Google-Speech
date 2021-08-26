import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../../core/components/styled/Logo.styled';
import logo from '../../../assets/app-logo.png';
import AuthForm from '../components/AuthForm';
import { selectUser } from '../../../core/redux/auth/auth.selectors';
import Colors from '../../../core/constants/colors';
import Routes from '../../../core/constants/routes';
import Title from '../../../core/components/styled/Title.styled';
import CustomLink from '../../../core/components/styled/CustomLink.styled';
import AuthPageWrapper from '../components/styled/AuthPageWrapper.styled';
import SubTitle from '../../../core/components/styled/SubTitle.styled';
import ElementsSizes from '../../../core/constants/sizes';
import ToggleAuthButton from '../components/styled/ToggleAuthButton';

const SignUpPage: FC = () => {
  const [t] = useTranslation();
  const user = useSelector(selectUser);

  if (user) {
    return <Redirect to={Routes.Start} />;
  }

  return (
    <AuthPageWrapper>
      <Logo image={logo} />
      <Title color={Colors.mainText} size={ElementsSizes.FormTitle}>
        {t('signup-title-button-link')}
      </Title>

      <AuthForm authType="signup" />

      <SubTitle color={Colors.mainText} size={ElementsSizes.FormText}>
        {t('auth-pages.signup-additional-text')}
      </SubTitle>

      <ToggleAuthButton variant="outlined" to={Routes.LogIn} component={CustomLink}>
        {t('login-title-button-link')}
      </ToggleAuthButton>
    </AuthPageWrapper>
  );
};

export default SignUpPage;
