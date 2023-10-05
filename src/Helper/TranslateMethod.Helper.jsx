/* eslint-disable max-len */
import i18next from 'i18next';
import MainLayoutAr from '../layouts/I18n/ar.json';
import MainLayoutEn from '../layouts/I18n/en.json';
import { initReactI18next } from 'react-i18next';

export function localizationInit() {
  i18next.use(initReactI18next).init({
    interpolation: { escapeValue: false }, // React already does escaping
    fallbackLng: ['en', 'ar'],
    lng: 'ar', 
    resources: {
      en: {
        MainLayout: MainLayoutEn,
      },
      ar: {
        MainLayout:MainLayoutAr
      },
    },
  });

  if (localStorage.getItem('localization')) {

    i18next.changeLanguage(JSON.parse(localStorage.getItem('localization')).currentLanguage);
    const isRtl = JSON.parse(localStorage.getItem('localization')).currentLanguage === 'ar';
    if (isRtl) {
      const direction =
        JSON.parse(localStorage.getItem('localization')).currentLanguage === 'ar' ? 'rtl' : '';
      document.body.setAttribute('class', direction);
      document.body.setAttribute('dir', direction);
      document.documentElement.lang = JSON.parse(
        localStorage.getItem('localization')
      ).currentLanguage;
    }
  } else {
    localStorage.setItem('localization', JSON.stringify({ currentLanguage: 'en', isRtl: false }));
    i18next.changeLanguage('en');
  }
}

export const languageChange = (currentLanguage) => {
  const isRtl = currentLanguage === 'ar';
  const direction = currentLanguage === 'ar' ? 'rtl' : '';
  localStorage.setItem('localization', JSON.stringify({ currentLanguage, isRtl }));
  document.body.setAttribute('class', direction);
  document.body.setAttribute('dir', direction);
  document.documentElement.lang = currentLanguage;
  i18next.changeLanguage(currentLanguage);
};
localizationInit();
