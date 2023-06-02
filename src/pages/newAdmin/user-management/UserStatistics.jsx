import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go';
import { PieChart, Pie, Sector, Cell } from "recharts";

const UserStatistics = () => {
    const data = [
        { name: "Group A", value: 25 },
        { name: "Group B", value: 15 },
        { name: "Group C", value: 40 },
        { name: "Group D", value: 20 },
      ];
      const COLORS = ["#FFAA00", "#707070", "#232164", "#8B352B"];

  return (
    <div>
       <div className='flex flex-col items-start justify-start bg-[#f7f5f5] shadow-md h-[175px] w-[86vw] rounded-sm my-2 
              md:w-[34vw] md:h-[175px] md:justify-start md:items-start md:pt-2 md:mx-2 lg:w-[30vw] lg:mx-[5px] xl:w-[29vw] xl:h-[180px] xl:mx-5'>
                <h6 className='text-[#707070] text-[11px] px-4 pt-3 xl:text-[12px]'>
                  User Statistics  
                </h6>
                <hr className='w-full border-[0.1%] border-[#c6c7c8]' />
                <div className='relative top-16 flex items-center justify-between w-[86vw] xl:ml-6'>
                    <div className='absolute left-0 right-0 ml-[-20px] md:ml-[-25px]'>
                          <PieChart width={150} height={130}>
                        <Pie
                          data={data}
                          cx={80}
                          cy={67}
                          innerRadius={42}
                          outerRadius={50}
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

                    <div className='absolute flex flex-col items-start justify-start left-40 right-1 pt-5 md:left-32 md:right-0 lg:left-[7.5rem] xl:left-36'>
                      <div className='flex flex-row items-center justify-center py-1 md:py-0 md:pb-1 md:w-28 md:items-start lg:w-48 
                      lg:justify-start lg:items-center xl:w-56'>
                         <GoPrimitiveDot className='text-xl text-[#232164] md:text-base lg:text-xl xl:text-[22px]' />
                         <p className='text-[9px] text-[#333333] md:text-[8px] lg:text-[8px] xl:text-[11px]'>
                            Total volume of new customers.
                         </p>
                       </div>
                      <div className='flex flex-row items-center justify-center py-1 md:py-0 md:pb-1 md:w-28 md:items-start 
                      lg:w-48 lg:justify-start lg:items-center xl:w-56'>
                         <GoPrimitiveDot className='text-xl text-[#FFAA00] md:text-base lg:text-xl xl:text-[22px]' />
                         <p className='text-[9px] text-[#333333] md:text-[8px] lg:text-[8px] xl:text-[11px]'>
                             Total volume of active customers.
                         </p>
                       </div>
                      <div className='flex flex-row items-center justify-center py-1 md:py-0 md:pb-1 md:w-28 md:items-start 
                      lg:w-48 lg:justify-start lg:items-center xl:w-56'>
                         <GoPrimitiveDot className='text-xl text-[#8B352B] md:text-base lg:text-xl xl:text-[22px]' />
                         <p className='text-[9px] text-[#333333] md:text-[8px] lg:text-[8px] xl:text-[11px]'>
                              Total volume of inactive customers.
                         </p>
                       </div>
                      <div className='flex flex-row items-center justify-center py-1 md:py-0 md:pb-1 md:w-28 md:items-start 
                      lg:w-48 lg:justify-start lg:items-center xl:w-56'>
                         <GoPrimitiveDot className='text-xl text-[#707070] md:text-base lg:text-xl xl:text-[22px]' />
                         <p className='text-[9px] text-[#333333] md:text-[8px] lg:text-[8px] xl:text-[11px]'>
                              Total volume of dormant customers.
                         </p>
                       </div>
                    </div>
                </div>
        </div>
    </div>
  )
} 
export default UserStatistics