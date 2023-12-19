// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";

export default configureStore({
  reducer: {
    notes: noteSlice,
  },
});