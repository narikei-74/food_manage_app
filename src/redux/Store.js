import { configureStore } from "@reduxjs/toolkit";
import MyRecipeDataSlice from "./MyRecipeDataSlice";
import RecipeDataSlice from "./RecipeDataSlice";

export const Store = configureStore({
  reducer: {
    myRecipeData: MyRecipeDataSlice,
    recipeData: RecipeDataSlice,
  },
});
