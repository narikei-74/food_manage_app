import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// dbからマイレシピを取得しストアに保存
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

// dbに新規マイレシピを保存
export const addMyRecipeIntoDB = createAsyncThunk(
  "myRecipe/addMyRecipeIntoDB",
  async (addData) => {
    const res = await fetch("http://18.183.189.68:8080/myrecipedata/create", {
      method: "post",
      body: JSON.stringify(addData),
    });
    return res.json();
  }
);

// dbのマイレシピを更新
export const updateMyRecipeIntoDB = createAsyncThunk(
  "myRecipe/updateMyRecipeIntoDB",
  async (updateData) => {
    const res = await fetch("http://18.183.189.68:8080/myrecipedata/update", {
      method: "post",
      body: JSON.stringify(updateData),
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

export const MyRecipeSlice = createSlice({
  name: "myRecipe",
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
    // fetchMyRecipe
    builder.addCase(fetchMyRecipe.fulfilled, (state, action) => {
      if (action.payload.success === true) {
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
    // addMyRecipeIntoDB
    builder.addCase(addMyRecipeIntoDB.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.isApiConnected = true;
      } else {
        state.error = "マイレシピの保存に失敗しました。";
      }
    });
    builder.addCase(addMyRecipeIntoDB.rejected, (state, action) => {
      state.error = "マイレシピの保存に失敗しました。";
    });
    // updateMyRecipeIntoDB
    builder.addCase(updateMyRecipeIntoDB.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.isApiConnected = true;
      } else {
        state.error = "マイレシピの更新に失敗しました。";
      }
    });
    builder.addCase(updateMyRecipeIntoDB.rejected, (state, action) => {
      state.error = "マイレシピの更新に失敗しました。";
    });
  },
});

export const { resetIsApiConnected, resetError } = MyRecipeSlice.actions;
export default MyRecipeSlice.reducer;
