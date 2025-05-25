"use client"
import React from 'react';
import Link from 'next/link';

const SitemapLinks: React.FC = () => {
    const links = [
        { name: 'About', href: '/about' },
        { name: 'Article', href: '/articles' },
        { name: 'Cart', href: '/cart' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-text-secondary text-2xl">Sitemap</h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-text-secondary text-base hover:text-primary transition-colors duration-200">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SitemapLinks;