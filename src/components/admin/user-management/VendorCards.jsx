import React from 'react'
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2'

const VendorCards = () => {

    const items = [
        {
            id: 1,
            title: "Total volume of new vendors",
            total: '235',
            arrow: <HiArrowUpRight className='mr-[2px] text-[#32A452] md:text-[10px] xl:text-[13px]' />,
            percent: <span className='text-[#32A452] md:text-[12px] xl:text-[13px]'>+20%</span>,
        },
        {
            id: 2,
            title: "Total volume of active vendors",
            total: '200',
            arrow: <HiArrowUpRight className='mr-[2px] text-[#32A452] md:text-[10px] xl:text-[13px]' />,
            percent: <span className='text-[#32A452] md:text-[12px] xl:text-[13px]'>+10%</span>,
        },
        {
            id: 3,
            title: "Total volume of inactive vendors",
            total: '20',
            arrow: <HiArrowDownRight className='mr-[2px] text-[#FF0000] md:text-[10px] xl:text-[13px]' />,
            percent: <span className='text-[#FF0000] md:text-[12px] xl:text-[13px]'>-5%</span>,
        },
        {
            id: 4,
            title: "Total volume of dormant vendors",
            total: '15',
            arrow: <HiArrowDownRight className='mr-[2px] text-[#FF0000] md:text-[10px] xl:text-[13px]' />,
            percent: <span className='text-[#FF0000] md:text-[12px] xl:text-[13px]'>-7%</span>,
        },
    ]
  return (
    <div className='flex flex-row items-start justify-center flex-wrap md:w-[100vw] md:mr-[-100px] lg:mr-[20px] xl:w-[82vw] xl:mr-20 xl:justify-start xl:mt-2'>
        {items.map((item)=> {
            return(
         <div className='flex flex-col items-start justify-center bg-[rgb(247,245,245)] shadow-md h-[70px] w-[41vw] px-1 rounded-sm my-2 mx-2 
             md:w-[21vw] md:h-[75px] md:justify-start md:pt-2 md:mx-2 lg:w-[16.8vw] lg:mx-[10px] xl:w-[17.5vw] xl:h-[90px] xl:mx-4'>
             <p className='text-[9px] font-medium text-[#232164] ml-2 md:text-[9px] md:h-7 xl:text-[12px] xl:h-8'>
                     {item.title}
             </p>
              <div className='flex flex-row items-end justify-between w-[100%] mt-2 md:mt-0 px-3'>
                  <h1 className='font-semibold text-[#232164] text-base xl:text-lg'>
                     {item.total}
                  </h1>
                  <p className='flex flex-row items-center justify-center text-[11px]'>
                     {item.arrow}
                     {item.percent}
                  </p>
              </div>
        </div>
                  )
              })}
    </div>
  )
}

export default VendorCards