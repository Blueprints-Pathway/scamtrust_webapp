import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
  notifications: []
};

const notificationReducer = createSlice({
  initialState,
  name: "notification",
  reducers: {
    toggleNotificationRequest(state) {
      state.loading = true;
    },
   toggleNotificationSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    toggleNotificationFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
        listNotificationRequest(state) {
        state.loading = true;
      },
     listNotificationSuccess(state, payload) {
        state.loading = false;
        state.notifications = payload;
      },
      listNotificationFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
  },
});

export default notificationReducer;
export const notificationActions = notificationReducer.actions;
