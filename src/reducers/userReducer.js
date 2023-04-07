import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
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
    getDetailsSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    getDetailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetUserData(state){
      state.error = null;
      state.data = {};
    }
  },
});

export default userReducer;
export const userActions = userReducer.actions;
