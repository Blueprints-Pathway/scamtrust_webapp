import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  data: null,
  error: false,
  isPinSet: false,
  isSecurityQuestionSet: false,
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistrationRequest(state) {
      state.loading = true;
      console.log('register request')
    },
    userRegistrationSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = action.payload;
    },
    userRegistrationFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
       state.error = action.payload;
    },
    vendorRegistrationRequest(state) {
      state.loading = true;
    },
    vendorRegistrationSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = action.payload;
    },
    vendorRegistrationFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
       state.error = action.payload;
    },
    verifyEmailTokenRequest(state) {
      state.loading = true;
    },
    verifyEmailTokenSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    verifyEmailTokenFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
    },
    verifyEmailExistRequest(state) {
      state.loading = true;
    },
    verifyEmailExistSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    verifyEmailExistFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
    },
    verifyPhoneExistRequest(state) {
      state.loading = true;
    },
    verifyPhoneExistSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    verifyPhoneExistFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
    },
    resetPasswordLinkRequest(state) {
      state.loading = true;
    },
    resetPasswordLinkSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    resetPasswordLinkFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
    },
    resetPasswordRequest(state) {
      state.loading = true;
    },
    resetPasswordSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    resetPasswordFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
    },
    setPinRequest(state) {
      state.loading = true;
    },
    setPinSuccess(state, action) {
      state.loading = false;
      state.isPinSet = true;
      state.data = action.payload;
    },
    setPinFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
    },
    verifyPinRequest(state) {
      state.loading = true;
    },
    verifyPinSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    verifyPinFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
    },
    setSecurityQuestionRequest(state) {
      state.loading = true;
    },
    setSecurityQuestionSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.isSecurityQuestionSet = true;
    },
    setSecurityQuestionFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
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
      console.log('login success')
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error);
      console.log('login failed')

    },
    logoutUser(state){
      state.isAuthenticated = false;
    }
  },
});


export default authReducer;
export const authActions = authReducer.actions;