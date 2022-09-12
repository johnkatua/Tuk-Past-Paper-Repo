import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import facultySlice from "./features/faculty/facultySlice";
import favSlice from "./features/favorite/favoriteSlice";
import modalSlice from "./features/modal/modalSlice";
import paperSlice from "./features/paper/paperSlice";
import toolTipSlice from "./features/tooltip/toolTip";

export default configureStore({
  reducer: {
    papers: paperSlice,
    modal: modalSlice,
    auth: authSlice,
    toolTip: toolTipSlice,
    favPapers: favSlice,
    faculty: facultySlice,
  },
});
