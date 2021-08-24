import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/app-logo.png';
import { selectUser } from '../../core/redux/auth/auth.selectors';
import selectLoading from '../../core/redux/app/app.selectors';
import Title from '../../core/components/styled/Title.styled';
import Preloader from '../../core/components/styled/Preloader.styled';
import ElementsSizes from '../../core/constants/sizes';
import StartLinkButton from './styled/StartLinkButton.styled';
import Routes from '../../core/constants/routes';
import Logo from '../../core/components/styled/Logo.styled';
import CustomLink from '../../core/components/styled/CustomLink.styled';
import SubTitle from '../../core/components/styled/SubTitle.styled';
import '../../core/i18next/i18next';
import StartPageAuthButtons from './components/StartPageAuthButtons';
import SecondaryPagesWrapper from '../../core/components/styled/SecondaryPagesWrapper.styled';
import ChangeLangButton from './styled/ChangeLangButton.styled';
import RuLang from '../../assets/ru-lang.png';
import EnLang from '../../assets/en-lang.png';
import LanguageFlagIcon from './styled/LanguageFlagIcon.styled';

const StartPage: FC = () => {
  const { t, i18n } = useTranslation();
  const initLanguage = i18n.language;
  const [language, setLanguage] = useState<string>(initLanguage);

  const user = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  const handleChangeLanguage = () => {
    if (language === 'en') {
      setLanguage('ru');
    } else {
      setLanguage('en');
    }
  };

  if (isLoading) {
    return <Preloader size={ElementsSizes.LargePreloader} />;
  }

  return (
    <SecondaryPagesWrapper>
      <Logo image={logo} />

      <Title size={ElementsSizes.StartPageTitle}>
        {t('start-page.title')}
      </Title>

      <SubTitle size={ElementsSizes.StartPageSubTitle}>
        {t('start-page.sub-title-first')}
      </SubTitle>

      <SubTitle size={ElementsSizes.StartPageSubTitle}>
        {t('start-page.sub-title-second')}
      </SubTitle>

      {
        user
          ? (
            <StartLinkButton variant="contained" component={CustomLink} to={Routes.Main}>
              {t('start-page.start-link-button')}
            </StartLinkButton>
          )
          : <StartPageAuthButtons />
      }

      <ChangeLangButton onClick={handleChangeLanguage}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <LanguageFlagIcon
          src={language === 'en' ? EnLang : RuLang}
          alt={t('start-page.change-lang-pic')}
        />
      </ChangeLangButton>

    </SecondaryPagesWrapper>
  );
};

export default StartPage;
