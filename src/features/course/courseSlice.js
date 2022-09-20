import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  courses: [],
  status: "idle",
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "http://localhost:4001/course/getAllCourses",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = action.payload.data;
    });
  },
});

export default courseSlice.reducer;

export const getCourseStatus = (state) => state.courses.status;
