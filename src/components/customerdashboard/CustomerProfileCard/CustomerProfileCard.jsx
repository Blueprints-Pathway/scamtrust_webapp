import React from 'react'
// import { Card } from 'antd';
import './CustomerProfileCard.css'
import { RxEyeClosed } from 'react-icons/rx'
import Withdrawbutton from '../../buttons/withdrawbutton/Withdrawbutton'
import Fundbutton from '../../buttons/fundbutton/Fundbutton'
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"



const CustomerProfileCard = () => {
  return (
    <div className='profile-card-con'>
    <div className='profile-card-wrapper'>
          <div className='profile-card-top'>
           <p className='profile-card-top-name'>Chukwudi Osinachi</p>
           <small className='profile-card-top-id'>ID - 6057702</small>
          </div>
          <hr className='profile-card-line' />
          <div className='profile-card-middle'>
            <div className='profile-card-icon-con'>
                <RxEyeClosed className='profile-card-icon' style={{ color: 'black' }} />
            </div>
            <div className='profile-card-amount'>
                <div className='profile-card-total-con'>
                    <small className='profile-card-total'>Total Balance</small>
                    <p className='profile-card-balance-1'><sup className='profile-card-sign'>₦</sup>500,000.00</p>
                </div>
                <div className='profile-card-total-con'>
                    <small className='profile-card-total'>Pending Balance</small>
                    <p className='profile-card-balance-2'><sup className='profile-card-sign'>₦</sup>250,000.00</p>
                </div>
            </div>
          </div>
          <div className='profile-card-bottom'>
            <Withdrawbutton />
            <Fundbutton />
          </div>
    </div>
    </div>
  )
}

export default CustomerProfileCard