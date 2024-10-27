import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ItemApiService from "../../Services/Item/ItemApiService.js";

export const fetchItems = createAsyncThunk('items/fetchItems', () => ItemApiService.getItems())

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        reactionUpdated: (state, action) => {
            const {id, reaction} = action.payload
            const item = state.list.find(item => item.id === Number(id))
            if (item) {
                item.reactions[reaction]++
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchItems.pending, (state, action) => {
            state.status = 'pending'
        }).addCase(fetchItems.fulfilled, (state, action) => {
            state.status = 'completed'
            state.list = action.payload.data
        }).addCase(fetchItems.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const selectItems = state => state.items.list
export const selectItem = (state, id) => state.items.list.find(item => item.id === Number(id))
export const selectItemStatus = state => state.items.status
export const selectItemError = state => state.items.error

export const {
    reactionUpdated
} = itemSlice.actions

export default itemSlice.reducer