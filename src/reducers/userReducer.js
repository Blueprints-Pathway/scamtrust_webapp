import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const userReducer = createSlice({
  initialState,
  name: "user",
  reducers: {
    getDetailsRequest(state) {
      state.loading = true;
    },
    getDetailsSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    getDetailsFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userReducer;
export const userActions = userReducer.actions;
