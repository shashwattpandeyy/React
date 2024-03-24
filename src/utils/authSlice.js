import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState:{
    token: {}
  },
  reducers: {
    updateAuth: (state, action)=> {
      state.token = action.payload;
    }
  }
})

export const { updateAuth } = authSlice.actions;

export default authSlice.reducer;