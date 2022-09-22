import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  faculties: [],
  faculty: null,
  status: "idle",
  error: null,
};

export const fetchFaculties = createAsyncThunk(
  "faculty/fetchFaculties",
  async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "http://localhost:4001/faculty/getAllFaculties",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const createFaculty = createAsyncThunk(
  "faculty/createFaculty",
  async (values, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post("http://localhost:4001/faculty/createFaculty", values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
  }
)

export const facultySlice = createSlice({
  name: "faculty",
  initialState,
  reducers: {
    getSelectedFaculty: (state, action) => {
      state.faculty = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchFaculties.fulfilled, (state, action) => {
      state.faculties = action.payload.data;
    });
    builder.addCase(createFaculty.fulfilled, (state, action) => {
      state.faculties.push(action.payload.data)
    });
    builder.addCase(createFaculty.rejected, (state, action) => {
      state.error = action.payload
    })
  },
});

export default facultySlice.reducer;

export const getFacultyStatus = (state) => state.faculty.status;

export const { getSelectedFaculty } = facultySlice.actions;
