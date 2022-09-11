import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  faculties: []
};

export const facultySlice = createSlice({
  name: 'faculty',
  initialState,
  reducers: {},
  extraReducers: {}
});

export default facultySlice.reducer;