"use client";
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const CompanyInfo: React.FC = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
            </h3>
            <p className={styles.text}>
                Tax code: <strong className={styles.strong}>03005094228</strong>
            </p>
            <p className={styles.text}>
                Address: <strong className={styles.strong}>
                    10 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.
                </strong>
            </p>
            <p className={styles.text}>
                Phone number:
                <a href="tel:02837607607" className={`${styles.strong} ${styles.phoneLink}`}>
                    0283 760 7607
                </a>
            </p>
            <p className={styles.text}>
                Opening hour: <strong className={styles.strong}>09:00 - 22:00 from Mon - Fri</strong>
            </p>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/footer/bo-cong-thuong.png"
                    alt="Bộ Công Thương Logo"
                    width={150}
                    height={50}
                />
            </div>
        </div>
    );
};

export default CompanyInfo;
