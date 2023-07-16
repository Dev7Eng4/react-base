import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { convertLanguageJsonToObject } from './translations';

import en from './en';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

export const translationsJson = {
  en: {
    translation: en,
  },
};

convertLanguageJsonToObject(en);

export const i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    returnNull: false,
    resources: translationsJson,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'htmlTag', 'cookie'],
      caches: ['localStorage'],
    },
    debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

    interpolation: {
      escapeValue: false,
    },
  });
