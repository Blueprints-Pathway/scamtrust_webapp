import React from 'react'
import './KnowMore.css'
import venImg from '../../Assets/ven-know-img.jpg'
import {CiDeliveryTruck} from "react-icons/ci"
import {MdOutlinePaid} from "react-icons/md"
import {GoVerified} from "react-icons/go"

const VendorInfo = () => {
  return (
    <div>
        <div className="info-top">
            <div className="info-intro">
                <p className='info-intro-title'>Do you sell value products or services, but struggle with first-time buyers who don’t trust you ?</p>
                <p className='info-intro-words'>ScamTrust eliminates the issue of distrust, distance and transaction uncertainties, we help you and your customers secure payments, now you can concentrate on building a great brand.</p>
            </div>

              {/* CUSTOMER/VENDOR INSTRUCTIONS */}
              
              <div className="customer-info">
                <div className="customer-left">
                    <div className="cus-content">
                      <div className="title-con">
                       <p className='cus-title'>Confirm Transaction</p> 
                       <GoVerified className='know-icon' />
                       </div>                                        
                       <p className='cus-words'>Confirm customer’s transaction.</p>
                    </div>
                    <div className="cus-content">
                     <div className="title-con">
                       <p className='cus-title'>Deliver</p>
                       <CiDeliveryTruck className='know-icon' />
                      </div> 
                       <p className='cus-words'>Deliver your quality product.</p>
                    </div>
                    <div className="cus-content">
                     <div className="title-con">
                       <p className='cus-title'>Get paid</p>
                       <MdOutlinePaid className='know-icon' />
                      </div> 
                       <p className='cus-words'>Get your money immediately.</p>
                    </div>
                </div>

                <div className="customer-right">
                    <img src={venImg} alt="..." className='cus-img' />
                </div>
              </div>
              <hr className='info-hr' />
              </div>
    </div>
  )
}

export default VendorInfo