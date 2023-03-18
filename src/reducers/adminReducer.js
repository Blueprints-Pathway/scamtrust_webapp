import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
  withdrawals: []
};

const adminReducer = createSlice({
  initialState,
  name: "admin",
  reducers: {
    approveWithdrawalRequest(state) {
      state.loading = true;
    },
   approveWithdrawalSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    approveWithdrawalFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
   getWithdrawalsRequest(state) {
        state.loading = true;
      },
     getWithdrawalsSuccess(state, payload) {
        state.loading = false;
        state.withdrawals = payload;
      },
      getWithdrawalsFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
  },
});

export default adminReducer;
export const adminActions = adminReducer.actions;
