import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postUserAuth } from "../../api/postApi";

export const fetchAuth = createAsyncThunk('authorization/fetchAuth', async (params) => {
const { data } = await postUserAuth(params)
return data;
});

const initialState = {
    data: null,
    status: 'loading',
}

const authSlice = createSlice({
    name: "auth",
    initialState, 
    redusers: {
      logout: (state) => {
        state.data = null;
      }
    },   
    extraReducers: {
      [fetchAuth.pending]: (state) => {
        state.status = "loading";
        state.data = null;
      },
      [fetchAuth.fulfilled]: (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      },
      [fetchAuth.rejected]: (state) => {
        state.status = "error";
        state.data = null;
      },
    },
  });
  
  export const selectIsAuth = (state) => Boolean(state.auth.data);

  export const authReducer = authSlice.reducer;

  export const {logout} = authSlice.actions;