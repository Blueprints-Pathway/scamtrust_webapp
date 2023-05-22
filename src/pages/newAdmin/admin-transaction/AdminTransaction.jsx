import React from 'react'
import AppLayout from '../../../components/layout/AppLayout'
import { Tabs } from 'antd';
import Customer from './Customer';
import { AiOutlineSearch } from 'react-icons/ai'
import Vendor from './Vendor';
import All from './All';


const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: <li className='mr-[-5px] mb-[-7px] text-[#707070] text-xs lg:text-[11px] xl:text-[13px] xl:mr-[0px]'>All</li>,
    children: <All /> ,
  },
  {
    key: '2',
    label: <li className='mx-[-5px] mb-[-7px] text-[#707070] text-xs lg:text-[11px] xl:text-[13px] xl:mx-[0px]'>Customer</li>,
    children: <Customer /> ,
  },
  {
    key: '3',
    label: <li className='ml-[-5px] mb-[-7px] text-[#707070] text-xs lg:text-[11px] xl:text-[13px] xl:ml-[0px]'>Vendor</li>,
    children: <Vendor /> ,
  },
];


const AdminTransaction = () => {
  return (
    <AppLayout>
      <div className='flex flex-col justify-center items-center mx-2 overflow-x-hidden'>

        <div className='relative flex flex-col justify-center mt-5 md:mt-5 lg:mt-1 xl:mt-3'>

                   {/* DROPDOWN */}
          <div className='absolute top-[4.8rem] right-8 md:top-12 md:right-14 lg:right-7 lg:top-[3.3rem] xl:top-16 xl:right-20'>
            <select className='border-[1px] border-[#888888] bg-[#dfdede] rounded text-[8px] h-6 w-24 pl-1 lg:h-5 xl:h-[1.7rem] xl:w-[7.5rem] xl:text-[10px]' name="date" id="date">
              <option className='text-[9px]' value="filter">Filter by date</option>
              <option value="1 week">1 week</option>
              <option value="1 month">1 month</option>
              <option value="3 months">3 months</option>
              <option value="1 year">1 year</option>
            </select>
          </div>
              {/* ------ */}

          <div className='absolute right-3 top-[3.1rem] flex flex-row items-center justify-center md:top-5 xl:right-10'>
            <p className='text-[10px] text-[#707070] px-2 md:px-3 xl:text-[13px]'>Volume</p>
            <p className='text-[10px] text-[#707070] px-2 md:px-3 xl:text-[13px]'>Value</p>
          </div>


          <div className='flex flex-col items-center justify-center md:hidden'>
            <h1 className='text-center text-[#232164] font-semibold text-lg'>Transactions</h1>
          </div>

          <div className='flex flex-row items-start justify-start mt-2 w-[100vw] px-5 md:w-[95vw] lg:w-[75vw] xl:w-[82vw]'>
            <div className='flex flex-row items-start justify-start'>
                <div className='hidden md:flex md:flex-col md:items-center md:justify-start md:mr-10 xl:mr-14'>
                  <h1 className='text-center text-[#232164] font-semibold text-lg mt-1 xl:text-[21px]'>Transactions</h1>
                </div>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
          </div>


        </div>


             {/* TRANSACTIONS CARD */}
        <div className='flex flex-col items-center justify-start pt-5 px-4 mt-6 mb-7 w-[95vw] bg-[#f7f5f5] shadow-md xl:w-[85vw] xl:mt-8'>
          <div className='flex items-center justify-between w-[100%] mb-2 md:w-[95%] lg:w-[68vw] xl:w-[75vw]'>
            <p className='text-[#707070] text-xs xl:text-sm'>
              Transactions
            </p>
            <div className='flex items-center justify-center'>
              <p className='text-[10px] text-[#232164] font-medium mr-4 md:mr-10 xl:text-[11px]'>
                View All
              </p>
              <div className='relative'>
               <input className='relative bg-[#EBEBEB] rounded-lg h-6 w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[14vw] xl:h-7' type="text" />
               <AiOutlineSearch className='absolute bottom-1 ml-2 text-[#232164] xl:w-[18px] xl:h-[18px] xl:ml-5' />
              </div>
            </div>
          </div>

                     {/* TABLE */}
            <div className='flex items-start justify-center overflow-x-scroll overflow-y-scroll h-[20rem] w-[100vw] xl:h-[22rem]'>

            <table className='mb-5 w-[92vw] overflow-x-scroll overflow-y-scroll md:w-[88vw] lg:w-[70vw] lg:mb-7 xl:w-[80vw]'>
                  {/* TABLE HEAD */}
              <thead>
                <tr>
                  <th className='pr-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Name</th>
                  <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Transaction reference</th>
                  <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Amount</th>
                  <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>User Type</th>
                  <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Date/Time</th>
                  <th className='pl-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Transaction status</th>
                </tr>
              </thead>

                         {/* TABLE BODY */}
              <tbody className='mt-7'>

                <tr className='bg-[#EBEBEB] mt-8 h-20 lg:h-16'>
                  <th className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' scope='row'>Fadekemi Folalu</th>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>ID-110753</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>235,000.00</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>Customer</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>5-07-2022, 12:25pm</td>
                  <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#FFAA00]'>Pending</td>
                </tr>

                <tr className='bg-[#ffff] mt-8 h-20 lg:h-16'>
                  <th className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' scope='row'>Chukwudi Osinachi</th>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>ID-110752</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>500,000.00</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>Customer</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>5-07-2022,  2:12pm</td>
                  <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#3AB75D]'>Successful</td>
                </tr>

                <tr className='bg-[#EBEBEB] mt-8 h-20 lg:h-16'>
                  <th className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' scope='row'>Fadekemi Folalu</th>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>ID-110753</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>235,000.00</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>Customer</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>5-07-2022, 12:25pm</td>
                  <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#FC0D1B]'>Failed</td>
                </tr>

                <tr className='bg-[#ffff] mt-8 h-20 lg:h-16'>
                  <th className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' scope='row'>Chukwudi Osinachi</th>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>ID-110752</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>500,000.00</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>Customer</td>
                  <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>5-07-2022,  2:12pm</td>
                  <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#3AB75D]'>Successful</td>
                </tr>

              </tbody>
              
            </table>
            </div>
        </div>


      </div>
    </AppLayout>
  )
}

export default AdminTransaction