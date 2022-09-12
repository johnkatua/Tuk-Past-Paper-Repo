import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const token = cookie.get('token');

const initialState = {
  courses: [],
};

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get('http://localhost:4001/course/getAllCourses', {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  return response.data
})

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = action.payload.data;
    })
  },
});

export default courseSlice.reducer;