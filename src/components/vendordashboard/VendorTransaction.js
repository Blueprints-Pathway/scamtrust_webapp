import React from "react"
import Tabs from "../tabs/Tabs"

function VendorTransaction() {
  return (
    <div className='mt-8 flex '>
      <div className='w-[100%] lg:w-[600px] md:w-[410px] h-[500px] ss:w-[310px] sm:w-[387px] rounded-[25px] bg-white pt-7 py-6 px-6 lg:px-12'>
        <h3 className='text-sm md:text-lg lg:text-xl text-primary font-bold '>Transactions</h3>

        <Tabs />
      </div>
    </div>
  )
}

export default VendorTransaction
