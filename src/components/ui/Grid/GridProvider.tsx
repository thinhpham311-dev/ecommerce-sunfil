import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { IProduct } from '@/interfaces/IProduct';

interface GridProviderProps {
    initialProducts?: IProduct[];
    initialHasMore?: boolean;
    initialCurrentPage?: number;
    initialTotalPages?: number;
    mode?: 'auto' | 'pagination';
    loadMore?: () => Promise<void>;
    loadingComponent?: React.ReactNode;
    threshold?: number;
    children: ReactNode;
}

interface GridState {
    loading: boolean;
    hasMore: boolean;
    currentPage: number;
    totalPages: number;
    products: IProduct[];

    mode: 'auto' | 'pagination';
    threshold: number;
}

const initialState: GridState = {
    loading: false,
    hasMore: false,
    currentPage: 1,
    totalPages: 1,
    products: [],
    mode: 'auto',
    threshold: 0.8,
};

type Action =
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_HAS_MORE'; payload: boolean }
    | { type: 'SET_CURRENT_PAGE'; payload: number }
    | { type: 'SET_TOTAL_PAGES'; payload: number }
    | { type: 'ADD_PRODUCTS'; payload: IProduct[] }
    | { type: 'RESET_PRODUCTS' }
    | { type: 'SET_MODE'; payload: 'auto' | 'pagination' }
    | { type: 'SET_THRESHOLD'; payload: number };

function gridReducer(state: GridState, action: Action): GridState {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_HAS_MORE':
            return { ...state, hasMore: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SET_TOTAL_PAGES':
            return { ...state, totalPages: action.payload };
        case 'ADD_PRODUCTS':
            return { ...state, products: [...state.products, ...action.payload] };
        case 'RESET_PRODUCTS':
            return { ...state, products: [] };
        case 'SET_MODE':
            return { ...state, mode: action.payload };
        case 'SET_THRESHOLD':
            return { ...state, threshold: action.payload };
        default:
            return state;
    }
}

const GridContext = createContext<{
    state: GridState;
    dispatch: React.Dispatch<Action>;
    loadMore?: () => Promise<void>;
    loadingComponent?: React.ReactNode;
} | undefined>(undefined);

export const useGridContext = () => {
    const context = useContext(GridContext);
    if (!context) {
        throw new Error('useGridContext must be used within GridProvider');
    }
    return context;
};

export const GridProvider: React.FC<GridProviderProps> = ({
    initialProducts = [],
    initialHasMore = false,
    initialCurrentPage = 1,
    initialTotalPages = 1,
    mode = 'auto',
    loadMore,
    loadingComponent,
    threshold = 0.8,
    children,
}) => {
    const [state, dispatch] = useReducer(gridReducer, {
        ...initialState,
        products: initialProducts,
        hasMore: initialHasMore,
        currentPage: initialCurrentPage,
        totalPages: initialTotalPages,
        mode,
        threshold,
    });

    return (
        <GridContext.Provider value={{ state, dispatch, loadMore, loadingComponent }}>
            {children}
        </GridContext.Provider>
    );
};
