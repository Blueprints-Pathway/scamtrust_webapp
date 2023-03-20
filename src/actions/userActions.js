import axios from "axios";
import { userActions } from "../reducers/userReducer";

const baseUrl = "https://scamtrust.herokuapp.com/api/v1"
const token = localStorage?.getItem("USER_TOKEN");

export const getLoggedInUserDetails = (data) => async (dispatch) => {
    try{
        dispatch(userActions.getDetailsRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
        
        const response = await axios.get(`${baseUrl}/user/getdetails`,config);
        if(response.data.status){
            dispatch(userActions.getDetailsSuccess(
               response.data,
            ));
            console.log(response.data);
            localStorage.setItem('USER_TOKEN', response.data.data.access_token);
        }else{
            dispatch(userActions.getDetailsFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(userActions.getDetailsFailure(
            error.response.data.message
        ));
    }
}