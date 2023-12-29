import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    scroll: true
}

export const arrowSlice = createSlice({
    name: 'arrow',
    initialState,
    reducers: {
        setScroll: (state, action) => {
            state.scroll = action.payload
        }
    }
})

export const {actions, reducer} = arrowSlice