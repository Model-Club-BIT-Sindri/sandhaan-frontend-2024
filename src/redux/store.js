import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlices";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
