import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import config from "../Config/app.js";

// async function fetchData() {
//     const [fetchError, response] ?= await axios.get(`${config.apiUrl}/items`);
//     if (fetchError) {
//         console.error(fetchError)
//         return;
//     }
//     const [jsonError, $jsonData] ?= await response.data;
//     if (jsonError) {
//         console.error(jsonError)
//         return;
//     }
//     return $jsonData;
// }

const initialState = {
    items: [],
    status: 'idle',
    error: null,
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const response = await axios.get(`${config.apiUrl}/items`)
            return response.data
        } catch (e) {
            console.error(e)
        }
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'pending'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})

export default productSlice.reducer