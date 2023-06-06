import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const VendorCharts = () => {
  const data = [
    {
      name: "jan",
      num: "100",
      uv: 40,
      pv: 10,
      xv: 75
    },
    {
      name: "feb",
      uv: 65,
      pv: 30,
      xv: 85
    },
    {
      name: "mar",
      uv: 55,
      pv: 18,
      xv: 78
    },
    {
      name: "apr",
      uv: 70,
      pv: 35,
      xv: 90
    },
    {
      name: "may",
      uv: 45,
      pv: 25,
      xv: 75
    },
    {
      name: "jun",
      uv: 65,
      pv: 50,
      xv: 85
    },
    {
      name: "jul",
      uv: 50,
      pv: 30,
      xv: 95
    },
    {
      name: "aug",
      uv: 40,
      pv: 10,
      xv: 75
    },
    {
      name: "sep",
      uv: 65,
      pv: 30,
      xv: 85
    },
    {
      name: "oct",
      uv: 55,
      pv: 18,
      xv: 78
    },
    {
      name: "nov",
      uv: 43,
      pv: 25,
      xv: 75
    },
    {
      name: "dec",
      uv: 50,
      pv: 30,
      xv: 95
    },
];
  return (
    <div>
        <div className='flex flex-col items-start justify-start bg-[#f7f5f5] shadow-md h-[175px] w-[86vw] rounded-sm my-2 
            md:w-[54vw] md:h-[175px] md:justify-start md:items-start md:pt-2 md:mx-2 lg:w-[43vw] lg:mx-[5px] xl:w-[49vw] xl:h-[175px] xl:mx-5'>

          <div className='flex flex-row items-start justify-end w-full mt-3 px-3 lg:w-[43vw] xl:w-[49vw] md:mt-1'>
              <select className='border-none bg-[#f7f5f5] text-[8px] h-5 w-[5.4rem] pl-1 lg:h-5 xl:h-[1.7rem] 
              xl:w-[7rem] xl:text-[11px]' name="date" id="date">
               <option value="filter">Filter by month</option>
               <option value="1 week">jan</option>
               <option value="1 month">feb</option>
               <option value="3 months">mar</option>
               <option value="1 year">apr</option>
               <option value="1 year">may</option>
               <option value="1 year">jun</option>
               <option value="1 year">jul</option>
               <option value="1 year">aug</option>
               <option value="1 year">sep</option>
               <option value="1 year">oct</option>
               <option value="1 year">nov</option>
               <option value="1 year">dec</option>
              </select>
           </div>
           <div className='flex flex-row items-start mt-5 justify-start overflow-x-scroll w-[80vw] md:w-[52vw] md:mt-3 lg:w-[42.5vw] 
              xl:w-[49vw]'>
               <LineChart
                  width={670}
                  height={130}
                  data={data}
                  margin={{
                    top: 0,
                    right: -20,
                    left: -20,
                    bottom: 0
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis dataKey="num" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 0 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="xv"
                    stroke="#CB3837"
                    activeDot={{ r: 0 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    </div>
  )
}

export default VendorCharts