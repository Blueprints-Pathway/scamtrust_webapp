// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { data } from "autoprefixer";
// import axios from "axios";
// import swal from "sweetalert";
// import { useNavigate } from "react-router-dom";

// import { scamtrustApi } from "../constants/apis";

// const userFromStorage = localStorage.getItem("scam-trust-user");

// const user = !!userFromStorage ? userFromStorage : null;

// let initialState = {
//   isLoading: false,
//   isError: false,
//   isSuccess: false,
//   message: "",
// };

// const signinUser = createAsyncThunk(
//   "auth/signin",
//   async (userSigninData, thunkApi) => {
//     try {
//       const response = await authService.signin(userSigninData);
//       if (response.hasOwnProperty("mfaRequired")) {
//         return thunkApi.rejectWithValue(response);
//       }
//       return response;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isLoading = false;
//       state.isError = false;
//       state.isSuccess = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signinUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(signinUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         // state.user = action.payload;
//       })
//       .addCase(signinUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload?.message || action.payload;
//         state.mfaType = action.payload.challengeName || null;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         // state.user = null;
//       });
//   },
// });

// export const { reset } = authSlice.actions;
// export default authSlice.reducer;

// export const signinUser = createAsyncThunk(
//   "auth/signin",
//   async (userSigninData, thunkApi) => {
//     try {
//       const response = await authService.signin(userSigninData);
//       if (response.hasOwnProperty("mfaRequired")) {
//         return thunkApi.rejectWithValue(response);
//       }
//       return response;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );

// export const signinAsync = createAsyncThunk(
//   "auth/signinAsync",
//   async (payload) => {
//     try {
//       const API_URL = `${scamtrustApi}/auth/login`;
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await axios.post(API_URL, payload, config);
//       authState = { ...authState, user: data };
//       user = response.data;
//       return user;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );

// export const emailVerifyAsync = createAsyncThunk(
//   "auth/emailVerifyAsync",
//   async (payload) => {
//     try {
//       const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/send/resetlink`;
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const request = await axios.post(API_URL, payload, config);
//       const response = request.data;
//       swal({
//         title: "Valid Email!",
//         text: request.data.message,
//         icon: "success",
//       });
//       return response;
//     } catch (error) {
//       swal(error.data, "error");
//     }
//   }
// );

// export const registerAsync = createAsyncThunk(
//   "auth/registerAsync",
//   async (payload) => {
//     try {
//       const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/register`;
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const request = await axios.post(API_URL, payload, config);
//       const response = request.data;
//       return response;
//     } catch (error) {
//       console.log(error.response);
//     }
//   }
// );

// export const CustomerRegisterAsync = createAsyncThunk(
//   "auth/registerAsync",
//   async (payload) => {
//     try {
//       const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/register`;
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const request = await axios.post(API_URL, payload, config);
//       const response = request.data;
//       swal({
//         title: "Valid Email!",
//         text: request.data.message,
//         icon: "success",
//       });
//       return response;
//     } catch (error) {
//       swal({
//         title: "Invalid Data!",
//         text: error.data.message,
//         icon: "error",
//       });
//     }
//   }
// );

// export const resetPasswordAsync = createAsyncThunk(
//   "auth/resetPasswordAsync",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/reset/password`;
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const request = await axios.post(API_URL, payload, config);
//       const response = request.data;
//       swal({
//         title: "Valid Details!",
//         text: request.data.message,
//         icon: "success",
//       });

//       return response;
//     } catch (error) {
//       console.log(error.response.data.message.password[0], "erro");
//       console.log(error, "hello");
//       swal({
//         title: "Invalid Details!",
//         text:
//           error.response.data.message.password[0] +
//           error.response.data.message.token[0],

//         icon: "error",
//       });
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: authState,
//   extraReducers: {
//     [registerAsync.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [registerAsync.fulfilled]: (state, action) => {
//       localStorage.setItem("token", action.payload.access_token);
//       state.token = action.payload.access_token;
//       state.isAuth = true;
//       state.user = action.payload.data;
//       state.loading = false;
//     },
//     [registerAsync.rejected]: (state, action) => {
//       state.loading = false;
//     },
//   },

//   extraReducers: {
//     [CustomerRegisterAsync.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [CustomerRegisterAsync.fulfilled]: (state, action) => {
//       localStorage.setItem("token", action.payload.access_token);
//       state.token = action.payload.access_token;
//       state.isAuth = true;
//       state.user = action.payload.data;
//       state.loading = false;
//     },
//     [CustomerRegisterAsync.rejected]: (state, action) => {
//       state.loading = false;
//     },
//   },

//   extraReducers: {
//     [resetPasswordAsync.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [resetPasswordAsync.fulfilled]: (state, action) => {
//       localStorage.setItem("token", action.payload.access_token);
//       state.token = action.payload.access_token;
//       state.isAuth = true;
//       state.user = action.payload.data;
//       state.loading = false;
//     },
//     [resetPasswordAsync.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
//   extraReducers: {
//     [emailVerifyAsync.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [emailVerifyAsync.fulfilled]: (state, action) => {
//       localStorage.setItem("token", action.payload.access_token);
//       state.token = action.payload.access_token;
//       state.isAuth = true;
//       state.user = action.payload.data;
//       state.loading = false;
//     },
//     [emailVerifyAsync.rejected]: (state, action) => {
//       state.loading = false;
//     },
//   },
//   extraReducers: {
//     [signinAsync.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signinAsync.fulfilled]: (state, action) => {
//       localStorage.setItem("token", action.payload.access_token);
//       state.token = action.payload.access_token;
//       state.isAuth = true;
//       state.user = action.payload.data;
//       state.loading = false;
//     },
//     [signinAsync.rejected]: (state, action) => {
//       state.loading = false;
//     },
//   },
// });

// export default authSlice.reducer;
