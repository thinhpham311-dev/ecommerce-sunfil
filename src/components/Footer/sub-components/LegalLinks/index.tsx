"use client";
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const LegalLinks: React.FC = () => {
    const links = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Cookie policy', href: '/cookie-policy' },
        { name: 'Delivery policy', href: '/delivery-policy' },
        { name: 'FAQs', href: '/faqs' },
    ];

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Legal</h3>
            <ul className={styles.list}>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className={styles.link}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LegalLinks;
