import React from "react"
import footer from "../../assets/images/footerLogo.png"
import { AiFillEye } from "react-icons/ai"
import { TbCurrencyNaira } from "react-icons/tb"
import { IconContext } from "react-icons/lib"
import  Withdrawbutton from '../buttons/withdrawbutton/Withdrawbtn'

function VendorWallet() {
  return (
    <div className="flex">
      <IconContext.Provider value={{ color: "#232164", size: "25px" }}>
        <div className='w-[100%] lg:w-[450px] md:w-[358px] sm:w-[307px] ss:w-[250px]  h-[250px] lg:h-[300px] bg-white rounded-[25px] p-6 ss:mt-0 mt-5 '>
          <div className='flex justify-between ss:flex-col sm:flex-row'>
            <h3 className='text-sm md:text-lg lg:text-xl text-primary font-bold '>Wallet</h3>
            <div>
              <h4 className='text-sm md:text-lg lg:text-xl text-primary font-semibold '>
                Ridic Business Ventures
              </h4>
              <h5 className='font-semibold text-xs lg:text-sm text-[#7D8287]'>
                ID - 6057702
              </h5>
            </div>
          </div>
          <hr className='border-[1px] border-[#86D19B] my-3' />
          <div className='flex justify-end'>
            <AiFillEye />
          </div>
          <IconContext.Provider value={{ size: "15px", color: "#232164" }}>
            <div className='flex justify-between items-center'>
              <div>
                <h6 className='text-[#7D8287] text-[12px] lg:text-sm '>Total Balance</h6>
                <div className='flex items-start'>
                  <TbCurrencyNaira />
                  <h5 className=' text-primary font-bold text-[16px] sm:text-[14px] lg:text-xl'>
                    500,000.00
                  </h5>
                </div>
              </div>
              <div>
                <h6 className='text-primary text-[12px] lg:text-sm'>Incoming Balance</h6>
                <div className='flex items-start'>
                  <TbCurrencyNaira />
                  <h5 className='text-[#7D8287] font-bold text-[16px] sm:text-[14px] lg:text-xl'>
                    250,000.00
                  </h5>
                </div>
              </div>
            </div>
          </IconContext.Provider>
          <div className='flex justify-between items-center sm:mt-6 ss:mt-3 md:mt-8 lg:mt-10 '>
            <div className='flex items-center px-4 '>
              <h6
                className='text-[#706E6E] ss:text-[10px] sm:text-[12px] font-semibold font-Montserrat'
              >
                Secured by
              </h6>
              <img className='w-[50px]  md:w-[70px]' src={footer} alt='' />
            </div>

              <Withdrawbutton />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default VendorWallet
