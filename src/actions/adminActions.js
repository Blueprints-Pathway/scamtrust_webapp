import axios from "axios";
import {adminActions} from "../reducers/adminReducer";

const baseUrl = "https://scamtrust.herokuapp.com/api/v1";

const user_details = JSON.parse(localStorage?.getItem("USER_DETAILS"));


export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch(adminActions.getAllUsersRequest());
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user_details?.data?.access_token}`,
            }
        }

        const response = await axios.get(`${baseUrl}/admin/users`, config);
        dispatch(adminActions.getAllUsersSuccess(response.data.data))
        
    } catch (error) {
        console.log(error);
        dispatch(adminActions.getAllUsersFailure('An error Occured'))
        
    }
}


