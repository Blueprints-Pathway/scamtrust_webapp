import React from 'react'
import CustDashTransaction from '../../../components/customerdashboard/CustDashTransaction/CustDashTransaction'
import CustomerProfileCard from '../../../components/customerdashboard/CustomerProfileCard/CustomerProfileCard'
import FaqandChat from '../../../components/customerdashboard/Faq&Chat/FaqandChat'
import FeeCalculator from '../../../components/customerdashboard/FeeCalculator/FeeCalculator'
import FooterLogo from '../../../components/FooterLogo/FooterLogo'
import AppLayout from '../../../components/Layout/AppLayout'
// import FooterLogo from '../../../components/logo/FooterLogo/FooterLogo'
import './CustomerDashboard.css'

const CustomerDashboard = () => {
  return (
    <AppLayout>
        <div className='cust-dash-wrapper'>

          <div className='cust-dash-left'>
            <CustomerProfileCard />
            <FeeCalculator />
            <div className='cust-dash-bigScreen'>
              <FaqandChat />
              <FooterLogo />
            </div>
          </div>

          <div className='cust-dash-right'>
            <CustDashTransaction />
            <div className='cust-dash-smallScreen'>
              <FaqandChat />
              <FooterLogo />
            </div>
          </div>

        </div>
     </AppLayout>
  )
}

export default CustomerDashboard
