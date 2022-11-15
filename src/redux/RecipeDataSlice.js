import { createSlice } from "@reduxjs/toolkit";
import GetRecipeDataService from "../services/GetRecipeDataService";

export const RecipeDataSlice = createSlice({
  name: "recipeData",
  initialState: GetRecipeDataService(),
  reducers: {
    setRecipeData: (state, action) => {},
  },
});

export const { setRecipeData } = RecipeDataSlice.actions;
export default RecipeDataSlice.reducer;
