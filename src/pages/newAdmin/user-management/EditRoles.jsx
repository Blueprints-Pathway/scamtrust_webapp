import React from 'react'
import AppLayout from '../../../components/layout/AppLayout'
import { Switch } from 'antd';
import UserDeactivatebtn from '../../../components/admin/user-management/UserDeactivatebtn';
import UserDeletebtn from '../../../components/admin/user-management/UserDeletebtn';
import UserUpdatebtn from '../../../components/admin/user-management/UserUpdatebtn';

const EditRoles = () => {

    const onChange = (checked) => {
        //   console.log(`switch to ${checked}`);
        };

  return (
    <AppLayout>
        <div className='flex flex-col items-center justify-start w-full mt-10'>
            <div className='flex items-center justify-between w-[90vw] md:w-[90%] xl:w-[80%]'>
                <button className='items-center h-7 w-12 rounded-sm text-[12px] text-white bg-[#0A439A] md:w-16 xl:h-8 xl:w-20 xl:text-[14px]'>
                    Edit
                </button>
                <div className='flex flex-col items-end'>
                    <span className='text-[11px] xl:text-[14px]'>
                        <b>Account created :</b>
                        <i className='text-[#808080]'> Pending</i>
                    </span>
                    <p className='text-[#008000] font-semibold text-[11px] xl:text-[14px]'>
                        Invited 3 days ago
                    </p>
                </div>
            </div>

                 {/* INPUTS */}
            <div className='flex flex-wrap items-center justify-between mt-10 w-[90vw] md:w-[90%] xl:w-[80%]'>
                <div className='flex-col items-start justify-start mb-3'>
                    <p className='text-[12px] font-medium mb-1 lg:font-semibold xl:text-[14px]'>
                         Name
                    </p>
                    <input 
                    className='w-[57vw] h-9 rounded border-[1.5px] border-[#b6b3b3] bg-transparent px-3 placeholder:text-[12px] 
                    placeholder:w-40 placeholder:font-medium placeholder:overflow-hidden placeholder:text-ellipsis placeholder:whitespace-nowrap
                    md:w-[37vw] placeholder:md:text-[11px] md:px-7 md:placeholder:w-full lg:w-[22vw] lg:px-3 xl:h-11 xl:placeholder:text-[13px]
                    xl:w-[21vw]'
                    type="text"
                    id='name'
                    placeholder='Fade Adefolalu'
                     />
                </div>
                <div className='flex-col items-start justify-start mb-3'>
                    <p className='text-[12px] font-medium mb-1 lg:font-semibold xl:text-[14px]'>
                       Email
                    </p>
                    <input 
                    className='w-[57vw] h-9 rounded border-[1.5px] border-[#b6b3b3] bg-transparent px-3 placeholder:text-[12px] 
                    placeholder:w-40 placeholder:font-medium placeholder:overflow-hidden placeholder:text-ellipsis placeholder:whitespace-nowrap
                    md:w-[37vw] placeholder:md:text-[11px] md:px-7 md:placeholder:w-full lg:w-[22vw] lg:px-3 xl:h-11 xl:placeholder:text-[13px]
                    xl:w-[21vw]'
                    type="text"
                    id='name'
                    placeholder='FadeAdefolalu@gmail.com'
                     />
                </div>
                <div className='flex-col items-start justify-start mb-3 md:mt-2'>
                    <p className='text-[12px] font-medium mb-1 lg:font-semibold xl:text-[14px]'>
                        Staff Role
                    </p>
                    <input 
                    className='w-[57vw] h-9 rounded border-[1.5px] border-[#b6b3b3] bg-transparent px-3 placeholder:text-[12px] 
                    placeholder:w-40 placeholder:font-medium placeholder:overflow-hidden placeholder:text-ellipsis placeholder:whitespace-nowrap
                    md:w-[37vw] placeholder:md:text-[11px] md:px-7 md:placeholder:w-full lg:w-[22vw] lg:px-3 xl:h-11 xl:placeholder:text-[13px]
                    xl:w-[21vw]'
                    type="text"
                    id='name'
                    placeholder='Sub-Admin'
                     />
                </div>

            </div>

                           {/* SELECT PERMISSIONS */}
               <div className='border-[1px] border-[#b6b3b3] rounded-t-md w-full mt-4 mb-3 h-64 md:w-[90%] xl:w-[80%]'>
                    <p className='text-[12px] font-semibold pl-4 py-3 xl:text-[14px] xl:pl-6'>
                        Select permissions
                    </p>
                    <hr className='border-[0.1%] border-[#b6b3b3]' />

                    <div className='flex flex-col items-center justify-start w-full px-4 pt-3 overflow-y-scroll md:pr-20 h-[13rem] xl:px-6 xl:pr-28'>
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

                      {/* BOTTOM BUTTONS */}
                <div className='flex items-center justify-between w-full mb-8 mt-1 md:mt-4 md:w-[90%] md:mb-12 xl:w-[80%]'>
                    <div className='flex items-center justify-start w-full'>
                        <UserDeactivatebtn />
                        <UserDeletebtn />
                    </div>

                    <UserUpdatebtn />

                </div>


        </div>
    </AppLayout>
  )
}

export default EditRoles