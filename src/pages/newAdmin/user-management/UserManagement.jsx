import React from 'react'
import { Tabs } from 'antd';
import AppLayout from '../../../components/layout/AppLayout'
import CustomerManagement from './CustomerManagement';
import VendorManagement from './VendorManagement';

const UserManagement = () => {
    const onChange = (key) => {
        // console.log(key);
      };
      const items = [
        {
          key: '1',
          label: <li className='text-[11px] text-[#707070] mb-[-11px] md:text-[12px] xl:text-[14px]'>Customer</li>,
          children: <CustomerManagement /> ,
        },
        {
          key: '2',
          label: <li className='text-[11px] text-[#707070] mb-[-11px] md:text-[12px] xl:text-[14px]'>Vendor</li>,
          children: <VendorManagement /> ,
        },
      ];
  return (
    <AppLayout>
        <div className='flex flex-col items-center justify-start w-[100vw] lg:w-[75vw] lg:justify-center overflow-x-hidden lg:mx-3 xl:w-[82vw] xl:mx-4'>
            <div className='relative flex flex-col items-center justify-start mt-6 md:flex-row md:w-[100vw] md:mt-3 lg:w-[75vw] xl:w-[82vw]'>
                <p className='text-[#232164] font-semibold text-[15px] md:hidden'>
                   User management
                </p>
                    <hr className='border-[0.1%] border-[#979595] w-[90vw] absolute top-[3.3rem] z-50 md:top-[2rem] md:w-[95vw] lg:w-[75vw] xl:w-[82vw] xl:top-[2.3rem]' />
                <div className='flex flex-row items-start justify-start md:w-[95vw] ml-14 md:ml-8 lg:w-[75vw] lg:ml-5 xl:w-[82vw]'>
                    <div>
                      <p className='hidden md:flex md:items-center md:justify-start md:text-[#232164] md:font-semibold 
                       md:mt-[6px] md:mr-7 lg:mr-10 xl:text-[21px]'>
                         User management
                      </p>
                    </div>
                   <div>
                     <Tabs 
                      tabBarStyle={{textDecorationStyle: 'none'}}
                      defaultActiveKey="1" items={items} onChange={onChange} 
                      />
                   </div>
                </div>
            </div>
        </div>
    </AppLayout>
  )
}

export default UserManagement