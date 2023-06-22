import React from 'react'
import { Modal } from 'antd';
import { useState } from 'react';

const UploadBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(false)
      }

  return (
    <div>
        <div>
           <button onClick={showModal}
              className='text-center text-[10px] text-white bg-[#0A439A] rounded-md h-7 w-20 md:w-24 md:h-8 xl:h-9 xl:w-28 xl:text-[13px] xl:ml-10'>
               Upload
           </button>
        </div>
        <div>
        <Modal 
                centered 
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{style: { display: 'none' }}}
                onCancelprops={{style:{display: 'none'}}}
                width={350}
                bodyStyle={{
                  borderRadius: '0px',
              }}
                open={isModalOpen} 
                onCancel={handleCancel}
                >
                    <form onSubmit={handleSubmit}
                    className='flex flex-col items-start justify-start w-[100vw] px-5'>
                        <div className='flex flex-col items-start justify-start w-[60vw] mt-8 md:w-[34vw] lg:w-[25.5vw] xl:w-[18vw]'>
                                 {/* DATE */}
                            <div className='flex flex-col items-start justify-start w-full mb-4'>
                                <label 
                                className=' text-[13px] font-semibold mb-1'
                                htmlFor="date">
                                    Date
                                </label>
                                <input 
                                className='border-[0.13em] border-[#dddd] w-full h-9 px-3'
                                id='date'
                                type="date" 
                                />
                            </div>

                                 {/* SERVICE VENDOR */}
                            <div className='flex flex-col items-start justify-start w-full mb-4'>
                                <label 
                                className=' text-[13px] font-semibold mb-1'
                                htmlFor="service">
                                   Service Vendor
                                </label>
                                <input 
                                className='border-[0.13em] border-[#dddd] w-full h-9 px-3 placeholder:text-[#6e6d6ddd] placeholder:text-[12px]'
                                id='date'
                                type="text"
                                placeholder='Monefy' 
                                />
                            </div>
                                 {/* TRANSACTION TYPE */}
                            <div className='flex flex-col items-start justify-start w-full mb-4'>
                                <label 
                                className=' text-[13px] font-semibold mb-1'
                                htmlFor="service">
                                   Transaction Type
                                </label>
                                <select className='border-[0.15em] border-[#dddd] w-full h-9 px-3 text-[12px] text-[#6e6d6ddd] outline-none'
                                name="option" id="option">
                                    <option value="Select time of transaction">Select time of transaction</option>
                                    <option value="Wallet withdrawals" className='text-black'>Wallet withdrawals</option>
                                    <option value="Wallet deposits" className='text-black'>Wallet deposits</option>
                                </select>
                            </div>
                                  {/* BUTTON */}
                            <div className='flex items-end justify-end w-full mt-6'>
                                <button type='submit'
                                className='text-center text-[10px] text-white bg-[#0A439A] rounded-md h-8 w-20'>
                                    Upload
                                </button>
                            </div>
                        </div>

                    </form>
                </Modal>
        </div>
    </div>
  )
}

export default UploadBtn