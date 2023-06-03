import React from 'react'
import AppLayout from '../../../components/layout/AppLayout'
import UsersCard from './UsersCard';
import TransactionCard from './TransactionCard';
import TransactionChart from './TransactionChart';
import UsersChart from './UsersChart';

const NewAdminDashboard = () => {

  return (
    <AppLayout>
      <div className='flex flex-col justify-center items-center w-[100vw] md:w-[100vw] overflow-x-hidden md:overflow-x-hidden lg:w-[80vw] xl:w-[83vw] xl:pl-[4.9rem]'>

        <div className='mt-6 w-[100vw] lg:w-[75vw] xl:w-[75vw] xl:ml-[-45px]'>
         <h1 className='text-[#232164] font-semibold text-lg ml-8 lg:ml-2 xl:text-[22px] xl:ml-0'>
          Dashboard
         </h1>
         <hr className='border-1 border-[#7D8287] mx-2 lg:w-[75vw] xl:w-full xl:mx-0' />
               {/* DROPDOWN */}
         <div className='flex flex-row items-center justify-end mt-2 mr-2 md:mr-10 lg:mr-1 xl:mr-0'>
            <select className='border-[1px] border-[#888888] bg-[#dfdede] rounded text-[8px] h-5 w-[5.5rem] pl-1 lg:h-5 xl:h-[1.7rem] xl:w-[7.5rem] xl:text-[10px]'
             name="date" id="date">
              <option className='text-[9px]' value="filter">Filter by date</option>
              <option value="1 week">1 week</option>
              <option value="1 month">1 month</option>
              <option value="3 months">3 months</option>
              <option value="1 year">1 year</option>
            </select>
          </div>
        </div>

              {/* TOP CARDs */}
        <div className='flex flex-wrap flex-row items-center justify-center mt-2 w-[100vw] lg:w-[75vw] lg:ml-5 xl:w-[83.7vw]'>
            <UsersCard />
        </div>

             {/* MIDDLE CARDS */}
        <div className='mt-3 md:mt-3'>
          <TransactionCard />
        </div>
        
        <div className='flex flex-col items-start justify-center w-[100vw] mt-3 mb-5 overflow-x-scroll md:flex-row md:justify-center md:w-[100vw] 
        md:ml-[-26px] lg:w-[77vw] lg:ml-3 xl:w-[83.7vw] xl:ml-[-50px] xl:mt-4 xl:mb-7'>
          <TransactionChart />
          <UsersChart />
        </div>

      </div>
    </AppLayout>
  )
}

export default NewAdminDashboard