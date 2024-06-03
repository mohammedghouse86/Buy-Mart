import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
                if (itemIndex !== -1) {
                    state[itemIndex].quantity = state[itemIndex].quantity+1;
                    
                } else {
                    state.push({ ...action.payload, quantity: 1 });
                }
            },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload.id)
        }
        }
    });

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
