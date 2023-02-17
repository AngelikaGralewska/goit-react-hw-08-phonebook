import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refresh } from "./api";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [logOut.fulfilled](state) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      },
      [refresh.pending](state) {
        state.isRefreshing = true;
        state.isLoading = true;
        state.error = null;
      },
      [refresh.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      },
      [refresh.rejected](state, action) {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  });

  export const authReducer = authSlice.reducer;