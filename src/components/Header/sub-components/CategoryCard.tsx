import React from "react";
import clsx from "clsx";
import { AltRightIcon } from "@/constants/icons.constant";
import { Card, CardHeader, CardContent, CardImage, CardIcon, useTabs } from "@/components/ui";

interface CategoryCardProps {
    id?: string;
    image?: string;
    title: string;
    _h?: number;
    _w?: number;
    className?: string;
    hasSubmenu?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    id,
    image,
    title,
    _h,
    _w,
    className,
    hasSubmenu = false,
}) => {
    const { activeTab } = useTabs();
    console.log(activeTab)
    return (
        <Card
            layout="horizontal"
            className={clsx(
                "flex items-center justify-between gap-4 rounded-xl p-4",
                className
            )}
        >
            <div className="flex items-center gap-4">
                <CardHeader className="p-0">
                    <CardImage
                        src={image ?? "/images/not-found/icon-not-found.jpg"}
                        alt={title}
                        height={_h}
                        width={_w}
                        className="object-cover rounded-md"
                    />
                </CardHeader>
                <CardContent className="space-y-1">
                    <h3 className="text-base font-semibold">{title}</h3>
                </CardContent>
            </div>
            <CardIcon icon={hasSubmenu && (
                <AltRightIcon size={24} strokeWidth={0.5} color={activeTab === id ? "#024897" : "#1C252E"} />
            )} />
        </Card>
    );
};

export default CategoryCard;
