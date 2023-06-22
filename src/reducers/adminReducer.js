import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
  withdrawals: [],
  users: [],
};

const adminReducer = createSlice({
  initialState,
  name: "admin",
  reducers: {
    approveWithdrawalRequest(state) {
      state.loading = true;
    },
   approveWithdrawalSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    approveWithdrawalFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
   getWithdrawalsRequest(state) {
        state.loading = true;
      },
     getWithdrawalsSuccess(state, action) {
        state.loading = false;
        state.withdrawals = action.payload;
      },
      getWithdrawalsFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      getAllUsersRequest(state, action){
        state.loading = true;
        
      },
      getAllUsersSuccess(state,action){
        state.users = action.payload;
        state.loading = false;
      

      },
      getAllUsersFailure(state,action){
        state.loading = false;
        state.error = action;
      }

  },
});

export default adminReducer;
export const adminActions = adminReducer.actions;
