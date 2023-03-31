import React from "react"
// import { Card } from 'antd';
import "./VendorProfileCard.css"
import { AiFillEye } from "react-icons/ai"
import Fundbutton from "../../buttons/fundbutton/Fundbutton"
import FooterLogo from "../../../assets/images/footerLogo.png"
import Withdrawbutton from "../../buttons/withdrawbutton/Withdrawbutton"

const VendorProfileCard = () => {
  return (
    <div className='profile-card-con'>
      <div className='profile-card-wrapper'>
        <div className='profile-card-container'>
          <h5 className='profile-card-top-type'>Wallet</h5>
          <div className='profile-card-top'>
            <p className='profile-card-top-name'>Hello Ridic Ventures</p>
            <small className='profile-card-top-id'>ID - 6057702</small>
          </div>
        </div>

        <hr className='profile-card-line' />
        <div className='profile-card-middle'>
          <div className='profile-card-icon-con'>
            <AiFillEye
              className='profile-card-icon'
              style={{ color: "#232164" }}
            />
          </div>
          <div className='profile-card-amount'>
            <div className='profile-card-total-con'>
              <small className='profile-card-total'>Total Balance</small>
              <p className='profile-card-balance-1'>
                <sup className='profile-card-sign'>₦</sup>500,000.00
              </p>
            </div>
            <div className='profile-card-total-con'>
              <small className='profile-card-total'>Pending Balance</small>
              <p className='profile-card-balance-2'>
                <sup className='profile-card-sign'>₦</sup>250,000.00
              </p>
            </div>
          </div>
        </div>
        <div className='profile-card-bottom'>
          <div className='profile-card-bottom-flex'>
            <h5 className='profile-card-text'>Secured by</h5>
            <img src={FooterLogo} alt='' />
          </div>
          <Withdrawbutton />
        </div>
      </div>
    </div>
  )
}

export default VendorProfileCard
