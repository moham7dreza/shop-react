import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import config from "../Config/app.js";
import {useSelector} from "react-redux";

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
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'pending'
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'completed'
            state.items = action.payload.data
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    },
})

export const selectProduct = (state, id) => state.products.items.find(item => item.id === Number(id))
export const selectProducts = (state) => state.products.items
export const selectProductStatus = (state) => state.products.status

export default productSlice.reducer