import React from 'react'
import './CustCreate.css'
import { MdAddCircle } from 'react-icons/md'
import { Modal } from 'antd';
import { useState } from 'react';
import Modal1 from '../../../buttons/createtransaction-btn/Modal1';
import Modal2 from '../../../buttons/createtransaction-btn/Modal2';
import Modal3 from '../../../buttons/createtransaction-btn/Modal3';
import { TbArrowsRightLeft } from 'react-icons/tb';

const CustCreatePopup = () => {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);
  
    const confirm = () => {
        setModal1Open(false);
        setModal2Open(true);
    }
  
    const proceed = () => {
        setModal2Open(false);
        setModal3Open(true);
    }
  
    const edit = () => {
      setModal2Open(false);
      setModal1Open(true);
    }

  return (
    <div>
        <div>
           <div onClick={() => setModal1Open(true)}
                className='card-down'>
                <TbArrowsRightLeft className='card-react-icon' />
                <p className='card-words'>Create New Transaction</p>
            </div>
        {/* <button onClick={() => setModal1Open(true)}
        className='create-transaction-btn'>
          Create transaction <MdAddCircle className='create-transaction-icon' />
          </button> */}
      </div>

                    {/* CREATE TRANSACTION MODALS */}
    <div>

                       {/* MODAL 1 */}
      <Modal
        title={<p className='trans-modal-title'>Initiate transaction<hr className='trans-modal-line' /></p>}
        centered
        open={modal1Open}
        onCancel={() => setModal1Open(false)}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >

        <Modal1 confirm={confirm} />

      </Modal>


               {/* MODAL 2 */}
      <Modal
         title={<div><div className='trans-modal2'>
          <p className='modal2-title'>Transaction summary</p>
          </div>
          <div className='edit-con'>
          <button onClick={edit}
          className='modal2-edit-btn'>Edit form</button>
          </div>
          </div>}
         centered
         open={modal2Open}
         onCancel={() => setModal2Open(false)}
         okButtonProps={{ style: { display: 'none' } }}
         cancelButtonProps={{ style: { display: 'none' } }}
      >

        <hr />
        <Modal2 proceed={proceed} />

      </Modal>


                {/* MODAL 3 */}
      <Modal
         title={<p className='trans-modal-title'>Withdrawal details<hr className='trans-modal-line' /></p>}
         centered
         open={modal3Open}
         onCancel={() => setModal3Open(false)}
         okButtonProps={{ style: { display: 'none' } }}
         cancelButtonProps={{ style: { display: 'none' } }}
      >

        <Modal3 setModal3Open={setModal3Open} />

        {/* <Button onClick={()=>{setModal3Open(false)}}
        >Done</Button> */}

      </Modal>

    </div>
    </div>
  )
}

export default CustCreatePopup