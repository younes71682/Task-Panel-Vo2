import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('fa')}>فارسی</button>
            <button onClick={() => changeLanguage('en')}>English</button>
        </div>
    );
};

export default LanguageSwitcher;