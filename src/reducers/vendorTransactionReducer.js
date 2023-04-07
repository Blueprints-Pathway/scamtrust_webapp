import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: null,
  completedTransactions: [],
  ongoingTransactions: [],
  cancelledTransactions: [],
  allTransactions: [], 
  transactionDetail: {},
  isCancelTransactionSuccessful: false,
  isAcceptTransactionSuccessful: false,
  data: {}
};

const vendorTransactionReducer = createSlice({
  initialState,
  name: "vendorTransaction",
  reducers: {
    vendorApproveTransactionRequest(state) {
      state.loading = true;
    },
    vendorApproveTransactionSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    vendorApproveTransactionFailure(state, action) {
      state.loading = false;
     state.error= action.payload;
    },
    vendorCancelTransactionRequest(state) {
        state.loading = true;
      },
      vendorCancelTransactionSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.isCancelTransactionSuccessful = true;
      },
      vendorCancelTransactionFailure(state, action) {
        state.loading = false;
       state.error= action.payload;
       state.isCancelTransactionSuccessful = false;
      },
      resetCancelTransactionStatus(state){
        state.loading = false;
        state.isCancelTransactionSuccessful = false;
        state.error = null;
      },
      vendorTransactionsRequest(state) {
        state.loading = true;
      },
      vendorTransactionsSuccess(state, action) {
        state.loading = false;
        state.allTransactions = action.payload;
      },
      vendorTransactionsFailure(state, action) {
        state.loading = false;
       state.error= action.payload;
      },
      vendorOngoingTransactionsRequest(state) {
        state.loading = true;
      },
      vendorOngoingTransactionsSuccess(state, action) {
        state.loading = false;
        state.ongoingTransactions = action.payload;
      },
      vendorOngoingTransactionsFailure(state, action) {
        state.loading = false;
       state.error= action.payload;
      },
      vendorCompletedTransactionsRequest(state) {
        state.loading = true;
      },
      vendorCompletedTransactionsSuccess(state, action) {
        state.loading = false;
        state.completedTransactions = action.payload;
      },
      vendorCompletedTransactionsFailure(state, action) {
        state.loading = false;
       state.error= action.payload;
      },
      vendorCancelledTransactionRequest(state) {
        state.loading = true;
      },
      vendorCancelledTransactionSuccess(state, action) {
        state.loading = false;
        state.cancelledTransactions = action.payload;
      },
      vendorCancelledTransactionFailure(state, action) {
        state.loading = false;
       state.error= action.payload;
      },
      vendorAcceptTransactionRequest(state) {
        state.loading = true;
        state.isAcceptTransactionSuccessful = false;
      },
      vendorAcceptTransactionSuccess(state, action) {
        state.loading = false;
        state.isAcceptTransactionSuccessful = true;
        state.data = action.payload;
      },
      vendorAcceptTransactionFailure(state, action) {
        state.loading = false;
        state.isAcceptTransactionSuccessful = false;
        state.error = action.payload;
      },
      resetAcceptTransactionStatus(state){
        state.loading = false;
        state.isAcceptTransactionSuccessful = false;
        state.error = null;
      },
  },
});

export default vendorTransactionReducer;
export const vendorTransactionActions = vendorTransactionReducer.actions;
