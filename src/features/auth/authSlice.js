import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import axios from "axios";
import {
  validateRegisterUser,
  validateLoginUser,
} from "../../helpers/validation";

const cookies = new Cookies();

const initialState = {
  auth: {},
  user: null,
  token: null,
  status: "idle",
  error: null,
};

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (values, { rejectWithValue }) => {
    try {
      await validateLoginUser(values);
      const response = await axios.post("http://localhost:4001/login", values);
      cookies.set("token", response.data.accessToken, { path: "/" });
      cookies.set("user", response.data.data.email, { path: "/" });
      return response.data;
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async (values, { rejectWithValue }) => {
    try {
      await validateRegisterUser(values);
      const response = await axios.post("http://localhost:4001/signup", values);
      cookies.set("token", response.data.accessToken, { path: "/" });
      cookies.set("user", response.data.data.email, { path: "/" });
      return response.data;
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(userLogin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.auth = action.payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
    builder.addCase(userRegister.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
