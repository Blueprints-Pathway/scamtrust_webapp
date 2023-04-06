import React from 'react'
// import { Card } from 'antd';
import './CustomerProfileCard.css'
import { RxEyeClosed } from 'react-icons/rx'
import Fundbutton from '../../buttons/fundbutton/Fundbutton'
import { useSelector } from 'react-redux'
import Withdrawbutton from '../../buttons/withdrawbutton/Withdrawbtn'

const CustomerProfileCard = () => {
  const {loading, error, data} = useSelector(state => state.user);
  console.log(data)
  return (
    <div className='profile-card-con'>
    <div className='profile-card-wrapper'>
          <div className='profile-card-top'>
           <p className='profile-card-top-name'>{data.data.username}</p>
           <small className='profile-card-top-id'>ID - {data.data.id}</small>
          </div>
          <hr className='profile-card-line' />
          <div className='profile-card-middle'>
            <div className='profile-card-icon-con'>
                <RxEyeClosed className='profile-card-icon' style={{ color: 'black' }} />
            </div>
            <div className='profile-card-amount'>
                <div className='profile-card-total-con'>
                    <small className='profile-card-total'>Total Balance</small>
                    <p className='profile-card-balance-1'><sup className='profile-card-sign'>₦</sup>{data.walletBalance}</p>
                </div>
                <div className='profile-card-total-con'>
                    <small className='profile-card-total'>Pending Balance</small>
                    <p className='profile-card-balance-2'><sup className='profile-card-sign'>₦</sup>{data.outgoingWalletBalance}</p>
                </div>
            </div>
          </div>
          <div className='profile-card-bottom'>
            <Withdrawbutton />
            <Fundbutton accountNumber = {data.virtualAccount.account_number}/>
          </div>
    </div>
    </div>
  )
}

export default CustomerProfileCard