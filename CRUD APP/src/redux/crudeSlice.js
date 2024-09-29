import { createSlice } from "@reduxjs/toolkit";

export const crudeSlice = createSlice({
    name: 'crude',
    initialState: {
        item: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.item.push(action.payload)
        },
        deleteItem: (state,action) => {
            const filterData = state.item.filter((item) => item.id !== action.payload);
            state.item = filterData;
         },
        updateItem: (state,action) => { 
            const updateData = state.item.map((item) => item.id === action.payload.id? action.payload : item);
            state.item = updateData;
        },
    }
})
export const { addItem,deleteItem } = crudeSlice.actions;
export default crudeSlice.reducer;