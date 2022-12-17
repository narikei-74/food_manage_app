import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// dbからマイレシピを取得しストアに保存
export const fetchFoodStock = createAsyncThunk(
  "foodStock/fetchFoodStock",
  async (userId) => {
    const res = await fetch("http://18.183.189.68:8080/food_stock/get", {
      method: "post",
      body: JSON.stringify({ UserID: userId }),
    });
    return res.json();
  }
);

// dbに新規残り食材を保存
export const saveFoodStockIntoDB = createAsyncThunk(
  "foodStock/addFoodStockIntoDB",
  async (saveData) => {
    const res = await fetch("http://18.183.189.68:8080/food_stock/save", {
      method: "post",
      body: JSON.stringify(saveData),
    });
    return res.json();
  }
);

// 初期状態
const initialState = {
  data: [],
  isApiConnected: false,
  loader: true,
  error: undefined,
};

export const FoodStockSlice = createSlice({
  name: "foodStock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchFoodStock
    builder.addCase(fetchFoodStock.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.data = action.payload.data;
        state.loader = false;
      } else {
        state.error = "残り食材情報を取得できませんでした。";
        state.loader = false;
      }
    });
    builder.addCase(fetchFoodStock.rejected, (state, action) => {
      state.error = action.error.message;
      state.loader = false;
    });
    // saveFoodStockIntoDB
    builder.addCase(saveFoodStockIntoDB.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.isApiConnected = true;
      } else {
        state.error = "残り食材の保存に失敗しました。";
      }
    });
    builder.addCase(saveFoodStockIntoDB.rejected, (state, action) => {
      state.error = "残り食材の保存に失敗しました。";
    });
  },
});

export default FoodStockSlice.reducer;
