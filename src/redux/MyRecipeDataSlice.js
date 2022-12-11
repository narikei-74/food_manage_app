import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import GetMyRecipeDataService from "../services/GetMyRecipeDataService";

export const MyRecipeDataSlice = createSlice({
  name: "myRecipeData",
  initialState: GetMyRecipeDataService(),
  reducers: {
    setMyRecipeData: (state, action) => {},
  },
});

export const { setMyRecipeData } = MyRecipeDataSlice.actions;
export default MyRecipeDataSlice.reducer;
