import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    error: null,
    data: {}, 
    businessTypesLoading: true,
    businessIndustriesLoading: true,
    getVendorLoading: true,
    businessTypes: [],
    businessIndustries: [],
}

const miscReducer = createSlice({
    initialState,
    name: 'misc',
    reducers:{
        createSecurityQuestionRequest(state) {
            state.loading = true;
          },
          createSecurityQuestionSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          createSecurityQuestionFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          createBusinessTypeRequest(state) {
            state.loading = true;
          },
          createBusinessTypeSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          createBusinessTypeFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          createIndustryRequest(state) {
            state.loading = true;
          },
          createIndustrySuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          createIndustryFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          createFAQRequest(state) {
            state.loading = true;
          },
          createFAQSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          createFAQFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          listFAQRequest(state) {
            state.loading = true;
          },
          listFAQSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          listFAQFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          listSecurityQuestionRequest(state) {
            state.loading = true;
          },
          listSecurityQuestionSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          listSecurityQuestionFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          listIndustriesRequest(state) {
            state.businessIndustriesLoading = true;
          },
          listIndustriesSuccess(state, action) {
            state.businessIndustriesLoading = false;
            state.businessIndustries = action.payload;
          },
          listIndustriesFailure(state, action) {
            state.businessIndustriesLoading = false;
            state.error = action.payload;
          },
          listBusinessTypeRequest(state) {
            state.businessTypesLoading = true;
          },
          listBusinessTypeSuccess(state, action) {
            state.businessTypesLoading = false;
            state.businessTypes = action.payload;
            console.log(state.businessTypes.data);
          },
          listBusinessTypeFailure(state, action) {
            state.businessTypesLoading = false;
            state.error = action.payload;
          },
          getBanksRequest(state) {
            state.loading = true;
            console.log(state.loading);
          },
          getBanksSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          getBanksFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          authenticateMonifyRequest(state) {
            state.loading = true;
          },
          authenticateMonifySuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          authenticateMonifyFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          feeCalculatorRequest(state) {
            state.loading = true;
          },
          feeCalculatorSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          feeCalculatorFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          verifyVendorExistRequest(state) {
            state.loading = true;
          },
          verifyVendorExistSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          verifyVendorExistFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          vendorSearchRequest(state) {
            state.loading = true;
          },
          vendorSearchSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          vendorSearchFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          getVendorRequest(state) {
            state.getVendorLoading = true;
          },
          getVendorSuccess(state, action) {
            state.getVendorLoading = false;
            state.data = action.payload;
          },
          getVendorFailure(state, action) {
            state.getVendorLoading = false;
            state.error = action.payload;
          },
          getSecurityQuestionRequest(state) {
            state.loading = true;
          },
          getSecurityQuestionSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
          },
          getSecurityQuestionFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },

    }
});

export default miscReducer;
export const miscActions = miscReducer.actions;