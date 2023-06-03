import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerUserStats = () => {

  const navigate = useNavigate()

  const items = [
    {
      id: 0,
      name: 'Chukwudi Osinachi',
      userID: 'ID-110753',
      balance: '235,000.00',
      phone: '09027599804',
      lastActive: '5-07-2022, 12:25pm',
      withdrawalStatus: 'Tier 2',
      status: <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#CB3EF9] border-b-[1px] border-[#adabab]'>New</td>,
      hr: <hr className='border-[2px] text-black w-full' />
    },
    {
      id: 1,
      name: 'Fadekemi Folalu',
      userID: 'ID-110753',
      balance: '500,000.00',
      phone: '09027599804',
      lastActive: '5-07-2022, 12:05pm',
      withdrawalStatus: 'Tier 1',
      status: <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#32A452] border-b-[1px] border-[#adabab]'>Active</td>
    },
    {
      id: 2,
      name: 'Chukwudi Osinachi',
      userID: 'ID-110753',
      balance: '750,000.00',
      phone: '09027599804',
      lastActive: '5-07-2022, 2:10pm',
      withdrawalStatus: 'Tier 4',
      status: <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#707070] border-b-[1px] border-[#adabab]'>Dormant</td>
    },
    {
      id: 3,
      name: 'Fadekemi Folalu',
      userID: 'ID-110753',
      balance: '210,000.00',
      phone: '09027599804',
      lastActive: '5-07-2022, 7:32pm',
      withdrawalStatus: 'Tier 3',
      status: <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#FC0D1B] border-b-[1px] border-[#adabab]'>Inactive</td>
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center bg-white w-[95vw] pt-3 rounded-sm shadow-xl md:ml-[100px] lg:w-[75vw]
    lg:ml-[0px] xl:w-[81vw] xl:ml-[-65px]'>
        <div className='flex items-center justify-between w-full px-3 md:px-9'>
            <h6 className='text-[11px] text-[#707070] xl:text-[14px]'>
                User Statistics
            </h6>
            <div className='flex items-center justify-end pb-2'>
                 <select className='border-[1px] border-[#888888] bg-[#dfdede] rounded text-[8px] h-5 w-20 lg:h-5 xl:h-[1.7rem] 
                 xl:w-[7.5rem] xl:text-[11px]' name="name" id="search">
                   <option className='' value="search">Search by...</option>
                   <option value="name">Search by name</option>
                   <option value="name">Search by ID</option>
                   <option value="name">Search by phone number</option>
                 </select>
            </div>
        </div>
        <hr className='border-[#7D8287] w-[92vw] mb-2 lg:w-[72vw] xl:w-[80vw]' />

    <div className='flex flex-col items-center justify-start overflow-x-scroll overflow-y-scroll h-[20rem] w-[100vw] xl:h-[22rem]'>
    <table className='mb-5 w-[93vw] overflow-x-scroll overflow-y-scroll md:w-[88vw] lg:w-[70vw] lg:mb-7 xl:w-[80vw]'>
          {/* TABLE HEAD */}
      <thead>
        <tr>
          <th className='pr-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Name</th>
          <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>User ID</th>
          <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Wallet Balance</th>
          <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Phone Number</th>
          <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Last Active</th>
          <th className='pl-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Withdrawal status</th>
          <th className='pl-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>Status</th>
        </tr>
      </thead>

                 {/* TABLE BODY */}
      <tbody className='mt-7'>
         
         {items.map((item) => 
        <tr onClick={()=>navigate('/admin-user-profile')}
        className='bg-[#EBEBEB] mt-8 h-20 lg:h-16'>
          <td className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.name}</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.userID}</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.balance}</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.phone}</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.lastActive}</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.withdrawalStatus}</td>
             {item.status}
        </tr>
        )}

      </tbody>
      
    </table>
    </div>
    </div>
  )
}

export default CustomerUserStats