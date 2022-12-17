import { createSlice } from "@reduxjs/toolkit";
import { getDateString } from "../utils/function";

const initialState = {
  currentDate: getDateString(),
};

export const CurrentDateSlice = createSlice({
  name: "currentDate",
  initialState,
  reducers: {
    editCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
  },
});

export const { editCurrentDate } = CurrentDateSlice.actions;
export default CurrentDateSlice.reducer;
