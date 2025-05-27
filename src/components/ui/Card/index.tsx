"use client";
import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';


const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx(styles.cardHeader, className)}>{children}</div>
);

const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={clsx(styles.cardTitle, className)}>{children}</h2>
);

const CardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <p className={clsx(styles.cardDescription, className)}>{children}</p>
);

const CardIcon = ({ icon, className, containerClassName }: {
    icon: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => (
    <div className={clsx(styles.cardIconContainer, containerClassName)}>
        <span className={clsx(styles.cardIcon, className)}>{icon}</span>
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
}: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    fill?: boolean;
    className?: string;
    imageClassName?: string;
}) => (
    <div
        className={clsx(styles.cardImageContainer, className)}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}
    >
        <Image
            src={src}
            alt={alt}
            className={clsx(styles.cardImage, imageClassName)}
            {...(fill ? { fill: true } : { width, height })}
        />
    </div>
);

const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx(styles.cardContent, className)}>{children}</div>
);

const CardFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx(styles.cardFooter, className)}>{children}</div>
);

const Card = ({
    className = '',
    layout = 'vertical',
    clickable = false,
    children,
}: {
    className?: string;
    layout?: 'vertical' | 'horizontal';
    clickable?: boolean;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={clsx(
                styles.card,
                layout === 'horizontal' ? styles.cardHorizontal : styles.cardVertical,
                clickable && styles.cardClickable,
                className
            )}
        >
            {children}
        </div>
    );
};

export {
    Card, CardHeader, CardImage, CardIcon, CardContent, CardFooter, CardTitle, CardDescription
};
