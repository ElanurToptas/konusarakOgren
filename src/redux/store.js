import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./store/textSlice";

export const store = configureStore({
  reducer: {
    input: textReducer,
  },
});
