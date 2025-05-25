import React from 'react';

export interface SelectOption {
    label: string;
    value: string | number;
}

interface SelectProps {
    options: SelectOption[];
    value: string | number;
    onChange: (newValue: string | number) => void;
    placeholder?: string;
    label?: string;
    name?: string;
    disabled?: boolean;
    className?: string;
    wrapperClassName?: string;
}

const Select: React.FC<SelectProps> = ({
    options,
    value,
    onChange,
    placeholder,
    label,
    name,
    disabled = false,
    className = '',
    wrapperClassName = '',
}) => {
    if (!options || !Array.isArray(options) || options.length === 0) {
        console.warn("Select component received no valid options.");
        return null;
    }

    return (
        <div className={`relative ${wrapperClassName}`}>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <select
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                className={`
          mt-1 block w-full pl-3 pr-10 py-2
          text-base bg-transparent focus:outline-none focus:ring-blue-500 focus:border-blue-500
          sm:text-sm rounded-md
          appearance-none 
          cursor-pointer
          ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'text-gray-900'}
          ${className}
        `}
            >
                {placeholder && <option value="" disabled>{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );
};

export default Select;