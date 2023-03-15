import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router';
import { FidgetSpinner } from 'react-loader-spinner';
import classes from './UsersListPage.module.css';
import { useCallback } from 'react';
import { useReducer } from 'react';
const UsersListPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
    const[usersList, setUsersList] = useState();
    const[isLaoding, setIsLoading] = useState(true);
    const[reducerValue, forcedUpdate] = useReducer(x => x+1, 0);



    const deleteAccount = async (accountId) => {
      
            setIsLoading(true);
            
                try {
                    const API_URL = `${process.env.REACT_APP_BASE_URL}/admin/user/${accountId}`;
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${user_details?.data?.access_token}`,
                        },
                    };
                    
              const data = await axios.delete(API_URL,config);

              console.log(data)
                    swal({
                        icon: "success",
                        text: data.data.message,
                    });
                    forcedUpdate();
                } catch (error) {
                    swal({
                        icon: "error",
                        text: error.response.data.message,
                    });
              console.log(error)
                }
            setIsLoading(false);
            
      
    };
  useEffect(() => {
   
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/admin/users`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config)
        
        
        
				console.log(data?.data?.data, "user data customer dashboard");
				setUsersList(data?.data.data);
        // setIsLoading(false);
				console.log(usersList, "values");
				// return response;
			} catch (error) {
        console.log(error, "error");
        // setIsLoading(false);
	
        
        
        
      }})();
      
      setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reducerValue]);



  let data = <p>LOADING....</p>;
  if(usersList ==null){
    data = <p>LOADING....</p>;
  }else if(usersList.length == 0) {
    data = <p>NO USER DATA AVAILABLE!</p>
  
  }else{
 
     data = usersList?.map((data) => {
    return(
    <tr key={data.id}>
      <td>
        {data.id}
      </td>
      <td>
        {data.name === null ? 'null' : data.name}
      </td>
      <td>
        {data.username === null ? 'null' : data.username}
      </td>
      <td>
        {data.email}
      </td>
      <td>
        {data.phone}
      </td>
      <td>
        {data.location}
      </td>
      <td>
        {data.email_verified_at}
      </td>
      <td>
        {data.usertype}
      </td>
      <td>
        {data.public_id}
      </td>
      <td>
        {data.image_url}
      </td>
     
        <td><button onClick={() => (deleteAccount(data.id))}>
        DELETE</button></td>
    </tr>)}
 ) ;}

    return (
        <section className={classes.userListSection}>
          { isLaoding ? <FidgetSpinner/> :
                <table className={classes.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>LOCATION</th>
              <th>EMAIL_VERIFIED_AT</th>
              <th>USERTYPE</th>
              <th>PUBLIC_ID</th>
              <th>IMAGE_URL</th>
              
              <th>DELETE ACCOUNT</th>

            </tr>
          </thead>
          <tbody>

           {data}
          </tbody>
        </table>}

        <button onClick={() => {
            dispatch(logoutUser());
        }}>
          LOGOUT
        </button>
        <button onClick={() => {
          navigate('/admin-panel')
        }}>
          ADMIN PANEL
        </button>
       
      
        </section>
    );
};

export default UsersListPage;