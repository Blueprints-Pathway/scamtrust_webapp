import React, { useState } from 'react'
import VendorFaq from './VendorFaq'
import BuyerFaq from './BuyerFaq'
import Layout from '../Layout/Layout'

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
        
        <div className='flex-column justify-center items-center mt-44'>
          <div className='flex items-center justify-start'>
          <button onClick={handleVendor}
          className={faq ?'mx-12 text-xl' : faqButton}>Vendor</button>

          <button onClick={handleBuyer} 
          className={faq ? faqButton : 'mx-12 text-xl'}>Buyer</button>
          </div>

        {faq ? <BuyerFaq /> : <VendorFaq /> }

        </div>

      </div>

    </Layout>
  )
}

export default Faq