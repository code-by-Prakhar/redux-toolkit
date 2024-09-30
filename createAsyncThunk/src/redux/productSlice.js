import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
})

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isLoading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            console.log("Error fetching products");
            state.isLoading = false;
        })
    }
})

export default productSlice.reducer;