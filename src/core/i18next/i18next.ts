import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import EN_JSON from './locales/en.json';
import RU_JSON from './locales/ru.json';

const localStorageLanguage = localStorage.getItem('i18nextLng');

const resources = {
  en: {
    translation: EN_JSON,
  },
  ru: {
    translation: RU_JSON,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorageLanguage as string,
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
  });

export default i18n;
