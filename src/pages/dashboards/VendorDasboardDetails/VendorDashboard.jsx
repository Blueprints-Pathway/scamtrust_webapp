import React from "react"
import VendDashTransaction from "../../../components/vendordashboard/VendDashTransaction/VendDashTransaction"
import VendorProfileCard from "../../../components/vendordashboard/VendorProfileCard/VendorProfileCard"
import FaqandChat from "../../../components/vendordashboard/Faq&Chat/FaqandChat"
import FeeCalculator from "../../../components/vendordashboard/FeeCalculator/FeeCalculator"
import FooterLogo from "../../../components/FooterLogo/FooterLogo"
import "./VendorDashboard.css"
import VendorStatus from "../../../components/vendordashboard/VendorStatus.css/VendorStatus"

const VendorDashboard = () => {
  return (
    <div className='cust-dash-wrapper'>
      <div className='cust-dash-right'>
        <VendorStatus/>
        <VendDashTransaction />
        <div className='cust-dash-smallScreen'>
          <FaqandChat />
          <FooterLogo />
        </div>
      </div>
      <div className='cust-dash-left'>
        <VendorProfileCard />
       
      </div>

      
      
     
    </div>
  )
}

export default VendorDashboard
