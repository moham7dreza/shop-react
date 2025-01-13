import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "../Features/Item/item.slice.js"
import userReducer from "../Features/User/user.slice.js"
import bannerReducer from "../Features/Banner/banner.slice.js"
import categoryReducer from "../Features/Item/category.slice.js"
import shopReducer from "../Features/Shop/shop.slice.js"
import productReducer, {fetchProducts} from "../slices/productSlice.js"
import cartReducer, {getTotalAmount, populateCartItems} from "../slices/cartSlice.js"
import {productApi} from "../Features/Api/productApi.js";

export const store = configureStore({
    reducer: {
        items: itemReducer,
        users: userReducer,
        banners: bannerReducer,
        categories: categoryReducer,
        shops: shopReducer,
        products: productReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware)
})

store.dispatch(populateCartItems())
// store.dispatch(fetchProducts())
store.dispatch(productApi.endpoints.getProducts.initiate())
store.dispatch(getTotalAmount())