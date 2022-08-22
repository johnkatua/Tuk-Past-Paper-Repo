import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.show = true
    },
    closeModal: state => {
      state.show = false
    }
  }
});