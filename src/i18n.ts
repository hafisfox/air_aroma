import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import type { Locale } from './seo/site';

import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

function updateDocumentLanguage(lng: string) {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
}

i18n.on('languageChanged', updateDocumentLanguage);
updateDocumentLanguage(i18n.language);

export async function setLocale(locale: Locale) {
  if (i18n.language !== locale) {
    await i18n.changeLanguage(locale);
  } else {
    updateDocumentLanguage(locale);
  }
}

export default i18n;
