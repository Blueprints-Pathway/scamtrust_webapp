import { customerTransactionActions } from "../reducers/customerTransactionsReducer";
import {USER_TOKEN, BASE_URL} from '../constants/constants';
import axios from "axios";



export const getCustomerTransactions = () => async (dispatch) => {
    try{
        dispatch(customerTransactionActions.customerTransactionsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/customer`, config);
        if(response.data.status){
            dispatch(customerTransactionActions.customerTransactionsSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(customerTransactionActions.customerTransactionsFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(customerTransactionActions.customerTransactionsFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}

export const getCustomerOngoingTransactions = () => async (dispatch) => {
    try{
        dispatch(customerTransactionActions.customerOngoingTransactionsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/customer/ongoing`, config);
        if(response.data.status){
            dispatch(customerTransactionActions.customerOngoingTransactionsSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(customerTransactionActions.customerOngoingTransactionsFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(customerTransactionActions.customerOngoingTransactionsFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}


export const getCustomerCompletedTransactions = () => async (dispatch) => {
    try{
        dispatch(customerTransactionActions.customerCompletedTransactionsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/customer/completed`, config);
        if(response.data.status){
            dispatch(customerTransactionActions.customerCompletedTransactionsSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(customerTransactionActions.customerCompletedTransactionsFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(customerTransactionActions.customerCompletedTransactionsFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}

export const getCustomerCancelledTransactions = () => async (dispatch) => {
    try{
        dispatch(customerTransactionActions.customerCancelledTransactionRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/customer/cancelled`, config);
        if(response.data.status){
            dispatch(customerTransactionActions.customerCancelledTransactionSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(customerTransactionActions.customerCancelledTransactionFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(customerTransactionActions.customerCancelledTransactionFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}