import { useState } from "react"
import "./Tabs.css"
import awaiting from "../../assets/images/awaiting.png"
import { transcationData } from "../../data/data"
function Tabs() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          className={` font-lato ${
            toggleState === 1 ? "tabs active-tabs" : "tabs"
          }`}
          onClick={() => toggleTab(1)}
        >
          All
        </button>
        <button
          className={` font-lato ${
            toggleState === 2 ? "tabs active-tabs" : "tabs"
          }`}
          onClick={() => toggleTab(2)}
        >
          Outgoing
        </button>
        <button
          className={` font-lato ${
            toggleState === 3 ? "tabs active-tabs" : "tabs"
          }`}
          onClick={() => toggleTab(3)}
        >
          Cancelled
        </button>

        <button
          className={` font-lato ${
            toggleState === 4 ? "tabs active-tabs" : "tabs"
          }`}
          onClick={() => toggleTab(4)}
        >
          Completed
        </button>
      </div>
      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className=' overflow-x-scroll lg:overflow-hidden '>
            <table
              className='font-karla lg:w-[100%] sm:w-[500px] w-[400px] md:w-[450px] '
            >
              <tr className='text-[#A6A6A6] font-bold text-xs sm:text-sm '>
                <td className='pb-[20px] '>Transaction</td>
                <td className='pb-[20px] '>Vendor name</td>
                <td className='pb-[20px] '>Amount</td>
                <td className='pb-[20px] '>Date</td>
              </tr>

              {transcationData.map((item) => {
                return (
                  <tr>
                    <td className='py-3'>
                      <div className='flex items-center gap-2'>
                        <img className='' src={item.img} alt='' />
                        <div>
                          <h5 className=' text-primary font-lato text-xs sm:text-sm  font-medium'>
                            {item.device}
                          </h5>
                          <h6 className='text-[8px] text-[#A6A6A6]  sm:text-[10px] font-bold'>
                            {item.status}
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td className='text-primary font-medium text-xs sm:text-sm  '>
                      {item.name}
                    </td>
                    <td className='text-primary font-medium text-xs sm:text-sm  '>
                      {item.amount}
                    </td>
                    <td className='text-primary font-medium text-xs sm:text-sm  '>
                      {item.date}
                    </td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        ></div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        ></div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        ></div>
      </div>
    </div>
  )
}

export default Tabs
