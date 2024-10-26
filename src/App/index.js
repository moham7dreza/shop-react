import {configureStore} from "@reduxjs/toolkit";
import itemReducer, {fetchItems} from "../Features/Item/item.slice.js"
import userReducer from "../Features/User/user.slice.js"

export const store = configureStore({
    reducer: {
        items: itemReducer,
        users: userReducer,
    }
})

store.dispatch(fetchItems())