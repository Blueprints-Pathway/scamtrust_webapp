import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
  ratings: []
};

const ratingReducer = createSlice({
  initialState,
  name: "rating",
  reducers: {
    storeRatingRequest(state) {
      state.loading = true;
    },
   storeRatingSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    storeRatingFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    },
   listRatingRequest(state) {
        state.loading = true;
      },
     listRatingSuccess(state, payload) {
        state.loading = false;
        state.ratings = payload;
      },
      listRatingFailure(state, payload) {
        state.loading = false;
        state.error = payload;
      },
  },
});

export default ratingReducer;
export const ratingActions = ratingReducer.actions;
