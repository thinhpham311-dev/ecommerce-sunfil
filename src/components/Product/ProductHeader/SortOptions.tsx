"use client";

import { Button } from '@/components/ui';
import React from 'react';
import { ISortOption } from '@/interfaces/ISortOption';
import { CheckIcon } from '@/constants/icons.constant';
import { setSortBy } from "@/store/base/sortSlice"
import { RootState } from "@/store"
import { useAppDispatch, useAppSelector } from '@/utils/hooks/useStoreIO';

interface SortOptionsProps {
    options: ISortOption[];
}

interface SortOptionButtonProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

const SortOptionButton: React.FC<SortOptionButtonProps> = ({ label, isSelected, onClick }) => {
    return (
        <Button
            variant={isSelected ? 'outline' : 'default'}
            onClick={onClick}
            className={`relative bg-white`}
            size='md'
            rounded='Md'
        >
            {label}
            {isSelected &&
                <div className='absolute top-0 right-0  clip-triangle-br bg-primary w-[25.6px] h-[25px] rounded-tr-md'>
                    <div className='absolute top-[0.5px] right-[0.75px]'>
                        <CheckIcon />
                    </div>
                </div>
            }
        </Button>
    );
};


const SortOptions: React.FC<SortOptionsProps> = ({ options }) => {
    const dispatch = useAppDispatch();
    const sortBy = useAppSelector((state: RootState) => state.base.sort.sortBy);
    return (
        <div className="flex items-center space-x-2">
            <span className="text-text-secondary text-base">Sắp xếp theo</span>
            {options.map((option) => (
                <SortOptionButton
                    key={option.label}
                    label={option.label}
                    isSelected={sortBy === option.value}
                    onClick={() => dispatch(setSortBy(option.value))}
                />
            ))}
        </div>
    );
};

export default SortOptions;