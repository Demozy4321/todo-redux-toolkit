import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import todoSlice from "./reducers/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
