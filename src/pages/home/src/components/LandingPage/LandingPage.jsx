import React from 'react'
import './landingpage.css'
import introImg from '../../Assets/phones.png'
import Apple from '../../Assets/Apple.png'
import Google from '../../Assets/Google.png'
import scan from '../../Assets/qr-code.png'
// import AndroidApk from '../../Assets/ScamTrust.apk'



const LandingPage = () => {
  return (
    <>
    <div className='land-con'>             
    <div className='land'>
        <div className='land-left'>
            <div className='land-title'>
                <h1>Secure all </h1>
                <h1 className='mid-h1'>Transactions</h1>
                <h1>with us today</h1>
            </div>
            <p className='land-words'>
            Protect yourself today from payment fraud and scams on online transactions. Enjoy secure, fraud-free transactions today.
            </p>
        </div>

        <div className='land-right'>
            <div className='circle'>
        <img className='land-img' src={introImg} alt='...' />
            </div>
        </div>
    </div>
                   {/* DOWNLOAD */}
        <div className='btm-div'>        
                 {/* DOWNLOAD BUTTON */}
           <div className='dwn-div'>
            <a className='download-link' href="https://play.google.com/store/apps/details?id=com.scamtrust.angular" target='_blank' rel="noreferrer">
              <button className='g-btn download-btn'>
              <img src={Google} alt='...' />
              <span>
                <p className='btn-word'>Get on</p>
                <h1 className='btn-words'>Google Play</h1>
              </span>
              </button>
              </a>

              <a className='download-link' href="#">
              <button className='app-btn download-btn'>
                <img src={Apple} alt='...' />
                <span>
                <p className='btn-word'>Download on</p>
                <h1 className='btn-words'>App Store</h1>
                </span>
              </button>
              </a>
            </div>
                      {/* SCAN DOWNLOAD */}
             <button className='scan'>
                <p className='scan-words'>
                    Join our community
                </p>
                <img className='scan-img' src={scan} alt="..." />
            </button>     
        </div>
    </div>

    </>
  )
}

export default LandingPage