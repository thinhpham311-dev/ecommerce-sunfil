import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import counterReducer from "./slices/counterSlice";
import filtersReducer from "./slices/filtersSlice"
import { PERSIST_STORE_NAME } from "@/constants/app.constant"
import sortReducer from "./slices/sortSlice"

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
    counter: counterReducer,
    filters: filtersReducer,
    sort: sortReducer
});

const persistConfig = {
    key: PERSIST_STORE_NAME,
    storage,
    whitelist: ["counter", "filters", "sort"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
