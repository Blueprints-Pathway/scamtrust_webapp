import React from 'react'
import Activate from '../../../../components/sign-up/activate/Activate'
// import SignupLayout from '../../../../components/sign-up/signuplayout/SignupLayout'
import Vendormessage from '../../../../components/sign-up/vendormessage/VendorMessage'
import './VendorActivate.css'

const VendorActivate = () => {
  return (
        <div className='vendor-activate-wrapper'>
            <div className='ven-activate-left'>
                <Activate />
            </div>
            <div className='ven-activate-right'>
                <Vendormessage />
            </div>
        </div>
  )
}

export default VendorActivate