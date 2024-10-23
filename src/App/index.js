import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "../Features/Item/item.slice.js"

export const store = configureStore({
    reducer: {
        items: itemReducer
    }
})