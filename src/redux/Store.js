import { configureStore } from "@reduxjs/toolkit";
import myRecipeReducer from "./MyRecipeSlice";
import RecipeReducer from "./RecipeSlice";
import CurrentDateReducer from "./CurrentDateSlice";

export const Store = configureStore({
  reducer: {
    myRecipe: myRecipeReducer,
    recipe: RecipeReducer,
    currentDate: CurrentDateReducer,
  },
});
