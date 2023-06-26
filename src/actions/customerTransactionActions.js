import { customerTransactionActions } from "../reducers/customerTransactionsReducer";
import {USER_TOKEN, BASE_URL} from '../constants/constants';
import axios from "axios";



export const getCustomerTransactions = () => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(customerTransactionActions.customerTransactionsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/customer`, config);
        if(response.data.status){
            dispatch(customerTransactionActions.customerTransactionsSuccess(
               response.data.data,
            ));
            //console.log(response.data);
            
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
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(customerTransactionActions.customerOngoingTransactionsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/customer/ongoing`, config);
        if(response.data.status){
            dispatch(customerTransactionActions.customerOngoingTransactionsSuccess(
               response.data.data,
            ));
            //console.log(response.data);
            
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
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(customerTransactionActions.customerCompletedTransactionsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/customer/completed`, config);
        if(response.data.status){
            dispatch(customerTransactionActions.customerCompletedTransactionsSuccess(
               response.data.data,
            ));
            //console.log(response.data);
            
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
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(customerTransactionActions.customerCancelledTransactionRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/customer/cancelled`, config);
        if(response.data.status){
            dispatch(customerTransactionActions.customerCancelledTransactionSuccess(
               response.data.data,
            ));
            //console.log(response.data);
            
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

export const createTransaction = (data) => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(customerTransactionActions.createTransactionRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.post(`${BASE_URL}/transaction/create`, data, config);
        console.log(response)
        if(response.data.status){
            dispatch(customerTransactionActions.createTransactionSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(customerTransactionActions.createTransactionFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(customerTransactionActions.createTransactionFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}

export const customerAcceptTransaction = (id) => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(customerTransactionActions.customerAcceptTransactionRequest());
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        
        const response = await axios.get(`${BASE_URL}/transaction/customer/approve/${id}`, config);
        //console.log(response)
        //console.log('ACCEPT TRANSACTION', response);
        if(response.data.status){
            dispatch(customerTransactionActions.customerAcceptTransactionSuccess(
               response.data.data,
            ));
            //console.log(response.data);
            
        }else{
            dispatch(customerTransactionActions.customerAcceptTransactionFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(customerTransactionActions.customerAcceptTransactionFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}