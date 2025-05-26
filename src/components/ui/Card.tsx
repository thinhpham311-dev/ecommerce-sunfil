"use client";

import React from 'react';
import Image from 'next/image';


interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = 'pt-3 px-3' }) => (
    <div className={`${className}`}>
        {children}
    </div>
);

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({
    children,
    className = '',
}) => {
    const defaultClass = 'text-xl font-semibold text-gray-900';
    return (
        <h2 className={`${defaultClass} ${className}`}>
            {children}
        </h2>
    );
};

interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
    children,
    className = '',
}) => {
    const defaultClass = 'text-sm text-gray-600';
    return (
        <p className={`${defaultClass} ${className}`}>
            {children}
        </p>
    );
};

interface CardIconProps {
    icon: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

const CardIcon: React.FC<CardIconProps> = ({
    icon,
    className = 'text-2xl text-gray-500',
    containerClassName = '',
}) => (
    <div className={`flex items-center justify-center ${containerClassName}`}>
        <span className={className}>{icon}</span>
    </div>
);


interface CardImageProps {
    src: string;
    alt?: string;
    className?: string;
    imageClassName?: string;
    width?: number;
    height?: number;
    fill?: boolean;
}

const CardImage: React.FC<CardImageProps> = ({
    src,
    alt = '',
    className = '',
    imageClassName = 'object-cover rounded-2xl',
    width,
    height,
    fill = !width && !height, // Use fill by default if width/height not provided
}) => (
    <div className={`relative overflow-hidden ${className}`} style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}>
        <Image
            src={src}
            alt={alt}
            className={imageClassName}
            {...(fill ? { fill: true } : { width, height })}
        />
    </div>
);


interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = 'px-3 pb-3' }) => (
    <div className={`flex flex-col  ${className}`}>
        {children}
    </div>
);



interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
    <div className={`w-full ${className}`}>
        {children}
    </div>
);


interface CardProps {
    className?: string;
    layout?: 'vertical' | 'horizontal';
    clickable?: boolean;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
    className = "bg-white rounded-2xl shadow-md p-3  h-full gap-4",
    layout = 'vertical',
    clickable = false,
    children,
}) => {
    return (
        <div
            className={`flex ${className} 
        ${clickable ? 'cursor-pointer' : ''}
        ${layout === 'horizontal' ? 'flex-row items-center' : 'flex-col'}
      `}
        >
            {children}
        </div>
    );
};

export {
    Card, CardHeader, CardImage, CardIcon, CardContent, CardFooter, CardTitle,
    CardDescription
};