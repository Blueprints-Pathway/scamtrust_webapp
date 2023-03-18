import React from 'react'
import './KnowMore.css'
import cusImg from '../../Assets/customer-img.jpg'
import {BsPhoneVibrate} from "react-icons/bs"
import {MdOutlinePayments} from "react-icons/md"
import {GoPackage} from "react-icons/go"
import {GoVerified} from "react-icons/go"

const CustomerInfo = () => {
  return (
    <div>
        <div className="info-top">
            <div className="info-intro">
                <p className='info-intro-title'>Do you desire to pay for services but are not sure about the quality and credibility of the seller ?</p>
                <p className='info-intro-words'>ScamTrust helps you to secure your payments while ensuring you get value for your money. No more being a victim of scam from online vendors.</p>
            </div>

              {/* CUSTOMER/VENDOR INSTRUCTIONS */}
              
              <div className="customer-info">
                <div className="customer-left">
                    <div className="cus-content">
                      <div className="title-con">
                       <p className='cus-title'>Create Transaction</p> 
                       <BsPhoneVibrate className='know-icon' />
                       </div>                                        
                       <p className='cus-words'> Initiate a transaction with your desired vendor.</p>
                    </div>
                    <div className="cus-content">
                     <div className="title-con">
                       <p className='cus-title'>Pay </p>
                       <MdOutlinePayments className='know-icon' />
                      </div> 
                       <p className='cus-words'>Pay into ScamTrust wallet.</p>
                    </div>
                    <div className="cus-content">
                     <div className="title-con">
                       <p className='cus-title'>Receive your order</p>
                       <GoPackage className='know-icon' />
                      </div> 
                       <p className='cus-words'>Receive and Confirm your order quality.</p>
                    </div>
                    <div className="cus-content">
                     <div className="title-con">
                       <p className='cus-title'>Complete Transaction</p>
                        <GoVerified className='know-icon' />
                     </div> 
                       <p className='cus-words'>Rate the vendor and complete your transaction.</p>
                    </div>
                </div>

                <div className="customer-right">
                    <img src={cusImg} alt="..." className='cus-img' />
                </div>
              </div>
              <hr className='info-hr' />
              </div>
    </div>
  )
}

export default CustomerInfo