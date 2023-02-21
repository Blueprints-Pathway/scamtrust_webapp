import React from 'react'
import Layout from '../../Layout/Layout'
import Logo from '../../../assets/images/logo.svg'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const VendorDeclined = () => {

    const navigate = useNavigate();

  return (
    <div>
         <Layout>
            <div className='trans-container bg-[#fff] rounded-3xl w-[25rem] ml-[-41px] md:w-[53rem] md:mt-[-72px] lg:w-[90rem] lg:ml-[-16.8rem] lg:mt-[-40px] lg:pb-16 py-10 pt-12 lg:pt-12 md:pt-8 md:px-12 px-5'>

                <h6 onClick={() => navigate(-1)}
                className='flex items-center text-[#262466] text-sm mb-4 md:mb-0 lg:mb-8 lg:ml-4'>
                    <BsArrowLeft className='text-lg lg:text-4xl' /><span className='mx-1 lg:text-2xl lg:mb-1 lg:font-semibold'>Back</span>
                </h6>

                <div className='flex flex-wrap items-center justify-between md:mx-5'>
                    <div>
                        <h1 className='font-bold text-sm lg:text-2xl lg:font-bold'>
                        <span className="text-[#3AB75D] pr-1">ID:</span> - 6057702
                        </h1>
                        <p className='text-sm lg:text-2xl font-bold text-[#262466] my-1 lg:my-4'>Ridic  Ventures </p>
                    </div>
                    <div className='md:ml-[-80px] lg:ml-[-15rem]'>
                        <p className='text-sm lg:text-2xl font-bold'>Status:
                        <span className='font-normal pl-1 text-[#95999D] text-sm lg:text-2xl lg:px-5'>Cancelled</span> </p>
                        <p className='text-sm lg:text-2xl mt-1 lg:my-4 font-normal'>Today, 8:48 AM</p>
                    </div>
                     <div>

                                      {/* S T A G E S */}
                    <div className='flex items-center justify-center mt-6 mx-[55px] md:mx-0'>

                        <div className='flex-column items-center justify-center'>
                               <div className='flex items-center justify-center'>
                                   <div className='flex items-center justify-center border-[1px] border-[#95999D] rounded-[100%] bg-[#95999D] text-[#ffff] w-7 h-7 lg:w-12 lg:h-12'>
                                       <h1 className='text-center text-sm lg:text-xl text-[#ffff]'>1</h1>
                                   </div>
                                   <div className='w-16 lg:w-24 border-[#95999D] border-[2px]'></div>
                               </div>
                               <div className='items-center mb-5 mt-1 lg:mt-2 ml-[-30px] lg:ml-[-50px]'>
                                  <p className='items-center lg:text-xl lg:font-semibold'>Awaiting approval</p>
                               </div>
                        </div>

                        <div className='flex-column items-center justify-center'>
                               <div className='flex items-center justify-center'>
                                   <div className='flex items-center justify-center border-[1px] border-[#95999D] rounded-[100%] bg-[#95999D] text-[#ffff] w-7 h-7 lg:w-12 lg:h-12'>
                                       <h1 className='text-center text-sm lg:text-xl text-[#ffff]'>2</h1>
                                   </div>
                                   {/* <div className='w-16 lg:w-24 border-[#95999D] border-[2px]'></div> */}
                               </div>
                               <div className='items-center mb-5 mt-1 lg:mt-2 ml-[-8px] lg:ml-[-11px]'>
                                  <p className='items-center lg:text-xl lg:font-semibold'>On-going</p>
                               </div>
                        </div>

                        {/* <div className='flex-column items-center justify-center ml-[-13px] lg:ml-[-20px]'>
                               <div className='flex items-center justify-center'>
                                   <div className='flex items-center justify-center border-[1px] border-[#95999D] rounded-[100%] bg-[#95999D] text-[#ffff] w-7 h-7 lg:w-12 lg:h-12'>
                                       <h1 className='text-center text-sm lg:text-xl text-[#ffff]'>3</h1>
                                   </div>
                               </div>
                               <div className='items-center mb-5 mt-1 lg:mt-2'>
                                  <p className='lg:items-center lg:text-xl lg:font-semibold'> Completed</p>
                               </div>
                        </div> */}
                        
                        
                    </div> 

                     </div>

             </div>

                <div className='border-[1px] border-[#95999D] rounded-2xl lg:mt-2'>

                    <div className='bg-[#EAEAEA] rounded-t-2xl'>
                        <h4 className='text-base lg:text-3xl font-bold px-7 lg:px-16 py-7 lg:py-10'>Transaction details</h4>
                    </div>

                    <div className='flex-column items-center justify-center mt-7 px-5 lg:px-28'>

                        <div className='flex items-center justify-between text-base lg:text-2xl my-7 lg:my-10'>
                            <p className='font-medium'>Product name</p>
                            <p className='text-[#8D9296]'>iPhone</p>
                        </div>
                        <div className='flex items-center justify-between text-base lg:text-2xl my-7 lg:my-10'>
                            <p className='font-medium'>Product amount</p>
                            <p className='text-[#8D9296]'>₦15.00</p>
                        </div>
                        <div className='flex items-center justify-between text-base lg:text-2xl my-7 lg:my-10'>
                            <p className='font-medium'>Quantity</p>
                            <p className='text-[#8D9296]'>2</p>
                        </div>
                        <div className='flex items-center justify-between text-base lg:text-2xl my-7 lg:my-10'>
                            <p className='font-medium'>Due date</p>
                            <p className='text-[#8D9296]'>25 - 5 -2022</p>
                        </div>
                        <div className='flex items-start justify-between text-base lg:text-2xl mt-7 lg:my-10'>
                            <p className='font-medium'>Description</p>
                            <p className='text-[#8D9296] w-40 lg:w-[25rem] text-right'>One pair of black female corporate heel shoes and one pair of white unbranded sneakers</p>
                        </div>
                        <div className='flex-column items-center justify-start text-base lg:text-2xl mt-3 mb-5 lg:mt-10'>
                            <p className='font-medium pb-1 lg:pb-2'>Reason for cancellation </p>
                            <p className='border-[1px] border-[#0E3D8E] text-[#0E3D8E] py-2 text-center md:text-left md:px-10 lg:px-16 md:py-3 lg:py-5'>Declined by vendor</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-10 lg:mt-24 lg:mb-1'>
                    <h1 className='text-sm text-[#8D9296] mx-1'>Secured by</h1>
                    <img className='w-24 mx-1' src={Logo} alt="Scamtrust logo" />
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default VendorDeclined