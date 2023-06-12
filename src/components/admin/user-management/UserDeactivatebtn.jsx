import React from 'react'
import { Modal } from 'antd';
import { useState } from 'react';

const UserDeactivatebtn = () => {

    const [DeactivateModal, setDeactivateModal] = useState(false);
    const [activateBtn, setActivateBtn] = useState(false);

    const showDeactivateModal = () => {
        setDeactivateModal(true);
    };

    const closeDeactivateModal= () => {
        setDeactivateModal(false);
    };

    const DeactivateUser= () => {
        setDeactivateModal(false);
        setActivateBtn(true);
    };

    const handleChangeBtn = () => {
        setActivateBtn(false);
    }

  return (
    <div>
        <div>
            { activateBtn ?
           <button onClick={handleChangeBtn}
            className='text-center text-[10px] text-[#0A439A] bg-[#DDDEE1] rounded-sm h-8 w-16 md:w-20 md:h-9 xl:h-10 xl:w-24 xl:text-[13px]'>
                Activate
             </button>
                       :
           <button onClick={showDeactivateModal}
            className='text-center text-[10px] text-white bg-[#FF0000] rounded-sm h-8 w-16 md:w-20 md:h-9 xl:h-10 xl:w-24 xl:text-[13px]'>
                Deactivate
             </button>
            }
        </div>


        <div>
        <Modal 
                title="User Deactivated" 
                centered 
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{style: { display: 'none' }}}
                onCancelprops={{style:{display: 'none'}}}
                width={350}
                bodyStyle={{
                  borderRadius: '5px',
              }}
                open={DeactivateModal} 
                onCancel={closeDeactivateModal}
                >
                    <p className='text-[#808080] mt-6'>
                        Are you sure you want to Deactivate this user
                    </p>
                    <div className='flex items-end justify-end mt-5'>
                      <button onClick={DeactivateUser}
                      className='text-center text-[10px] text-white bg-[#0A439A] rounded-md ml-2 h-8 w-20 
                      md:w-20 md:h-9 xl:h-10 xl:w-24 xl:text-[13px]'>
                          YES
                      </button>
                    </div>
                </Modal>
            </div>
    </div>
  )
}

export default UserDeactivatebtn