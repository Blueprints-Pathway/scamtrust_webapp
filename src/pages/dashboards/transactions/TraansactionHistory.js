import React from "react"
import bell from "../../../assets/images/bell.png"
import TabTranscation from "./TabTranscation"

function TraansactionHistory() {
  return (
    <div className='font-poppins bg-[#E2E5EA] w-[100%]  h-[100vh] '>
      <header className=' bg-white  h-[77px] flex justify-between items-center  px-6 md:px-12 xl:px-20'>
        <h3 className='text-xl text-primary font-semibold'>Transaction</h3>
        <div className='flex items-center gap-2'>
          <img src={bell} alt='' />
          <div className='w-[40px] h-[40px] rounded-full bg-[#E36969] flex justify-center items-center'>
            <h5 className='text-[22px] font-bold'>RV</h5>
          </div>
        </div>
      </header>
      <div className='flex justify-center items-center mx-6'>
        <TabTranscation />
      </div>
    </div>
  )
}

export default TraansactionHistory
