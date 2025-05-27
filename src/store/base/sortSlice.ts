import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SORTOPTION_DATA, PRICESORT_DATA } from '@/mocks/data/sort.data';

interface SortState {
    sortBy: string;
    priceBy: string;
}

const initialState: SortState = {
    sortBy: SORTOPTION_DATA[0].value,
    priceBy: PRICESORT_DATA[0].value,
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortBy: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
        },
        setPriceBy: (state, action: PayloadAction<string>) => {
            state.priceBy = action.payload;
        },
    },
});

export const { setSortBy, setPriceBy } = sortSlice.actions;
export default sortSlice.reducer;
