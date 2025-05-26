"use client";
import React from 'react';
import { ISortPriceOption } from '@/interfaces/ISortOption';
import { Select } from "@/components/ui";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/store";
import { setPriceBy } from "@/store/base/sortSlice";

interface PriceSelectSortProps {
    options: ISortPriceOption[];
}

const PriceSelectSort: React.FC<PriceSelectSortProps> = ({ options }) => {
    const dispatch = useDispatch();
    const sortBy = useSelector((state: RootState) => state.base.filters);

    const handlePriceSortChange = (value: string | number) => {
        dispatch(setPriceBy(value as string));
    };

    return (
        <Select
            wrapperClassName="flex items-center gap-x-3"
            options={options}
            value={sortBy}
            onChange={handlePriceSortChange}
            name="priceSort"
        />
    );
};

export default PriceSelectSort;
