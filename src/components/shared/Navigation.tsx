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
    linkClassName = "hover:text-primary text-black transition-colors duration-200 text-base font-normal",
    ulClassName = "flex  2xl:gap-x-6 xl:gap-x-3 md:gap-x-3 gap-x-2",
    liClassName = "",
}) => {
    return (
        <nav className={className}>
            <ul className={ulClassName}>
                {links.map((item, index) => (
                    <li key={item.href || index} className={liClassName}>
                        <Link href={item.href} className={`flex items-center ${linkClassName}`}>
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            <span>{item.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;