import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import ItemApiService from "../../Services/Item/ItemApiService.js";

const itemAdapter = createEntityAdapter(
    {
        sortComparer: (a, b) => b.created_at.localeCompare(a.created_at)
    }
)

export const fetchItems = createAsyncThunk('items/fetchItems', () => ItemApiService.getItems())

const itemSlice = createSlice({
    name: 'items',
    initialState: itemAdapter.getInitialState({
        status: 'idle',
        error: null,
    }),
    reducers: {
        reactionUpdated: (state, action) => {
            const {id, reaction} = action.payload
            const item = state.entities[id]
            if (item) {
                item.reactions[reaction]++
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchItems.pending, (state, _) => {
            state.status = 'pending'
        }).addCase(fetchItems.fulfilled, (state, action) => {
            state.status = 'completed'
            itemAdapter.upsertMany(state, action.payload.data)
        }).addCase(fetchItems.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {
    selectAll: selectItems,
    selectById: selectItem,
    selectIds: selectItemIds,
} = itemAdapter.getSelectors(state => state.items)

export const selectItemStatus = state => state.items.status
export const selectItemError = state => state.items.error

// create memoized selectors for performance optimization
export const selectShopItems = createSelector(
    [selectItems, (_, id) => id],
    (items, id) => items.filter(item => item.shop_id === id)
)

export const {
    reactionUpdated
} = itemSlice.actions

export default itemSlice.reducer