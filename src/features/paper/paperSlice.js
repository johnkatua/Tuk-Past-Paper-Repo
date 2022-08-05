import { createSlice } from "@reduxjs/toolkit";

export const paperSlice = createSlice({
  name: 'paper',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  }
});

export const { increment, decrement } = paperSlice.actions;

export default paperSlice.reducer;