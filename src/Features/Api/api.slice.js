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
        getItem: builder.query({
            query: (id) => `/items/${id}`
        }),
        getBanners: builder.query({
            query: () => '/banners'
        }),
        getCategories: builder.query({
            query: () => '/categories/index'
        }),
        registerNewUserWithMobile: builder.mutation({
            query: (data) => ({
                url: '/auth-plus/register-mobile',
                method: 'POST',
                body: JSON.stringify(data),
            }),
            invalidatesTags: ['shops', 'items', 'banners']
        })
    })
})

export const {
    useGetShopsQuery,
    useGetItemsQuery,
    useGetItemQuery,
    useGetBannersQuery,
    useGetCategoriesQuery,
    useRegisterNewUserWithMobileMutation,
} = apiSlice