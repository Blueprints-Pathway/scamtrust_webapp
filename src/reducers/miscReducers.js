import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    data: {}, 
}

const miscReducer = createSlice({
    initialState,
    name: 'misc',
    reducers:{
        createSecurityQuestionRequest(state) {
            state.loading = true;
          },
          createSecurityQuestionSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          createSecurityQuestionFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          createBusinessTypeRequest(state) {
            state.loading = true;
          },
          createBusinessTypeSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          createBusinessTypeFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          createIndustryRequest(state) {
            state.loading = true;
          },
          createIndustrySuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          createIndustryFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          createFAQRequest(state) {
            state.loading = true;
          },
          createFAQSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          createFAQFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          listFAQRequest(state) {
            state.loading = true;
          },
          listFAQSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          listFAQFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          listSecurityQuestionRequest(state) {
            state.loading = true;
          },
          listSecurityQuestionSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          listSecurityQuestionFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          listIndustriesRequest(state) {
            state.loading = true;
          },
          listIndustriesSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          listIndustriesFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          listBusinessTypeRequest(state) {
            state.loading = true;
          },
          listBusinessTypeSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          listBusinessTypeFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          getBanksRequest(state) {
            state.loading = true;
          },
          getBanksSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          getBanksFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          authenticateMonifyRequest(state) {
            state.loading = true;
          },
          authenticateMonifySuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          authenticateMonifyFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          feeCalculatorRequest(state) {
            state.loading = true;
          },
          feeCalculatorSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          feeCalculatorFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          verifyVendorExistRequest(state) {
            state.loading = true;
          },
          verifyVendorExistSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          verifyVendorExistFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          vendorSearchRequest(state) {
            state.loading = true;
          },
          vendorSearchSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          vendorSearchFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },
          getVendorRequest(state) {
            state.loading = true;
          },
          getVendorSuccess(state, payload) {
            state.loading = false;
            state.data = payload;
          },
          getVendorFailure(state, payload) {
            state.loading = false;
            state.error = payload;
          },

    }
});

export default miscReducer;
export const miscActions = miscReducer.actions;