import React from 'react'
import CustomerCards from './CustomerCards'
import UserStatistics from './UserStatistics'
import UserCharts from './UserCharts'
import CustomerUserStats from './CustomerUserStats'



const CustomerManagement = () => {

  
  return (
    <div className='flex flex-col items-center justify-start w-[100vw] ml-[-55px] md:w-[50vw] md:ml-[-65px] xl:ml-0'
    >
        <div className='flex flex-row items-start justify-end mt-[-8px] w-[90vw] md:w-[100vw] md:ml-7 lg:ml-0 lg:w-[74vw] xl:w-[75vw] xl:mt-0'>
          <select className='border-[1px] border-[#888888] bg-[#dfdede] rounded text-[8px] h-5 w-20 pl-1 lg:h-5 xl:h-[1.7rem] 
          xl:w-[7.5rem] xl:text-[12px]' name="date" id="date">
            <option className='' value="filter">Filter by date</option>
            <option value="1 week">1 week</option>
            <option value="1 month">1 month</option>
            <option value="3 months">3 months</option>
            <option value="1 year">1 year</option>
          </select>
        </div>

        <div className='flex flex-row items-start justify-center w-[95vw] mt-2 md:w-[100vw]'>
            <CustomerCards />
        </div>

        <div className='flex flex-col items-center justify-center mt-3 md:flex-row md:w-[100vw] md:ml-[100px] md:mt-2 lg:w-[80vw] 
        lg:ml-[0px] xl:w-[83.7vw] xl:ml-[-65px] xl:mt-3'>
          <UserStatistics />
          <UserCharts />
        </div>

        <div className='flex items-center justify-center mt-4 w-[95%] md:w-[100vw] mb-5 lg:w-[70vw] xl:w-[83.7vw]'>
          <CustomerUserStats />
        </div>
        
    </div>
  )
}

export default CustomerManagement