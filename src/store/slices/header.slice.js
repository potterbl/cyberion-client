import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isInView: false
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setInView: (state, actions) => {
            state.isInView = actions.payload
        }
    }
})

export const {actions, reducer} = headerSlice
