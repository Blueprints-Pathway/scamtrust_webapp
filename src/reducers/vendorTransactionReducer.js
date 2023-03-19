import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  completedTransactions: [],
  ongoingTransactions: [],
  cancelledTransactions: [],
  allTransactions: [], 
   data: {}
};

const vendorTransactionReducer = createSlice({
  initialState,
  name: "vendorTransaction",
  reducers: {
    vendorApproveTransactionRequest(state) {
      state.loading = true;
    },
    vendorApproveTransactionSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    vendorApproveTransactionFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    vendorCancelTransactionRequest(state) {
        state.loading = true;
      },
      vendorCancelTransactionSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      vendorCancelTransactionFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
      vendorTransactionsRequest(state) {
        state.loading = true;
      },
      vendorTransactionsSuccess(state, payload) {
        state.loading = false;
        state.allTransactions = payload;
      },
      vendorTransactionsFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
      vendorOngoingTransactionsRequest(state) {
        state.loading = true;
      },
      vendorOngoingTransactionsSuccess(state, payload) {
        state.loading = false;
        state.ongoingTransactions = payload;
      },
      vendorOngoingTransactionsFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
      vendorCompletedTransactionsRequest(state) {
        state.loading = true;
      },
      vendorCompletedTransactionsSuccess(state, payload) {
        state.loading = false;
        state.completedTransactions = payload;
      },
      vendorCompletedTransactionsFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
      vendorCancelledTransactionRequest(state) {
        state.loading = true;
      },
      vendorCancelledTransactionSuccess(state, payload) {
        state.loading = false;
        state.cancelledTransactions = payload;
      },
      vendorCancelledTransactionFailure(state, payload) {
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

export default vendorTransactionReducer;
export const vendorTransactionActions = vendorTransactionReducer.actions;
