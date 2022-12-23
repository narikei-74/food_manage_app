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

// dbに残り食材を追加
export const addFoodStockIntoDB = createAsyncThunk(
  "foodStock/addFoodStockIntoDB",
  async (addData) => {
    const res = await fetch("http://18.183.189.68:8080/food_stock/add", {
      method: "post",
      body: JSON.stringify(addData),
    });
    return res.json();
  }
);

// dbの残り食材を更新
export const updateFoodStockIntoDB = createAsyncThunk(
  "foodStock/updateFoodStockIntoDB",
  async (updateData) => {
    const requestData = { Updates: updateData };
    const res = await fetch("http://18.183.189.68:8080/food_stock/update", {
      method: "post",
      body: JSON.stringify(requestData),
    });
    return res.json();
  }
);

export const deleteFoodStockFromDB = createAsyncThunk(
  "foodStock/deleteFoodStockFromDB",
  async (foodIDs) => {
    requestData = { Data: foodIDs };
    const res = await fetch("http://18.183.189.68:8080/food_stock/delete", {
      method: "post",
      body: JSON.stringify(requestData),
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
  reducers: {
    resetIsApiConnected: (state) => {
      state.isApiConnected = false;
    },
    resetError: (state) => {
      state.error = undefined;
    },
  },
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
    builder.addCase(addFoodStockIntoDB.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.isApiConnected = true;
      } else {
        state.error = "残り食材の登録に失敗しました。";
      }
    });
    builder.addCase(addFoodStockIntoDB.rejected, (state, action) => {
      state.error = "残り食材の登録に失敗しました。";
    });
    builder.addCase(updateFoodStockIntoDB.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.isApiConnected = true;
        return "食材を保存しました。";
      } else {
        state.error = "残り食材の更新に失敗しました。";
      }
    });
    builder.addCase(updateFoodStockIntoDB.rejected, (state, action) => {
      console.log(action.payload);
      state.error = "残り食材の更新に失敗しました。";
    });
    builder.addCase(deleteFoodStockFromDB.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.isApiConnected = true;
      } else {
        state.error = "残り食材の削除に失敗しました。";
      }
    });
    builder.addCase(deleteFoodStockFromDB.rejected, (state, action) => {
      state.error = "残り食材の削除に失敗しました。";
    });
  },
});

export const { resetIsApiConnected, resetError } = FoodStockSlice.actions;
export default FoodStockSlice.reducer;
