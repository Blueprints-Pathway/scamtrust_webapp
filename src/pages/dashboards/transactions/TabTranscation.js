import React from "react"
import "./TabTranscation.css"
import { useState } from "react"
import awaiting from "../../../assets/images/awaiting.png"
import { BiDotsHorizontalRounded, BiPlus } from "react-icons/bi"

import { IconContext } from "react-icons/lib"

function TabTranscation() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div className='  w-[100%] lg:w-[76vw]  mt-28 bg-white   rounded-[25px] px-6'>
      <div className='flex justify-between items-center pt-10 '>
        <h3 className='text-sm md:text-lg lg:text-xl text-primary font-bold '>
          Transaction
        </h3>

        <button className='bg-[#3AB75D] flex justify-center rounded-[6px] items-center w-[130px] h-[36px] sm:h-[46px] sm:w-[180px] gap-2 text-[10px] sm:text-sm'>
          Create Transaction{" "}
          <span className='flex justify-center items-center w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] rounded-full bg-white'>
            <IconContext.Provider value={{ color: "black", size: "16px" }}>
              <BiPlus />
            </IconContext.Provider>
          </span>
        </button>
      </div>
      <div className='container'>
        <div className='bloc-tabs'>
          <button
            className={` font-lato ${
              toggleState === 1 ? "tabss active-tabs" : "tabss"
            }`}
            onClick={() => toggleTab(1)}
          >
            All Transactions
          </button>
          <button
            className={` font-lato ${
              toggleState === 2 ? "tabss active-tabs" : "tabss"
            }`}
            onClick={() => toggleTab(2)}
          >
            Out-going
          </button>
          <button
            className={` font-lato ${
              toggleState === 3 ? "tabss active-tabs" : "tabss"
            }`}
            onClick={() => toggleTab(3)}
          >
            Cancelled
          </button>

          <button
            className={` font-lato ${
              toggleState === 4 ? "tabss active-tabs" : "tabss"
            }`}
            onClick={() => toggleTab(4)}
          >
            Completed
          </button>
        </div>
        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className=' overflow-x-scroll lg:overflow-hidden '>
              <table className='font-karla lg:w-[100%] sm:w-[500px] w-[500px] md:w-[450px] '>
                <tr>
                  <td className='pb-3'>
                    <div className='flex items-center gap-2'>
                      <img src={awaiting} alt='' />
                      <div>
                        <h5 className=' text-primary font-lato text-xs sm:text-[16px] font-medium'>
                          Iphone 11....
                        </h5>
                        <h6 className='text-[8px] text-[#A6A6A6]  sm:text-[10px] font-bold'>
                          Awaiting approval
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className='text-primary font-medium text-xs sm:text-[16px]  '>
                    Ridic Ventures
                  </td>
                  <td className='text-primary font-medium text-xs sm:text-[16px] '>
                    250,000.00
                  </td>
                  <td className='text-primary font-medium text-xs sm:text-[16px] '>
                    25th May, 2022
                  </td>
                  <td>
                    <div className=' w-[30px] h-[30px]sm:w-[40px] sm:h-[40px] bg-[#EAEAEA] rounded-[5px] flex justify-center items-center'>
                      <IconContext.Provider
                        value={{ color: "black", size: "25px" }}
                      >
                        <BiDotsHorizontalRounded />
                      </IconContext.Provider>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          ></div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          ></div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          ></div>
        </div>
      </div>
    </div>
  )
}

export default TabTranscation
