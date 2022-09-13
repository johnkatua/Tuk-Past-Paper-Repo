import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const token = cookies.get("token");

const initialState = {
  faculties: [],
  status: 'idle'
};

export const fetchFaculties = createAsyncThunk(
  "faculty/fetchFaculties",
  async () => {
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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFaculties.fulfilled, (state, action) => {
      state.faculties = action.payload.data;
    });
  },
});

export default facultySlice.reducer;

export const getFacultyStatus = state => state.faculty.status;
