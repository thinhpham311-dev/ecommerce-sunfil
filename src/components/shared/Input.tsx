// components/Input.tsx
import React from 'react';
import clsx from 'clsx';

type RoundedVariant = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
type InputVariant = 'default' | 'error';
type InputSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: InputVariant;
    size?: InputSize;
    rounded?: RoundedVariant;
    className?: string;
}

const Input: React.FC<InputProps> = ({
    variant = 'default',
    size = 'md',
    rounded = 'md',
    className = '',
    disabled = false,
    ...props
}) => {
    const baseStyles = 'block w-full border outline-none transition-colors duration-200 focus:outline-none';

    const variantStyles = {
        default: 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
        error: 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500',
    };

    const sizeStyles = {
        sm: 'py-1.5 px-3 text-base',
        md: 'py-2 px-4 text-base',
        lg: 'py-3 px-5 text-base',
        xl: 'py-4 px-5 text-base',
        "2xl": 'py-5 px-5 text-base',
    };

    const roundedClass = `rounded-${rounded}`;

    const disabledStyles = 'bg-gray-100 text-gray-500 cursor-not-allowed';

    return (
        <input
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
        />
    );
};

export default Input;