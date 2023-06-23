import React from 'react'
import AppLayout from '../../../components/layout/AppLayout'
import { Tabs } from 'antd';
import ViewallTransaction from '../../../components/admin/admin-transaction/ViewallTransaction';
import ViewCustomerTransaction from '../../../components/admin/admin-transaction/ViewCustomerTransaction';
import ViewVendorTransaction from '../../../components/admin/admin-transaction/ViewVendorTransaction';

const onChange = (key) => {
    //console.log(key);
  };
  const items = [
    {
      key: '1',
      label: <li className='mb-[-9px] text-[#707070] text-xs lg:text-[11px] xl:text-[15px] xl:mx-[5px]'>All</li>,
      children: <ViewallTransaction /> ,
    },
    {
      key: '2',
      label: <li className='mb-[-9px] text-[#707070] text-xs lg:text-[11px] xl:text-[15px] xl:mx-[5px]'>Customer</li>,
      children: <ViewCustomerTransaction /> ,
    },
    {
      key: '3',
      label: <li className=' mb-[-9px] text-[#707070] text-xs lg:text-[11px] xl:text-[15px] xl:mx-[5px]'>Vendor</li>,
      children: <ViewVendorTransaction /> ,
    },
  ];

const Viewall = () => {
  return (
    <AppLayout>
        <div className='flex flex-col items-center justify-center w-[100vw] lg:w-[81vw] xl:w-[86vw]'>
            <div className='relative flex flex-col items-start justify-center mt-7 w-[90%] md:mt-1 lg:w-[75vw] xl:w-[82vw]'>
                <h1 className='absolute top-0 font-semibold text-start text-lg text-[#232164] md:top-8 xl:text-xl'>
                    Transactions
                </h1>
                <div className='relative flex items-center justify-center w-[100%] mt-7'>
                   <hr className='absolute top-8 border-[1%] border-[#d0d1d2] w-[90vw] lg:w-[75vw] xl:w-[82vw]' />
                   <Tabs defaultActiveKey="1" items={items} onChange={onChange} 
                   className='flex items-center justify-center w-full md:justify-start md:ml-[-180px] lg:ml-[-275px] xl:ml-[-41em]' />
                </div>
            </div>
        </div>
    </AppLayout>
  )
}

export default Viewall