import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showToolTip: false,
};

export const toolTipSlice = createSlice({
  name: "toolTip",
  initialState,
  reducers: {
    openToolTip: (state) => {
      state.showToolTip = true;
    },
    closeToolTip: (state) => {
      state.showToolTip = false;
    },
  },
});

export const { openToolTip, closeToolTip } = toolTipSlice.actions;

export default toolTipSlice.reducer;
