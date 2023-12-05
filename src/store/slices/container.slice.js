import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    offsetLeft: 0
}

export const containerSlice = createSlice({
    name: 'container',
    initialState,
    reducers: {
        setOffsetLeft: (state, action) => {
            state.offsetLeft = action.payload
        }
    }
})

export const {actions, reducer} = containerSlice
