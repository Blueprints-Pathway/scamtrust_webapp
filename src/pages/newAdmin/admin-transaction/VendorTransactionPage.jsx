import React from 'react'
import { BsCloudArrowDown } from 'react-icons/bs'
import AdminTable from '../../../components/admin/general/AdminTable';
import AppLayout from '../../../components/layout/AppLayout';
import { useNavigate } from 'react-router-dom';

const VendorTransactionPage = () => {

  const navigate = useNavigate();

  const items = [
    ['10th-July-22','07:02:30 ','REF10000015','20,000','Wallet deposits',<p className='text-[#3AB75D]'>Credit</p>],
    ['10th-July-22','07:02:30 ','REF10000015','20,000','Wallet deposits',<p className='text-[#FF6A62]'>Debit</p>],
    ['10th-July-22','07:02:30 ','REF10000015','20,000','Wallet deposits',<p className='text-[#FF6A62]'>Debit</p>],
    ['10th-July-22','07:02:30 ','REF10000015','20,000','Wallet deposits',<p className='text-[#FF6A62]'>Debit</p>],
    ['10th-July-22','07:02:30 ','REF10000015','20,000','Wallet deposits',<p className='text-[#3AB75D]'>Credit</p>],
    ['10th-July-22','07:02:30 ','REF10000015','20,000','Wallet deposits',<p className='text-[#3AB75D]'>Credit</p>],
  ]

  const headings = ['Name', 'Time', 'Transaction reference', 'Amount', 'Transaction Type', 'Entry Type'];

  return (
    <AppLayout>
        <div className='flex items-center justify-center'>
    <div className='flex flex-col items-center justify-start mb-7 w-[90vw] md:w-[100vw] lg:w-[75vw] xl:w-[82vw]'>
       <div className='flex flex-col items-center justify-center w-[90vw] md:flex-row md:px-1 md:mt-8 lg:w-full xl:w-full xl:px-2'>
            <div className='flex flex-col items-start justify-center mt-7 w-[100%] md:mt-1 lg:w-full xl:w-full'>
                <h1 className='font-semibold text-start text-lg text-[#232164] xl:text-xl'>
                    Vendor Transactions
                </h1>
            </div>
            <div className='flex items-center justify-between w-full mt-3 px-2 mb-1 md:px-0'>
                <p className='text-[#232164] text-[12px] font-medium md:ml-[-100px] lg:ml-[-130px] xl:text-[15px] xl:ml-[-20em]'>
                    Vendor
                </p>

                <p className='text-[#707070] text-[12px] font-medium xl:text-[15px]'>
                   Abdullahi Mustapha
                </p>
            </div>
        </div>

    <div className='flex flex-col items-center justify-between w-[90vw] lg:w-full bg-white shadow-xl xl:mt-3'>
      <div className='flex items-center justify-between w-full p-2'>
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

      <hr className='border-[1%] border-[#d0d1d2] w-[90vw] lg:w-full xl:w-[82vw]' />
      <div className='w-[89vw] lg:w-[74vw] xl:w-[81vw]'>
        <AdminTable onClick={()=>navigate('/wallet-deposit')}  items = {items} headings = {headings} />
      </div>
      </div>

    </div>
    </div>
    </AppLayout>
  )

}

export default VendorTransactionPage