// components/Button.tsx
import React from 'react';
import clsx from 'clsx';

type RoundedVariant = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost'; // Thêm 'ghost' variant
type ButtonSize = 'sm' | 'md' | 'lg';

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
    // baseStyles đã có focus:outline-none, nên không cần thêm gì cho "không outline" mặc định của trình duyệt
    const baseStyles = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50';

    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300', // Thêm variant 'ghost'
    };

    const sizeStyles = {
        sm: 'py-1 px-3 text-sm',
        md: 'py-2 px-4 text-base',
        lg: 'py-3 px-6 text-lg',
    };

    const disabledStyles = 'opacity-50 cursor-not-allowed';

    const roundedClass = `rounded-${rounded}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                roundedClass,
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