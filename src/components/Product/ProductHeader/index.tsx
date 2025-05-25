import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui';
import SortOptions from "./sub-components/SortOptions"
import PriceSelectSort from './sub-components/PriceSelectSort';
import { SORTOPTION_DATA, PRICESORT_DATA } from "@/data/sort.data"

interface IProductHeaderProps {
    title?: string
}

const ProductHeader: React.FC<IProductHeaderProps> = ({ title }) => {

    return (
        <Card layout='horizontal' className="flex justify-between items-center p-0 gap-4 text-white">
            <CardHeader className='p-0'>
                <CardTitle className='text-2xl text-text-primary'>{title}</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="flex  items-center space-x-8 ">
                    <SortOptions options={SORTOPTION_DATA} />
                    <PriceSelectSort options={PRICESORT_DATA} />
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductHeader;