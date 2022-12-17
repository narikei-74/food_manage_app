import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFood = createAsyncThunk("food/fetchFood", async () => {
  const res = await fetch("http://18.183.189.68:8080/foods/get", {
    method: "post",
  });
  return res.json();
});

const initialState = {
  data: [],
  loader: true,
  error: undefined,
};

export const FoodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFood.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.data = action.payload.data;
        state.loader = false;
      } else {
        state.error = "食材情報を取得できませんでした。";
        state.loader = false;
      }
    });
    builder.addCase(fetchFood.rejected, (state, action) => {
      state.error = action.error.message;
      state.loader = false;
    });
  },
});

export default FoodSlice.reducer;
