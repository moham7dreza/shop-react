import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import BannerApiService from "../../Services/Banner/BannerApiService.js";

const bannerAdapter = createEntityAdapter(
    {
        sortComparer: (a, b) => b.created_at.localeCompare(a.created_at)
    }
)

export const fetchBanners = createAsyncThunk('banners/fetchBanners', () => BannerApiService.getBanners())

const bannerSlice = createSlice({
    name: 'banners',
    initialState: bannerAdapter.getInitialState({
        status: 'idle',
        error: null,
    }),
    extraReducers: builder => {
        builder.addCase(fetchBanners.pending, (state, _) => {
            state.status = 'pending'
        }).addCase(fetchBanners.fulfilled, (state, action) => {
            state.status = 'completed'
            bannerAdapter.upsertMany(state, action.payload.data)
        }).addCase(fetchBanners.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {
    selectAll: selectBanners,
    selectById: selectBanner,
    selectIds: selectBannerIds,
} = bannerAdapter.getSelectors(state => state.banners)

export const selectBannerStatus = state => state.banners.status
export const selectBannerError = state => state.banners.error

export default bannerSlice.reducer