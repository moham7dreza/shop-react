import {createAsyncThunk, createEntityAdapter, createSelector, createSlice, nanoid} from "@reduxjs/toolkit";
import AuthApiService from "../../Services/AuthApiService.js";
import {apiSlice} from "../Api/api.slice.js";

export const loginMobileApiCall = createAsyncThunk('users/loginMobile', (data) => AuthApiService.loginMobile(data))
export const registerMobileApiCall = createAsyncThunk('users/registerMobile', (data) => AuthApiService.registerMobile(data))
export const sendCodeApiCall = createAsyncThunk('users/sendCode', () => AuthApiService.sendActivationCode())
export const verifyMobileApiCall = createAsyncThunk('users/verifyMobile', (data) => AuthApiService.verifyMobile(data))
export const loginOtpApiCall = createAsyncThunk('users/loginOtp', (data) => AuthApiService.loginOtp(data))
export const logoutApiCall = createAsyncThunk('users/logout', (data) => AuthApiService.logout(data))

const userAdapter = createEntityAdapter()
const initialState = userAdapter.getInitialState()

// api injection to main api in another file
export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "/users",
            // directly cache users data with return it
            transformResponse: users => {
                return userAdapter.setAll(initialState, users)
            },
            invalidatesTags: ["users"]
        }),
        storeUser: builder.mutation({
            query: user => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
            // we transformed response and use entity adapter
            // so we can not define tag id pairs for each id
            invalidatesTags: ["users"]
        }),
        deleteUser: builder.mutation({
            query: id => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["users"]
        }),
    })
})

export const selectUsersResult = extendedApiSlice.endpoints.getUsers.select(undefined)

// we can use it in extraReducers
const {
    matchFulfilled,
    matchPending,
    matchRejected,
} = extendedApiSlice.endpoints.getUsers

// create memoized selector that gets data from cache
export const selectUsersData = createSelector(
    selectUsersResult,
    users => users?.data ?? [],
)
//
// export const selectUser = createSelector(
//     selectUsers, (state, id) => id,
//     (users, id) => users.find(user => user.id === id)
// )

export const {
    useGetUsersQuery,
    useStoreUserMutation,
    useDeleteUserMutation,
} = extendedApiSlice

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        userWasLoggedIn: (state, action) => {

        },
        userWasRegistered: {
            reducer(state, action) {
                state.list.push(action.payload)
            },
            prepare(email, password) {
                return {
                    payload: {
                        id: nanoid(),
                        email: email,
                        password: password,
                    }
                }
            },
        },
    },
    extraReducers: builder => {
        builder.addCase(loginMobileApiCall.fulfilled, (state, action) => {
            console.log(action.payload)
        }).addCase(registerMobileApiCall.fulfilled, (state, action) => {
            console.log(action.payload)
        }).addCase(sendCodeApiCall.fulfilled, (state, action) => {
            console.log(action.payload)
        }).addCase(verifyMobileApiCall.fulfilled, (state, action) => {
            console.log(action.payload)
        }).addCase(loginOtpApiCall.fulfilled, (state, action) => {
            console.log(action.payload)
        }).addCase(logoutApiCall.fulfilled, (state, action) => {
            state.list = state.list.filter(user => user.id !== action.payload)
        })
        // update reducer sample
        // .addCase(logoutApiCall.fulfilled, (state, action) => {
        //     const {id} = action.payload
        //     const index = state.list.findIndex(user => user.id === id)
        //     state.list[index] = action.payload
        // })
    }
})

// export const selectUsers = state => state.users.list
// export const selectUser = (state, id) => state.users.list.find(user => user.id === Number(id))

export const {
    selectAll: selectUsers,
    selectById: selectUser,
} = userAdapter.getSelectors(state => selectUsersData(state) ?? initialState)

export default userSlice.reducer

export const {
    userWasLoggedIn,
    userWasRegistered
} = userSlice.actions