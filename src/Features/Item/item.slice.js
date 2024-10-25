import {createSlice} from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        list: [
            {
                id: 1,
                title: 'sadsa',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores delectus ducimus enim, eum expedita nesciunt odio quia. Itaque, magnam!',
                user_image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
                user: 'name',
                created_at: new Date().toISOString(),
                image: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            }
        ],
    },
    reducers: {}
})

export const selectItems = state => state.items.list
export const selectItem = (state, id) => state.items.list.find(item => item.id === Number(id))

export default itemSlice.reducer