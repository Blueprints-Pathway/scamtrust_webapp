import React from 'react'
import './Activate.css'
import logo from '../../../assets/images/Logo.png'
import congrats from '../../../assets/images/congrats.png'
import { Button } from 'antd'

const Activate = () => {
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
            <span style={{color: '#3AB75D', textDecoration: 'underline'}}> Isaac.orija@gmail.com</span>. Kindly click to activate Your ScamTrust account
            </p>
            <Button className='activate-content-btn'>Check Mail</Button>
        </div>
    </div>
    </div>
  )
}

export default Activate