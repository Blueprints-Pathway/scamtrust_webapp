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