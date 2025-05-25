"use client"
import React from 'react';
import Link from 'next/link';

const LegalLinks: React.FC = () => {
    const links = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Cookie policy', href: '/cookie-policy' },
        { name: 'Delivery policy', href: '/delivery-policy' },
        { name: 'FAQs', href: '/faqs' },
    ];

    return (
        <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-text-secondary text-2xl">Legal</h3>
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

export default LegalLinks;