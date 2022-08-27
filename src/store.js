import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import modalSlice from "./features/modal/modalSlice";
import paperSlice from "./features/paper/paperSlice";

export default configureStore({
  reducer: {
    papers: paperSlice,
    modal: modalSlice,
    auth: authSlice
  },
});
