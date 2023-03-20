import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  data: null,
  error: false,
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistrationRequest(state) {
      state.loading = true;
    },
    userRegistrationSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = action;
    },
    userRegistrationFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action;
    },
    vendorRegistrationRequest(state) {
      state.loading = true;
    },
    vendorRegistrationSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = action;
    },
    vendorRegistrationFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action;
    },
    verifyEmailTokenRequest(state) {
      state.loading = true;
    },
    verifyEmailTokenSuccess(state, action) {
      state.loading = false;
      state.data = action;
    },
    verifyEmailTokenFailure(state, action) {
      state.loading = false;
      state.error = action;
    },
    verifyEmailExistRequest(state) {
      state.loading = true;
    },
    verifyEmailExistSuccess(state, action) {
      state.loading = false;
      state.data = action;
    },
    verifyEmailExistFailure(state, action) {
      state.loading = false;
      state.error = action;
    },
    verifyPhoneExistRequest(state) {
      state.loading = true;
    },
    verifyPhoneExistSuccess(state, action) {
      state.loading = false;
      state.data = action;
    },
    verifyPhoneExistFailure(state, action) {
      state.loading = false;
      state.error = action;
    },
    resetPasswordLinkRequest(state) {
      state.loading = true;
    },
    resetPasswordLinkSuccess(state, action) {
      state.loading = false;
      state.data = action;
    },
    resetPasswordLinkFailure(state, action) {
      state.loading = false;
      state.error = action;
    },
    resetPasswordRequest(state) {
      state.loading = true;
    },
    resetPasswordSuccess(state, action) {
      state.loading = false;
      state.data = action;
    },
    resetPasswordFailure(state, action) {
      state.loading = false;
      state.error = action;
    },
    setPinRequest(state) {
      state.loading = true;
    },
    setPinSuccess(state, action) {
      state.loading = false;
      state.data = action;
    },
    setPinFailure(state, action) {
      state.loading = false;
      state.error = action;
    },
    verifyPinRequest(state) {
      state.loading = true;
    },
    verifyPinSuccess(state, action) {
      state.loading = false;
      state.data = action;
    },
    verifyPinFailure(state, action) {
      state.loading = false;
      state.error = action;
    },
    setSecurityQuestionRequest(state) {
      state.loading = true;
    },
    setSecurityQuestionSuccess(state, action) {
      state.loading = false;
      state.data = action;
    },
    setSecurityQuestionFailure(state, action) {
      state.loading = false;
      state.error = action;
    },
    loginRequest(state) {
      state.loading = true;
      console.log('login request')
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
      state.isAuthenticated = true;
      console.log(state.data);
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser(state){
      state.isAuthenticated = false;
    }
  },
});


export default authReducer;
export const authActions = authReducer.actions;