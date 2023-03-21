import React from 'react'
import './SignupLayout.css'
import scamtrust from '../../../assets/images/Logo.png'
import FooterLogo from '../../FooterLogo/FooterLogo'

const SignupLayout = ({ children }) => {
  return (
    <div className='sign-layout-wrapper'>
        {children}
        <div className='sign-layout-img-con'>
            <img className='sign-layout-img' src={scamtrust} alt="" />
        </div>
        <div className='sign-layout-conainer'>
            <div className='sign-layout-footer-con'>
              <FooterLogo />
            </div>
        </div>
    </div>
  )
}

export default SignupLayout