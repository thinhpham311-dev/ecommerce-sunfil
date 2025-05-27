"use client";
import ProductCard from './ProductCard';
import { Card, CardHeader, CardContent, Button, CardTitle } from '@/components/ui';
import { DoubleAltRightIcon } from "@/constants/icons.constant"
import { PRODUCTS_DATA } from '@/mocks/data/product.data';



const ProductGrid = () => {
    return (
        <Card className='bg-[--background] gap-y-2'>
            <CardHeader className='p-0 flex items-center justify-between'>
                <CardTitle className='text-2xl font-semibold'>Sản phẩm bán chạy</CardTitle>
                <Button variant='ghost' className='inline-flex items-center space-x-2'>
                    <span className='text-primary font-base'>
                        Xem tất cả
                    </span>
                    <span><DoubleAltRightIcon strokeWidth={0.25} /></span>
                </Button>
            </CardHeader>
            <CardContent className='p-0'>
                <div className={`grid 2xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5`}>
                    {PRODUCTS_DATA.slice(0, 5).map(product => (
                        <div key={product.id} className="col-span-1">
                            <ProductCard item={product} />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card >

    );
};

export default ProductGrid;
