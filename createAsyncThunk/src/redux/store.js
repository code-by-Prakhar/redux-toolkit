import { configureStore } from "@reduxjs/toolkit";
import Product from "./productSlice"

export const store = configureStore({
    reducer:{
        product:Product
    }
})