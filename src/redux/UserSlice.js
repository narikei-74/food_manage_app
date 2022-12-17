import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../storage/storage";

export const fetchUser = createAsyncThunk(
  "currentUser/fetchUser",
  async (userId) => {
    const res = await fetch("http://18.183.189.68:8080/user/info/get", {
      method: "post",
      body: JSON.stringify({ ID: userId }),
    });
    return res.json();
  }
);

export const addGuestUser = createAsyncThunk(
  "currentUser/addGuestUser",
  async () => {
    const res = await fetch("http://18.183.189.68:8080/user/register/guest", {
      method: "post",
      body: JSON.stringify({ Guest_flag: 1 }),
    });
    return res.json();
  }
);

export const saveStoreCurrentUser = createAsyncThunk(
  "currentUser/saveStoreCurrentUser",
  async () => {
    const data = await storage.load({ key: "userId" });
    return data;
  }
);

const initialState = {
  data: {
    ID: null,
    Name: null,
    Password: null,
    Email: null,
    Guest_flag: null,
    User_family_infos: [],
  },
  status: false,
  loader: true,
  error: undefined,
};

export const CurrentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if ((action.payload.success = true)) {
        state.data = action.payload.data;
        state.status = true;
        state.loader = false;
      } else {
        state.error = "ユーザー情報を取得できませんでした。";
        state.loader = false;
      }
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loader = false;
    });

    builder.addCase(addGuestUser.fulfilled, (state, action) => {
      if ((action.payload.success = true)) {
        state.data.ID = action.payload.userId;
        state.status = true;
        state.loader = false;

        storage.save({ key: "userId", data: action.payload.userId });
      } else {
        state.error = "ゲスト登録に失敗しました。";
        state.loader = false;
      }
    });

    builder.addCase(addGuestUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loader = false;
    });

    builder.addCase(saveStoreCurrentUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.data.ID = action.payload;
        state.status = true;
      }
      state.loader = false;
    });

    builder.addCase(saveStoreCurrentUser.rejected, (state, action) => {
      state.loader = false;
    });
  },
});

export default CurrentUserSlice.reducer;
