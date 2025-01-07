import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import config from "../../Config/app.js";

export const productApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: config.apiUrl
    }),
    tagTypes: [
        'products',
    ],
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/items',
            transformResponse: (response) => response.data,
            providesTags: (result = [], error, arg) => [
                'products',
                ...result.map(({ id }) => ({ type: 'products', id })),
            ],
        })
    })
})

export const {
    useGetProductsQuery,
} = productApi