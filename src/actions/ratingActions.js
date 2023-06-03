import {USER_TOKEN, BASE_URL} from '../constants/constants';
import axios from "axios";
import { ratingActions } from '../reducers/ratingReducer';



export const listRatings = () => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(ratingActions.listRatingRequest());
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
          };
        
        const response = await axios.get(`${BASE_URL}/rating/list`, config);
        if(response.data.status){
          
            dispatch(ratingActions.listRatingSuccess(
               response.data.data
             
            ));
            //console.log(response);
        }else{
            dispatch(ratingActions.listRatingFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(ratingActions.listRatingFailure(
            error
        ));
    }
}
