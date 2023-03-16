import React from 'react'
// import { Card } from 'antd';
import './CustomerProfileCard.css'
import { RxEyeClosed } from 'react-icons/rx'

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
                <RxEyeClosed className='profile-card-icon' style={{ fill: '#232164' }} />
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
            <button className='profile-bottom-withdraw'>WITHDRAW</button>
            <button className='profile-bottom-fund'>FUND</button>
          </div>
    </div>
    </div>
  )
}

export default CustomerProfileCard