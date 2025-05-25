'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import {
    toggleOption,
    initializeFilters,
} from '@/store/slices/filtersSlice';
import { FILTER_DATA } from "@/data/filter.data"
import { Card, CardContent, CardHeader, CardTitle, CardIcon, Accordion, AccordionCollapse, AccordionHeader, AccordionItem } from '@/components/ui';
import { FilterIcon } from "@/constants/icons.constant"

export default function FilterGroupsUI() {
    const filters = useSelector((state: RootState) => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeFilters(FILTER_DATA));
    }, [dispatch]);

    if (!filters.groups) {
        return null;
    }

    return (
        <section className="space-y-6">
            <Card className='py-2 px-0 bg-white'>
                <CardHeader className='p-4'>
                    <Card layout='horizontal' className='p-0 shadow-none gap-x-2'>
                        <CardIcon icon={<FilterIcon />} />
                        <CardTitle className='text-primary text-2xl font-bold'>Bộ lọc</CardTitle>
                    </Card>
                </CardHeader>
                <hr className='py-0' />
                <CardContent className='p-0 gap-5 '>
                    <Accordion>
                        {Object.entries(filters.groups).map(([groupKey, group]) => (
                            <AccordionItem key={groupKey} defaultOpen={true}>
                                <Card className="p-0">
                                    <CardHeader className="p-3">
                                        <AccordionHeader className='p-0'>
                                            <h1 className='font-bold text-xl'>
                                                {group.title}
                                            </h1>
                                        </AccordionHeader>
                                    </CardHeader>
                                    <AccordionCollapse>
                                        <CardContent className='pb-0 px-4'>
                                            <div className="space-y-3">
                                                {group.options.map((option) => (
                                                    <label key={option.slug} className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            checked={option.checked}
                                                            onChange={() =>
                                                                dispatch(toggleOption({ groupKey, slug: option.slug }))
                                                            }
                                                        />
                                                        <span className='text-sm text-text-secondary'>{option.title}</span>
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
            </Card >
        </section >
    );
}
