import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        status: 'idle',
        items: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        error: null,
        count: 0,
        amount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            // product exists in cart items and only increase count
            if (index >= 0) {
                state.items[index] = {
                    ...state.items[index],
                    count: state.items[index].count++
                }
                toast.info('product count increased')
            } else {
                let product = {
                    ...action.payload,
                    count: action.payload.count,
                }
                state.items.push(product)
                toast.success('product added successfully')
            }

            localStorage.setItem('cartItems', JSON.stringify(state.items))
        },
        getTotalAmount: (state, action) => {
            let {total, count} = state.items.reduce(
                (cartTotal, cartItem) => {
                    const {itemPrice, itemCount} = cartItem
                    const itemTotalAmount = itemPrice * itemCount

                    cartTotal.total += itemTotalAmount
                    cartTotal.count += itemCount

                    return cartTotal
                },
                {
                    total: 0,
                    count: 0,
                }
            )

            total = parseFloat(total.toFixed(2))

            state.amount = total
            state.count = count
        }
    }
})

export const getCartItems = state => state.cart.items

export const {
    addToCart,
    getTotalAmount
} = cartSlice.actions

export default cartSlice.reducer