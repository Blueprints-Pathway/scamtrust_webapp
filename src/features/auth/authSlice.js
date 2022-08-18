import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authService from "./authService";

const userFromStorage = localStorage.getItem("scam-trust-user");

const user = !!userFromStorage ? JSON.parse(userFromStorage) : null;

const initialState = {
  user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (loginData, thunkApi) => {
    try {
      return await authService.login(loginData);
    } catch (error) {
      const message = error.response.data.message
        ? error.response.data.message[
            Object.keys(error.response.data.message)[0]
          ][0]
        : (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.message = "";
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
