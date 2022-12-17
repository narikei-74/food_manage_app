import { configureStore } from "@reduxjs/toolkit";
import myRecipeReducer from "./MyRecipeSlice";
import RecipeReducer from "./RecipeSlice";

export const Store = configureStore({
  reducer: {
    myRecipe: myRecipeReducer,
    recipe: RecipeReducer,
  },
});
