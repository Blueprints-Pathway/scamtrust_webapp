import React from 'react'
import { Modal } from 'antd';
import { useState } from 'react';

const RefundBtn = () => {
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
           className='text-[12px] text-[#232164] bg-[#dddd] font-medium mr-1 text-center rounded-md w-20 
            h-7 lg:mr-3 xl:text-[17px] xl:h-10 xl:w-28 xl:mr-5'>
              Refund
           </button>
        </div>
        <Modal
           centered 
           okButtonProps={{ style: { display: 'none' } }}
           cancelButtonProps={{style: { display: 'none' }}}
           onCancelprops={{style:{display: 'none'}}}
           width={400}
            open={isModalOpen} 
            onCancel={handleCancel}
        >
            <div className='flex flex-col items-start justify-center my-5 w-[100%] mb-2 md:w-[100%] xl:w-[100%]'>
                <p className='text-[#333333] mb-2 text-[12px] xl:text-[14px] xl:pb-1'>
                    Kindly state reason for refund
                </p>
                <input 
                type='text'
                className='flex items-center border-[0.1em] w-full border-[#7D8287] h-16 rounded text-[#333333] text-[12px] 
                pl-4 md:h-20 xl:h-24 xl:text-[14px] xl:pl-4'
                 />

                <div className='flex items-center justify-end w-full mt-5 mb-[-15px]'>
                    <button onClick={handleSubmit}
                    className='text-white text-[11px] bg-[#0A439A] h-8 w-20 rounded-md xl:text-[13px] xl:w-24 xl:h-9'>
                        Submit
                    </button>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default RefundBtn