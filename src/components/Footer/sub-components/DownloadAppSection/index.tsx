"use client";
import React from 'react';
import Link from 'next/link';
import { AppleStoreIcon, GooglePlayIcon } from "@/constants/icons.constant";
import styles from './styles.module.css';

const DownloadAppSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>Download App</h3>
            </div>
            <div className={styles.linksWrapper}>
                <Link
                    href="https://play.google.com/store/apps/details?id=your.app.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.googlePlay}`}
                >
                    <GooglePlayIcon />
                    <div className={styles.textGroup}>
                        <span className={styles.subText}>Get It On</span>
                        <span className={styles.mainText}>Google Play Store</span>
                    </div>
                </Link>
                <Link
                    href="https://apps.apple.com/us/app/your-app-name/id123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.appleStore}`}
                >
                    <AppleStoreIcon />
                    <div className={styles.textGroup}>
                        <span className={styles.subText}>Download from</span>
                        <span className={styles.mainText}>Apple App Store</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DownloadAppSection;
