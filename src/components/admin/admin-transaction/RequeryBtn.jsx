import React from 'react'
import { Modal } from 'antd';
import { useState } from 'react';

const RequeryBtn = () => {
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
           className='text-[12px] text-[#232164] bg-[#dddd] font-medium ml-2 text-center rounded-md w-20 
            h-7 lg:ml-3 xl:text-[17px] xl:h-10 xl:w-28 xl:ml-5'>
              Requery
           </button>
        </div>
        <Modal
           centered 
           okButtonProps={{ style: { display: 'none' } }}
           cancelButtonProps={{style: { display: 'none' }}}
           onCancelprops={{style:{display: 'none'}}}
           width={300}
            open={isModalOpen} 
            onCancel={handleCancel}
        >
            <div className='flex flex-col items-start justify-center my-5 w-[100%] mb-2 md:w-[100%] xl:w-[100%]'>
                <p className='text-[#707070] text-[12px] xl:text-[14px] xl:pb-1'>
                    True Value
                </p>
                <div className='flex items-center border-[0.1em] w-full border-[#D5D8DA] h-8 rounded text-[#333333] text-[12px] 
                pl-4 md:h-8 xl:h-10 xl:text-[14px] xl:pl-4'>
                    ₦20,050
                </div>

                <div className='flex items-center justify-end w-full mt-5 mb-[-15px]'>
                    <button onClick={handleSubmit}
                    className='text-white text-[11px] bg-[#0A439A] h-8 w-20 rounded-md xl:text-[13px]'>
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default RequeryBtn