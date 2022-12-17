import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipe = createAsyncThunk("recipe/fetchRecipe", async () => {
  const res = await fetch("http://18.183.189.68:8080/recipedata/get", {
    method: "post",
    body: JSON.stringify({ Offset: 0 }),
  });
  return res.json();
});

const initialState = {
  data: [],
  loader: true,
  error: undefined,
};

export const RecipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    resetError: (state, action) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      if ((action.payload.success = true)) {
        state.data = action.payload.data;
        state.loader = false;
      } else {
        state.error = "レシピ情報を取得できませんでした。";
        state.loader = false;
      }
    });
    builder.addCase(fetchRecipe.rejected, (state, action) => {
      state.error = action.error.message;
      state.loader = false;
    });
  },
});

export const { resetError } = RecipeSlice.actions;
export default RecipeSlice.reducer;
