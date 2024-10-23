import {createSlice} from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        list: [],
    },
    reducers: {}
})

export const selectItems = state => state.items.list

export default itemSlice.reducer