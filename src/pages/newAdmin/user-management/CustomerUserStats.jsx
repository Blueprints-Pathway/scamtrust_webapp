import React from 'react'

const CustomerUserStats = () => {
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
        <hr className='border-[#7D8287] w-[92vw] mb-2 xl:w-[81vw]' />

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

        <tr className='bg-[#EBEBEB] mt-8 h-20 lg:h-16'>
          <th className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' scope='row'>Chukwudi Osinachi</th>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>ID-110753</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>235,000.00</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>09027599804</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>5-07-2022, 12:25pm</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>Tier 1</td>
          <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#CB3EF9]'>New</td>
        </tr>

        <tr className='bg-[#ffff] mt-8 h-20 lg:h-16'>
          <th className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' scope='row'>Chukwudi Osinachi</th>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>ID-110752</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>500,000.00</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>08044769924</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>5-07-2022,  2:12pm</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>Tier 3</td>
          <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#32A452]'>Active</td>
        </tr>

        <tr className='bg-[#EBEBEB] mt-8 h-20 lg:h-16'>
          <th className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' scope='row'>Fadekemi Folalu</th>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>ID-110753</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>235,000.00</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>07054472301</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>5-07-2022, 12:25pm</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>Tier 2</td>
          <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#707070]'>Dormant</td>
        </tr>

        <tr className='bg-[#ffff] mt-8 h-20 lg:h-16'>
          <th className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' scope='row'>Chukwudi Osinachi</th>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>ID-110752</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>500,000.00</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>09098045230</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>5-07-2022,  2:12pm</td>
          <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>Tier 3</td>
          <td className='pl-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] text-[#FC0D1B]'>Inactive</td>
        </tr>

      </tbody>
      
    </table>
    </div>
    </div>
  )
}

export default CustomerUserStats