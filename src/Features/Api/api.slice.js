import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import config from "../../Config/app.js";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: config.apiUrl,
    }),
    endpoints: (builder) => ({
        getShops: builder.query({
            query: () => '/shops'
        }),
        getItems: builder.query({
            query: () => '/items'
        }),
        getBanners: builder.query({
            query: () => '/banners'
        }),
        getCategories: builder.query({
            query: () => '/categories/index'
        }),
    })
})

export const {
    useGetShopsQuery,
    useGetItemsQuery,
    useGetBannersQuery,
    useGetCategoriesQuery,
} = apiSlice