import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    height: 0,
    offsetTop: 0,
    offsetBottom: 0,
    isInView: false
}

export const blocksSlice = createSlice({
    name: 'blocks',
    initialState,
    reducers: {
        setBlocksHeight: (state, action) => {
            state.height = action.payload
        },
        setBlocksBottomOffset: (state, action) => {
            state.offsetBottom = action.payload
        },
        setBlocksTopOffset: (state, action) => {
            state.offsetTop = action.payload
        },
        setInView: (state, action) => {
            state.isInView = action.payload
        }
    }
})

export const {actions, reducer} = blocksSlice
