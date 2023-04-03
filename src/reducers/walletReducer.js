import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  isWithdrawalSuccessful: false,
  data: {},
};

const walletReducer = createSlice({
  initialState,
  name: "wallet",
  reducers: {
    withdrawalRequest(state) {
      state.loading = true;
    },
   withdrawalSuccess(state, action) {
      state.loading = false;
      state.isWithdrawalSuccessful = true;
      state.data = action.payload;
    },
    withdrawalFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetWithrawalData(state){
      state.loading = false;
      state.isWithdrawalSuccessful = false;
      state.data = {};
      state.error = null
    },
   getWalletDetailsRequest(state) {
        state.loading = true;
      },
     getWalletDetailsSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
      },
      getWalletDetailsFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
  },
});

export default walletReducer;
export const walletActions = walletReducer.actions;
