import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const settingsReducer = createSlice({
  initialState,
  name: "settings",
  reducers: {
    changePasswordRequest(state) {
      state.loading = true;
    },
    changePasswordSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    changePasswordFailure(state, payload) {
      state.loading = false;
     state.error = payload;
    },
   changeEmailRequest(state) {
        state.loading = true;
      },
      changeEmailSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      changeEmailFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
      verifyChangeEmailTokenRequest(state) {
        state.loading = true;
      },
      verifyChangeEmailTokenSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      verifyChangeEmailTokenFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
      changePhoneNumberRequest(state) {
        state.loading = true;
      },
      changePhoneNumberSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      changePhoneNumberFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
      verifyChangePhoneNumberRequest(state) {
        state.loading = true;
      },
      verifyChangePhoneNumberSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      verifyChangePhoneNumberFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
      changePinRequest(state) {
        state.loading = true;
      },
      changePinSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      changePinFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
      changeBusinessNameOrUsernameRequest(state) {
        state.loading = true;
      },
      changeBusinessNameOrUsernameSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      changeBusinessNameOrUsernameFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
      changeLocationRequest(state) {
        state.loading = true;
      },
      changeLocationSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      changeLocationFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
      changeBankAccountRequest(state) {
        state.loading = true;
      },
      changeBankAccountSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      changeBankAccountFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
      verifySecurityQuestionRequest(state) {
        state.loading = true;
      },
      verifySecurityQuestionSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      verifySecurityQuestionFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
      uploadPictureRequest(state) {
        state.loading = true;
      },
      uploadPictureSuccess(state, payload) {
        state.loading = false;
        state.data = payload;
      },
      uploadPictureFailure(state, payload) {
        state.loading = false;
       state.error = payload;
      },
  },
});

export default settingsReducer;
export const userActions = settingsReducer.actions;
