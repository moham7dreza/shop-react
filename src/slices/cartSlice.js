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
                // console.log(action.payload)
                // let product = {
                //     ...action.payload,
                //     count: action.payload.count,
                // }
                state.items.push(action.payload)
                toast.success('product added successfully')
            }

            localStorage.setItem('cartItems', JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {

        },
        getTotalAmount: (state, action) => {
            let {total, count} = state.items.reduce(
                // section to how calc
                // accumulator, currentValue
                (cartTotal, cartItem) => {
                    // console.log('cartTotal : ', cartTotal)
                    // console.log('cartItem : ', current(cartItem))
                    const {points, count} = cartItem
                    // console.log('itemPrice : ', points)
                    // console.log('itemCount : ', count)
                    const itemTotalAmount = points * count
                    // console.log('itemTotalAmount : ', itemTotalAmount)
                    cartTotal.total += itemTotalAmount
                    cartTotal.count += count

                    return cartTotal
                },
                // section to how init
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
export const getCartTotalAmount = state => state.cart.amount
export const getCartCount = state => state.cart.count

export const {
    addToCart,
    getTotalAmount,
    removeFromCart,
} = cartSlice.actions

export default cartSlice.reducer