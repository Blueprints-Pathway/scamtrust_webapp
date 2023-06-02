import React from 'react'
import './Activate.css'
import logo from '../../../assets/images/logo.png'
import congrats from '../../../assets/images/congrats.png'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../actions/authActions'

const Activate = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.register)
    const navigate = useNavigate();
    //console.log(userInfo)
  return (
    <div className='activate-con'>
        <div className='activate-header'>
            <img className='activate-logo' src={logo} alt="" />
        </div>
    <div className='activate-wrapper'>
        <div className='activate-img-con'>
            <img className='activate-img' src={congrats} alt="" />
        </div>
        <div className='activate-content-con'>
            <p className='activate-content-words'>
               Congrats! We have sent a confirmation link to 
            <span style={{color: '#3AB75D', textDecoration: 'underline'}}> {userInfo.email}</span>. Kindly click to activate Your ScamTrust account
            </p>
            <Button   onClick={() => {
                dispatch(logoutUser());
                navigate('/sign-in');
                window.location.href = 'https://mail.google.com/';

               }} 
               className='activate-content-btn'> Check Mail
                </Button>
        </div>
      
    </div>
    </div>
  )
}

export default Activate