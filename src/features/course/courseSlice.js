import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (values, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    try {
       const response = await axios.create(
      "http://localhost:4001/course/createCourse", values, {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
    return response.data
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message)
      return rejectWithValue(error.response.data.msg);
    }
  }
)

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
