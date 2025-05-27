'use client';

import React, { useEffect } from 'react';
import { RootState } from '@/store';
import {
    toggleOption,
    initializeFilters,
} from '@/store/base/filtersSlice';
import { Card, CardContent, CardHeader, CardTitle, CardIcon, Accordion, AccordionCollapse, AccordionHeader, AccordionItem } from '@/components/ui';
import { FilterIcon } from "@/constants/icons.constant";
import { IFilter } from "@/interfaces/IFilters";
import { useAppDispatch, useAppSelector } from '@/utils/hooks/useStoreIO';

interface IOption {
    slug: string;
    title: string;
    checked: boolean;
}

interface IGroup {
    title: string;
    options: IOption[];
}

interface IFiltersState {
    groups: Record<string, IGroup>;
}

interface IProductFilter {
    filtersList: IFilter;
}

const ProductFilter: React.FC<IProductFilter> = ({ filtersList }) => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state: RootState) => state.base.filters as IFiltersState);

    useEffect(() => {
        if (filtersList && Object.keys(filtersList).length > 0) {
            dispatch(initializeFilters(filtersList));
        }
    }, [dispatch, filtersList]);

    if (!filters?.groups || Object.keys(filters.groups).length === 0) {
        return null;
    }

    return (
        <section className="space-y-6 sticky top-0 left-0">
            <Card className="!py-2 !p-0 bg-white rounded-lg shadow-sm">
                <CardHeader className="p-4">
                    <div className="flex items-center gap-x-2">
                        <CardIcon icon={<FilterIcon />} />
                        <CardTitle className="text-primary text-2xl font-bold">Bộ lọc</CardTitle>
                    </div>
                </CardHeader>
                <hr className="border-gray-200 my-0" />
                <CardContent className="!p-0">
                    <Accordion>
                        {(Object.entries(filters.groups) as [string, IGroup][]).map(([groupKey, group]) => (
                            <AccordionItem key={groupKey} defaultOpen={true}>
                                <Card className="!p-0 border-none shadow-none">
                                    <CardHeader className="!p-3">
                                        <AccordionHeader className="p-0 hover:no-underline">
                                            <h2 className="font-bold text-lg">
                                                {group.title}
                                            </h2>
                                        </AccordionHeader>
                                    </CardHeader>
                                    <AccordionCollapse>
                                        <CardContent className="!pb-2 !px-4">
                                            <div className="space-y-3">
                                                {group.options.map((option) => (
                                                    <label
                                                        key={option.slug}
                                                        className="flex items-center gap-2 cursor-pointer"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={option.checked}
                                                            onChange={() =>
                                                                dispatch(toggleOption({ groupKey, slug: option.slug }))
                                                            }
                                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                        />
                                                        <span className="text-sm text-gray-600">
                                                            {option.title}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </AccordionCollapse>
                                </Card>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </section>
    );
};

export default ProductFilter;