import React from 'react'
import logo from "../../assets/images/logo.png"
import done from "../../assets/images/done.png"
function PasswordChanged() {
  return (
    <div>
         <div>
          <div>
            <div className=' h-[100vh] px-4 overflow-y-hidden  '>
              <div className='px-6 mt-5 mb-20 md:mb-3 md:mt-10'>
                <img className='lg:w-[164px] md:w-[140px] w-[100px]' src={logo} alt='' />
              </div>
              <div className='flex items-center justify-center '>
                <div className='lg:w-[480px] sm:w-[460px] w-[100%] lg:h-[460px] sm:h-[420px] h-[320px]  box-shadow rounded-[20px] flex justify-center items-center font-poppins flex-col'>
                  <h2 className='text-primary pt-10 -mt-10 sm:mt-0 sm:pt-0 font-semibold text-center  text-[22px] mb-2'>
                  Password Changed Successfully
                  </h2>
                 <img className='md:w-[150px] w-[100px]' src={done} alt="" />
                   

                    <div className='mt-7'>
                      <button
                      
                        className='w-[300px] h-[38px] bg-primary rounded-[5px] text-[12px] mb-[6px] flex justify-center items-center'
                      >
                       Proceed to Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
    </div>
  )
}

export default PasswordChanged