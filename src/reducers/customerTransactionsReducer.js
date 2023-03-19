import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
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
    createTransactionSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    createTransactionFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    viewTransactionRequest(state) {
        state.loading = true;
      },
      viewTransactionSuccess(state, payload) {
        state.loading = false;
        state.transactionDetail = payload;
      },
      viewTransactionFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
      customerTransactionsRequest(state) {
        state.loading = true;
      },
      customerTransactionsSuccess(state, payload) {
        state.loading = false;
        state.allTransactions = payload;
      },
      customerTransactionsFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
      customerOngoingTransactionsRequest(state) {
        state.loading = true;
      },
      customerOngoingTransactionsSuccess(state, payload) {
        state.loading = false;
        state.ongoingTransactions = payload;
      },
      customerOngoingTransactionsFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
      customerCompletedTransactionsRequest(state) {
        state.loading = true;
      },
      customerCompletedTransactionsSuccess(state, payload) {
        state.loading = false;
        state.completedTransactions = payload;
      },
      customerCompletedTransactionsFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
      customerCancelledTransactionRequest(state) {
        state.loading = true;
      },
      customerCancelledTransactionSuccess(state, payload) {
        state.loading = false;
        state.cancelledTransactions = payload;
      },
      customerCancelledTransactionFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
      customerAcceptTransactionRequest(state) {
        state.loading = true;
      },
      customerAcceptTransactionSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      customerAcceptTransactionFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
  },
});

export default customerTransactionReducer;
export const customerTransactionActions = customerTransactionReducer.actions;
