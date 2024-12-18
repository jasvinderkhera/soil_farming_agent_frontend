import { configureStore } from "@reduxjs/toolkit";
import roleReducer from '../context/roleSlice'


export const store = configureStore({
    reducer:{
        role:roleReducer
    }
})