import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counterslice";

export const store = configureStore({
  reducer: {
    todolist: counterReducer
  }
});