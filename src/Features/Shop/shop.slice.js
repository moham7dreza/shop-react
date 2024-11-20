import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import ShopApiService from "../../Services/Shop/ShopApiService.js";

export const fetchShops = createAsyncThunk('shops/fetchShops', () => ShopApiService.getShops())

const shopSlice = createSlice({
    name: 'shops',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchShops.pending, (state, action) => {
            state.status = 'pending'
        }).addCase(fetchShops.fulfilled, (state, action) => {
            state.status = 'completed'
            state.list = action.payload.data
        }).addCase(fetchShops.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const selectShops = state => state.shops.list
export const selectShop = (state, id) => state.shops.list.find(shop => shop.id === Number(id))
export const selectShopStatus = state => state.shops.status
export const selectShopError = state => state.shops.error
// create memoized selectors for performance optimization
export const selectShopItems = createSelector(
    [selectShops, (_, id) => id],
    (items, id) => items.filter(item => item.shop_id === id)
)

export default shopSlice.reducer