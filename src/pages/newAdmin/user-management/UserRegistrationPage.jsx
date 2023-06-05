import React from 'react'
import AppLayout from '../../../components/layout/AppLayout'
import { BsArrowLeft } from 'react-icons/bs'

const UserRegistrationPage = () => {
  return (
    <AppLayout>
        <div className='flex flex-col items-center justify-start w-full'>
            <div className='flex items-center justify-start w-[90vw] text-[#232164] font-medium mt-8'>
                <BsArrowLeft className='mr-1 text-[16px]' />
                <p className='text-[11px]'>
                   Back
                </p>
            </div>

            <form className='flex flex-col items-start justify-start w-full mt-3'>

                         {/* ADD USER RADIO */}
                <div className='flex flex-col items-start justify-start w-full'>
                <h1 className='text-[12px] font-semibold'>
                  Add User
                </h1>
                <div className='border-[1px] border-[#b6b3b3] rounded-md w-full mt-1 py-2 pl-4'>
                    <div className='flex items-center just-start py-1'>
                      <input className='mr-3'
                      type="radio" />
                      <p className='text-[11px] text-[#808080]'>
                          Admin
                      </p>
                    </div>
                    <div className='flex items-center just-start py-1'>
                      <input className='mr-3'
                      type="radio" />
                      <p className='text-[11px] text-[#808080]'>
                         Sub Admin
                      </p>
                    </div>
                    <div className='flex items-center just-start py-1'>
                      <input className='mr-3 bg-transparent'
                      type="radio" />
                      <p className='text-[11px] text-[#808080]'>
                          Support
                      </p>
                    </div>
                </div>
                </div>

                              {/* STAFF NAME */}
                <div className='flex flex-col items-start justify-start w-full mt-3'>
                   <h1 className='text-[12px] font-semibold'>
                       Enter Staff Name 
                   </h1>
                   <input 
                   className='border-[1px] border-[#b6b3b3] bg-transparent rounded-md w-full mt-1 py-2 pl-4 
                   placeholder:text-[11px]'
                   type="text" 
                   placeholder='Name'
                   />

                </div>

                          {/* EMAIL ADDRESS */}
                <div className='flex flex-col items-start justify-start w-full mt-3'>
                   <h1 className='text-[12px] font-semibold'>
                        Enter Email Address 
                   </h1>
                   <input 
                   className='border-[1px] border-[#b6b3b3] bg-transparent rounded-md w-full mt-1 py-2 pl-4 
                   placeholder:text-[11px]'
                   type="text" 
                   placeholder='Enter email address '
                   />

                </div>

            </form>
        </div>
    </AppLayout>
  )
}

export default UserRegistrationPage