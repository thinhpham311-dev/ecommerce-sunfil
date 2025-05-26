'use client';

import React, { useRef, useEffect, createContext, useContext, useReducer } from 'react';
import { Button } from "@/components/ui"
import { AltDownIcon } from "@/constants/icons.constant"

type DropdownState = {
    open: boolean;
    trigger: 'click' | 'hover';
    placement: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
};

type DropdownAction =
    | { type: 'OPEN' }
    | { type: 'CLOSE' }
    | { type: 'TOGGLE' }
    | { type: 'SET_TRIGGER'; payload: 'click' | 'hover' }
    | { type: 'SET_PLACEMENT'; payload: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' };

const DropdownContext = createContext<{
    state: DropdownState;
    dispatch: React.Dispatch<DropdownAction>;
} | undefined>(undefined);

// Reducer
const dropdownReducer = (state: DropdownState, action: DropdownAction): DropdownState => {
    switch (action.type) {
        case 'OPEN':
            return { ...state, open: true };
        case 'CLOSE':
            return { ...state, open: false };
        case 'TOGGLE':
            return { ...state, open: !state.open };
        case 'SET_TRIGGER':
            return { ...state, trigger: action.payload };
        case 'SET_PLACEMENT':
            return { ...state, placement: action.payload };
        default:
            return state;
    }
};

interface DropdownProviderProps {
    children: React.ReactNode;
    trigger?: 'click' | 'hover';
    placement?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

const DropdownProvider: React.FC<DropdownProviderProps> = ({
    children,
    trigger = 'click',
    placement = 'bottom-left'
}) => {
    const [state, dispatch] = useReducer(dropdownReducer, {
        open: false,
        trigger,
        placement
    });

    return (
        <DropdownContext.Provider value={{ state, dispatch }}>
            {children}
        </DropdownContext.Provider>
    );
};

const useDropdown = () => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('useDropdown must be used within a DropdownProvider');
    }
    return context;
};

interface DropdownProps {
    label: React.ReactNode;
    children: React.ReactNode;
    trigger?: 'click' | 'hover';
    placement?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

const Dropdown: React.FC<DropdownProps> = ({
    label,
    children,
}) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { state, dispatch } = useDropdown();
    const { trigger, placement } = state

    // Sync props with state
    useEffect(() => {
        dispatch({ type: 'SET_TRIGGER', payload: trigger });
        dispatch({ type: 'SET_PLACEMENT', payload: placement });
    }, [trigger, placement, dispatch]);

    // Handle click outside
    useEffect(() => {
        if (state.trigger !== 'click') {
            return;
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                dispatch({ type: 'CLOSE' });
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [state.trigger, dispatch]);

    const handleMouseEnter = () => state.trigger === 'hover' && dispatch({ type: 'OPEN' });
    const handleMouseLeave = () => state.trigger === 'hover' && dispatch({ type: 'CLOSE' });

    return (
        <div
            className="relative inline-block"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {label}
            {state.open && <DropdownMenuItems>{children}</DropdownMenuItems>}
        </div>
    );
};
interface DropdownButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    iconClassName?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
    children,
    icon = <AltDownIcon size={16} color="white" />,
    iconPosition = 'right',
    iconClassName = ''
}) => {
    const { dispatch, state } = useDropdown();
    const handleClick = () => state.trigger === 'click' && dispatch({ type: 'TOGGLE' });

    return (
        <Button
            variant="primary"
            onClick={handleClick}
            className="inline-flex space-x-8 items-center gap-2 cursor-pointer"
            aria-expanded={state.open}
            aria-haspopup="true"
        >
            {iconPosition === 'left' && (
                <span className={`transition-transform duration-300 ${state.open ? 'rotate-180' : 'rotate-0'} ${iconClassName}`}>{icon}</span>
            )}
            {children}
            {iconPosition === 'right' && (
                <span className={`transition-transform duration-300 ${state.open ? 'rotate-180' : 'rotate-0'} ${iconClassName}`}>{icon}</span>
            )}
        </Button>
    );
};
interface DropdownMenuItemsProps {
    children: React.ReactNode;
}

const placementClasses: Record<string, string> = {
    'bottom-left': 'left-0 top-full  origin-top-left',
    'bottom-right': 'right-0 top-full  origin-top-right',
    'top-left': 'left-0 bottom-full  origin-bottom-left',
    'top-right': 'right-0 bottom-full  origin-bottom-right',
};

const DropdownMenuItems: React.FC<DropdownMenuItemsProps> = ({ children }) => {
    const { state } = useDropdown();

    return (
        <div
            className={`absolute ${placementClasses[state.placement]} min-w-[200px]  bg-white border border-gray-200 rounded-md shadow-lg z-50`}
            role="menu"
        >
            {children}
        </div>
    );
};

export { Dropdown, DropdownMenuItems, DropdownButton, DropdownProvider, useDropdown };