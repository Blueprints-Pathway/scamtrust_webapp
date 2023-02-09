import React, { useState } from 'react'
import VendorFaq from './VendorFaq'
import BuyerFaq from './BuyerFaq'
import Layout from '../Layout/Layout'
import './faq.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
          <div className='flex items-center justify-start'>
          <button onClick={handleVendor}
          className={faq ?'mx-12 text-xl' : faqButton}>Vendor</button>

          <button onClick={handleBuyer} 
          className={faq ? faqButton : 'mx-12 text-xl'}>Buyer</button>
          </div>

        {faq ? <BuyerFaq /> : <VendorFaq /> }

        </div>

      </div>          

       {/* <Tabs className="mt-12">
    <TabList className="flex items-center justify-center">
      <Tab className="mx-12 text-3xl font-semibold py-2 px-5 text-[#262466]">Vendor</Tab>
      
      <Tab onClick={() => {console.log("tab clicked")
      }}
      className="mx-12 text-3xl font-semibold py-2 px-5 text-[#262466]">Buyer</Tab>
    </TabList>

    <TabPanel>
        <VendorFaq />
    </TabPanel>
    <TabPanel>
        <BuyerFaq />
    </TabPanel>
  </Tabs> */}

    </Layout>
  )
}

export default Faq