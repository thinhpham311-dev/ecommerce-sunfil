// components/ui/Badge.tsx
import React from "react";
import clsx from "clsx";

type BadgeProps = {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "error";
    className?: string;
};

const variantStyles = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
};

export const Badge = ({
    children,
    variant = "default",
    className = "",
}: BadgeProps) => {
    return (
        <span
            className={clsx(
                "px-2 py-0.5 rounded-full text-xs font-medium",
                className,
                variantStyles[variant]
            )}
        >
            {children}
        </span>
    );
}
