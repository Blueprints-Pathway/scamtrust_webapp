import React, { useState } from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { PieChart, Pie, Sector, Cell } from "recharts";

const UsersCard = () => {

    const data = [
        { name: "Group A", value: 65.23 },
        { name: "Group B", value: 34.77 }
      ];
      const COLORS = ["#3AB75D", "#3A56B7"];

      const users = [
        {
            title: "Total ScamTrust Users",
            total: "2,300",
            customerNum: "1,500",
            vendorsNum: "800",
        },
        {
            title: "New Users",
            total: "1,800",
            customerNum: "1,300",
            vendorsNum: "700",
        },
        {
            title: "Total Active Users",
            total: "500",
            customerNum: "200",
            vendorsNum: "300",
        },
        {
            title: "Total Inactive Users",
            total: "500",
            customerNum: "200",
            vendorsNum: "300",
        },
      ]

  return (
    <div className='flex flex-row items-center justify-center w-[90.7vw] md:w-[100vw] xl:w-[100vw]'>
    <div className='flex flex-wrap flex-row items-center justify-start w-[100vw] md:w-[100vw] md:justify-start md:overflow-x-hidden lg:w-[77vw] xl:w-[83.7vw]'>
        {users.map((users, index)=>{
            return(
        <div  key={index}
        className='flex flex-col items-start justify-center bg-[#f7f5f5] shadow-md h-[100px] w-[41vw] rounded-sm my-2 mx-2
          md:w-[22vw] md:h-[95px] md:justify-start md:items-start md:pt-2 md:mx-2 lg:w-[16.8vw] lg:mx-[10px] xl:w-[16vw] xl:h-[115px] xl:mx-7'>
          <p className='text-[#232164] text-[9px] font-medium mx-3 md:text-[10px] xl:text-[11px] xl:mx-5'>
             {users.title}
          </p>
          <hr className='border-[0.1%] border-[#3AB75D] w-[100%]' />

          <div className='relative flex flex-row items-start justify-center mx-3 h-[55px] md:h-[50px] xl:mx-5 xl:h-[65px]'>
            <p className='text-[#232164] text-[14px] font-semibold mt-3 md:text-[16px] xl:text-[20px]'>
               {users.total}
            </p>
                {/* PIECHART */}
            <div className='absolute bottom-0 right-6 w-[60%] xl:bottom-2 xl:right-0'>
            <PieChart width={230} height={230}>
              <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={13}
                outerRadius={22}
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

          <div className='relative flex flex-row items-end justify-center mx-3 md:mx-2 xl:mx-2'>
            <div className='flex flex-row items-center justify-center'>
              <GoPrimitiveDot className='text-xs text-[#3AB75D] lg:text-sm xl:text-[20px]' />
              <p className='text-[8px] font-medium text-[#232164] xl:text-[10px]'>
                {users.customerNum} <span className='font-semibold'>Customers</span>
              </p>
            </div>
            <div className='flex flex-row items-center justify-center ml-2 xl:ml-2'>
              <GoPrimitiveDot className='text-xs text-[#3A56B7] lg:text-sm xl:text-[20px]' />
              <p className='text-[8px] text-[#232164] xl:text-[10px]'>
               {users.vendorsNum} <span className='font-semibold'>Vendors</span>
              </p>
            </div>
          </div>
        </div>
        )
    })}
    </div>
    </div>
  )
}

export default UsersCard