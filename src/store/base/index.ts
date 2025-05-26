import { combineReducers } from '@reduxjs/toolkit'
import filters from "./filtersSlice"
import sort from "./sortSlice"
import couter from "./counterSlice"

const reducer = combineReducers({
    filters,
    couter,
    sort
})

export default reducer