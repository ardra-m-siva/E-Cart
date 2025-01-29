import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartItems",
    initialState: [],
    reducers: {
        addToCart: (state, actionFromComponent) => {
            const existingProduct = state.find(item => item.id == actionFromComponent.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProduct = state.filter(item => item.id != existingProduct.id)
                state = [...remainingProduct, existingProduct]

            } else {
                state.push({ ...actionFromComponent.payload, quantity: 1, totalPrice: actionFromComponent.payload.price })
            }
        },
        incrementQuantity: (state, actionFromCart) => {
            const existingProduct = state.find(item => item.id == actionFromCart.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProduct, existingProduct]

        },
        removeCartItem: (state, actionByCart) => {
            return state.filter(item => item.id != actionByCart.payload)
        },
        // from this place additionally add
        decremenQuantity: (state, actionByCart) => {
            const existingProduct = state.find(item => item.id == actionByCart.payload)
            if (existingProduct?.quantity > 1) {
                existingProduct.quantity--
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProduct = state.filter(item => item.id != existingProduct.id)
                state = [...remainingProduct, existingProduct]
            }else{
                return state.filter(item => item.id != actionByCart.payload)

            }
        },
        emptyCart:()=>[]
    }
})

export const { addToCart, incrementQuantity, removeCartItem, decremenQuantity,emptyCart } = cartSlice.actions
export default cartSlice.reducer