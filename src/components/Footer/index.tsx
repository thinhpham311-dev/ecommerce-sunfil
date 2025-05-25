"use client"
import React, { useState, useEffect } from 'react';
import CompanyInfo from './sub-components/CompanyInfo';
import SitemapLinks from './sub-components/SitemapLinks';
import LegalLinks from './sub-components/LegalLinks';
import DownloadAppSection from './sub-components/DownloadAppSection';
import LanguageSelector from './sub-components/LanguageSelector';
import { AltUpIcon } from "@/constants/icons.constant" // Đảm bảo icon này tồn tại và được import đúng

const Footer: React.FC = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="relative bg-footer-pattern bg-cover bg-center bg-no-repeat py-16">
            <div className="container  grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
                <div className='col-span-full md:col-span-2 lg:col-span-5'>
                    <CompanyInfo />
                </div>
                <div className='col-span-full md:col-span-1 lg:col-span-2'>
                    <SitemapLinks />
                </div>
                <div className='col-span-full md:col-span-1 lg:col-span-2'>
                    <LegalLinks />
                </div>
                <div className='col-span-full md:col-span-4 lg:col-span-3'>
                    <DownloadAppSection />
                </div>
            </div>

            {/* Phần Language Selector và Scroll to Top */}
            <div className="container mx-auto px-4 mt-8 flex justify-end items-center gap-4">
                <LanguageSelector />
                {showScrollToTop && (
                    <button
                        onClick={scrollToTop}
                        // Thêm lại các style cần thiết cho nút cuộn lên đầu
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        aria-label="Scroll to top"
                    >
                        <AltUpIcon size={24} strokeWidth={1.5} />
                    </button>
                )}
            </div>
        </footer>
    );
};

export default Footer;