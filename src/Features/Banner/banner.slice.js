import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import BannerApiService from "../../Services/Banner/BannerApiService.js";

export const fetchBanners = createAsyncThunk('banners/fetchBanners', () => BannerApiService.getBanners())

const bannerSlice = createSlice({
    name: 'banners',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchBanners.pending, (state, action) => {
            state.status = 'pending'
        }).addCase(fetchBanners.fulfilled, (state, action) => {
            state.status = 'completed'
            state.list = action.payload.data
        }).addCase(fetchBanners.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const selectBanners = state => state.banners.list
export const selectBanner = (state, id) => state.banners.list.find(banner => banner.id === Number(id))
export const selectBannerStatus = state => state.banners.status
export const selectBannerError = state => state.banners.error

export default bannerSlice.reducer