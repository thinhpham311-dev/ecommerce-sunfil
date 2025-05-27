"use client";
import React from 'react';
import { AppleStoreIcon, GooglePlayIcon } from "@/constants/icons.constant";
import styles from './styles.module.css';
import { Button } from '@/components/ui';

const DownloadAppSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>Download App</h3>
            </div>
            <div className={styles.linksWrapper}>
                <Button variant='dark' rounded='Xl' size='lg' className='flex items-center gap-x-3'>
                    <GooglePlayIcon />
                    <div className={styles.textGroup}>
                        <span className={styles.subText}>Get It On</span>
                        <span className={styles.mainText}>Google Play Store</span>
                    </div>
                </Button>
                <Button variant='primary' rounded='Xl' size='lg' className='flex items-center gap-x-3'>
                    <AppleStoreIcon />
                    <div className={styles.textGroup}>
                        <span className={styles.subText}>Download from</span>
                        <span className={styles.mainText}>Apple App Store</span>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default DownloadAppSection;
