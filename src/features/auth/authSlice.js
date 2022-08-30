import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { client } from "../../api/client";
import axios from "axios";

const cookies = new Cookies();

const initialState = {
  auth: {},
  user: null,
  token: null,
  status: "idle",
  error: null,
};

// export const userLogin = createAsyncThunk("auth/userLogin", async (values) => {
//   const response = await axios.post("http://localhost:4001/login", values);
//   cookies.set("token", response.data.accessToken, { path: "/" });
//   cookies.set("user", response.data.data.email, { path: "/" });
//   console.log(response.data);
//   return response.data;
// });

// when getting data you need to spread it [...response.data]

export const userLogin = createAsyncThunk("auth/userLogin", async (values, { rejectWithValue }) => {
  console.log(values);
  try {
    const response = await axios.post("http://localhost:4001/login",  values);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return rejectWithValue(error.response.data.msg);
  }
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
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
