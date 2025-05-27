"use client";
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { cn } from '@/utils';

interface CardProps {
    className?: string;
    layout?: 'vertical' | 'horizontal';
    clickable?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

interface CardSubComponentProps {
    children: React.ReactNode;
    className?: string;
}

interface CardIconProps {
    icon: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

interface CardImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    fill?: boolean;
    className?: string;
    imageClassName?: string;
}

const CardHeader = ({ children, className }: CardSubComponentProps) => (
    <div className={cn(styles.cardHeader, className)}>{children}</div>
);

const CardTitle = ({ children, className }: CardSubComponentProps) => (
    <h2 className={cn(styles.cardTitle, className)}>{children}</h2>
);

const CardDescription = ({ children, className }: CardSubComponentProps) => (
    <p className={cn(styles.cardDescription, className)}>{children}</p>
);

const CardIcon = ({ icon, className, containerClassName }: CardIconProps) => (
    <div className={cn(styles.cardIconContainer, containerClassName)}>
        <span className={cn(styles.cardIcon, className)}>{icon}</span>
    </div>
);

const CardImage = ({
    src,
    alt = '',
    width,
    height,
    fill = !width && !height,
    className,
    imageClassName,
}: CardImageProps) => (
    <div
        className={cn(styles.cardImageContainer, className)}
        style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : fill ? '100%' : 'auto',
            position: fill ? 'relative' : undefined,
        }}
    >
        <Image
            src={src}
            alt={alt}
            className={cn(styles.cardImage, imageClassName)}
            {...(fill ? { fill: true } : { width, height })}
            priority={false} // Added for better performance
        />
    </div>
);

const CardContent = ({ children, className }: CardSubComponentProps) => (
    <div className={cn(styles.cardContent, className)}>{children}</div>
);

const CardFooter = ({ children, className }: CardSubComponentProps) => (
    <div className={cn(styles.cardFooter, className)}>{children}</div>
);

const Card = ({
    className = '',
    layout = 'vertical',
    clickable = false,
    children,
    onClick,
}: CardProps) => {
    return (
        <div
            className={cn(
                styles.card,
                layout === 'horizontal' ? styles.cardHorizontal : styles.cardVertical,
                clickable && styles.cardClickable,
                className
            )}
            onClick={onClick}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
            onKeyDown={(e) => clickable && onClick && e.key === 'Enter' && onClick()}
        >
            {children}
        </div>
    );
};

export {
    Card,
    CardHeader,
    CardImage,
    CardIcon,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
};