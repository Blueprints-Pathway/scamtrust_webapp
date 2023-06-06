import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminTable from '../general/AdminTable'

const CustomerUserStats = (props) => {

  const navigate = useNavigate()
  const items = [
    
    [
      'Chukwudi Osinachi','ID-110753','235,000.00','09027599804','5-07-2022, 12:25pm','Tier 2',<td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#CB3EF9] border-b-[1px] border-[#adabab]'>New</td>,
     <hr className='border-[2px] text-black w-full' />
    ],
    [
      'Chukwudi Osinachi','ID-110753','235,000.00','09027599804','5-07-2022, 12:25pm','Tier 2',<td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#CB3EF9] border-b-[1px] border-[#adabab]'>New</td>,
     <hr className='border-[2px] text-black w-full' />
    ],
    [
      'Chukwudi Osinachi','ID-110753','235,000.00','09027599804','5-07-2022, 12:25pm','Tier 2',<td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#CB3EF9] border-b-[1px] border-[#adabab]'>New</td>,
     <hr className='border-[2px] text-black w-full' />
    ],
    [
      'Chukwudi Osinachi','ID-110753','235,000.00','09027599804','5-07-2022, 12:25pm','Tier 2',<td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#CB3EF9] border-b-[1px] border-[#adabab]'>New</td>,
     <hr className='border-[2px] text-black w-full' />
    ]
    // {
    //   id: 1,
    //   name: 'Fadekemi Folalu',
    //   userID: 'ID-110753',
    //   balance: '500,000.00',
    //   phone: '09027599804',
    //   lastActive: '5-07-2022, 12:05pm',
    //   withdrawalStatus: 'Tier 1',
    //   status: <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#32A452] border-b-[1px] border-[#adabab]'>Active</td>
    // },
    // {
    //   id: 2,
    //   name: 'Chukwudi Osinachi',
    //   userID: 'ID-110753',
    //   balance: '750,000.00',
    //   phone: '09027599804',
    //   lastActive: '5-07-2022, 2:10pm',
    //   withdrawalStatus: 'Tier 4',
    //   status: <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#707070] border-b-[1px] border-[#adabab]'>Dormant</td>
    // },
    // {
    //   id: 3,
    //   name: 'Fadekemi Folalu',
    //   userID: 'ID-110753',
    //   balance: '210,000.00',
    //   phone: '09027599804',
    //   lastActive: '5-07-2022, 7:32pm',
    //   withdrawalStatus: 'Tier 3',
    //   status: <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#FC0D1B] border-b-[1px] border-[#adabab]'>Inactive</td>
    // },
  ]
  const headings = ['Name', 'User ID', 'Wallet Balance', 'Phone Number', 'Last Active', 'Withdrawal status', 'Status'];


  

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
    <AdminTable  items = {items} headings = {headings} />
    </div>
    </div>
  )
}

export default CustomerUserStats