// components/Button.tsx
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type RoundedVariant = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
type ButtonVariant = 'default' | 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    className?: string;
    rounded?: RoundedVariant;
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);


const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    disabled = false,
    className = '',
    rounded = 'md',
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                styles.btn,
                styles[variant],
                styles[size],
                styles[`round${capitalize(rounded)}`],
                disabled && styles.disabled,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
