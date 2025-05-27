import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SORTOPTION_DATA, PRICESORT_DATA } from '@/mocks/data/sort.data';
import { apiGetProductsList } from "@/lib/services/products.service"
import { IProduct } from '@/interfaces/IProduct';
import { ISortOption } from "@/interfaces/ISortOption"

interface SortState {
    sortBy: string;
    priceBy: string;
}

interface IApiResponse {
    data: IProduct[];
}

const initialState: SortState = {
    sortBy: SORTOPTION_DATA[0].value,
    priceBy: PRICESORT_DATA[0].value,
};

export const fetchProducts = createAsyncThunk<IProduct[], ISortOption>(
    'products/fetchProducts',
    async (data) => {
        const response: IApiResponse = await apiGetProductsList(data);
        return response.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
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

export const { setSortBy, setPriceBy } = productsSlice.actions;
export default productsSlice.reducer;
