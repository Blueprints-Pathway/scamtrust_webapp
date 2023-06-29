import React from 'react'
import AppLayout from '../../../components/layout/AppLayout'
import RequeryBtn from '../../../components/admin/admin-transaction/RequeryBtn'
import RefundBtn from '../../../components/admin/admin-transaction/RefundBtn'

const CustomerPaymentPage = () => {
    const items = [
        {
            title: 'Amount Withdrawn',
            value: '20,000',
        },
        {
            title: 'Transaction type',
            value: 'Customer Payment',
        },
        {
            title: 'Transaction reference',
            value: 'ST-WD-6746738374262824627',
        },
        {
            title: 'Date & Time',
            value: 'JUL 3RD 2022 10:10AM',
        },
        {
            title: 'Vendor name/ID',
            value: 'Ridic Ventures - ID-110752',
        },
        {
            title: 'Customer name/ID',
            value: 'Ibrahim Mustapha - ID-110751',
        },
        {
            title: 'Transaction Charge',
            value: '₦50',
        },
        {
            title: 'Description',
            value: 'Nil',
        },
        {
            title: 'Cancellation reason',
            value: 'Nil',
        },
    ]
  return (
    <AppLayout>
        <div className='flex flex-col items-center justify-start w-[90vw] pb-10 md:w-[100vw] md:px-8 lg:w-[80vw] xl:w-[86vw]'>
            <div className='flex items-center justify-between w-[90vw] mt-10 lg:w-[73vw] xl:w-[81vw] xl:mt-16'>
                <div className='flex items-center justify-center'>
                    <p className='text-[#333333] text-[12px] font-medium xl:text-[16px]'>
                       Transaction status:
                    </p>
                    <p className='text-[#3AB75D] text-[12px] ml-1 font-medium md:ml-2 xl:text-[16px] xl:ml-3'>
                       SUCCESSFUL
                    </p>
                </div>
                <div>
                    <button className='text-white bg-[#0A439A] text-[10px] h-7 w-20 text-center rounded-md xl:h-9 xl:w-28 xl:text-[13px]'>
                       User Profile
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap items-start justify-between py-7 px-5 w-full shadow-md border-2 border-[#dddd] mt-5
            md:px-14 xl:py-12 xl:px-16'>
                {items.map((item, index)=>{
                    return(
                       <div key={index} className='w-[45%] my-3 md:w-[40%] xl:w-[28%]'>
                           <p className='text-[#A4A4A4] text-[10px] xl:text-[13px] xl:pb-1'>
                              {item.title}
                           </p>
                           <div className='flex items-center border-[0.1em] border-[#D5D8DA] h-7 text-[#333333] text-[10px] 
                           pl-2 md:h-8 xl:h-10 xl:text-[13px] xl:pl-4'>
                              {item.value}
                           </div>
                       </div>
                    )
                })}

                <div className='flex items-center justify-end w-full mt-4 xl:mt-7'>
                    <RefundBtn />
                    <RequeryBtn />

                </div>
            </div>

        </div>
    </AppLayout>
  )
}

export default CustomerPaymentPage