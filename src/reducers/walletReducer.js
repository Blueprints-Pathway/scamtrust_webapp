import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const walletReducer = createSlice({
  initialState,
  name: "wallet",
  reducers: {
    withdrawalRequest(state) {
      state.loading = true;
    },
   withdrawalSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    withdrawalFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
   getWalletDetailsRequest(state) {
        state.loading = true;
      },
     getWalletDetailsSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      getWalletDetailsFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
  },
});

export default walletReducer;
export const walletActions = walletReducer.actions;
