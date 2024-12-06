import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import config from "../../Config/app.js";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: config.apiUrl,
    }),
    tagTypes: ['shops', 'items', 'banners', 'users', 'categories'],
    endpoints: (builder) => ({
        getShops: builder.query({
            query: () => '/shops',
            providesTags: ['shops']
        }),
        getItems: builder.query({
            query: () => '/items',
            providesTags: ['items']
        }),
        getItem: builder.query({
            query: (id) => `/items/${id}`
        }),
        getBanners: builder.query({
            query: () => '/banners',
            providesTags: ['banners']
        }),
        getCategories: builder.query({
            query: () => '/categories/index',
            providesTags: ['categories']
        }),
        registerNewUserWithMobile: builder.mutation({
            query: (data) => ({
                url: '/auth-plus/register-mobile',
                method: 'POST',
                body: JSON.stringify(data),
            }),
            invalidatesTags: ['users']
        }),
        updateItem: builder.mutation({
            query: (item) => ({
                url: `/items/${item.id}/update`,
                method: 'PUT',
                body: JSON.stringify(item),
            }),
            invalidatesTags: ['items']
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
    useUpdateItemMutation,
} = apiSlice