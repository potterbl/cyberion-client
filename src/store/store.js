import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as blocksReducer} from "./slices/blocks.slice";
import {reducer as containerReducer} from "./slices/container.slice";
import {reducer as headerReducer} from "./slices/header.slice";

const reducers = combineReducers({
    blocks: blocksReducer,
    container: containerReducer,
    header: headerReducer
})

export const store = configureStore({
    reducer: reducers
})
