import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

    
export const OneWeek = () => {
    const data = [
        {
          name: "Mon",
          num: "100",
          uv: 40,
          pv: 10,
          xv: 75
        },
        {
          name: "Tue",
          uv: 65,
          pv: 30,
          xv: 85
        },
        {
          name: "Wed",
          uv: 55,
          pv: 18,
          xv: 78
        },
        {
          name: "Thur",
          uv: 70,
          pv: 35,
          xv: 90
        },
        {
          name: "Fri",
          uv: 45,
          pv: 25,
          xv: 75
        },
        {
          name: "Sat",
          uv: 65,
          pv: 50,
          xv: 85
        },
        {
          name: "Sun",
          uv: 50,
          pv: 30,
          xv: 95
        }
    ];
    return (
    <div>
        <div className='flex flex-row items-start justify-start overflow-x-scroll w-[80vw] ml-[-15px] md:w-[44vw]
         md:ml-[-30px] lg:w-[36.5vw] lg:ml-[-35px] xl:w-[37vw] xl:ml-[-20px]'>
               <LineChart
                  width={530}
                  height={290}
                  data={data}
                  margin={{
                    top: 25,
                    right: 50,
                    left: 20,
                    bottom: 55
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
  )
}


export const OneMonth = () => {
    const data = [
        {
          name: "week-1",
          num: "100",
          uv: 40,
          pv: 10,
          xv: 75
        },
        {
          name: "week-2",
          uv: 65,
          pv: 30,
          xv: 85
        },
        {
          name: "week-3",
          uv: 55,
          pv: 18,
          xv: 78
        },
        {
          name: "week-4",
          uv: 70,
          pv: 35,
          xv: 90
        },
    ];
  return (
    <div>
        <div className='flex flex-row items-start justify-start overflow-x-scroll w-[80vw] ml-[-15px] md:w-[44vw]
         md:ml-[-30px] lg:w-[36.5vw] lg:ml-[-35px] xl:w-[37vw] xl:ml-[-20px]'>
               <LineChart
                  width={530}
                  height={290}
                  data={data}
                  margin={{
                    top: 25,
                    right: 50,
                    left: 20,
                    bottom: 55
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
  )
}

export const SixMonths = () => {
    const data = [
        {
          name: "1 mth",
          num: "100",
          uv: 30,
          pv: 5,
          xv: 65
        },
        {
          name: "2 mths",
          uv: 55,
          pv: 30,
          xv: 75
        },
        {
          name: "3 mths",
          uv: 45,
          pv: 8,
          xv: 68
        },
        {
          name: "4 mths",
          uv: 60,
          pv: 25,
          xv: 80
        },
        {
          name: "5 mths",
          uv: 35,
          pv: 15,
          xv: 65
        },
        {
          name: "6 mths",
          uv: 55,
          pv: 40,
          xv: 75
        },
    ];
  return (
    <div>
        <div className='flex flex-row items-start justify-start overflow-x-scroll w-[80vw] ml-[-15px] md:w-[44vw]
         md:ml-[-30px] lg:w-[36.5vw] lg:ml-[-35px] xl:w-[37vw] xl:ml-[-20px]'>
               <LineChart
                  width={530}
                  height={290}
                  data={data}
                  margin={{
                    top: 25,
                    right: 50,
                    left: 20,
                    bottom: 55
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
  )
}

export const OneYear = () => {
    const data = [
        {
          name: "jan-feb",
          num: "100",
          uv: 40,
          pv: 10,
          xv: 75
        },
        {
          name: "mar-apr",
          uv: 65,
          pv: 30,
          xv: 85
        },
        {
          name: "may-jun",
          uv: 55,
          pv: 18,
          xv: 78
        },
        {
          name: "jul-aug",
          uv: 70,
          pv: 35,
          xv: 90
        },
        {
          name: "sep-oct",
          uv: 45,
          pv: 25,
          xv: 75
        },
        {
          name: "nov-dec",
          uv: 65,
          pv: 50,
          xv: 85
        },
    ];
  return (
    <div>
        <div className='flex flex-row items-start justify-start overflow-x-scroll w-[80vw] ml-[-15px] md:w-[44vw]
         md:ml-[-30px] lg:w-[36.5vw] lg:ml-[-35px] xl:w-[37vw] xl:ml-[-20px]'>
               <LineChart
                  width={520}
                  height={290}
                  data={data}
                  margin={{
                    top: 25,
                    right: 50,
                    left: 20,
                    bottom: 55
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
  )
}

export const FiveYears = () => {
    const data = [
        {
          name: "1 Year",
          num: "100",
          uv: 40,
          pv: 10,
          xv: 75
        },
        {
          name: "2 Year",
          uv: 65,
          pv: 30,
          xv: 85
        },
        {
          name: "3 Year",
          uv: 55,
          pv: 18,
          xv: 78
        },
        {
          name: "4 Year",
          uv: 70,
          pv: 35,
          xv: 90
        },
        {
          name: "5 Year",
          uv: 45,
          pv: 25,
          xv: 75
        },
    ];
  return (
    <div>
        <div className='flex flex-row items-start justify-start overflow-x-scroll w-[80vw] ml-[-15px] md:w-[44vw]
         md:ml-[-30px] lg:w-[36.5vw] lg:ml-[-35px] xl:w-[37vw] xl:ml-[-20px]'>
               <LineChart
                  width={530}
                  height={290}
                  data={data}
                  margin={{
                    top: 25,
                    right: 50,
                    left: 20,
                    bottom: 55
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
  )
}

