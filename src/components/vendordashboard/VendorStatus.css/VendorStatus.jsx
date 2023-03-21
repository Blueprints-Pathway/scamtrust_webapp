import React from "react"
import badge from "../../../assets/images/badge.png"
import trophy from "../../../assets/images/trophy.png"
import pin from "../../../assets/images/pin.png"
import "./VendorStatus.css"

function VendorStatus() {
  return (
    <div className='vendor-status-wrapper'>
      <div className='vendor-badge'>
        <img src={badge} alt='' />
      </div>

      <h3 className="vendor-name">Hello Ridic Ventures</h3>
      <p  className="vendor-desc">Here is what is going on with your business</p>
      <div className='vendor-progress-wrapper'>
      <div className="vendor-progress-pin">
            <img src={pin} alt="" />
          </div>
        <div className=''>
          <h4 className='vendor-progress-title'>Elite Vendor</h4>
        </div>
        <div>
        <div className="progress-transaction-wrapper">
          
        <div className='progress-transaction'>
            <h5 className="progress-text">Progress</h5>
            <h5 className="progress-text">200 transactions</h5>
          </div>
          <div className='progress'>
            <div className='progress-bar'></div>
          </div>
        </div>
        </div>
        <div>
          <img src={trophy} alt='' />
        </div>
      </div>
    </div>
  )
}

export default VendorStatus
