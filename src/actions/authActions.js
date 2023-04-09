import axios from "axios";
import { authActions } from "../reducers/authReducer";
import { userActions } from "../reducers/userReducer";

const baseUrl = "https://scamtrust.herokuapp.com/api/v1";

export const registerUser = (data) => async (dispatch) => {
    try{
        dispatch(authActions.userRegistrationRequest());
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/register`, data, config);
        console.log(response)
        if(response.status){
            dispatch(authActions.userRegistrationSuccess(
                response.data.data
            ));
            localStorage.setItem('USER_TOKEN', response.data.data.access_token);
        }else{
            dispatch(authActions.userRegistrationFailure( 
                response.data.message
            ));
        }

      
    }catch(error){
        dispatch(authActions.userRegistrationFailure(
            error.response.data.message || 'Login Unsuccessful'
        ));
    }
}

export const registerVendor = (data) => async (dispatch) => {
    try{
        dispatch(authActions.vendorRegistrationRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/register`, data, config);
        if(response.status){
            dispatch(authActions.vendorRegistrationSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.vendorRegistrationFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(authActions.vendorRegistrationFailure(
            error
        ));
    }
}
export const verifyEmailToken = (token) => async (dispatch) => {
    try{
        dispatch(authActions.verifyEmailTokenRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.get(`${baseUrl}/auth/verify/email/${token}`, config);
        if(response.status){
            dispatch(authActions.verifyEmailTokenSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.verifyEmailTokenFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(authActions.verifyEmailTokenFailure(
            error
        ));
    }
}
export const verifyEmailExist = (data) => async (dispatch) => {
    try{
        dispatch(authActions.verifyEmailExistRequest() );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/verify/email`, data, config);
        console.log(response);
        console.log(response.data.status);
        if(response.data.status){
            dispatch(authActions.verifyEmailExistSuccess(response.data));
        }else{
            dispatch(authActions.verifyEmailExistFailure( 
                response.data
            ));
            console.log(response.data);
        }

      
        }catch(error){
        dispatch(authActions.verifyEmailExistFailure(
            error
        ));
    }
}

export const verifyPhoneExist = (data) => async (dispatch) => {
    try{
        dispatch(authActions.verifyPhoneExistRequest ());
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/verify/phone`, data, config);
        if(response.data.status){
            dispatch(authActions.verifyPhoneExistSuccess(response.data));
        }else{
            dispatch(authActions.verifyPhoneExistFailure( 
                response.data
            ));
        }

      
        }catch(error){
        dispatch(authActions.verifyPhoneExistFailure(
            error
        ));
    }
}

export const sendResetPasswordLink = (email) => async (dispatch) => {
    try{
        dispatch(authActions.resetPasswordLinkRequest());
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/send/resetlink`, email, config);
        console.log(response);
        if(response.data.status){
            dispatch(authActions.resetPasswordLinkSuccess(
                 response.data.message,
              
            ));
            console.log('sucessss');
        }else{
            console.log(response.data);
            dispatch(authActions.resetPasswordLinkFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.resetPasswordLinkFailure(
            error
        ));
    }
}

export const resetPassword = (data) => async (dispatch) => {
    try{
        dispatch(authActions.resetPasswordRequest() );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/reset/password`, data, config);
        if(response.data.status){
            dispatch(authActions.resetPasswordSuccess(
                response.data.message
               
            ));
        }else{
            dispatch(authActions.resetPasswordFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.resetPasswordFailure(
            error
        ));
    }
}

export const setPin = (data) => async (dispatch) => {
    try{
        dispatch(authActions.setPinRequest());
 const USER_TOKEN = localStorage.getItem('USER_TOKEN');
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/set-pin`, data, config);
        console.log(response)
        if(response.status){
            dispatch(authActions.setPinSuccess(response.data.message));
        }else{
            dispatch(authActions.setPinFailure( 
                // response.message
                'Could not Set Pin!'
            ));
        }

      
        }catch(error){
        dispatch(authActions.setPinFailure(
            // error.response.data.message
            'Could not Set Pin!'
        ));
    }
}

export const verifyPin = (pin) => async (dispatch) => {
    try{
        dispatch(authActions.verifyPinRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/verify/pin`, {pin}, config);
        if(response.status){
            dispatch(authActions.verifyPinSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.verifyPinFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.verifyPinFailure(
            error
        ));
    }
}

export const setSecurityQuestion = (data) => async (dispatch) => {
    try{
        dispatch(authActions.setSecurityQuestionRequest() );
        const USER_TOKEN = localStorage.getItem('USER_TOKEN');
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/set-security-question`, data, config);
        if(response.status){
            dispatch(authActions.setSecurityQuestionSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.setSecurityQuestionFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.setSecurityQuestionFailure(
            error
        ));
    }
}

export const login = (data) => async (dispatch) => {
    try{
        dispatch(authActions.loginRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/login`, data, config);
        if(response.data.status){
            dispatch(authActions.loginSuccess(
               response.data.data,
            ));
            console.log(response.data);
           localStorage.setItem('USER_TOKEN', response.data.data.access_token);
           localStorage.setItem('LOGGED_IN', 'LOGGED IN SUCCESSFULLY');
           localStorage.setItem('USER_DETAILS', JSON.stringify(response.data));
           localStorage.setItem('SHOW_MODAL', 'SHOWMODAL');

        }else{
            dispatch(authActions.loginFailure( 
                response.data.message
            ));
        }
        // dispatch(authActions.loginFailure( 
        //     'LOGIN UNSUCCESSFUL TRY AGAIN!'
        // ));
      
        }catch(error){
            console.log(error.response.data.message);
        dispatch(authActions.loginFailure(
            error.response.data.message || 'Login Unsuccessful'
        ));
    }
}

export const  logoutUser = ()  =>  (dispatch) =>  {
    dispatch(userActions.resetUserData())
dispatch(authActions.logoutUser())
}

export const  logoutUserTimer = ()  =>  (dispatch) =>  {
    let detail = localStorage.getItem('USER_DETAILS')
    let tokenExpirationTime =JSON.parse(detail).data.expires_in;
    setTimeout(() =>{
        dispatch(userActions.resetUserData())
        dispatch(authActions.logoutUser())
      },tokenExpirationTime * 1000)

      console.log('logout timer');
  
}       