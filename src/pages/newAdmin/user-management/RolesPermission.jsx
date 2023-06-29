import React from 'react'
import AppLayout from '../../../components/layout/AppLayout'
import { CiSearch } from 'react-icons/ci'
import AdminTable from '../../../components/admin/general/AdminTable'
import { useNavigate } from 'react-router-dom'

const RolesPermission = () => {

  const navigate = useNavigate();

  const items = [
    ['Ilerioluwa Brown', 'Product Manager', 'Sub Admin', 'Ilerioluwabrown@gmail.com', '11-2-2022', <p className='text-[#008000]'>Active</p>, 'Edit'],
    ['Ilerioluwa Brown', 'Product Manager', 'Sub Admin', 'Ilerioluwabrown@gmail.com', '11-2-2022', <p className='text-yellow-600'>Pending</p> , 'Edit'],
    ['Ilerioluwa Brown', 'Product Manager', 'Sub Admin', 'Ilerioluwabrown@gmail.com', '11-2-2022', <p className='text-yellow-600'>Pending</p>, 'Edit'],
    ['Loveth Grant', 'Product Designer', 'Admin', 'Lovethgrant@gmail.com', '11-2-2022', <p className='text-red-600'>Deactivated</p>, 'Edit'],
    ['Ilerioluwa Brown', 'Product Manager', 'Sub Admin', 'Ilerioluwabrown@gmail.com', '11-2-2022', <p className='text-[#008000]'>Active</p>, 'Edit'],
    ['Ilerioluwa Brown', 'Product Manager', 'Sub Admin', 'Ilerioluwabrown@gmail.com', '11-2-2022', <p className='text-[#008000]'>Active</p>, 'Edit'],
    ['Ilerioluwa Brown', 'Product Manager', 'Sub Admin', 'Ilerioluwabrown@gmail.com', '11-2-2022', <p className='text-red-600'>Deactivated</p>, 'Edit'],
  ]
  
  const headings = [
                    <p className='text-black font-medium'>Name</p>,
                    <p className='text-black font-medium'>Department</p>, 
                    <p className='text-black font-medium'>Role type</p>, 
                    <p className='text-black font-medium'>Email</p>, 
                    <p className='text-black font-medium'>Date created</p>, 
                    <p className='text-black font-medium'>Status</p>, 
                    <p className='text-black font-medium'>Action</p>, 
                   ];

  return (
    <AppLayout>
      <div className='flex flex-col justify-start mt-5 w-[90vw] md:w-[100vw] md:px-7 md:mt-7 lg:w-[100%] xl:px-14'>
        <h1 className='text-[17px] text-left font-bold xl:text-[18px]'>
          Roles & Permission
        </h1>
        <div className='flex items-center justify-center mt-1 lg:justify-between'>
          <div className='relative'>
              <input 
              className='w-[65vw] h-8 rounded border-[1.5px] border-[#b6b3b3] bg-transparent px-2 placeholder:text-[9px] 
              placeholder:w-40 placeholder:overflow-hidden placeholder:text-ellipsis placeholder:whitespace-nowrap
              md:w-[75vw] placeholder:md:text-[11px] md:px-7 md:placeholder:w-full lg:w-[62vw] xl:h-10 xl:placeholder:text-[13px]
              xl:w-[66vw]'
              placeholder='Name/ Email address/Department/ Role type'
              type="text" 
              />
              <CiSearch className='absolute text-[18px] right-2 text-[#9b9999] mt-[-24px] md:right-6 xl:text-[22px] xl:mt-[-30px]' />
          </div>
          <button className='text-[10px] h-8 rounded text-center text-white bg-[#0A439A] ml-3 w-[20vw] md:w-[20vw] 
          md:ml-7 lg:ml-0 lg:w-[10vw] xl:text-[13px] xl:h-10'>
              New user
          </button>
        </div>

        <div className='flex flex-row items-start justify-end w-[78vw] mt-3 md:w-[75vw] lg:w-[62vw] xl:w-[66vw] xl:mt-5'>
          <select className='border-[1px] border-[#888888] bg-[#dfdede] rounded text-[9px] h-6 w-[20vw] md:h-7 md:w-24
          lg:w-[10vw] lg:px-2 xl:text-[12px] xl:h-10' 
          name="date" id="date">
            <option className='' value="filter">Filter by date</option>
            <option value="1 week">1 week</option>
            <option value="1 month">1 month</option>
            <option value="3 months">3 months</option>
            <option value="1 year">1 year</option>
          </select>
        </div>

        <hr className='border-[0.1%] border-black mt-8' />
        <div>
          <AdminTable onClick={()=>navigate('/edit-roles')}  items = {items} headings = {headings} /> 
        </div>

      </div>
    </AppLayout>
  )
}

export default RolesPermission