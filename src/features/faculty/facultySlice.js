import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  faculties: [],
  faculty: {},
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
      const { id } = action.payload;
      state.faculty = state.faculties.find((faculty) => faculty._id === id);
      console.log(state.faculty);
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

export const selectFacultyById = (state, id) => {
  return state.faculties.find((faculty) => faculty._id === id);
}
