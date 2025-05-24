import React from "react";
import { Card, CardHeader, CardContent, CardIcon } from "@/components/shared"; // Điều chỉnh đường dẫn phù hợp

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    description,

}) => {
    return (
        <Card clickable layout="horizontal" className="px-3 py-6 shadow-card rounded-lg">
            <CardHeader className="p-0">
                <CardIcon icon={icon} />
            </CardHeader>
            <CardContent className="space-y-2">
                <h3 className="text-base font-bold">{title}</h3>
                <p className="text-text-secondary font-normal">{description}</p>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
