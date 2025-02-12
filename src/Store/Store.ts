import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/authSlice.js'

export const store = configureStore({
    reducer : {
        auth : authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;