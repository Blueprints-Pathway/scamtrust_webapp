import React from 'react'
import { Tabs } from 'antd';
import { FiveYears, OneMonth, OneWeek, OneYear, SixMonths } from './TransactionChartDays';


const TransactionChart = () => {

      const onChange = (key) => {
        // console.log(key);
      };
      const items = [
        {
          key: '1',
          label: <li className='text-[8px] text-[#707070]  ml-0 mb-[-10px] xl:text-[10px]'>1 Week</li>,
          children: <OneWeek /> ,
        },
        {
          key: '2',
          label: <li className='text-[8px] text-[#707070]  mb-[-10px] xl:text-[10px]'>1 Mth</li>,
          children: <OneMonth /> ,
        },
        {
          key: '3',
          label: <li className='text-[8px] text-[#707070]  mb-[-10px] xl:text-[10px]'>6 Mnths</li>,
          children: <SixMonths /> ,
        },
        {
          key: '4',
          label: <li className='text-[8px] text-[#707070]  mb-[-10px] xl:text-[10px]'>1 Year</li>,
          children: <OneYear /> ,
        },
        {
          key: '5',
          label: <li className='text-[8px] text-[#707070] mx-[-5px] mb-[-10px] xl:text-[10px]'>5 Years</li>,
          children: <FiveYears /> ,
        },
      ];

  return (
    <div className='flex flex-col items-center justify-center w-[100vw] overflow-x-hidden md:overflow-x-hidden md:flex-row 
                    md:justify-between md:w-[45vw] md:mr-3 lg:w-[36.2vw] lg:mr-2 xl:w-[37vw] xl:ml-3'>
        <div className='flex flex-col items-start justify-start bg-[#f7f5f5] shadow-md h-[320px] w-[85%] rounded-sm my-2 pt-1
            md:w-[45vw] md:h-[320px] md:justify-start md:items-start md:pt-2 lg:w-[36.2vw] xl:w-[37vw] xl:h-[330px]'>

                {/* TOP */}
            <div className='flex flex-row items-center jsutify-between w-[90vw] md:w-[100vw] lg:w-[36.2vw]'>
              <div className='flex flex-row items-center justify-start w-[40vw] md:w-[40vw]'>
                  <p className='text-[#232164] text-[11px] font-medium mx-3 mt-2 md:text-[10px] lg:text-[9px] xl:text-[12px] xl:mx-5'>
                     Transactions
                  </p>
                  <p className='text-[#7D8287] text-[10px] mx-1 mt-2 md:text-[10px] lg:text-[9px] xl:text-[12px] xl:mx-5'>
                      Volume
                  </p>
              </div>
              <div className='flex flex-row items-center justify-end w-[40vw] mt-2 mr-2 md:w-[0vw] md:ml-7 lg:mr-3'>
                 <select className='bg-[#f7f5f5] rounded outline-none text-[9px] h-5 w-[3rem] pl-1 lg:h-5 xl:w-[3.5rem] xl:text-[12px]'
                  name="date" id="date">
                   <option className='text-[9px]' value="filter">Filter</option>
                   <hr />
                   <option value="1 week">volume</option>
                   <hr />
                   <option value="1 week">value</option>
                 </select>
              </div>

           </div>
             <hr className='border-[0.1%] border-[#3AB75D] w-[100%]' />

             <div className='flex flex-row items-start overflow-hidden justify-start w-[90vw] pl-4'>
               <Tabs 
               tabBarStyle={{textDecorationStyle: 'none'}}
               defaultActiveKey="1" items={items} onChange={onChange} />
             </div>

        </div>
    </div>
  )
}

export default TransactionChart