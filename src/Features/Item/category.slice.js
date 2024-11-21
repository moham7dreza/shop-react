import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import CategoryApiService from "../../Services/Item/CategoryApiService.js";

const categoryAdapter = createEntityAdapter(
    {
        sortComparer: (a, b) => b.created_at.localeCompare(a.created_at)
    }
)

export const fetchCategories = createAsyncThunk('categories/fetchCategories', () => CategoryApiService.getCategories())

const categorySlice = createSlice({
    name: 'categories',
    initialState: categoryAdapter.getInitialState({
        status: 'idle',
        error: null,
    }),
    extraReducers: builder => {
        builder.addCase(fetchCategories.pending, (state, _) => {
            state.status = 'pending'
        }).addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'completed'
            categoryAdapter.upsertMany(state, action.payload.data)
        }).addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {
    selectAll: selectCategories,
    selectById: selectCategory,
    selectIds: selectCategoryIds,
} = categoryAdapter.getSelectors(state => state.categories)

export const selectCategoryStatus = state => state.categories.status
export const selectCategoryError = state => state.categories.error

export default categorySlice.reducer