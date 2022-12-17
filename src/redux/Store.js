import { configureStore } from "@reduxjs/toolkit";
import myRecipeReducer from "./MyRecipeSlice";
import RecipeReducer from "./RecipeSlice";
import CurrentDateReducer from "./CurrentDateSlice";
import CurrentUserReducer from "./UserSlice";
import FoodStockReducer from "./FoodStockSlice";
import FoodReducer from "./FoodSlice";

export const Store = configureStore({
  reducer: {
    myRecipe: myRecipeReducer,
    recipe: RecipeReducer,
    currentDate: CurrentDateReducer,
    currentUser: CurrentUserReducer,
    foodStock: FoodStockReducer,
    food: FoodReducer,
  },
});
