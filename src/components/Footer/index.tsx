"use client";
import React, { useState, useEffect } from 'react';
import CompanyInfo from './sub-components/CompanyInfo';
import SitemapLinks from './sub-components/SitemapLinks';
import LegalLinks from './sub-components/LegalLinks';
import DownloadAppSection from './sub-components/DownloadAppSection';
import LanguageSelector from './sub-components/LanguageSelector';
import { AltUpIcon } from "@/constants/icons.constant";
import styles from './styles.module.css';
import { Button } from '../ui';

const Footer: React.FC = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.gridContainer}>
                <div className={styles.companyInfoWrapper}>
                    <CompanyInfo />
                </div>
                <div className={styles.sitemapWrapper}>
                    <SitemapLinks />
                </div>
                <div className={styles.legalWrapper}>
                    <LegalLinks />
                </div>
                <div className={styles.downloadAppWrapper}>
                    <DownloadAppSection />
                </div>
            </div>

            <div className={styles.bottomBar}>
                <LanguageSelector />
                {showScrollToTop && (
                    <Button
                        onClick={scrollToTop}
                        size='icon'
                        variant='ghost'
                        rounded='Full'
                        className='!bg-white'
                        aria-label="Scroll to top"
                    >
                        <AltUpIcon size={24} strokeWidth={1.5} />
                    </Button>
                )}
            </div>
        </footer>
    );
};

export default Footer;
