import { configureStore } from "@reduxjs/toolkit";
import myRecipeReducer from "./MyRecipeSlice";
import RecipeReducer from "./RecipeSlice";
import CurrentDateReducer from "./CurrentDateSlice";
import CurrentUserReducer from "./UserSlice";

export const Store = configureStore({
  reducer: {
    myRecipe: myRecipeReducer,
    recipe: RecipeReducer,
    currentDate: CurrentDateReducer,
    currentUser: CurrentUserReducer,
  },
});
