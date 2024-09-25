import {configureStore} from "@reduxjs/toolkit"
import Crude from "./crudeSlice.js"

export const store = configureStore({
    reducer: {
        crudeData:Crude
    }, 
})