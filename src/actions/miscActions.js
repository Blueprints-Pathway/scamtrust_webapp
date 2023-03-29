import axios from "axios";
import { miscActions } from "../reducers/miscReducers";
import { BASE_URL, USER_TOKEN } from "../constants/constants";

export const createSecurityQuestion = (data) => async (dispatch) => {
    try{
        dispatch(miscActions.createSecurityQuestionRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`
            },
          };
        
        const response = await axios.post(`${BASE_URL}/misc/create/question`, data, config);
        if(response.status){
            dispatch(miscActions.createSecurityQuestionSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.createSecurityQuestionFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(miscActions.createSecurityQuestionFailure(
            error
        ));
    }
}

export const createIndustry = (data) => async (dispatch) => {
    try{
        dispatch(miscActions.createIndustryRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${BASE_URL}/misc/create/industry`, data, config);
        if(response.status){
            dispatch(miscActions.createIndustrySuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.createIndustryFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(miscActions.createIndustryFailure(
            error
        ));
    }
}
export const createFAQ = (data) => async (dispatch) => {
    try{
        dispatch(miscActions.createFAQRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.get(`${BASE_URL}/misc/create/faq`, config);
        if(response.status){
            dispatch(miscActions.createFAQSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.createFAQFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(miscActions.createFAQFailure(
            error
        ));
    }
}
export const listFAQs = () => async (dispatch) => {
    try{
        dispatch(miscActions.listFAQRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.get(`${BASE_URL}/misc/list/faqs`,config);
        if(response.status){
            dispatch(miscActions.listFAQSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.listFAQFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.listFAQFailure(
            error
        ));
    }
}

export const verifyPhoneExist = (phone) => async (dispatch) => {
    try{
        dispatch(miscActions.verifyPhoneExistRequest );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${BASE_URL}/auth/verify/phone`, {phone}, config);
        if(response.status){
            dispatch(miscActions.verifyPhoneExistSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.verifyPhoneExistFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.verifyPhoneExistFailure(
            error
        ));
    }
}

export const sendResetPasswordLink = (email) => async (dispatch) => {
    try{
        dispatch(miscActions.resetPasswordLinkRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${BASE_URL}/auth/send/resetlink`, {email}, config);
        if(response.status){
            dispatch(miscActions.resetPasswordLinkSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.resetPasswordLinkSuccess( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.resetPasswordLinkSuccess(
            error
        ));
    }
}

export const resetPassword = (data) => async (dispatch) => {
    try{
        dispatch(miscActions.resetPasswordRequest );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${BASE_URL}/auth/reset/password`, data, config);
        if(response.status){
            dispatch(miscActions.resetPasswordSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.resetPasswordFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.resetPasswordFailure(
            error
        ));
    }
}

export const setPin = (pin) => async (dispatch) => {
    try{
        dispatch(miscActions.setPinRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${BASE_URL}/auth/set-pin`, {pin}, config);
        if(response.status){
            dispatch(miscActions.setPinSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.setPinFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.setPinFailure(
            error
        ));
    }
}

export const verifyPin = (pin) => async (dispatch) => {
    try{
        dispatch(miscActions.verifyPinRequest);
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${BASE_URL}/auth/verify/pin`, {pin}, config);
        if(response.status){
            dispatch(miscActions.verifyPinSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.verifyPinFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.verifyPinFailure(
            error
        ));
    }
}

export const setSecurityQuestion = (data) => async (dispatch) => {
    try{
        dispatch(miscActions.setSecurityQuestionRequest );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${BASE_URL}/auth/set-security-question`, data, config);
        if(response.status){
            dispatch(miscActions.setSecurityQuestionSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.setSecurityQuestionFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.setSecurityQuestionFailure(
            error
        ));
    }
}

export const login = (data) => async (dispatch) => {
    try{
        dispatch(miscActions.loginRequest );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${BASE_URL}/auth/login`, data, config);
        if(response.status){
            dispatch(miscActions.loginSuccess({
               data: response.data,
            }));
            localStorage.setItem('USER_TOKEN', response.data.access_token);
        }else{
            dispatch(miscActions.loginFailure( 
                response.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.loginFailure(
            error
        ));
    }
}

export const listSecurityQuestion = () => async (dispatch) => {
    try{
        dispatch(miscActions.listSecurityQuestionRequest());
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`
            },
          };
        
        const response = await axios.get(`${BASE_URL}/misc/list/questions`, config);
        if(response.status){
            dispatch(miscActions.listSecurityQuestionSuccess({
                message: response.message,
                data: response.data,
            }));
        }else{
            dispatch(miscActions.listSecurityQuestionFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(miscActions.listSecurityQuestionFailure(
            error
        ));
    }
}
export const vendorSearch = (data) => async (dispatch) => {
    try{
        dispatch(miscActions.vendorSearchRequest() );
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${BASE_URL}/misc/vendor/search`, data, config);
        if(response.data.status){
            dispatch(miscActions.vendorSearchSuccess({
               data: response.data.data,
            }));

         console.log(response.data.data)
         console.log(response)
        }else{
            dispatch(miscActions.vendorSearchFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.vendorSearchFailure(
            error
        ));
    }
}

export const listBusinessTypes= () => async (dispatch) => {
    try{
        dispatch(miscActions.listBusinessTypeRequest());
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`
            },
          };
        
        const response = await axios.get(`${BASE_URL}/misc/list/businesstypes`, config);
        if(response.status){
            dispatch(miscActions.listBusinessTypeSuccess(
                response.data
            ));
        }else{
            dispatch(miscActions.listBusinessTypeFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(miscActions.listBusinessTypeFailure(
            error
        ));
    }
}
export const listBusinessIndustry = () => async (dispatch) => {
    try{
        dispatch(miscActions.listIndustriesRequest());
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${USER_TOKEN}`
            },
          };
        
        const response = await axios.get(`${BASE_URL}/misc/list/industries`, config);
        if(response.status){
            dispatch(miscActions.listIndustriesSuccess(
                response.data
            ));
        }else{
            dispatch(miscActions.listIndustriesFailure( 
                response.message
            ));
        }

      
    }catch(error){
        dispatch(miscActions.listIndustriesFailure(
            error
        ));
    }
}

export const getVendor = (id) => async (dispatch) => {
  let token =  localStorage.getItem('USER_TOKEN');
    try{
        dispatch(miscActions.getVendorRequest() );
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
          };
        
        const response = await axios.get(`${BASE_URL}/misc/get/vendor/${id}`, config);
        if(response.data.status){
            dispatch(miscActions.getVendorSuccess({
               data: response.data.data,
            }));

         console.log(response.data.data)
         console.log(response)
        }else{
            dispatch(miscActions.getVendorFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(miscActions.getVendorFailure(
            error
        ));
    }
}