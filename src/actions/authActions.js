import axios from "axios";
import { authActions } from "../reducers/authReducer";

const baseUrl = "https://scamtrust.herokuapp.com/api/v1";

export const registerUser = (data) => async (dispatch) => {
    try{
        dispatch(authActions.userRegistrationRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/register`, data, config);
        if(response.status){
            dispatch(authActions.userRegistrationSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.userRegistrationFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(authActions.userRegistrationFailure(
            error
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
export const verifyEmailExist = (email) => async (dispatch) => {
    try{
        dispatch(authActions.verifyEmailExistRequest );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/verify/email`, {email}, config);
        if(response.status){
            dispatch(authActions.verifyEmailExistSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.verifyEmailExistFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.verifyEmailExistFailure(
            error
        ));
    }
}

export const verifyPhoneExist = (phone) => async (dispatch) => {
    try{
        dispatch(authActions.verifyPhoneExistRequest );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/verify/phone`, {phone}, config);
        if(response.status){
            dispatch(authActions.verifyPhoneExistSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.verifyPhoneExistFailure( 
                response.message
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
        dispatch(authActions.resetPasswordLinkRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/send/resetlink`, {email}, config);
        if(response.status){
            dispatch(authActions.resetPasswordLinkSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.resetPasswordLinkSuccess( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.resetPasswordLinkSuccess(
            error
        ));
    }
}

export const resetPassword = (data) => async (dispatch) => {
    try{
        dispatch(authActions.resetPasswordRequest );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/reset/password`, data, config);
        if(response.status){
            dispatch(authActions.resetPasswordSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.resetPasswordFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.resetPasswordFailure(
            error
        ));
    }
}

export const setPin = (pin) => async (dispatch) => {
    try{
        dispatch(authActions.setPinRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/auth/set-pin`, {pin}, config);
        if(response.status){
            dispatch(authActions.setPinSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(authActions.setPinFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.setPinFailure(
            error
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
        dispatch(authActions.setSecurityQuestionRequest );
        const config = {
            headers: {
              "Content-Type": "application/json",
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
        }else{
            dispatch(authActions.loginFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.loginFailure(
            error.response.data.message
        ));
    }
}

export const  logoutUser = ()  =>  (dispatch) =>  {
dispatch(authActions.logoutUser())
}