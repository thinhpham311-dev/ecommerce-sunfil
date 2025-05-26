import { combineReducers, Reducer } from 'redux';
import auth from './auth';
import base from "./base";

export type AuthState = ReturnType<typeof auth>;
export type BaseState = ReturnType<typeof base>;

export type AsyncReducers = {
    [key: string]: Reducer;
};

export type RootReducerState = {
    auth: AuthState;
    base: BaseState;
} & {
    [key in keyof AsyncReducers]: ReturnType<AsyncReducers[key]>;
};

const rootReducer = (asyncReducers: AsyncReducers = {}): Reducer<RootReducerState> => {
    return (state, action) => {
        const combinedReducer = combineReducers({
            auth,
            base,
            ...asyncReducers,
        });
        return combinedReducer(state, action);
    };
};

export default rootReducer;
