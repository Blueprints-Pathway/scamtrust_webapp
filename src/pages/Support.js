import React from "react"
import bell from "../assets/images/bell.png"
import support from "../assets/images/Supportt.png"
import chat from "../assets/images/Chat.png"
import faq from "../assets/images/Faq.png"
import footerLogo from "../assets/images/footerLogo.png"
function Support() {
  return (
    <div className='md:ml-[220px] '>
      <header className='w-[100%] bg-white  h-[77px] flex justify-between items-center  px-6 md:px-12 xl:px-20'>
        <h3 className='text-xl text-primary font-semibold font-poppins'>
          Support
        </h3>
        <div className='flex items-center gap-5'>
          <img src={bell} alt='' />
          <div className='w-[30px] h-[30px] rounded-full bg-[#E36969] flex justify-center items-center'>
            <h5 className='text-[16px] text-white font-bold font-poppins'>RV</h5>
          </div>
        </div>
      </header>
      <div className=' mt-20  mr-6 md:mr-0 ml-6'>
        <div className='w-[100%] md:w-[72vw] lg:w-[78vw] lg:h-[500px] md:h-[453px] sm:h-[353px] flex flex-col  justify-center bg-white rounded-[25px] '>
          <div className='flex ss:flex-row flex-col items-center'>
            <img className='ss:w-[200px] sm:w-[280px] lg:w-[380px] md:h-[280px] lg:h-[380px]' src={support} alt='' />
            <div className='flex flex-col  '>
              <h4 className=' flex justify-center items-center md:text-[18px] ss:text-sm sm:text-[16px] lg:text-xl text-primary font-semibold font-poppins'>
                How can we help you?
              </h4>
              <p className='px-4 flex justify-center items-center text-[#707070] text-center ss:text-[10px] sm:text-xs lg:text-sm  font-normal font-poppins mt-2'>
                Need support? Find out how we can serve you better
              </p>
              <div className='flex  justify-center items-center ss:flex-row flex-col gap-5 ss:gap-5 sm:gap-10 lg:gap-20 mt-10'>
              
                <div className='cursor-pointer flex justify-center items-center gap-3 ss:gap-1 lg:gap-2 border-[1px] border-[#232164] rounded-[5px] w-[90%]  ss:w-[170px]  sm:w-[200px] lg:w-[250px]   pt-2 lg:pt-3 pb-2'>
                  <div className='bg-[#0257C0] w-[35px] h-[35px] ss:w-[25px] sm:w-[30px] lg:w-[35px] sm:h-[30px] ss:h-[25px] lg:h-[35px] flex justify-center items-center rounded-[10px]'>
                    <img className='sm:w-[16px] ss:w-[12px] lg:w-[18px]' src={chat} alt='' />
                  </div>
                  <div>
                    <h4 className='font-poppins ss:text-xs lg:text-[14px] text-black '>Chat</h4>
                    <h5 className='font-poppins text-[#707070] ss:text-[10px] lg:text-[12px]'>
                      Start a conversation now
                    </h5>
                  </div>
                </div>
                <div className='cursor-pointer flex justify-center items-center gap-3 ss:gap-1 lg:gap-2 border-[1px] border-[#232164] rounded-[5px] w-[90%]  ss:w-[170px]  sm:w-[200px] lg:w-[250px]   pt-2 lg:pt-3 pb-2'>
                  <div className='bg-[#0257C0] w-[35px] h-[35px] ss:w-[25px] sm:w-[30px] lg:w-[35px] sm:h-[30px] ss:h-[25px] lg:h-[35px] flex justify-center items-center rounded-[10px]'>
                    <img className='sm:w-[16px] ss:w-[12px] lg:w-[18px]' src={faq} alt='' />
                  </div>
                  <div>
                    <h4 className='font-poppins ss:text-xs lg:text-[14px] text-black ' > FAQs</h4>
                    <h5 className='font-poppins text-[#707070] ss:text-[10px] lg:text-[12px]'>
                  
Find answers instantly
                    </h5>
                  </div>
                </div>
               
               
                
              </div>
            </div>
          </div>
          <div className="md:w-[100vw] mt-5 lg:w-[100vw] flex justify-center items-center">
            <h4 className="font-Montserrat font-semibold text-xs lg:text-sm text-[#706E6E]">Secured by</h4>
            <img className="lg:w-[75px] w-[50px]" src={footerLogo} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
