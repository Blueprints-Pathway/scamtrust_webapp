import React from 'react'
import { BsCloudArrowDown } from 'react-icons/bs'
import AdminTable from '../general/AdminTable';
import { useNavigate } from 'react-router-dom';

const ViewCustomerTransaction = () => {

  const navigate = useNavigate();
  
  const items = [
    ['Chukwudi Osinachi','ID-110753','235,000.00','Vendor','5-07-2022, 12:25pm',<p className='text-[#3AB75D]'>Successful</p>],
    ['Fadekemi Folalu','ID-110753','235,000.00','Customer','5-07-2022, 12:25pm',<p className='text-[#FFAA00]'>Pending</p>],
    ['Fadekemi Folalu','ID-110753','235,000.00','Customer','5-07-2022, 12:25pm',<p className='text-[#FC0D1B]'>Failed</p>],
    ['Chukwudi Osinachi','ID-110753','235,000.00','Vendor','5-07-2022, 12:25pm',<p className='text-[#3AB75D]'>Successful</p>]
  ]

  const headings = ['Name', 'Transaction reference', 'Amount', 'User Type', 'Date/Time', 'Transaction status'];

  return (
    <div className='flex flex-col items-center justify-start shadow-xl mb-7 bg-white w-[90vw] md:ml-[180px] lg:ml-[275px] lg:w-[75vw] lg:mt-1 xl:w-[82vw] xl:ml-[41em] xl:mt-2'>
      
      <div className='flex items-center justify-between w-full p-3'>
        <p className='text-[#707070] text-[11px] pt-4 xl:text-[15px] xl:font-medium'>
          Transaction Details
        </p>
        <div className='flex items-center justify-center'>
          <div>
            <select className='border-[1px] border-[#888888] bg-[#dfdede] rounded text-[8px] h-5 w-[4rem] lg:h-5 lg:w-[5rem] 
            xl:h-[1.7rem] xl:w-[6.5rem] xl:text-[11px] xl:pl-1'
             name="date" id="date">
              <option className='text-[9px]' value="filter">Search by...</option>
              <option value="1 week">1 week</option>
              <option value="1 month">1 month</option>
              <option value="3 months">3 months</option>
              <option value="1 year">1 year</option>
            </select>
          </div>
          <div>
             <button className='bg-[#0A439A] text-white h-5 w-[4rem] rounded border-none outline-none ml-3 text-[9px]
             flex items-center justify-between px-2 lg:w-[5rem] lg:px-4 lg:ml-5 xl:h-[1.7rem] xl:w-[6.5rem] xl:text-[13px] xl:px-5'>
               <BsCloudArrowDown className='text-[15px] xl:text-[19px]' />
                 Export
             </button>
          </div>
        </div>
      </div>

      <hr className='border-[1%] border-[#d0d1d2] w-[90vw] lg:w-[75vw] xl:w-[82vw]' />
      <div className='w-[89vw] lg:w-[74vw] xl:w-[81vw]'>
        <AdminTable onClick={()=>navigate('/customer-transaction')}  items = {items} headings = {headings} />
      </div>
    </div>
  )

}

export default ViewCustomerTransaction