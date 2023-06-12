import React from 'react'
import { Modal } from 'antd';
import { useState } from 'react';

const UserUpdatebtn = () => {
    const [updateModal, setUpdateModal] = useState(false);

    const showUpdateModal = () => {
        setUpdateModal(true);
    };
    const closeUpdateModal= () => {
        setUpdateModal(false);
    };
  return (
    <div>
        <div>
            <button onClick={showUpdateModal}
              className='text-center text-[10px] text-white bg-[#0A439A] rounded-sm ml-2 h-8 w-16 md:w-20 md:h-9 xl:h-10 xl:w-24 xl:text-[13px]'>
                Update
             </button>
        </div>
        <div>
        <Modal 
                title="Success" 
                centered 
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{style: { display: 'none' }}}
                onCancelprops={{style:{display: 'none'}}}
                width={350}
                bodyStyle={{
                  borderRadius: '5px',
              }}
                open={updateModal} 
                onCancel={closeUpdateModal}
                >
                    <p className='text-[#808080] mt-6'>
                    User details has been updated
                    </p>
                </Modal>
        </div>
    </div>
  )
}

export default UserUpdatebtn