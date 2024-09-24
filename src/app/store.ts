import { configureStore } from "@reduxjs/toolkit";
import { docsReducer } from "../features/docs/docsSlice";

export const store = configureStore({
  reducer: {
    // multiple reducers can go here
    docs: docsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
