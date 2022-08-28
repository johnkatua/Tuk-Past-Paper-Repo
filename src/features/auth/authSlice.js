import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { client } from "../../api/client";

const cookies = new Cookies();

const initialState = {
  auth: {},
};

export const userLogin = createAsyncThunk("auth/userLogin", async (values) => {
  const response = await client.post("http://localhost:4001/login", values);
  cookies.set('token', response.data.token, { path: '/' });
  return response.data;
});

export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async (values) => {
    const response = await client.post("http://localhost:4001/signup", values);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers(builder) {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
  },
});

export default authSlice.reducer;
