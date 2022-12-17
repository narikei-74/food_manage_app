import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMyRecipe = createAsyncThunk(
  "myRecipe/fetchMyRecipe",
  async (userId) => {
    const res = await fetch("http://18.183.189.68:8080/myrecipedata/get", {
      method: "post",
      body: JSON.stringify({ UserID: userId }),
    });
    return res.json();
  }
);

const initialState = {
  data: [],
  loader: true,
  error: undefined,
};

export const MyRecipeSlice = createSlice({
  name: "myRecipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMyRecipe.fulfilled, (state, action) => {
      if ((action.payload.success = true)) {
        state.data = action.payload.data;
        state.loader = false;
      } else {
        state.error = "レシピ情報を取得できませんでした。";
        state.loader = false;
      }
    });
    builder.addCase(fetchMyRecipe.rejected, (state, action) => {
      state.error = action.error.message;
      state.loader = false;
    });
  },
});

export default MyRecipeSlice.reducer;
