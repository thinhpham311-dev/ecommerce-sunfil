import React from "react";
import clsx from "clsx"; // nếu bạn dùng clsx
import { Card, CardHeader, CardContent, CardImage } from "@/components/ui";

interface CategoryCardProps {
    image?: string;
    title: string;
    _h?: number;
    _w?: number;
    className?: string; // ✅
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    image,
    title,
    _h,
    _w,
    className
}) => {
    return (
        <Card
            layout="horizontal"
            className={clsx(
                "flex items-center gap-4 rounded-xl p-4 shadow-sm transition hover:shadow-md ",
                className
            )}
        >
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
                <h3 className="text-lg font-semibold">{title}</h3>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
