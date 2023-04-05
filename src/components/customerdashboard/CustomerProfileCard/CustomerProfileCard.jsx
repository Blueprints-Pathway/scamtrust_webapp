import React, { useState } from 'react'
// import { Card } from 'antd';
import './CustomerProfileCard.css'
import { RxEyeClosed } from 'react-icons/rx'
import Fundbutton from '../../buttons/fundbutton/Fundbutton'
import { useSelector } from 'react-redux'
import Withdrawbutton from '../../buttons/withdrawbutton/Withdrawbtn'
import { FaEye } from 'react-icons/fa'

const CustomerProfileCard = () => {
  const {loading, error, data} = useSelector(state => state.user);
  console.log(data)

  const [eye, setEye] = useState(false);

  const handleClick = () => {
    setEye((prevState)=> !prevState)
}

  return (
    <div className='profile-card-con'>
    <div className='profile-card-wrapper'>
          <div className='profile-card-top'>
           <p className='profile-card-top-name'>{data.data.username}</p>
           <small className='profile-card-top-id'>ID - 6057702</small>
          </div>
          <hr className='profile-card-line' />
          <div className='profile-card-middle'>
            <div onClick={handleClick}
            className='profile-card-icon-con'>
              { eye ? <FaEye className='profile-card-icon' />  :  <RxEyeClosed className='profile-card-icon' style={{ color: 'black' }} />}
            </div>
            <div className='profile-card-amount'>
                <div className='profile-card-total-con'>
                    <small className='profile-card-total'>Total Balance</small>
                    { eye ?
                       <p className='profile-card-balance-1'><sup className='profile-card-sign'>₦</sup>{data.walletBalance}</p>
                          : 
                      <p className='profile-card-balance-1'><sup className='profile-card-sign'>₦</sup>*******</p>
                    }
                </div>
                <div className='profile-card-total-con'>
                    <small className='profile-card-total'>Pending Balance</small>
                    { eye ?
                      <p className='profile-card-balance-2'><sup className='profile-card-sign'>₦</sup>{data.outgoingWalletBalance}</p>
                          :
                      <p className='profile-card-balance-2'><sup className='profile-card-sign'>₦</sup>*******</p>
                    }
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