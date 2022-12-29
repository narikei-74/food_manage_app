import { createSlice } from "@reduxjs/toolkit";
import {
  makeMyRecipeMaterialsData,
  makeNotEnoughFoods,
} from "../utils/function";

const initialState = {
  data: [],
  loader: true,
  error: undefined,
};

export const NotEnoughFoodSlice = createSlice({
  name: "notEnoughFood",
  initialState,
  reducers: {
    fetchNotEnoughFood: (state, action) => {
      if (action.payload.myRecipes.length == 0) {
        state.data = [];
        return;
      }

      const myRecipeMaterials = makeMyRecipeMaterialsData(
        action.payload.myRecipes,
        action.payload.additionalDate
      );

      const notEnoughFoods = makeNotEnoughFoods(
        myRecipeMaterials,
        action.payload.foodStock
      );

      state.data = notEnoughFoods;
    },
  },
});

export const { fetchNotEnoughFood } = NotEnoughFoodSlice.actions;
export default NotEnoughFoodSlice.reducer;
