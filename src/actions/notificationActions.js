import {USER_TOKEN, BASE_URL} from '../constants/constants';
import axios from "axios";
import { notificationActions } from '../reducers/notificationReducer';


export const listNotifications = () => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try{
        dispatch(notificationActions.listNotificationRequest());
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
          };
        
        const response = await axios.get(`${BASE_URL}/misc/list/notifications`, config);
        if(response.data.status){
            const mappedData = response.data.data.data.map((data) => data);
            const unreadNotification = mappedData?.filter(
                (filtered) => filtered?.status === "UNREAD"
            );
            dispatch(notificationActions.listNotificationSuccess({
               
                data: response.data.data,
                currentPage: response.data.data.current_page,
                notifications: response.data.data.data,
                unreadNotifications: unreadNotification,
            }));
            // //console.log(unreadNotification);
        }else{
            dispatch(notificationActions.listNotificationFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(notificationActions.listNotificationFailure(
            error
        ));
    }
}
