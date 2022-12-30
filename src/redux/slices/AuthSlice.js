import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isAuthLogin:true

}

export const authSlice = createSlice({
    name: "authslice",
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            state.isAuthLogin = action.payload
            
        },
    },
});

//action
export const { setLogin } = authSlice.actions;

export default authSlice.reducer;