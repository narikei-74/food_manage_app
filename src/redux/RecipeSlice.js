import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipe = createAsyncThunk(
  "recipe/fetchRecipe",
  async (offset) => {
    const res = await fetch("http://18.183.189.68:8080/recipedata/get", {
      method: "post",
      body: JSON.stringify({ Offset: offset }),
    });
    return res.json();
  }
);

export const fetchAddRecipe = createAsyncThunk(
  "recipe/fetchAddRecipe",
  async (offset) => {
    const res = await fetch("http://18.183.189.68:8080/recipedata/get", {
      method: "post",
      body: JSON.stringify({ Offset: offset }),
    });
    return res.json();
  }
);

export const addPrivateRecipe = createAsyncThunk(
  "recipe/addPrivateRecipe",
  async (data) => {
    const res = await fetch("http://18.183.189.68:8080/recipedata/add", {
      method: "post",
      body: JSON.stringify(data),
    });
    return res.json();
  }
);

const initialState = {
  data: [],
  isApiConnected: false,
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
    resetIsApiConnected: (state) => {
      state.isApiConnected = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.data = action.payload.data;
      } else {
        state.error = "レシピ情報を取得できませんでした。";
      }
      state.loader = false;
    });
    builder.addCase(fetchRecipe.rejected, (state, action) => {
      state.error = action.error.message;
      state.loader = false;
    });
    builder.addCase(fetchAddRecipe.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        state.data = [...state.data, ...action.payload.data];
      } else {
        state.error = "レシピ情報を取得できませんでした。";
      }
      state.loader = false;
    });
    builder.addCase(fetchAddRecipe.rejected, (state, action) => {
      state.error = action.error.message;
      state.loader = false;
    });
    builder.addCase(addPrivateRecipe.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.success === true) {
        state.isApiConnected = true;
      } else {
        state.error = "レシピの作成に失敗しました。";
      }
      state.loader = false;
    });
  },
});

export const { resetError, resetIsApiConnected } = RecipeSlice.actions;
export default RecipeSlice.reducer;
