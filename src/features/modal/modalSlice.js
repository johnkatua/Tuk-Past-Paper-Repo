import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  showModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.show = true;
    },
    closeModal: (state) => {
      state.show = false
    },
    openReusableModal: state => {
      state.showModal = true
    },
    closeReusableModal: state => {
      state.showModal = false;
    }
  },
});

export const { openModal, closeModal, openReusableModal,closeReusableModal } = modalSlice.actions;

export default modalSlice.reducer;
