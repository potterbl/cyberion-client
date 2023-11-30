import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer} from "./slices/blocks.slice";

const reducers = combineReducers({
    blocks: reducer
})

export const store = configureStore({
    reducer: reducers
})
