import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartslice';
import productSlice from "./productslice";
const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice
    }
});
export default store;