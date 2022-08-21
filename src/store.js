import { configureStore } from "@reduxjs/toolkit";
import paperSlice from "./features/paper/paperSlice";

export default configureStore({
  reducer: {
    papers: paperSlice,
  },
});
