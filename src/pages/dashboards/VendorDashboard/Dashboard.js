import React from "react"
import bell from "../../../assets/images/bell.png"
import Tabs from "../../../components/tabs/Tabs"
import VendorProgress from "../../../components/vendordashboard/VendorProgress"
import VendorRatings from "../../../components/vendordashboard/VendorRatings"
import VendorTransaction from "../../../components/vendordashboard/VendorTransaction"
import VendorWallet from "../../../components/vendordashboard/VendorWallet"
function Dashboard() {
  return (
    <div className='font-poppins bg-[#E2E5EA] w-[100%] '>
      <header className='w-[100%] bg-white  h-[77px] flex justify-between items-center  px-6 md:px-12 xl:px-20'>
        <h3 className='text-xl text-primary font-semibold'>Dashboard</h3>
        <div className='flex items-center gap-2'>
          <img src={bell} alt='' />
          <div className='w-[40px] h-[40px] rounded-full bg-[#E36969] flex justify-center items-center'>
            <h5 className='text-[22px] ]font-bold'>RV</h5>
          </div>
        </div>
      </header>
      <div className="flex flex-col justify-center ss:flex-row md:gap-3 ss:gap-5 mx-4 md:justify-between ss:mx-6 sm:mx-7 lg:mx-6 xl:mx-20  mt-7">
        <VendorProgress/>
        <VendorWallet/>
      </div>
      <div className="flex flex-col justify-center ss:flex-row md:gap-3 ss:gap-5 mx-4 md:justify-between ss:mx-7 lg:mx-6 xl:mx-20  mt-7">
        <VendorTransaction/>
        <VendorRatings/>
        
      </div>

    </div>
  )
}

export default Dashboard
