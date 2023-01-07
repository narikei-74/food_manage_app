import { createSlice } from "@reduxjs/toolkit";
import {
  makeMyRecipeMaterialsData,
  makeNotEnoughFoods,
} from "../utils/function";

const initialState = {
  data: [],
  additionalDate: 1,
  loader: true,
  error: undefined,
};

export const NotEnoughFoodSlice = createSlice({
  name: "notEnoughFood",
  initialState,
  reducers: {
    fetchNotEnoughFood: (state, action) => {
      state.loader = false;

      if (action.payload.myRecipes.length == 0) {
        state.data = [];
        return;
      }

      const myRecipeMaterials = makeMyRecipeMaterialsData(
        action.payload.myRecipes,
        state.additionalDate
      );

      const notEnoughFoods = makeNotEnoughFoods(
        myRecipeMaterials,
        action.payload.foodStock
      );

      state.data = notEnoughFoods;
    },
    editAdditionalDate: (state, action) => {
      state.additionalDate = action.payload;
    },
  },
});

export const { fetchNotEnoughFood, editAdditionalDate } =
  NotEnoughFoodSlice.actions;
export default NotEnoughFoodSlice.reducer;
