import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://toprate.local/api/v1',
    }),
    endpoints: builder => ({
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
} = apiSlice.endpoints