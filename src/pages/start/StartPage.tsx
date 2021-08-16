import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/app-logo.png';
import { selectUser } from '../../core/redux/auth/auth.selectors';
import selectLoading from '../../core/redux/app/app.selectors';
import Title from '../../core/components/styled/Title.styled';
import Preloader from '../../core/components/styled/Preloader.styled';
import StartPageWrapper from './styled/StartPageWrapper.styled';
import Sizes from '../../core/constants/sizes';
import ButtonGroup from './styled/ButtonGroup.styled';
import StartLinkButton from './styled/StartLinkButton.styled';
import Routes from '../../core/constants/routes';
import SignupLinkButton from './styled/SignupLinkButton.styled';
import Logo from '../../core/components/styled/Logo.styled';
import CustomLink from '../../core/components/styled/CustomLink.styled';
import SubTitle from '../../core/components/styled/SubTitle.styled';
import LargeButton from '../../core/components/styled/LargeButton.styled';
import '../../core/i18next/i18next';

const StartPage: FC = () => {
  const [t] = useTranslation();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return <Preloader size={Sizes.LargePreloader} />;
  }

  return (
    <StartPageWrapper>
      <Logo image={logo} />

      <Title size={Sizes.StartPageTitle}>
        {t('start-page.title')}
      </Title>

      <SubTitle size={Sizes.StartPageSubTitle}>
        {t('start-page.sub-title-first')}
        <br />
        {t('start-page.sub-title-second')}
      </SubTitle>

      {
                user
                  ? (
                    <StartLinkButton variant="contained" component={CustomLink} to={Routes.Main}>
                      {t('start-page.start-link-button')}
                    </StartLinkButton>
                  )
                  : (
                    <ButtonGroup>
                      <LargeButton component={CustomLink} to={Routes.LogIn}>
                        {t('login-title-button-link')}
                      </LargeButton>
                      <SignupLinkButton component={CustomLink} to={Routes.SignUp}>
                        {t('signup-title-button-link')}
                      </SignupLinkButton>
                    </ButtonGroup>
                  )
}
    </StartPageWrapper>
  );
};

export default StartPage;
