import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vendorId: '',
    productName: '',
    phoneNumber: '',
    dueDate: '',
    productAmount: '',
    quantity: '',
    description: '',
    
};
const initiateTransactionReducer = createSlice({
  name: "inititateTransaction",
  initialState,
  reducers: {
    setVendorId(state, action) {
      state.vendorId = action.payload;
    },
    setProductName(state, action) {
        state.productName = action.payload;
      },
      setPhoneNumber(state, action) {
        state.phoneNumber = action.payload;
      },
      setDueDate(state, action) {
        state.dueDate = action.payload;
      },
      setProductAmount(state, action) {
        state.productAmount = action.payload;
      },
      setQuantity(state, action) {
        state.quantity = action.payload;
      },
      setDescription(state, action) {
        state.description = action.payload;
      },
           
  },
});


export default initiateTransactionReducer;
export const initiateTransactionActions = initiateTransactionReducer.actions;