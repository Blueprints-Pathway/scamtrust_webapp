import React from 'react'
import './FooterLogo.css'
import Logo from '../../assets/images/footerLogo.png'

const FooterLogo = () => {
  return (
    <div className='footer-logo-wrapper'>
        <p className='footer-logo-texts'>Secured by</p>
        <img className='footer-logo-img' src={Logo} alt="" />
    </div>
  )
}

export default FooterLogo