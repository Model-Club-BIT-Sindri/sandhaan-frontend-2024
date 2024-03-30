import { createSlice } from "@reduxjs/toolkit";
import userInitialState from "../InitialState/userInitialState";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    updateUserSlice: (state, action) => {
      return { ...state, ...action.payload };
    },
    revertUserSlice: (state, action) => {
      return userInitialState;
    },
  },
});

export const { updateUserSlice, revertUserSlice } = userSlice.actions;

export default userSlice.reducer;
