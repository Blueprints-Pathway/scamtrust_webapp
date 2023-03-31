import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  data: null,
  error: false,
  isPinSet: false,
  isSecurityQuestionSet: false,
  emailExistDataLoading: false,
  phoneExistDataLoading: false,
  emailExistData: false,
  phoneExistData: false,
  isEmailValid: false,
  isPhoneValid: false,
  resetPasswordLinkSuccessful:false,
  resetEmailToken: false,
  isVerifyEmailTokenSuccessful: false,
  isResetPasswordSuccessful: false,
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistrationRequest(state) {
      state.loading = true;
      console.log('register request')
      state.error = false;
    },
    userRegistrationSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = action.payload;
      state.error = false;
    },
    userRegistrationFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
       state.error = action.payload;
    },
    vendorRegistrationRequest(state) {
      state.loading = true;
      state.error = false;
    },
    vendorRegistrationSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = action.payload;
      state.error = false;
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
      state.isVerifyEmailTokenSuccessful = true;
    },
    verifyEmailTokenFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
       state.isVerifyEmailTokenSuccessful = false;
    },
    resetEmailToken(state){
      state.loading = false;
      state.isVerifyEmailTokenSuccessful = false;
      state.error = false;
    },
    verifyEmailExistRequest(state) {
      state.emailExistDataLoading = true;
    },
    verifyEmailExistSuccess(state, action) {
      state.emailExistDataLoading = false;
      state.emailExistData = false;
      state.isEmailValid = true;
    },
    verifyEmailExistFailure(state, action) {
      state.emailExistDataLoading = false;
       state.emailExistData = action.payload;
    },
    verifyPhoneExistRequest(state) {
      state.phoneExistDataLoading = true;
    },
    verifyPhoneExistSuccess(state, action) {
      state.phoneExistDataLoading = false;
      state.phoneExistData = false;
      state.isPhoneValid = true;
    },
    verifyPhoneExistFailure(state, action) {
      state.phoneExistDataLoading = false;
       state.phoneExistData = action.payload;
    },
    resetPasswordLinkRequest(state) {
      state.loading = true;
    },
    resetPasswordLinkSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.resetPasswordLinkSuccessful = true;
      console.log(action.payload);
    },
    resetPasswordLinkFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordLink(state){
      state.loading = false;
      state.resetPasswordLinkSuccessful = false;
      state.error = false;
    },
    resetPasswordRequest(state) {
      state.loading = true;
    },
    resetPasswordSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.isResetPasswordSuccessful = true;
    },
    resetPasswordFailure(state, action) {
      state.loading = false;
       state.error = action.payload;
    },
    resetPasswordData(state){
      state.error = false;
      state.data = null;
      state.isResetPasswordSuccessful = false;
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
      state.isEmailValid = false;
      state.isPhoneValid = false;
      localStorage.removeItem('USER_TOKEN');
      console.log('logout')
    },
   
    vendorRegistrationComplete(state){
     
      state.isEmailValid = false;
      state.isPhoneValid = false;
    
    }
  },
});


export default authReducer;
export const authActions = authReducer.actions;