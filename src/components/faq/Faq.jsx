import React, { useState } from 'react'
// import {GiHamburgerMenu} from 'react-icons/gi'
// import { Link, useNavigate } from 'react-router-dom'
import VendorFaq from './VendorFaq'
import BuyerFaq from './BuyerFaq'
import Layout from '../Layout/Layout'
import './faq.css'

const Faq = () => {

  const [faq, setFaq] = useState(false);

  const handleVendor = () => {
    setFaq(false)
  }
  const handleBuyer = () => {
    setFaq(true)
  }

  const faqButton = "bg-[#262466] mx-5 px-5 py-2 rounded text-xl text-[#fff]"

  return (
    <Layout>
    <div>
        
        <div className='flex-column justify-center items-center mt-10'>
          <div className='flex items-center justify-center'>
          <button onClick={handleVendor}
          className={faq ?'mx-12 text-xl' : faqButton}>Vendor</button>

          <button onClick={handleBuyer} 
          className={faq ? faqButton : 'mx-12 text-xl'}>Buyer</button>
          </div>

        {faq ? <BuyerFaq /> : <VendorFaq /> }

        </div>


                         {/* T A B S */}
    {/* <div className="faq-tab flex-col items-center justify-center mt-5 md:mt-12 lg:mx-3">

  <ul className="nav nav-tabs flex items-center justify-center list-none mx-5 pt-8 lg:pb-3" id="tabs-tabVertical">
    <li className="nav-item lg:my-7">
      <a href="#tabs-vendorVertical" 
      className="file:nav-link
        no-underline
        text-colorPrimary
        lg:underline-offset-4
        text-center
        font-medium
        text-xl
        lg:text-2xl
        bg-white
        focus:bg-colorPrimary
        focus:text-white
        px-6
        md:px-12
        lg:px-12
        rounded-lg
        py-3
        my-2
        mx-3
        lg:text-left
        active" id="tabs-vendor-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-vendorVertical" role="tab"
        aria-controls="tabs-vendorVertical" aria-selected="true">VENDOR</a>
    </li>
    <li className="nav-item text-center lg:my-7" role="presentation">
      <a href="#tabs-buyerVertical"
      className="file:nav-link
      no-underline
      text-colorPrimary
      text-center
      font-medium
      text-xl
      lg:text-2xl
      bg-white
      focus:bg-colorPrimary
      focus:text-white
      leading-tight
      px-6
      md:px-12
      lg:px-12
      rounded-lg
      py-3
      my-2
      mx-3
      lg:text-left"
      id="tabs-buyer-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-buyerVertical" role="tab"
        aria-controls="tabs-buyerVertical" aria-selected="false">BUYER</a>
    </li>
  </ul>

  <div className="tab-content mt-5 flex-col items-center justify-center" id="tabs-tabContentVertical">
    <div className="tab-pane fade show active" id="tabs-vendorVertical" role="tabpanel"
      aria-labelledby="tabs-vendor-tabVertical">
      <VendorFaq />
    </div>
    <div className="tab-pane fade" id="tabs-buyerVertical" role="tabpanel" aria-labelledby="tabs-buyer-tabVertical">
      <BuyerFaq />
    </div>
  </div>
</div> */}


        </div>
        <hr />
        <br />           
        <br />           
        <br />           
    </Layout>
  )
}

export default Faq