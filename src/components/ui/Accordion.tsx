"use client";

import React, { useState, createContext, useContext, ReactNode } from "react";
import { AltArrowUp } from "@/constants/icons.constant"

// Context để chia sẻ trạng thái mở/đóng
const AccordionContext = createContext<{
    isOpen: boolean;
    toggle: () => void;
} | null>(null);

// Accordion wrapper
interface AccordionProps {
    children: React.ReactNode;
    className?: string;
}
const Accordion: React.FC<AccordionProps> = ({ children, className = '' }) => (
    <div className={`w-full divide-y divide-gray-200 ${className}`}>{children}</div>
);

// AccordionItem
interface AccordionItemProps {
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
    children,
    defaultOpen = false,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <AccordionContext.Provider value={{ isOpen, toggle }}>
            <div className={`border-b ${className}`}>{children}</div>
        </AccordionContext.Provider>
    );
};

// AccordionHeader
interface AccordionHeaderProps {
    children: ReactNode;
    className?: string;
}
const AccordionHeader: React.FC<AccordionHeaderProps> = ({
    children,
    className = '',
}) => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error("AccordionHeader must be used inside AccordionItem");
    }

    const { isOpen, toggle } = context;

    return (
        <button
            onClick={toggle}
            className={`w-full flex justify-between items-center  ${className}`}
        >
            <div>{children}</div>
            <AltArrowUp isOpen={isOpen} />
        </button>
    );
};

// AccordionCollapse
interface AccordionCollapseProps {
    children: ReactNode;
    className?: string;
}
const AccordionCollapse: React.FC<AccordionCollapseProps> = ({
    children,
    className = '',
}) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionCollapse must be used inside AccordionItem");

    const { isOpen } = context;

    return (
        <div
            className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } ${className}`}
        >
            <div className="pb-4 text-gray-600">{children}</div>
        </div>
    );
};

export {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionCollapse,
};
