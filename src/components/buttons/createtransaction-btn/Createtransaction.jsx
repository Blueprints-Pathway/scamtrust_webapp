import React from 'react'
import './Createtransaction.css'
import { MdAddCircle } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import FaqandChat from '../../customerdashboard/Faq&Chat/FaqandChat';
import CustomerProfileCard from '../../customerdashboard/CustomerProfileCard/CustomerProfileCard';
import Modal1 from './Modal1';

const Createtransaction = () => {

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


  // const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => setModal1Open(true)}
        className='create-transaction-btn'>
          Create transaction <MdAddCircle className='create-transaction-icon' />
          </button>
      </div>

                    {/* CREATE TRANSACTION MODALS */}
    <div>

                       {/* MODAL 1 */}
      <Modal
        title={<p>Initiate transaction</p>}
        centered
        style={{
          left: 120,
        }}
        width={'60vw'}
        open={modal1Open}
        onCancel={() => setModal1Open(false)}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >

        <Modal1 />

        <Button onClick={confirm}
        >Confirm</Button>
      </Modal>


               {/* MODAL 2 */}
      <Modal
         title="Vertically centered modal dialog"
         centered
         open={modal2Open}
         onCancel={() => setModal2Open(false)}
         okButtonProps={{ style: { display: 'none' } }}
         cancelButtonProps={{ style: { display: 'none' } }}
      >
        <FaqandChat />

        <Button onClick={proceed}
        >proceed</Button>
      </Modal>


                {/* MODAL 3 */}
      <Modal
         title="Vertically centered modal dialog"
         centered
         open={modal3Open}
         onCancel={() => setModal3Open(false)}
         okButtonProps={{ style: { display: 'none' } }}
         cancelButtonProps={{ style: { display: 'none' } }}
      >
        <CustomerProfileCard />

        <Button onClick={()=>{setModal3Open(false)}}
        >Done</Button>
      </Modal>

    </div>
    </div>
  )
}

export default Createtransaction