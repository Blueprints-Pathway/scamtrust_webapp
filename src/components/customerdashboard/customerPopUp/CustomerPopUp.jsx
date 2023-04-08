import React, { useState } from 'react'
import classes from './CustomerPopUp.module.css'
import { Modal } from 'antd';
import faq from '../../../assets/images/faq.png'
import chat from '../../../assets/images/chat.png'
import fund from '../../../assets/images/withdrawal.png'
import { TbArrowsRightLeft } from 'react-icons/tb'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import ChatBtn from '../../buttons/chatBtn/ChatBtn';
import Modal1 from '../../buttons/createtransaction-btn/Modal1';
import Fundbutton from '../../buttons/fundbutton/Fundbutton';

const CustomerPopUp = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const [openChat, setOpenChat] = useState(false);
    const [openTrans, setOpenTrans] = useState(false);


    const handleCancel = () => {
      setModalOpen(false);
  }

  const showModal = () => {
    setOpenChat(true);
  };
  const cancelChat = () => {
      setOpenChat(false);
  };

  const showTrans = () => {
    setOpenTrans(true);
  };
  const cancelTrans = () => {
    setOpenTrans(false);
  };


  // const fundStyle = {
  //   backgroundColor: 'red',
  //   color: 'blue',
  // }


  const navigate = useNavigate();

  return (
    <div className={classes['wrapper']}>
        <Modal
        className='modal'
           centered
           open={modalOpen}
           onCancel={() => setModalOpen(false)}
           okButtonProps={{ style: { display: 'none' } }}
           cancelButtonProps={{ style: { display: 'none' } }}
           width={700}
        >
            <div className={classes['modal-con']}>
                 <div className={classes['modal-title']}>
                    <p className={classes['title-1']}>Welcome to ScamTrust!</p>
                    <p className={classes['title-2']}>Get secured by ScamTrust</p>
                 </div>

                 <div className={classes['content']}>

                     <div className={classes['content-top']}>

                          <div className={classes['content-div']}>
                             <p className={classes['card-title']}>Get Started</p>
                             <div onClick={showTrans}
                             className={classes['card-down']}>
                                 <TbArrowsRightLeft className={classes['card-react-icon']} />
                                 <p className={classes['card-words']}>Create New Transaction</p>
                             </div>
                          </div>

                          <div className={classes['content-div']}>
                             <p className={classes['card-title']}>Fund Wallet</p>
                             <div className={classes['card-down']}>
                                 <img className={classes['card-icon']} src={fund} alt="" />
                                 <p className={classes['card-words']}>Fund your wallet</p>
                             </div>
                          </div>

                          <div className={classes['content-div']}>
                             <p className={classes['card-title']}>KYC</p>
                             <div className={classes['card-down']}>
                                 <IoShieldCheckmarkOutline className={classes['card-react-icon-2']} />
                                 <p className={classes['card-words']}>Complete KYC</p>
                             </div>
                          </div>

                          <div className={classes['content-div']}>
                             <p className={classes['card-title']}>Have a Question</p>
                             <div onClick={()=>navigate('/faq')}
                             className={classes['card-down']}>
                                 <img className={classes['card-icon']} src={faq} alt="" />
                                 <p className={classes['card-words']}>FAQs</p>
                             </div>
                          </div>

                          <div className={classes['content-div']}>
                             <p className={classes['card-title']}>Chat with us</p>
                             <div onClick={showModal}
                             className={classes['card-down']}>
                                 <img className={classes['card-icon']} src={chat} alt="" />
                                 <p className={classes['card-words']}>Chat with us</p>
                             </div>
                          </div>

                     </div>

                 </div>

                 <div className={classes['modal-close']}>
                    <button onClick={handleCancel}
                    className={classes['modal-btn']}>Close x</button>
                </div>
            </div>
        </Modal>

                 {/*  CHAT MODAL */}
         <Modal open={openChat}
          onCancel={cancelChat}
          centered 
          okButtonProps={{ style: { display: 'none' } }}
          cancelButtonProps={{style: { display: 'none' }}}
          onCancelprops={{style:{display: 'none'}}}
          width={400}
          bodyStyle={{
            borderRadius: '20px',
        }}
          >

            <ChatBtn showModal={showModal}  />
            
         </Modal> 
               

               {/* CREATE TRANSACTION MODAL */}
         <div>
         <Modal open={openTrans}
          onCancel={cancelTrans}
          centered 
          okButtonProps={{ style: { display: 'none' } }}
          cancelButtonProps={{style: { display: 'none' }}}
          onCancelprops={{style:{display: 'none'}}}
          width={400}
          bodyStyle={{
            borderRadius: '20px',
        }}
          >

            <Modal1 showTrans={showTrans}  />
            
         </Modal> 
         </div>

    </div>
  )
}

export default CustomerPopUp