import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import {
  validateRegisterUser,
  validateLoginUser,
} from "../../helpers/validation";

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
      localStorage.setItem('token', response.data.accessToken);
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
      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get("http://localhost:4001/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }
)

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
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.user = action.payload.data;
    })
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
