'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { INavLinkItem } from '@/interfaces/INavLinkItem';
import styles from './styles.module.css';

interface NavigationProps {
    links: INavLinkItem[];
    className?: string;
    ulClassName?: string;
    liClassName?: string;
    linkClassName?: string;
    activeHref?: string;
}

const Navigation: React.FC<NavigationProps> = ({
    links,
    className = '',
    ulClassName = '',
    liClassName = '',
    linkClassName = 'text-black hover:text-primary',
    activeHref,
}) => {
    return (
        <nav className={clsx(styles.nav, className)}>
            <ul className={clsx(styles.navList, ulClassName)}>
                {links.map((item, index) => {
                    const isActive = item.href === activeHref;
                    return (
                        <li key={item.href || index} className={liClassName}>
                            <Link
                                href={item.href}
                                className={clsx(
                                    styles.navItem,
                                    isActive && styles.navItemActive,
                                    linkClassName
                                )}
                            >
                                {item.icon && <span>{item.icon}</span>}
                                <span>{item.text}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
