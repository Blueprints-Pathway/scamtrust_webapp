import React from 'react'
import AppLayout from '../../../components/layout/AppLayout'
import { BsArrowLeft } from 'react-icons/bs'
import { Switch } from 'antd';
import { useNavigate } from 'react-router-dom';

const UserRegistrationPage = () => {

    const navigate = useNavigate();

    const onChange = (checked) => {
//   console.log(`switch to ${checked}`);
};

  return (
    <AppLayout>
        <div className='flex items-start justify-center w-full'>
        <div className='flex flex-col items-center justify-start w-full md:w-[85%] lg:w-[80%] xl:w-[75%]'>
            <div className='flex items-center justify-start w-full text-[#232164] font-medium mt-8 lg:mt-5 lg:ml-[-75px] xl:ml-[-120px]'>
                <BsArrowLeft className='mr-1 text-[16px] xl:text-[17px]' />
                <p onClick={()=>navigate(-1)}
                className='text-[11px] xl:text-[12px] cursor-pointer'>
                   Back
                </p>
            </div>

            <form className='flex flex-col items-start justify-start w-full mt-3 mb-5 xl:mt-4'>

                         {/* ADD USER RADIO */}
                <div className='flex flex-col items-start justify-start w-full'>
                <h1 className='text-[12px] font-semibold xl:text-[14px]'>
                  Add User
                </h1>
                <div className='border-[1px] border-[#b6b3b3] rounded-md w-full mt-1 py-2 pl-4 xl:pl-6'>
                    <div className='flex items-center just-start py-1'>
                      <input className='mr-3'
                      type="radio" />
                      <p className='text-[11px] text-[#808080] xl:text-[12px]'>
                          Admin
                      </p>
                    </div>
                    <div className='flex items-center just-start py-1'>
                      <input className='mr-3'
                      type="radio" />
                      <p className='text-[11px] text-[#808080] xl:text-[12px]'>
                         Sub Admin
                      </p>
                    </div>
                    <div className='flex items-center just-start py-1'>
                      <input className='mr-3 bg-transparent'
                      type="radio" />
                      <p className='text-[11px] text-[#808080] xl:text-[12px]'>
                          Support
                      </p>
                    </div>
                </div>
                </div>

                              {/* STAFF NAME */}
                <div className='flex flex-col items-start justify-start w-full mt-3 xl:mt-5'>
                   <h1 className='text-[12px] font-semibold  xl:text-[14px]'>
                       Enter Staff Name 
                   </h1>
                   <input 
                   className='border-[1px] border-[#b6b3b3] bg-transparent rounded-md w-full mt-1 py-2 pl-4 xl:pl-6 
                   placeholder:text-[11px] outline-[#4a75b7] placeholder:xl:text-[12px]'
                   type="text" 
                   placeholder='Name'
                   />

                </div>

                          {/* EMAIL ADDRESS */}
                <div className='flex flex-col items-start justify-start w-full mt-3 xl:mt-5'>
                   <h1 className='text-[12px] font-semibold  xl:text-[14px]'>
                        Enter Email Address 
                   </h1>
                   <input 
                   className='border-[1px] border-[#b6b3b3] bg-transparent rounded-md w-full mt-1 py-2 pl-4  xl:pl-6
                   placeholder:text-[11px] outline-[#4a75b7] placeholder:xl:text-[12px]'
                   type="text" 
                   placeholder='Enter email address '
                   />

                </div>

                             {/* SELECT PERMISSIONS */}
                <div className='border-[1px] border-[#b6b3b3] rounded-t-md w-full mt-4 mb-3 h-64 xl:mt-6'>
                    <p className='text-[12px] font-semibold pl-4 py-2 xl:text-[14px] xl:pl-6'>
                        Select permissions
                    </p>
                    <hr className='border-[0.1%] border-[#b6b3b3]' />

                    <div className='flex flex-col items-center justify-start w-full px-4 pt-3 overflow-y-scroll h-[13.5rem] xl:px-6 xl:pr-20'>
                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] xl:text-[12px]'>
                             Refund all transactions
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] w-[75%] xl:text-[12px]'>
                             Invite super-admin, sub-admin and customer support
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] w-[75%] xl:text-[12px]'>
                               View and perform actions on role management menu
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] w-[75%] xl:text-[12px]'>
                               Edit staff role and permissions
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] w-[75%] xl:text-[12px]'>
                               Delete staff
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] w-[75%] xl:text-[12px]'>
                               View and perform actions on user management menu
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] w-[75%] xl:text-[12px]'>
                               Update a users account details (including KYC levels)
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] w-[75%] xl:text-[12px]'>
                               Blacklist and re-enlist a users account
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] w-[75%] xl:text-[12px]'>
                               Block and unblock user wallets
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                        <div className='flex flex-row items-start justify-between w-full py-1 xl:py-2'>
                          <p className='text-[11px] w-[75%] xl:text-[12px]'>
                               Credit and debit a users account
                          </p>
                          <Switch className='' size="small" defaultChecked onChange={onChange} />
                        </div>

                    </div>

                </div>
                           
                           {/* BUTTON */}
                <div className='flex items-start justify-end w-full xl:mt-1'>
                   <button onClick={()=>navigate('/roles-permission')}
                   className='bg-[#0A439A] border-none text-white text-center h-7 px-7 rounded-md text-[11px] 
                   md:h-8 md:px-8 lg:px-9 xl:text-[13px] xl:h-10 xl:px-12'>
                        Add
                   </button>
                </div>

            </form>
        </div>
        </div>
    </AppLayout>
  )
}

export default UserRegistrationPage