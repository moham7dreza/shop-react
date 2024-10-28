import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import CategoryApiService from "../../Services/Item/CategoryApiService.js";

export const fetchCategories = createAsyncThunk('categories/fetchCategories', () => CategoryApiService.getCategories())

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.status = 'pending'
        }).addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'completed'
            state.list = action.payload.data
        }).addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const selectCategories = state => state.categories.list
export const selectCategory = (state, id) => state.categories.list.find(category => category.id === Number(id))
export const selectCategoryStatus = state => state.categories.status
export const selectCategoryError = state => state.categories.error

export default categorySlice.reducer