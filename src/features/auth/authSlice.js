import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

const initialState = {
  auth: {}
};

export const userLogin = createAsyncThunk('auth/userLogin', async (values) => {
  const response = await client.post("http://localhost:4001/login", values);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers(builder) {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.auth = action.payload;
    })
  }
});

export default authSlice.reducer;