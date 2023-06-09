import React from 'react'
import './VendorMessage.css'
import vendor  from '../../../assets/images/vendor.jpeg'
import { GoQuote } from 'react-icons/go'

const Vendormessage = () => {
  return (
    <div className='ven-message-wrapper'>
        <div className='Ven-message-con'>
            <p className='ven-message-quote'><GoQuote style={{color: '#232164'}} /></p>
            <p className='ven-message'>
                As a vendor I am able to improve the services I render to my customers because ScamTrust provides me with monthly analysis report on how my business is performing.
            </p>
        </div>
        <div className='ven-message-bottom'>
            <div className='ven-message-img-con'>
                <img className='ven-message-img' src={vendor} alt="" />
            </div>
            <div className='ven-message-details'>
                <p className='ven-message-name'>Fadekemi Folalu</p>
                <p className='ven-message-status'>Vendor</p>
            </div>
        </div>
    </div>
  )
}

export default Vendormessage