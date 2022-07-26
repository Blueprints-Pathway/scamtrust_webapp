import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const token=localStorage?.getItem("")
const authState={
    loading:false,
    token,
    isAuth:null,
    user:null,

}

export const registerAsync = createAsyncThunk(
    "auth/registerAsync",
    async (payload) => {
       try {
        const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/register`;
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const request = await axios.post(API_URL,payload,config);
        const response = request.data;
        console.log(token,"payload")
        console.log(request);
          return response;
       } catch (error) {
       
           console.log(error.response)
       }
    }

);


export const authSlice = createSlice({
    name:"auth",
    initialState:authState,
    extraReducers:{
        [registerAsync.pending]:(state,action)=>{
            state.loading = true
        },
        [registerAsync.fulfilled]:(state,action)=>{
            localStorage.setItem("token",action.payload.access_token)
            state.token = action.payload.access_token;
            state.isAuth = true
            state.user=action.payload.data
            state.loading = false
        },
        [registerAsync.rejected]:(state,action)=>{
            state.loading = false
        },
    },

    
});

export default authSlice.reducer;