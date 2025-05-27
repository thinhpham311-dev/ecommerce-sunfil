"use client";

import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui';

interface IProductHeaderProps {
    title?: string,
    children?: React.ReactNode
}

const ProductHeader: React.FC<IProductHeaderProps> = ({ title, children }) => {

    return (
        <Card layout='horizontal' className="!bg-transparent  flex-wrap justify-between items-center !p-0 gap-4 text-white">
            <CardHeader className='!p-0'>
                <CardTitle className='text-2xl text-text-primary'>{title}</CardTitle>
            </CardHeader>
            <CardContent className='!p-0'>
                <div className="flex flex-wrap items-center gap-x-5">
                    {children}
                </div>
            </CardContent>
        </Card>
    );
};

export { default as PriceSelectSort } from "./PriceSelectSort"
export { default as SortOptions } from "./SortOptions"

export default ProductHeader;