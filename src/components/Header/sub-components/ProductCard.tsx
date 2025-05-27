"use client";
import { Card, CardContent, CardImage, CardTitle, Badge, CardHeader } from '@/components/ui';
import { IProduct } from '@/interfaces/IProduct';
import { formatCurrency } from "@/utils"
import { FireIcon } from "@/constants/icons.constant"

interface ProductCardProps {
    item: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }: ProductCardProps) => {
    return (
        <Card clickable className='bg-white p-3 h-full flex flex-col  gap-y-3'>
            <CardImage src={item.imageUrl} alt={item?.name}
                className='aspect-square  relative'
                imageClassName="object-contain h-full w-full"
            />
            <CardHeader className='p-0 flex-grow'>
                <p className="inline-flex flex-wrap gap-2">
                    {item.isHotDeal && (
                        <Badge className="bg-badge-gradient text-danger-dark font-semibold inline-flex space-x-2">
                            <span><FireIcon /></span>
                            <span>Giá cực sốc</span>
                        </Badge>
                    )}
                </p>
                <CardTitle className='line-clamp-2 font-semibold text-base text-text-primary '>
                    {item?.name}
                </CardTitle>
            </CardHeader>

            <CardContent className='flex flex-col gap-y-1 p-0'>
                <p className='text-base text-danger font-semibold'>
                    <span>{formatCurrency(item?.discountedPrice)}</span>
                </p>
                <p className="text-sm text-text-secondary font-normal inline-flex space-x-2 items-center">
                    <span className="line-through">{formatCurrency(item?.originalPrice)}</span>
                    <span className="text-danger font-medium">-{item?.discountPercentage}%</span>
                </p>
            </CardContent>
        </Card>
    );
};

export default ProductCard;