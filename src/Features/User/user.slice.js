import {createSlice} from "@reduxjs/toolkit";

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
            }
        },
    }
})

export const selectUsers = state => state.users.list
export const selectItem = (state, id) => state.users.list.find(user => user.id === Number(id))

export default userSlice.reducer

export const {
    userWasLoggedIn,
    userWasRegistered
} = userSlice.actions