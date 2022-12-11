import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import MyRecipeDataSlice from "./MyRecipeDataSlice";
import RecipeDataSlice from "./RecipeDataSlice";

export const Store = configureStore({
  reducer: {
    myRecipeData: MyRecipeDataSlice,
    recipeData: RecipeDataSlice,
  },
});
