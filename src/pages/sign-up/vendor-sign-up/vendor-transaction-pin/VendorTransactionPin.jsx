import React from 'react'
import SignupLayout from '../../../../components/signuplayout/SignupLayout'
import './VendorTransactionPin.css'

const VendorTransactionPin = () => {
  return (
    <SignupLayout>
        <div className='ven-transaction-wrapper'>
            <div className='ven-trans-top'>
               <p className='ven-trans-title1'>
                  Let’s help you secure your <span style={{color: '#3AB75D'}}>ScamTrust</span> Customer account. Kindly set your <span style={{color: '#3AB75D'}}>password</span> and <span style={{color: '#3AB75D'}}>transaction pin</span>.
               </p>
               <p className='ven-trans-title1'>
                  To set up your pin, input your 4-digit code and confirm it below.
               </p>
            </div>
            <div className='ven-trans-bottom'></div>
        </div>
    </SignupLayout>
  )
}

export default VendorTransactionPin