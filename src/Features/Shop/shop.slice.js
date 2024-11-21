import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import ShopApiService from "../../Services/Shop/ShopApiService.js";

const shopAdapter = createEntityAdapter(
    {
        sortComparer: (a, b) => b.created_at.localeCompare(a.created_at)
    }
)

export const fetchShops = createAsyncThunk('shops/fetchShops', () => ShopApiService.getShops())

const shopSlice = createSlice({
    name: 'shops',
    initialState: shopAdapter.getInitialState({
        status: 'idle',
        error: null,
    }),
    extraReducers: builder => {
        builder.addCase(fetchShops.pending, (state, action) => {
            state.status = 'pending'
        }).addCase(fetchShops.fulfilled, (state, action) => {
            state.status = 'completed'
            shopAdapter.upsertMany(state, action.payload.data)
        }).addCase(fetchShops.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {
    selectAll: selectShops,
    selectById: selectShop,
    selectIds: selectShopIds,
} = shopAdapter.getSelectors(state => state.shops)

export const selectShopStatus = state => state.shops.status
export const selectShopError = state => state.shops.error

export default shopSlice.reducer