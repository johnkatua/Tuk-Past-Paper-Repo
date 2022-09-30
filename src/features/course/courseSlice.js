import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { validateCourseDetails } from "../../helpers/validation";
import { updatePaper } from "../paper/paperSlice";

const initialState = {
  courses: [],
  course: null,
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

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ id, values }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:4001/course/updateCourse/${id}`, values, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      toast.success(response.data.msg);
      return { id, values: response.data.data }
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
  }
)

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async(id, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.delete(
        `http://localhost:4001/course/deleteCourse/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`
          },
        }
      );
      toast.success(response.data.msg);
      return id;
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
  }
)


export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    resetCourse: (state) => {
      state.course = null;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = action.payload.data;
    });
    builder.addCase(createCourse.fulfilled, (state, action) => {
      console.log('action');
      state.courses.push(action.payload.data);
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(updateCourse.fulfilled, (state, action) => {
      state.courses = state.courses.map((course) => course._id === action.payload.id ? action.payload.values : course);
    });
    builder.addCase(updateCourse.rejected, (state, action) => {
      state.error = action.payload;
    })
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      console.log('action deleted');
      state.courses = state.courses.filter((course) => course._id !== action.payload);
    });
    builder.addCase(deleteCourse.rejected, (state, action) => {
      state.error = action.payload;
    })
  },
});

export default courseSlice.reducer;

export const { setCourse, resetCourse } = courseSlice.actions;

export const getCourseStatus = (state) => state.courses.status;
