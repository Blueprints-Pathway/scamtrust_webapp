import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { PieChart, Pie, Sector, Cell } from "recharts";
import { AiFillStar } from 'react-icons/ai'

const TransactionCard = () => {

    const data = [
        { name: "Group A", value: 34.77 },
        { name: "Group B", value: 34.77 },
        { name: "Group C", value: 34.77 }
      ];
      const COLORS = ["#EDB057", "#ED57DF", "#5794ED"];

      const list = [
        {
            title: "Transaction Value",
            deposits: "N100,000,000",
            withdrawals: "N180,000,000",
            payments: "N8,000,000"
        },
        {
            title: "Transaction Volume",
            deposits: "700",
            withdrawals: "450",
            payments: "650"
        },
      ]

      const vendors = [
        {
            name: "1. Ridic Ventures",
            amount: "N5,000,000",
        },
        {
            name: "2. Drinks.ng",
            amount: "N5,000,000",
        },
        {
            name: "3. Yakoyo",
            amount: "N5,000,000",
        },
        {
            name: "4. Obiweezy",
            amount: "N5,000,000",
        },
        {
            name: "5. Zeeman Luxury",
            amount: "N5,000,000",
        },
      ]

  return (
    <div className='flex flex-col items-center justify-center w-[90.7vw] overflow-x-hidden md:overflow-x-hidden md:flex-row md:justify-between md:w-[100vw] lg:w-[77vw] xl:w-[83.7vw]'>
                    {/* TRANSACTIONS CARD */}
        <div className='flex flex-wrap flex-row items-start justify-center w-[100vw] md:w-[100vw] md:justify-start md:overflow-x-hidden lg:w-[77vw] lg:ml-4 xl:ml-5 xl:w-[83.7vw]'>
            {list.map((list, index)=> {
                return(
            <div key={index} className='flex flex-col items-start justify-center bg-[#f7f5f5] shadow-md h-[150px] w-[85%] rounded-sm my-2
                            md:w-[34vw] md:h-[150px] md:justify-start md:items-start md:pt-2 md:mx-2 lg:w-[29vw] lg:mx-[5px] xl:w-[26vw] xl:h-[175px] xl:mx-5'>
               <p className='text-[#232164] text-[11px] font-medium mx-3 mt-2 md:text-[10px] lg:text-[9px] xl:text-[12px] xl:mx-5'>
                  {list.title}
               </p>
               <hr className='border-[0.1%] border-[#3AB75D] w-[100%]' />

               <div className='relative flex flex-row items-end justify-between mt-3 ml-3'>
                                      {/* LIST */}
                <div className='flex flex-col items-start justify-center'>
                    <div className='flex flex-row items-start justify-start my-2'>
                        <p className='flex flex-row text-[9px] font-medium w-[120px] md:w-[145px] lg:text-[8px] lg:w-[110px] xl:text-[11px] xl:w-[145px]'>
                          <GoPrimitiveDot className='text-[#EDB057] text-[10px] mr-[2px] xl:text-[11px]'/>
                           <span>Wallet Deposits</span>
                        </p>
                        <span className='text-[#232164] text-[11px] font-semibold w-20 md:w-40 lg:text-[10px] xl:text-[12px]'>
                             {list.deposits}
                        </span>
                    </div>
                    <div className='flex flex-row items-start justify-start my-2'>
                        <p className='flex flex-row text-[9px] font-medium w-[120px] md:w-[145px] lg:text-[8px] lg:w-[110px] xl:text-[11px] xl:w-[145px]'>
                           <GoPrimitiveDot className='text-[#ED57DF] text-[10px] mr-[2px] xl:text-[11px]'/>
                           <span>Wallet Withdrawals</span> 
                        </p>
                        <span className='text-[#232164] text-[11px] font-semibold lg:text-[10px] xl:text-[12px]'>
                             {list.withdrawals}
                        </span>
                    </div>
                    <div className='flex flex-row items-start justify-start my-2'>
                        <p className='flex flex-row text-[9px] font-medium w-[120px] md:w-[145px] lg:text-[8px] lg:w-[110px] xl:text-[11px] xl:w-[145px]'>
                            <GoPrimitiveDot className='text-[#5794ED] text-[10px] mr-[2px] xl:text-[11px]'/>
                            <span>Costumer Payments</span> 
                        </p>
                        <span className='text-[#232164] text-[11px] font-semibold lg:text-[10px] xl:text-[12px]'>
                            {list.payments}
                        </span>
                    </div>
                </div>
                                 {/* RADIAN */}
                <div className='absolute bottom-1 md:hidden right-5 w-[20%] lg:flex lg:items-center lg:justify-center lg:right-2 xl:right-[-10px]'>
                 <PieChart width={250} height={250}>
                   <Pie
                     data={data}
                     cx={120}
                     cy={200}
                     innerRadius={24}
                     outerRadius={37}
                     paddingAngle={0}
                     dataKey="value"
                     // label
                   >
                     {data.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                   </Pie>
                 </PieChart>
                </div>

               </div>
            </div>
               )
            })}

             {/* TOP VENDORS CARD */}
         <div className='flex flex-col items-start justify-start bg-[#f7f5f5] shadow-md h-[160px] w-[85%] rounded-sm my-2 pt-1 mx-2
                         md:w-[22vw] md:h-[150px] md:justify-start md:items-start md:pt-2 md:mx-2 lg:w-[14vw] lg:mx-[5px] xl:w-[18vw] xl:h-[175px] xl:mx-5'>
               <p className='flex flex-row items-center justify-center text-[#232164] text-[11px] font-medium mx-3 mt-2 md:text-[10px] lg:text-[9px] xl:text-[12px] xl:mx-5'>
                  Top Vendors 
                  <span><AiFillStar className='text-[10px] ml-1 text-[#FFAA00] mb-1 md:text-[8px] lg:text-[7px]' /></span>
               </p>
                <hr className='border-[0.1%] border-[#3AB75D] w-[100%] xl:mb-2' />
                {vendors.map((vendor)=>{
                    return(
                <div className='flex flex-col items-start justify-start w-[100%] mt-3 px-4 lg:px-2 xl:px-6'>
                    <div className='flex flex-row items-center justify-between w-[100%] leading-3 md:leading-[10px]'>
                        <p className='text-[#707070] text-[11px] md:text-[9px] md:w-20 lg:text-[8px] xl:text-[12px] xl:w-28'>
                            {vendor.name}
                        </p>
                        <p className='text-[#232164] text-[11px] font-semibold md:text-[9px] lg:text-[8px] xl:text-[12px]'>
                            {vendor.amount}
                        </p>
                    </div>
                </div>
                        )
                    })}
         </div>  
        </div>
    
    </div>
  )
}

export default TransactionCard