import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/components/redux/Auth";

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

export default store;
