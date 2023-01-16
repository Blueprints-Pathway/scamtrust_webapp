import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import VendorFaq from './VendorFaq'
import BuyerFaq from './BuyerFaq'

const Faq = () => {
    const [nav, setNav] = useState(false)

    const changeNav = () => {
        setNav(true);
    }

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    const initialStyle = `
    file:nav-link
    no-underline
    text-colorPrimary
    active:underline
    lg:underline-offset-4
    text-center
    font-medium
    text-xl
    lg:text-2xl
    bg-white
    leading-tight
    px-6
    md:px-12
    lg:px-12
    py-3
    my-2
    mx-3
    rounded-lg
    lg:text-left
    active `
    const afterStyle =`
    file:nav-link
    no-underline
    text-white
    active:underline
    lg:underline-offset-4
    text-center
    font-medium
    text-xl
    lg:text-2xl
    bg-colorPrimary
    leading-tight
    px-6
    md:px-12
    lg:px-12
    py-3
    my-2
    mx-3
    rounded-lg
    lg:text-left
    active `

  return (
    <div>
            {/* H E A D E R */}
        <div className='flex items-center justify-between px-7 box-border shadow'>
            <div>
                <img className='w-36 h-36 md:ml-12 lg:ml-28'
                src={logo} alt="" />
            </div>
            <div>
                <div className='hidden md:hidden lg:flex items-center justify-between mr-12'>
                    <button onClick={handleClick} className='bg-colorPrimary py-3 px-5 rounded-lg text-white text-xl mx-3'>Sign in</button>
                    <button onClick={handleClick} className='bg-colorPrimary py-3 px-5 rounded-lg text-white text-xl mx-3'>Register</button>
                </div>
                <div className='lg:hidden'>
                      <div>
                        <div className='md:mr-12'>
                          <a
                            href="#"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                           <GiHamburgerMenu className='text-4xl text-colorPrimary' />
                          </a>
                          <ul
                            class="
                              dropdown-menu
                              min-w-max
                              absolute
                              text-base
                              z-50
                              bg-white
                              hiddden
                              float-left
                              py-2
                              list-none
                              text-left
                              rounded-lg
                              shadow-lg
                              hidden
                              mt-1
                              m-0
                              bg-clip-padding
                              border-none
                            "
                            aria-labelledby="dropdownMenuButton2"
                          >
                            <li>
                              <Link
                                class="
                                                      dropdown-item
                                  text-lg
                                   py-2
                                   px-4
                                   font-semi-bold
                                   block
                                   w-full
                                   whitespace-nowrap
                                   bg-transparent
                                   text-gray-700
                                   hover:bg-gray-100
                                 "
                                 to="/"
                                 >Sign In</Link>
                             </li>
                             <li>
                               <Link
                                 className="
                                   dropdown-item
                                   text-lg
                                   py-2
                                   px-4
                                   font-semibold
                                   block
                                  w-full
                                  whitespace-nowrap
                                  bg-transparent
                                  text-gray-700
                                  hover:bg-gray-100
                                "
                                to="/"
                                >Register</Link>
                            </li>
                            <li>
                              <a
                                className="
                                  dropdown-item
                                  text-sm
                                  py-2
                                  px-4
                                  font-normal
                                  block
                                  w-full
                                  whitespace-nowrap
                                  bg-transparent
                                  text-gray-700
                                  hover:bg-gray-100
                                  "
                                  href='#'
                                >Privacy policy</a>
                             </li>
                               </ul>
                             </div>
                           </div>
                         </div>
            </div>
        </div>
                {/* M E N U */}
        <div>
            <div className='flex items-center justify-center lg:justify-end mt-20 lg:mt-12 lg:mx-12'>
                <input className='border-2 w-[80%] lg:w-[30%] rounded-2xl h-[50px] lg:h-[75px] px-5 md:placeholder-pl-12 outline-colorPrimary'
                type="search" placeholder='&#128269; Search help articles...' />
            </div>
                         {/* T A B S */}
    <div className="faq-tab flex-col items-center justify-center mt-5 px-4 md:mt-12 lg:mx-3">

  <ul className="nav nav-tabs flex items-center justify-center list-none mx-5 pt-8 lg:pb-3" id="tabs-tabVertical">
    <li className="nav-item lg:my-7">
      <a href="#tabs-vendorVertical" 
      onClick={changeNav}
      className="file:nav-link
        no-underline
        text-colorPrimary
        active:underline
        lg:underline-offset-4
        text-center
        font-medium
        text-xl
        lg:text-2xl
        bg-white
        leading-tight
        px-6
        md:px-12
        lg:px-12
        py-3
        my-2
        mx-3
        rounded-lg
        lg:text-left
        active" id="tabs-vendor-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-vendorVertical" role="tab"
        aria-controls="tabs-vendorVertical" aria-selected="true">VENDOR</a>
    </li>
    <li className="nav-item text-center lg:my-7" role="presentation">
      <a href="#tabs-buyerVertical"
      onClick={changeNav} 
      className="file:nav-link
      no-underline
      text-colorPrimary
      active:underline
      lg:underline-offset-4
      text-center
      font-medium
      text-xl
      lg:text-2xl
      bg-white
      leading-tight
      px-6
      md:px-12
      lg:px-12
      py-3
      my-2
      mx-3
      rounded-lg
      lg:text-left"
      id="tabs-buyer-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-buyerVertical" role="tab"
        aria-controls="tabs-buyerVertical" aria-selected="false">BUYER</a>
    </li>
  </ul>

  <div className="tab-content mt-5 flex-col items-center justify-center mx-8" id="tabs-tabContentVertical">
    <div className="tab-pane fade show active" id="tabs-vendorVertical" role="tabpanel"
      aria-labelledby="tabs-vendor-tabVertical">
      <VendorFaq />
    </div>
    <div className="tab-pane fade" id="tabs-buyerVertical" role="tabpanel" aria-labelledby="tabs-buyer-tabVertical">
      <BuyerFaq />
    </div>
  </div>
</div>
        </div>
        <hr />
        <br />           
        <br />           
        <br />           
    </div>
  )
}

export default Faq