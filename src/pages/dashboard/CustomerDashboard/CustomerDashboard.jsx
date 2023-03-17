import React from 'react'
import CustDashTransaction from '../../../components/CustDashTransaction/CustDashTransaction'
import CustomerProfileCard from '../../../components/CustomerProfileCard/CustomerProfileCard'
import FaqandChat from '../../../components/Faq&Chat/FaqandChat'
import FeeCalculator from '../../../components/FeeCalculator/FeeCalculator'
import FooterLogo from '../../../components/FooterLogo/FooterLogo'
import './CustomerDashboard.css'

const CustomerDashboard = () => {
  return (
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
  )
}

export default CustomerDashboard
