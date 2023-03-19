import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './KnowMore.css'
import Footer from '../Footer/Footer'
import Google from '../../Assets/Google.png'
import Apple from '../../Assets/Apple.png'
import FaqImg from '../../Assets/milli-1.png'
import CustomerInfo from './CustomerInfo'
import VendorInfo from './VendorInfo'
import AndroidApk from '../../Assets/ScamTrust.apk'

const KnowMore = () => {
  const [show, setShow] = useState(<CustomerInfo />);

  const handleCus = () => {
    setShow(<CustomerInfo />)
  }

  const handleVen = () => {
    setShow(<VendorInfo />)
  }

  return (
    <div className='info-wrapper'>
        <Navbar />
        <div className="info-con">
          <div className="info-top">
            <div className="info-btn-div">
                <button
                onClick={handleCus} 
                className='info-btn'
                autoFocus
                >Customer</button>

                <button 
                onClick={handleVen} 
                className='info-btn'
                >
                  Vendor</button>
            </div> 
                         {show}
              </div>  

                    {/* B O T T O M */}
        <div className="faq-tail">
          <div className="tail-left">
            <img className='faq-img' src={FaqImg} alt="..." />
          </div>
          <div className="tail-right">
            <p className='tail-title'>Get protected by ScamTrust</p>
            <p className='tail-words'>
            An infrastructure that enforces two-party agreement. For your financial security is our priority.
            </p>
            <button className='tail-btn'>Register</button>
            <div className='download'>
              <a className='download-link' href={AndroidApk}>
            <button className='g-btn down-btn'>
              <img src={Google} alt='...' />
              <span>
                <p className='t-btn-word'>Get on</p>
                <h1 className='t-btn-words'>Google Play</h1>
              </span>
              </button>
              </a>

              <a className='download-link' href="#">
              <button className='app-btn down-btn'>
                <img src={Apple} alt='...' />
                <span>
                <p className='t-btn-word'>Download on</p>
                <h1 className='t-btn-words'>App Store</h1>
                </span>
              </button>
              </a>

            </div>
          </div>
        </div>
        
        <hr className='hr hr-btm' />
        <Footer />
        </div>
  
    </div>
  )
}

export default KnowMore;