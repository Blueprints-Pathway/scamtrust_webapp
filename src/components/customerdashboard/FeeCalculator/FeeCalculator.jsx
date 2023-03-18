import React from 'react'
import './FeeCalculator.css'

const FeeCalculator = () => {
  return (
    <div className='fee-calc-con'>
    <div className='fee-Calc-wrapper'>
        <div className='fee-calc-top'>
            <p className='fee-calc-title'>Fee Calculator</p>
        </div>
        <hr className='fee-calc-line' />
        <div className='fee-calc-bottom'>
            <div className='fee-calc-first'>
                <p className='fee-calc-first-label'>Enter Transaction amount:</p>
                <input className='fee-calc-first-input' type="text" placeholder='Enter amount' />
            </div>
            <div className='fee-calc-second'>
                <p className='fee-calc-first-label'>Transaction fee:</p>
                <input className='fee-calc-first-input2' type="text" placeholder='₦' />
            </div>
            <div className='fee-calc-first'>
                <p className='fee-calc-first-label'>Total amount:</p>
                <input className='fee-calc-first-input2' type="text" placeholder='₦' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default FeeCalculator