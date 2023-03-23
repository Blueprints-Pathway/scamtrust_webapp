import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: null,
  completedTransactions: [],
  ongoingTransactions: [],
  cancelledTransactions: [],
  allTransactions: [], 
  transactionDetail: {},
  data: {}
};

const customerTransactionReducer = createSlice({
  initialState,
  name: "customerTransaction",
  reducers: {
    createTransactionRequest(state) {
      state.loading = true;
    },
    createTransactionSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    createTransactionFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    viewTransactionRequest(state) {
        state.loading = true;
      },
      viewTransactionSuccess(state, action) {
        state.loading = false;
        state.transactionDetail = action.payload;
      },
      viewTransactionFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      customerTransactionsRequest(state) {
        state.loading = true;
      },
      customerTransactionsSuccess(state, action) {
        state.loading = false;
        state.allTransactions = action.payload;
      },
      customerTransactionsFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      customerOngoingTransactionsRequest(state) {
        state.loading = true;
      },
      customerOngoingTransactionsSuccess(state, action) {
        state.loading = false;
        state.ongoingTransactions = action.payload;
      },
      customerOngoingTransactionsFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      customerCompletedTransactionsRequest(state) {
        state.loading = true;
      },
      customerCompletedTransactionsSuccess(state, action) {
        state.loading = false;
        state.completedTransactions = action.payload;
      },
      customerCompletedTransactionsFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      customerCancelledTransactionRequest(state) {
        state.loading = true;
      },
      customerCancelledTransactionSuccess(state, action) {
        state.loading = false;
        state.cancelledTransactions = action.payload;
      },
      customerCancelledTransactionFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      customerAcceptTransactionRequest(state) {
        state.loading = true;
      },
      customerAcceptTransactionSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
      },
      customerAcceptTransactionFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
  },
});

export default customerTransactionReducer;
export const customerTransactionActions = customerTransactionReducer.actions;
