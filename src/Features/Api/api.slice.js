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
            // like laravel : cache()->put("items-id-{$item->id}")
            providesTags: (items = [], error, arg) => [
                'items',
                // to replace existing items array with this we should use speared operator
                // destruct id from item object
                ...items.map(({id}) => ({type: 'items', id}))
            ]
        }),
        getItem: builder.query({
            query: (id) => `/items/${id}`,
            // arg if id provided above
            providesTags: (item, error, arg) => [
                {
                    type: "items",
                    id: arg,
                }
            ]
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
            invalidatesTags: (item, error, arg) => [
                {
                    type: 'items',
                    id: arg.id,
                }
            ]
        }),
        getUsers: builder.query({
            query: () => "/users",
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