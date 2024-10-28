import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "../Features/Item/item.slice.js"
import userReducer from "../Features/User/user.slice.js"
import bannerReducer from "../Features/Banner/banner.slice.js"
import categoryReducer from "../Features/Item/category.slice.js"

export const store = configureStore({
    reducer: {
        items: itemReducer,
        users: userReducer,
        banners: bannerReducer,
        categories: categoryReducer,
    }
})