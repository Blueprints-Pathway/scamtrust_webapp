import axios from "axios";
import { walletActions } from "../reducers/walletReducer";

const baseUrl = "https://scamtrust.herokuapp.com/api/v1"

export const withdraw = (data) => async (dispatch) => {
    let token =  localStorage.getItem('USER_TOKEN');
    try{
        dispatch(walletActions.withdrawalRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
          };
        
        const response = await axios.post(`${baseUrl}/wallet/withdrawal`, data, config);
        console.log(response);
        if(response.data.status){
            dispatch(walletActions.withdrawalSuccess(
               response.data.message,
            ));
            console.log(response.data);
        
        }else{
            dispatch(walletActions.withdrawalFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(walletActions.withdrawalFailure(
            error.response.data.message || 'Withdrawal Unsuccessful'
        ));
    }
}