import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
  notifications: [],
  currentPage: 1,
  unreadNotifications: []
};

const notificationReducer = createSlice({
  initialState,
  name: "notification",
  reducers: {
    toggleNotificationRequest(state) {
      state.loading = true;
    },
   toggleNotificationSuccess(state, action) {
      state.loading = false;
      state.data = action;
    },
    toggleNotificationFailure(state, action) {
      state.loading = false;
      state.error = action;
    },
    listNotificationRequest(state) {
        state.loading = true;
      },
     listNotificationSuccess(state, action) {
        state.loading = false;
        state.currentPage = action.payload.currentPage;
        state.unreadNotifications = action.payload.unreadNotifications;
        state.data = action.payload.data;
        state.notifications = action.payload.data;
       //console.log(action.payload.notifications + 'suces')
      },
      listNotificationFailure(state, action) {
        state.loading = false;
        state.error = action;
      },
  },
});

export default notificationReducer;
export const notificationActions = notificationReducer.actions;
