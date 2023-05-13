import React from "react"
import { sidebarData } from "../data/data"
import { sidebarData2 } from "../data/data"
import logo from "../assets/images/scamTrustLogo.png"
import trust from "../assets/images/trust.png"
function Sidebar() {
  return (
    <div className=' bg  w-[250px]  hidden md:flex justify-between items-center flex-col  '>
      
      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center flex-col h-[100vh] overflow-y-hidden ">
        <div className='flex justify-center items-center mt-8 mb-16'>
          <img className="w-[80%]" src={logo} alt='' />
        </div>
        <ul className='flex flex-col items-start  gap-7'>
          {sidebarData.map((item) => {
            return (
              <li className='flex flex-row items-center gap-3' key={item.id}>
                <img className="w-[13px]" src={item.img} alt='' />
                <h5 className='uppercase text-sm font-poppins font-semibold '>
                  {item.title}
                </h5>
              </li>
            )
          })}
        </ul>
 
        <ul className='flex flex-col justify-end  mt-28  gap-7'>
          {sidebarData2.map((item) => {
            return (
              <li className='flex flex-row items-center gap-3' key={item.id}>
                <img className="w-[13px]" src={item.img} alt='' />
                <h5 className='uppercase text-sm font-poppins font-semibold '>
                  {item.title}
                </h5>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
        <img className="w-[80%]" src={trust} alt="" />
        
       
      </div>
      
      
   
  )
}

export default Sidebar
