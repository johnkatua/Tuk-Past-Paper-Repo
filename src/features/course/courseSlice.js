import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { validateCourseDetails } from "../../helpers/validation";

const initialState = {
  courses: [],
  status: "idle",
  error: null,
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
    const token = localStorage.getItem("token");
    try {
      await validateCourseDetails(values);
      const response = await axios.post(
        "http://localhost:4001/course/createCourse",
        values,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.msg);
      return response.data;
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
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
    builder.addCase(createCourse.fulfilled, (state, action) => {
      state.courses.push(action.payload.data);
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default courseSlice.reducer;

export const getCourseStatus = (state) => state.courses.status;
