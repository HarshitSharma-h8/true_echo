import { createSlice } from "@reduxjs/toolkit";

export interface authState {
    isAuthenticated : boolean,
    userData : object | null
}

const initialState : authState = {
    isAuthenticated : true,
    userData : null
}


const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) =>{
            state.isAuthenticated = true;
            state.userData = action.payload.userData;
        },
        logout : (state)=>{
            state.isAuthenticated  = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
