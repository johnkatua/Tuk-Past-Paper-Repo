import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
}

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default courseSlice.reducer;