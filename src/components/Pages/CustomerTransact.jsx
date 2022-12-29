import React from 'react'
import add from '../../assets/create-icon.png'
import cancel from '../../assets/cancelled-icon.png'
import complete from '../../assets/completed-icon.png'
import awaiting from '../../assets/awaiting-icon.png'
import onGoing from '../../assets/on-going-icon.png'
import cancelled from '../../assets/cancel-icon.png'
import completed from '../../assets/complete-icon.png'
import Layout from '../Layout/Layout'


const CustomerTransact = () => {
  return (
    <Layout>
    <div className='mt-[140px] ml-5 bg-white rounded-[10px] h-[35rem] md:h-[33rem] lg:h-[37rem] py-7 px-3 md:mb-[30px] md:mt-[0px] md:mx[25px] lg:mt-[10px] lg:px-[50px] lg:mx-12'>
        <div className='flex justify-between items-center my-5 mx-3 md:mx-12 lg:mx-[10px]'>
            <h1 className='text-xl lg:text-3xl text-[#262466] font-semibold lg:font-bold md:text-2xl'>Transactions</h1>
            <button className='bg-[#3ab75d] text-white rounded-md flex justify-center py-0 pl-2 w-[125px] lg:w-[150px]'>
            <span className='pt-3 text-xs lg:text-sm'>Create transaction</span>
            <span className='pl-1 pt-1.5'><img src={add} alt="..." /></span>
            </button>
        </div>
     <ul class="nav nav-tabs flex justify-center lg:justify-start list-none border-b-0 mt-3 mb-5" id="tabs-tab"
  role="tablist">
  <li className="nav-item md:px-5" role="presentation">
    <a href="#tabs-home" className="
      nav-link
      block
      font-medium
      text-xs
      border-x-0 border-t-0 border-b-2 border-transparent  
      pr-1
      py-2
      my-2
      md:text-sm
      lg:text-base
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
      aria-selected="true">All Transactions</a>
  </li>
  <li className="nav-item md:px-5" role="presentation">
    <a href="#tabs-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      px-1
      py-2
      my-2
      md:text-sm
      lg:text-base
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
      aria-controls="tabs-profile" aria-selected="false">Out-going</a>
  </li>
  <li className="nav-item md:px-5" role="presentation">
    <a href="#tabs-messages" class="
      nav-link
      flex
      items-center
      justify-center
      font-medium
      text-xs
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      px-1
      py-2
      my-2
      md:text-sm
      lg:text-base
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
      aria-controls="tabs-messages" aria-selected="false">
      <span className='px-1'><img src={complete} alt="..." /></span>
      <span>Completed</span>
      </a>
  </li>
  <li className="nav-item md:px-5" role="presentation">
    <a href="#tabs-cancel" class="
      nav-link
      flex
      items-center
      justify-center
      font-medium
      font-medium
      text-xs
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      pl-1
      py-2
      my-2
      md:text-sm
      lg:text-base
      focus:border-transparent
    " id="tabs-cancel-tab" data-bs-toggle="pill" data-bs-target="#tabs-cancel" role="tab"
      aria-controls="tabs-cancel" aria-selected="false">
      <span className='px-1'><img src={cancel} alt="..." /></span>
      <span>Cancelled</span>
      </a>
  </li>
</ul>
           
                         {/* TAB CONTENT */}
<div class="tab-content" id="tabs-tabContent">

                      {/* ALL TRANSACTONS */}
  <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
    <div className='flex items-center px-0.5 pl-2 mb-4 justify-between border-[1.5px] rounded-md md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={awaiting} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2 '>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>iphone11</p>
          <small className='block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>Awaiting approval</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Ridic Ventures</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦250,000</p>
       <p className='text-[#262466] text-center'>25th May, 2022</p>
    </div>

    <div className='flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md  md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={completed} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2'>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>Airpod</p>
          <small className='text-[#262466] block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>Completed</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Computer village</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦150,000</p>
       <p className='text-[#262466] text-center'>31th May, 2022</p>
    </div>

    <div className='flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={cancelled} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2'>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>PS-5</p>
          <small className='text-[#262466] block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>Cancelled</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Demo Gadgets</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦500,000</p>
       <p className='text-[#262466] text-center'>2nd June, 2022</p>
    </div>

    <div className='flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={onGoing} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2'>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>YEEZY 450</p>
          <small className='text-[#262466] block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>On-going</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Prince wears</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦50,000</p>
       <p className='text-[#262466] text-center'>14th June, 2022</p>
    </div>

    </div>

                            {/* OUT-GOING */}
  <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
     <div className='flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={onGoing} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2'>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>YEEZY 450</p>
          <small className='text-[#262466] block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>On-going</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Prince wears</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦50,000</p>
       <p className='text-[#262466] text-center'>14th June, 2022</p>
    </div>
    <div className='flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={onGoing} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2'>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>YEEZY 450</p>
          <small className='text-[#262466] block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>On-going</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Prince wears</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦50,000</p>
       <p className='text-[#262466] text-center'>14th June, 2022</p>
    </div>
  </div>
       
                                 {/* COMPLETED */}
   <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
   <div className='flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md  md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={completed} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2'>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>Airpod</p>
          <small className='text-[#262466] block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>Completed</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Computer village</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦150,000</p>
       <p className='text-[#262466] text-center'>31th May, 2022</p>
    </div>
    <div className='flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md  md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={completed} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2'>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>Airpod</p>
          <small className='text-[#262466] block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>Completed</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Computer village</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦150,000</p>
       <p className='text-[#262466] text-center'>31th May, 2022</p>
    </div>
    <div className='flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md  md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={completed} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2'>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>Airpod</p>
          <small className='text-[#262466] block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>Completed</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Computer village</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦150,000</p>
       <p className='text-[#262466] text-center'>31th May, 2022</p>
    </div>
   </div>

                                    {/* CANCELLED  */}
  <div class="tab-pane fade" id="tabs-cancel" role="tabpanel" aria-labelledby="tabs-cancel-tab">
  <div className='flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md md:px-4'>
       <div className='flex items-center justify-center'>
        <img className='w-6' src={cancelled} alt="Awaiting icon" />
        <div className='pl-1.5 pt-2'>
          <p className='text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]'>PS-5</p>
          <small className='text-[#262466] block whitespace-nowrap w-[50px] overflow-hidden text-ellipsis md:w-[65px]'>Cancelled</small>
        </div>   
       </div>
       <p className='text-[#262466] text-center'>Demo Gadgets</p>
       <p className='text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]'>₦500,000</p>
       <p className='text-[#262466] text-center'>2nd June, 2022</p>
    </div>
  </div>
</div>

                                   {/* PAGINATION */}
<div class="flex justify-end mt-10 md:mt-5 lg:mt-[50px]">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item disabled"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
          href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
      <li class="page-item active"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
          href="#">1 <span class="visually-hidden">(current)</span></a></li>
           <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">2</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">3</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">Next</a></li>
    </ul>
  </nav>
</div>
</div>
</Layout>
  )
}

export default CustomerTransact