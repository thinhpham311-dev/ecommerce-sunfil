"use client";

import React from 'react';
import Link from 'next/link';
import { AltArrowRight } from "@/constants/icons.constant"

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
    itemClassName?: string;
    activeItemClassName?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator = <AltArrowRight />,
    className = "bg-transparent py-3 px-4 sm:px-6 lg:px-8",
    itemClassName = "text-text-secondary hover:text-blue-400 transition-colors duration-200",
    activeItemClassName = "text-custom-blue font-semibold",
}) => {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <nav className={className} aria-label="breadcrumb">
            <ol className="container mx-auto flex items-center  text-sm md:text-base">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.href || index} className="flex items-center">
                            {!isLast ? (
                                <Link href={item.href} className={itemClassName}>
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={activeItemClassName}>
                                    {item.label}
                                </span>
                            )}
                            {!isLast && (
                                <span className="mx-5 text-gray-400">
                                    {separator}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
