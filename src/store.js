import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminReducer";
import authReducer from "./reducers/authReducer";
import customerTransactionReducer from "./reducers/customerTransactionsReducer";
import miscReducer from "./reducers/miscReducers";
import notificationReducer from "./reducers/notificationReducer";
import ratingReducer from "./reducers/ratingReducer";
import settingsReducer from "./reducers/settingsReducer";
import userReducer from "./reducers/userReducer";
import vendorTransactionReducer from "./reducers/vendorTransactionReducer";
import walletReducer from "./reducers/walletReducer";


const store = configureStore({
    reducer:{
        auth: authReducer.reducer,
        misc: miscReducer.reducer,
        user: userReducer.reducer,
        settings: settingsReducer,
        customerTransaction: customerTransactionReducer.reducer,
        vendorTransaction: vendorTransactionReducer.reducer,
        wallet: walletReducer.reducer,
        admin: adminReducer.reducer,
        rating: ratingReducer.reducer,
        notification: notificationReducer.reducer,
}
});

export default store;