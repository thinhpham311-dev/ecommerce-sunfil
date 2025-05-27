"use client";
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const SitemapLinks: React.FC = () => {
    const links = [
        { name: 'About', href: '/about' },
        { name: 'Article', href: '/articles' },
        { name: 'Cart', href: '/cart' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Sitemap</h3>
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

export default SitemapLinks;
