
import {USER_TOKEN, BASE_URL} from '../constants/constants';
import axios from "axios";
import { vendorTransactionActions } from '../reducers/vendorTransactionReducer';



export const getVendorTransactions = () => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(vendorTransactionActions.vendorTransactionsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/vendor`, config);
        if(response.data.status){
            dispatch(vendorTransactionActions.vendorTransactionsSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(vendorTransactionActions.vendorTransactionsFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(vendorTransactionActions.vendorTransactionsFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}

export const getVendorOngoingTransactions = () => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(vendorTransactionActions.vendorOngoingTransactionsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/vendor/ongoing`, config);
        if(response.data.status){
            dispatch(vendorTransactionActions.vendorOngoingTransactionsSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(vendorTransactionActions.vendorOngoingTransactionsFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(vendorTransactionActions.vendorOngoingTransactionsFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}


export const getVendorCompletedTransactions = () => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(vendorTransactionActions.vendorCompletedTransactionsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/vendor/completed`, config);
        if(response.data.status){
            dispatch(vendorTransactionActions.vendorCompletedTransactionsSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(vendorTransactionActions.vendorCompletedTransactionsFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(vendorTransactionActions.vendorCompletedTransactionsFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}

export const getVendorCancelledTransactions = () => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(vendorTransactionActions.vendorCancelledTransactionRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.get(`${BASE_URL}/transaction/lists/vendor/cancelled`, config);
        if(response.data.status){
            dispatch(vendorTransactionActions.vendorCancelledTransactionSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(vendorTransactionActions.vendorCancelledTransactionFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(vendorTransactionActions.vendorCancelledTransactionFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}

export const vendorCancelTransaction = (data) => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(vendorTransactionActions.vendorCancelTransactionRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.post(`${BASE_URL}/transaction/create`, data, config);
        console.log(response)
        if(response.data.status){
            dispatch(vendorTransactionActions.vendorCancelTransactionSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(vendorTransactionActions.vendorCancelTransactionFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(vendorTransactionActions.vendorCancelTransactionFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
}

export const vendorAcceptTransaction = (id) => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(vendorTransactionActions.vendorAcceptTransactionRequest());
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        
        const response = await axios.get(`${BASE_URL}/transaction/vendor/approve/${id}`, config);
        console.log(response)
        console.log('ACCEPT TRANSACTION', response);
        if(response.data.status){
            dispatch(vendorTransactionActions.vendorAcceptTransactionSuccess(
               response.data.data,
            ));
            console.log(response.data);
            
        }else{
            dispatch(vendorTransactionActions.vendorAcceptTransactionFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(vendorTransactionActions.vendorAcceptTransactionFailure(
            error.response.data.message || 'Unsuccessful'
        ));
    }
} 