import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export const fallbackLng: string = 'en' as const;
export const supportedLngs: string[] = ['en', 'de'] as const;

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    fallbackLng: fallbackLng,
    supportedLngs: supportedLngs,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
      transEmptyNodeValue: '',
      useSuspense: true,
    },
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
