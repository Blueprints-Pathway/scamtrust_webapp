import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    phone: '',
    industry: '',
    business_type_id: '',
    location: '',
    password: '',
    password_confirmation: '',
    type: '',
};
const registerReducer = createSlice({
  name: "register",
  initialState,
  reducers: {
    setName(state, action) {
      state.username = action.payload;
    },
    setEmail(state, action) {
        state.email = action.payload;
      },
      setPhone(state, action) {
        state.phone = action.payload;
      },
      setIndustry(state, action) {
        state.industry = action.payload;
      },
      setBusinessTypeId(state, action) {
        state.business_type_id = action.payload;
      },
      setLocation(state, action) {
        state.location = action.payload;
      },
      setPassword(state, action) {
        state.password = action.payload;
      },
      setPasswordConfirmation(state, action) {
        state.password_confirmation = action.payload;
      },
      setType(state, action) {
        state.type = action.payload;
      },
      
  },
});


export default registerReducer;
export const registerActions = registerReducer.actions;