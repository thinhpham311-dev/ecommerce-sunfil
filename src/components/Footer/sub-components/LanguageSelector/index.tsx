"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui';
import { AltDownIcon, FlatVNIcon } from "@/constants/icons.constant";
import styles from './styles.module.css';

type Language = {
    code: string;
    label: string;
    flag: string | React.ReactElement;
};

const languages: Language[] = [
    { code: 'vi', label: 'VI', flag: <FlatVNIcon /> },
];

const LanguageSelector: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (lang: Language) => {
        setSelectedLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className={styles.wrapper}>
            <Button
                variant='ghost'
                type="button"
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {selectedLanguage.flag} {selectedLanguage.label}
                <span className={styles.icon}>
                    <AltDownIcon size={16} strokeWidth={1.5} />
                </span>
            </Button>

            {isOpen && (
                <div
                    className={styles.dropdown}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div className={styles.menuList} role="none">
                        {languages.map((lang) => (
                            <Button
                                variant='ghost'
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang)}
                                className={styles.menuItem}
                                role="menuitem"
                                tabIndex={-1}
                            >
                                {lang.flag} {lang.label}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
