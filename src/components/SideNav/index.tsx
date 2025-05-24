'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import {
    toggleOption,
    initializeFilters,
} from '@/store/slices/filtersSlice';
import { FILTER_DATA } from "@/data/filter.data"

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
        <div className="space-y-6">
            {Object.entries(filters.groups).map(([groupKey, group]) => (
                <div key={groupKey}>
                    <h4 className="text-lg font-semibold mb-2">{group.title}</h4>
                    <div className="space-y-1">
                        {group.options.map((option) => (
                            <label key={option.slug} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={option.checked}
                                    onChange={() =>
                                        dispatch(toggleOption({ groupKey, slug: option.slug }))
                                    }
                                />
                                <span>{option.title}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
}
