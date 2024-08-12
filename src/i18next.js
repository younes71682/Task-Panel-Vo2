import i18n from 'i18next';  
import { initReactI18next } from 'react-i18next';  

i18n  
  .use(initReactI18next)  
  .init({  
    resources: {  
      en: {  
        translation: require('./athlete-panel/components/lang/en.json'),  
      },  
      fa: {  
        translation: require('./athlete-panel/components/lang/fa.json'),  
      },  
    },  
    lng: 'fa', // زبان پیش‌فرض  
    fallbackLng: 'en',  
    interpolation: {  
      escapeValue: false, // React already does escaping  
    },  
  });  

export default i18n;