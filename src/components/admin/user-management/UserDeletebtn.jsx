import React from 'react'
import { Modal } from 'antd';
import { useState } from 'react';

const UserDeletebtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <div>
        <div>
           <button onClick={showModal}
              className='text-center text-[10px] text-white bg-[#323131] rounded-sm ml-3 h-8 w-16 md:w-20 md:h-9 md:ml-6 xl:h-10 xl:w-24 xl:text-[13px] xl:ml-10'>
               Delete
           </button>
        </div>
        <div>
        <Modal 
                title="Delete staff " 
                centered 
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{style: { display: 'none' }}}
                onCancelprops={{style:{display: 'none'}}}
                width={350}
                bodyStyle={{
                  borderRadius: '5px',
              }}
                open={isModalOpen} 
                onCancel={handleCancel}
                >
                    <p className='text-[#808080] mt-6'>
                        Are you sure about this 
                    </p>
                    <div className='flex items-end justify-end mt-5'>
                      <button onClick={handleCancel}
                      className='text-center text-[10px] text-white bg-[#0A439A] rounded-md ml-2 h-8 w-20 
                      md:w-20 md:h-9 xl:h-10 xl:w-24 xl:text-[13px]'>
                          Delete
                      </button>
                    </div>
                </Modal>
        </div>
    </div>
  )
}

export default UserDeletebtn