import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilter } from '@/interfaces/IFilters';

const initialState: IFilter = {
    groups: {}
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        initializeFilters: (state, action: PayloadAction<IFilter>) => {
            state.groups = action.payload.groups;
        },
        toggleOption: (
            state,
            action: PayloadAction<{ groupKey: string; slug: string }>
        ) => {
            const { groupKey, slug } = action.payload;
            const group = state.groups[groupKey];
            if (!group) {
                return;
            }

            if (groupKey === 'priceRange') {
                group.options.forEach(option => {
                    option.checked = option.slug === slug;
                });
            } else {
                const option = group.options.find(opt => opt.slug === slug);
                if (option) {
                    option.checked = !option.checked;
                }
            }
        },
    },
});

export const { toggleOption, initializeFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
