import React from "react"
import badge from "../../assets/images/badge.png"
import pin from "../../assets/images/pin.png"
import trophy from "../../assets/images/trophy.png"
import { CgNotes } from "react-icons/cg";
function VendorProgress() {
  return (
    <div>
      <div className=' '>
        <div className='w-[100%] lg:w-[600px] md:w-[410px] sm:w-[387px] ss:w-[310px] h-[250px] lg:h-[300px] bg-white rounded-[25px] px-5 sm:px-6 '>
          <img className='w-[40px] lg:w-[49px]' src={badge} alt='' />
          <div className=' lg:px-12 sm:px-4'>
            <h3 className='text-sm sm:text-xl md:text-lg text-primary font-bold mt-1 md:-mt-1 sm:-mt-0 lg:mt-3'>
              Hello Ridic Ventures
            </h3>
            <p className='text-[#707070] text-xs lg:text-[14px] -mt-1 mb-2'>
              Here is what is going on with your business
            </p>
          </div>
          <div>
            <div className=' h-[120px] lg:h-[120px] sm:h-[100px] md:mx-3 lg:mx-12 bg-[#E9E7FD] rounded-[15px] p-1 sm:p-2 lg:p-3'>
              <img src={pin} alt='' />
              <div className='flex justify-center items-center'>
                <div className='flex sm:flex-row flex-col justify-between items-start md:gap-4 gap-1  sm:gap-3 '>
                  <div>
                    <h4 className='sm:mt-0 -mt-5 text-primary text-sm md:text-[16px] lg:text-[20px] font-bold w-[70px] sm:w-[50px] lg:w-[100px]'>
                      Elite Vendor
                    </h4>
                  </div>
                  <div className='flex flex-col   gap-0 md:gap-2 mr-2'>
                  <div className='flex text-primary w-[230px] sm:w-[180px] lg:w-[220px] md:w-[170px]  justify-between items-center text-[10px] '>
                      <h6>Progress</h6>
                      <h6>200 transactions</h6>
                    </div>
                    <div>
                      <div className='progress lg:w-[222px]  md:w-[170px]'>
                        <div className='progress-bar'></div>
                      </div>
                    </div>
                    
                  </div>
                  <div>
                    <img className='lg:w-[60px] w-[30px] sm:mt-0 mt-2' src={trophy} alt='' />
                  </div>
                </div>
              </div>
          <div className="flex justify-end relative -top-9 sm:-top-3 lg:-top-5 md:top-[-4px] right-[50px] sm:right-[80px]">
          <button className="box-shadow text-[12px] font-semibold bg-white w-[90px] rounded-[10px] lg:h-[30px] sm:h-[28px] h-[25px] flex justify-center items-center text-primary font-karla gap-1"> <span><CgNotes/></span> 10 done</button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorProgress
