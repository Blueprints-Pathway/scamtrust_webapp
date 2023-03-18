import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Faq.css'
import Google from '../../Assets/Google.png'
import Apple from '../../Assets/Apple.png'
import FaqImg from '../../Assets/milli-1.png'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import BuyerFaq from './BuyerFaq';
import VendorFaq from './VendorFaq'
import AndroidApk from '../../Assets/ScamTrust.apk'


const Faq = () => {
  const { pathname } = useLocation();

  const [faq, setFaq] = useState(<BuyerFaq />);

   const handleClick = () => {
    setFaq(<BuyerFaq />); 
   }
   const handleClick2 = () => {
    setFaq(<VendorFaq />)
   }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='faq-wrapper'>
      <Navbar />
      <div className="faq-head">
        <div className='faq-top'>
            <p className='faq-title'>Frequently Asked Questions (FAQs)</p>
            <input className='faq-input' placeholder='Search for a question...' />
        </div>
        <div>
    </div>

          <div className='faqTab'>
            <button 
            className='faq-btn'
            onClick={handleClick}
            autoFocus
            >
              Customer
              </button>

            <button
            className='faq-btn'
            onClick={handleClick2}
            >
              Vendor
              </button>
          </div>

      <div>
        {faq}
      </div>
        <hr className='hr'/>
        </div>

               
                      {/* BOTTOM */}

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
  )
}

export default Faq;