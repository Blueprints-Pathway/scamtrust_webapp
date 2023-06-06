import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import { MdAdd } from 'react-icons/md'
import purple from '../../../assets/images/purpleChart.png'
import red from '../../../assets/images/redChart.png'
import green from '../../../assets/images/greenChart.png'

const items = [
    {
        id: 1,
        title: "Total volume of wallet deposits",
        total: '535,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#32A452] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#32A452] md:text-[10px]  xl:text-[13px]'>+20%</span>,
        img: purple,
    },
    {
        id: 2,
        title: "Total volume of wallet deposits via card",
        total: '165,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#32A452] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#32A452] md:text-[10px] xl:text-[13px]'>+10%</span>,
        img: green,
    },
    {
        id: 3,
        title: "Total volume of wallet deposits via card",
        total: '72,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#FF0000] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#FF0000] md:text-[10px] xl:text-[13px]'>-5%</span>,
        img: red,
    },
    {
        id: 4,
        title: "Total volume  of wallet deposits via virtual nuban",
        total: '20,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#FF0000] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#FF0000] md:text-[10px] xl:text-[13px]'>-7%</span>,
        img: purple,
    },
    {
        id: 5,
        title: "Total volume of customer wallet withdrawals",
        total: '535,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#32A452] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#32A452] md:text-[10px] xl:text-[13px]'>+20%</span>,
        img: purple,
    },
    {
        id: 6,
        title: "Total volume of customer cancellations",
        total: '165,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#32A452] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#32A452] md:text-[10px] xl:text-[13px]'>+10%</span>,
        img: green,
    },
    {
        id: 7,
        title: "Total volume of customer - vendor transactions",
        total: '72,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#FF0000] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#FF0000] md:text-[10px] xl:text-[13px]'>-5%</span>,
        img: red,
    },
    {
        id: 8,
        title: "Total volume of customer - vendor transactions processed",
        total: '20,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#FF0000] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#FF0000] md:text-[10px] xl:text-[13px]'>-7%</span>,
        img: green,
    },
    {
        id: 9,
        title: "Total volume of customer - vendor transactions processed",
        total: '20,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#FF0000] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#FF0000] md:text-[10px] xl:text-[13px]'>-7%</span>,
        img: green,
    },
    {
        id: 10,
        title: "Total volume of cancellations",
        total: '535,000',
        arrow: <HiArrowUpRight className='mr-[2px] text-[#32A452] md:text-[10px] xl:text-[13px]' />,
        percent: <span className='text-[#32A452] md:text-[10px] xl:text-[13px]'>+20%</span>,
        img: purple,
    },
]


const Vendor = () => {
  return (
    <div className='flex flex-row items-center justify-center w-[100vw] mx-[10px] md:w-[80vw] lg:w-[100%] lg:mx-0 xl:w-[100%] xl:mt-6'>

    <div className='flex flex-row flex-wrap items-center mt-5 mx-[-10px] md:ml-[-150px] md:justify-start md:flex-wrap lg:mt-6 lg:ml-[-190px] 
                    xl:ml-[-230px] xl:w-[95vw]'>
        {items.map((card, index)=> {
            return(
        <div key={index}
        className='flex flex-col items-start justify-center bg-[#f7f5f5] shadow-md h-[70px] w-[41vw] px-1 rounded-sm my-2 mx-2 
        md:w-[25vw] md:h-[75px] md:justify-start md:pt-2 md:mx-3 lg:w-[16.8vw] lg:mx-[10px] xl:w-[17.5vw] xl:h-[90px] xl:mx-4'>
            <p className='text-[8px] font-medium text-[#232164] ml-1 md:text-[9px] md:h-7 xl:text-[12px] xl:h-8'>
               {card.title}
            </p>
            <div className='flex flex-row items-end justify-between w-[100%] mt-2 md:mt-0'>
                <h1 className='font-semibold text-[#232164] mb-[-2px] ml-1 xl:text-lg'>
                    {card.total}
                </h1>
                <p className='flex flex-row text-[8px] mx-0'>
                    {card.arrow}
                    {card.percent}
                </p>
                <img className='w-10 md:w-12 xl:w-16' 
                src={card.img} alt="chart-img" />
            </div>
        </div>
            )
        })}

       <div className='flex flex-row items-center justify-start bg-[#f7f5f5] shadow-md h-[68px] w-[41vw] px-1 rounded-sm my-2 
       mx-2 md:w-[25vw] md:h-[75px] md:mx-3 lg:w-[16.8vw] lg:mx-[10px] xl:w-[17.5vw] xl:h-[90px] xl:mx-4'>
          <div className='flex flex-row items-center bg-[#ffff] justify-center shadow-md h-8 w-8 rounded-full ml-3 md:shadow-md 
          xl:h-10 xl:w-10 xl:shadow-lg'>
             <MdAdd className='text-[#023A81] text-xl text-[20px]' />
          </div>
          <p className='text-[10px] font-medium text-[#232164] ml-3 md:text-[11px] xl:text-[14px] xl:ml-4'>
            Add
          </p>
        </div>

    </div>

    </div>
  )
}

export default Vendor