// components/Button.tsx
import React from 'react';
import clsx from 'clsx';

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
    const baseStyles = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50';

    const variantStyles: Record<ButtonVariant, string> = {
        default: 'bg-white text-black hover:text-white hover:bg-primary-dark focus:ring-primary border border-white',
        primary: 'bg-primary-base text-white hover:bg-primary-dark focus:ring-primary',
        secondary: 'bg-secondary text-text-primary hover:bg-primary/10 focus:ring-primary',
        danger: 'bg-danger text-white hover:bg-red-800 focus:ring-danger',
        outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10 focus:ring-primary',
        ghost: 'bg-transparent text-text-secondary hover:bg-black/5 focus:ring-black/20',
    };

    const sizeStyles: Record<ButtonSize, string> = {
        sm: 'py-1 px-3 text-sm',
        md: 'py-2 px-4 text-base',
        lg: 'py-3 px-6 text-lg',
        icon: 'w-10 h-10 flex items-center justify-center text-base'
    };

    const disabledStyles = 'opacity-50 cursor-not-allowed';

    const roundedStyles: Record<RoundedVariant, string> = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                roundedStyles[rounded],
                disabled && disabledStyles,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
