import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('en')

    const handleChangeLanguage = () => {
        if (language === 'en') {
            i18n.changeLanguage('en');
            setLanguage('fa')
        } else {
            i18n.changeLanguage('fa');
            setLanguage('en')
        }
    }
    return (
        <div className='flex items-center'>
            <button onClick={handleChangeLanguage}>{language}</button>
        </div>
    );
};

export default LanguageSwitcher;