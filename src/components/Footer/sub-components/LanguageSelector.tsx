"use client"
import React, { useState } from 'react';
import { AltDownIcon, FlatVNIcon } from "@/constants/icons.constant"

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
        <div className="relative inline-block text-left z-10">
            <button
                type="button"
                className="inline-flex justify-center items-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {selectedLanguage.flag} {selectedLanguage.label}
                <span><AltDownIcon size={16} strokeWidth={1.5} /></span>

            </button>

            {isOpen && (
                <div
                    className="absolute right-0 z-10  w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div className="py-1 px-2" role="none">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang)}
                                className="text-text-secondary flex items-center w-full gap-x-2 text-left text-sm hover:bg-gray-100"
                                role="menuitem"
                                tabIndex={-1}
                            >
                                {lang.flag} {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;