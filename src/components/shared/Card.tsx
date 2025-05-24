"use client";

import React from 'react';



// CardHeader component
interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = 'pt-3 px-3' }) => (
    <div className={`${className}`}>
        {children}
    </div>
);

// CardIcon component
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


// CardImage component
interface CardImageProps {
    src: string;
    alt?: string;
    className?: string;
    imageClassName?: string;
}

const CardImage: React.FC<CardImageProps> = ({
    src,
    alt = '',
    className = '',
    imageClassName = 'object-cover  rounded-2xl',
}) => (
    <div className={`w-full overflow-hidden ${className}`}>
        <img src={src} alt={alt} className={imageClassName} />
    </div>
);

// CardContent component
interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
    <div className={` flex-1 ${className}`}>
        {children}
    </div>
);



// CardFooter component
interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
    <div className={`w-full ${className}`}>
        {children}
    </div>
);


// Main Card component props
interface CardProps {
    className?: string;
    layout?: 'vertical' | 'horizontal';
    clickable?: boolean;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
    className = "bg-white rounded-2xl shadow-md p-6  h-full",
    layout = 'vertical',
    clickable = false,
    children,
}) => {
    return (
        <div
            className={`flex ${className} 
        ${clickable ? 'cursor-pointer' : ''}
        ${layout === 'horizontal' ? 'flex-row items-center gap-4' : 'flex-col gap-4'}
      `}
        >
            {children}
        </div>
    );
};

export { Card, CardHeader, CardImage, CardIcon, CardContent, CardFooter };