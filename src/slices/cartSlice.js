import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const cartAdapter = createEntityAdapter()

const initialState = cartAdapter.getInitialState({
    status: 'idle',
    error: null,
    count: 0,
    amount: 0,
})

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // initialState:
    //     {
    //         status: 'idle',
    //         items: localStorage.getItem('cartItems')
    //             ? JSON.parse(localStorage.getItem('cartItems'))
    //             : [],
    //         error: null,
    //         count: 0,
    //         amount: 0,
    //     },
    reducers: {
        populateCartItems: (state, action) => {
            const cartItems = localStorage.getItem('cartItems')
            if (cartItems) {
                cartAdapter.setAll(state, JSON.parse(cartItems))
            }
        },
        addToCart: (state, action) => {
            const productExist = state.entities[action.payload.id]

            if (productExist) {
                productExist.count += 1
                toast.info('product count increased')
            } else {
                cartAdapter.addOne(state, action.payload)
                toast.success('product added successfully')
            }

            /*const index = state.items.findIndex(item => item.id === action.payload.id)
            // product exists in cart items and only increase count
            if (index >= 0) {
                state.items[index] = {
                    ...state.items[index],
                    count: state.items[index].count += 1
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

            localStorage.setItem('cartItems', JSON.stringify(state.items))*/

            localStorage.setItem('cartItems', JSON.stringify(state.entities))
        },
        decreaseCount: (state, action) => {
            const product = state.entities[action.payload.id]

            if (product.count > 1) {
                product.count -= 1
                toast.info('product count decreased')
            } else if (product.count === 1) {
                cartAdapter.removeOne(state, action.payload.id)
                toast.error('product removed from cart')
            }

            localStorage.setItem('cartItems', JSON.stringify(state.items))


            /*const index = state.items.findIndex(item => item.id === action.payload.id)

            const count = state.items[index].count

            if (count > 1) {
                state.items[index].count--
                toast.info('product count decreased')
            } else if (count === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id)
                toast.error('product removed from cart')
            }

            localStorage.setItem('cartItems', JSON.stringify(state.items))*/
        },
        removeFromCart: (state, action) => {
            cartAdapter.removeOne(state, action.payload.id)

            // state.items = state.items.filter(item => item.id !== action.payload.id)
            toast.error('product removed from cart')
            // localStorage.setItem('cartItems', JSON.stringify(state.items))
            localStorage.setItem('cartItems', JSON.stringify(state.entities))
        },
        getTotalAmount: (state, action) => {
            // let {total, count} = state.items.reduce(
            let {total, count} = Object.values(state.entities).reduce(
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

            // total = parseFloat(total.toFixed(2))

            state.amount = total
            state.count = count
        }
    }
})

// export const getCartItems = state => state.cart.items
export const getCartTotalAmount = state => state.cart.amount
export const getCartCount = state => state.cart.count

export const {
    selectAll: getCartItems,
} = cartAdapter.getSelectors(state => state.cart)

export const {
    populateCartItems,
    addToCart,
    getTotalAmount,
    decreaseCount,
    removeFromCart,
} = cartSlice.actions

export default cartSlice.reducer