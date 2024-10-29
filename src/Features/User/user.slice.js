import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import AuthApiService from "../../Services/AuthApiService.js";

export const loginMobileApiCall = createAsyncThunk('users/loginMobile', (data) => AuthApiService.loginMobile(data))
export const registerMobileApiCall = createAsyncThunk('users/registerMobile', (data) => AuthApiService.registerMobile(data))
export const sendCodeApiCall = createAsyncThunk('users/sendCode', () => AuthApiService.sendActivationCode())
export const verifyMobileApiCall = createAsyncThunk('users/verifyMobile', (data) => AuthApiService.verifyMobile(data))
export const loginOtpApiCall = createAsyncThunk('users/loginOtp', (data) => AuthApiService.loginOtp(data))
export const logoutApiCall = createAsyncThunk('users/logout', (data) => AuthApiService.logout(data))


const userSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
    },
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

export const selectUsers = state => state.users.list
export const selectUser = (state, id) => state.users.list.find(user => user.id === Number(id))

export default userSlice.reducer

export const {
    userWasLoggedIn,
    userWasRegistered
} = userSlice.actions