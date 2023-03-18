import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  data: {},
  error: null,
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistrationRequest(state) {
      state.loading = true;
    },
    userRegistrationSuccess(state, payload) {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = payload;
    },
    userRegistrationFailure(state, payload) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload;
    },
    vendorRegistrationRequest(state) {
      state.loading = true;
    },
    vendorRegistrationSuccess(state, payload) {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = payload;
    },
    vendorRegistrationFailure(state, payload) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload;
    },
    verifyEmailTokenRequest(state) {
      state.loading = true;
    },
    verifyEmailTokenSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    verifyEmailTokenFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    verifyEmailExistRequest(state) {
      state.loading = true;
    },
    verifyEmailExistSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    verifyEmailExistFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    verifyPhoneExistRequest(state) {
      state.loading = true;
    },
    verifyPhoneExistSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    verifyPhoneExistFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    resetPasswordLinkRequest(state) {
      state.loading = true;
    },
    resetPasswordLinkSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    resetPasswordLinkFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    resetPasswordRequest(state) {
      state.loading = true;
    },
    resetPasswordSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    resetPasswordFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    setPinRequest(state) {
      state.loading = true;
    },
    setPinSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    setPinFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    verifyPinRequest(state) {
      state.loading = true;
    },
    verifyPinSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    verifyPinFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    setSecurityQuestionRequest(state) {
      state.loading = true;
    },
    setSecurityQuestionSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    setSecurityQuestionFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
    loginRequest(state) {
      state.loading = true;
    },
    loginSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    loginFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
  },
});


export default authReducer;
export const authActions = authReducer.actions;