import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSettings = createAsyncThunk(
  "autoCreateRecipeSettings/fetchSettings",
  async (userID) => {
    const res = await fetch("http://18.183.189.68:8080/auto_create_recipe_settings/get", {
      method: "post",
      body: JSON.stringify({ UserID: userID }),
    });
    return res.json();
  }
)

export const addSettings = createAsyncThunk(
  "autoCreateRecipeSettings/addSettings",
  async (data) => {
    const res = await fetch("http://18.183.189.68:8080/auto_create_recipe_settings/save", {
      method: "post",
      body: JSON.stringify(data),
    });
    return res.json();
  }
)

const initialState = {
  data: {
    Hate_foods: [],
    Is_only_rice: 0,
    Is_only_meat: 0,
    Is_only_fish: 0,
  },
  isApiConnected: false,
  loader: true,
  error: undefined,
};

export const AutoCreateRecipeSettingsSlice = createSlice({
  name: "autoCreateRecipeSettings",
  initialState,
  reducers: {
    resetSettingsIsApiConnected: (state) => {
      state.isApiConnected = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSettings.fulfilled, (state, action) => {
      if (action.payload.success === true) {
        if (action.payload.data.length != 0) {
          state.data = action.payload.data[0]
          if (action.payload.data[0].Hate_foods != "") {
            const hateFoods = JSON.parse(action.payload.data[0].Hate_foods);
            state.data.Hate_foods = hateFoods.data;
          } else {
            state.data.Hate_foods = [];
          }
        }
      } else {
        state.error = "作成条件の取得に失敗しました。";
      }
      state.loader = false;
    });
    builder.addCase(fetchSettings.rejected, (state, action) => {
      state.error = "作成条件の取得に失敗しました。";
      state.loader = false;
    });
    builder.addCase(addSettings.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.success === true) {
        state.isApiConnected = true;
      } else {
        state.error = "自動作成に失敗しました。";
      }
      state.loader = false;
    })
    builder.addCase(addSettings.rejected, (state, action) => {
      state.error = "自動作成に失敗しました。";
      state.loader = false;
    })
  },
});

export const {resetSettingsIsApiConnected} = AutoCreateRecipeSettingsSlice.actions;
export default AutoCreateRecipeSettingsSlice.reducer;
