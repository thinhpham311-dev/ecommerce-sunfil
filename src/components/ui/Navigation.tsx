import React from 'react';
import Link from 'next/link';
import { INavLinkItem } from '@/types/INavLinkItem'

interface NavigationProps {
    links: INavLinkItem[];
    className?: string;
    linkClassName?: string;
    ulClassName?: string;
    liClassName?: string;
}

const Navigation: React.FC<NavigationProps> = ({
    links,
    className = "hidden lg:block",
    linkClassName = "text-black hover:text-primary text-base font-normal",
    ulClassName = "flex gap-x-6",
    liClassName = "",
}) => {
    return (
        <nav className={className}>
            <ul className={ulClassName}>
                {links.map((item, index) => (
                    <li key={item.href || index} className={liClassName}>
                        <Link href={item.href} className={`flex items-center space-x-2  transition-colors duration-200 ${linkClassName}`}>
                            {item.icon && <span>{item.icon}</span>}
                            <span>{item.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;