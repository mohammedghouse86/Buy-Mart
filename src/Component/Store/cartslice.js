import { createSlice } from "@reduxjs/toolkit";
let totalQty1 = 0;
const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    totalQty1,
    reducers: {
        add(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                state[itemIndex].quantity = state[itemIndex].quantity + 1;

            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload.id)
        },
        add_qty(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            state[itemIndex].quantity = state[itemIndex].quantity + 1;
        },
        del_qty(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            state[itemIndex].quantity = state[itemIndex].quantity - 1;
        }

    },

});

// Selector to calculate the grand total
export const selectGrandTotal = (state) => {
    return state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
};


export const { add, remove, add_qty, del_qty } = cartSlice.actions;
export default cartSlice.reducer;
