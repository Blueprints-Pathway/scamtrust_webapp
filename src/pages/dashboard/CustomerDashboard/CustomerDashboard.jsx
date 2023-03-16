import React from 'react'
import CustomerProfileCard from '../../../components/CustomerProfileCard/CustomerProfileCard'
import FaqandChat from '../../../components/Faq&Chat/FaqandChat'
import FeeCalculator from '../../../components/FeeCalculator/FeeCalculator'
import './CustomerDashboard.css'

const CustomerDashboard = () => {
  return (
        <div className='cust-dash-wrapper'>
            <CustomerProfileCard />
            <FeeCalculator />
            <FaqandChat />
        </div>
  )
}

export default CustomerDashboard
