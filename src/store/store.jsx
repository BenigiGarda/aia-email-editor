import { configureStore } from "@reduxjs/toolkit";
import emailEditorReducer from "./slice/emailEditorSlice";
export const store = configureStore({
  reducer: {
    emailEditor: emailEditorReducer,
  },
});
