import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  faculties: [],
  faculty: null,
  status: "idle",
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

export const facultySlice = createSlice({
  name: "faculty",
  initialState,
  reducers: {
    getSelectedFaculty: (state, action) => {
      state.faculty = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchFaculties.fulfilled, (state, action) => {
      state.faculties = action.payload.data;
    });
  },
});

export default facultySlice.reducer;

export const getFacultyStatus = (state) => state.faculty.status;

export const { getSelectedFaculty } = facultySlice.actions;
