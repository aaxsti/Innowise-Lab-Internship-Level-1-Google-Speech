import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonGroup from './styled/ButtonGroup.styled';
import LargeButton from '../../../core/components/styled/LargeButton.styled';
import CustomLink from '../../../core/components/styled/CustomLink.styled';
import Routes from '../../../core/constants/routes';
import SignupLinkButton from './styled/SignupLinkButton.styled';

const StartPageAuthButtons: FC = () => {
  const [t] = useTranslation();

  return (
    <ButtonGroup>
      <LargeButton component={CustomLink} to={Routes.LogIn}>
        {t('login-title-button-link')}
      </LargeButton>
      <SignupLinkButton component={CustomLink} to={Routes.SignUp}>
        {t('signup-title-button-link')}
      </SignupLinkButton>
    </ButtonGroup>
  );
};

export default StartPageAuthButtons;
