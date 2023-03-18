import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import './LearnMore.css'
import learnImg from '../../Assets/learn-img.png'
import Google from '../../Assets/Google.png'
import Apple from '../../Assets/Apple.png'
import FaqImg from '../../Assets/milli-1.png'
import Footer from '../Footer/Footer'

const LearnMore = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
  return (
    <>
        <Navbar />
        
        <div>
            <div className="learn-con">

                <div className="learn-block learn-first-block">
                    <div className="learn-left learn-first-right">
                        <h2 className='learn-title'>Initiate a Transaction</h2>
                        <p className='learn-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Crem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.</p>
                    </div>
                    <div className="learn-first-right">
                        <img src={learnImg} alt="..." />
                    </div>

                </div>
                <div className="learn-block learn-second-block">
                 <div className="learn-left learn-second-left">
                    <img src={learnImg} alt="..." />
                 </div>
                <div className="learn-second-right">
                        <h2 className='learn-title'>Make Payments</h2>
                        <p className='learn-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Crem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.</p>
                    </div>
                </div>

                <div className="learn-block learn-third-block">
                <div className="learn-left learn-third-left">
                        <h2 className='learn-title'>Deliver and Complete Transaction</h2>
                        <p className='learn-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Crem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.</p>
                    </div>
                    <div className="learn-third-right">
                        <img src={learnImg} alt="..." />
                    </div>
                </div>
            </div>

            <hr className='learn-hr' />


                   {/* BOTTOM JSX COPIED FROM faq.jsx
                       STYLES ARE IN faq.css file
                   */}

            <div className="learn-milli-con">

            <div className="faq-tail">
          <div className="tail-left">
            <img className='faq-img' src={FaqImg} alt="..." />
          </div>
          <div className="tail-right">
            <p className='tail-title'>1 Million+ Customers</p>
            <p className='tail-words'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Cras integer bibendum velit fermentum feugiat auctor sed id orci. Mauris et lorem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.
            </p>
            <button className='tail-btn'>Register</button>
            <div className='download'>
            <button className='g-btn down-btn'>
              <img src={Google} alt='...' />
              <span>
                <p className='t-btn-word'>Get on</p>
                <h1 className='t-btn-words'>Google Play</h1>
              </span>
              </button>
              <button className='app-btn down-btn'>
                <img src={Apple} alt='...' />
                <span>
                <p className='t-btn-word'>Download on</p>
                <h1 className='t-btn-words'>App Store</h1>
                </span>
              </button>
            </div>
            </div>
            </div>
            <hr className='hr hr-btm' />
                     {/* BOTTOM ENDING */}

            </div>
            <Footer />
        </div>

    </>
  )
}

export default LearnMore