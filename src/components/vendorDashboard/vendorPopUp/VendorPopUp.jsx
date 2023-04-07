import React, { useState } from 'react'
import classes from './VendorPopUp.module.css'
import { Modal } from 'antd';
import withdrawal from '../../../assets/images/withdrawal.png'
import faq from '../../../assets/images/faq.png'
import chat from '../../../assets/images/chat.png'
import { useNavigate } from 'react-router-dom';
import ChatBtn from '../../buttons/chatBtn/ChatBtn';

const VendorPopUp = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const [openChat, setOpenChat] = useState(false);

    const handleCancel = () => {
      setModalOpen(false);
  }

  const showModal = () => {
      setOpenChat(true);
    };
    const cancelChat = () => {
        setOpenChat(false);
    };

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
           width={750}
        >
            <div className={classes['modal-con']}>

                <div className={classes['modal-title']}>
                    <p className={classes['title-1']}>Welcome to ScamTrust!</p>
                    <p className={classes['title-2']}>Get secured by ScamTrust</p>
                </div>

                <div className={classes['modal-content']}>

                    <div className={classes['content-top']}>
                        <p className={classes['card-1-title']}>Get Started</p>
                        <div className={classes['card-1']}>
                            <img className={classes['card-1-icon']} src={withdrawal} alt="" />
                            <p className={classes['card-1-words']}>Add withdrawal account</p>
                        </div>
                    </div>

                    <div className={classes['content-bottom']}>
                        <div className={classes['bottom-left']}>
                           <p className={classes['card-1-title']}>Need help?</p>
                           <div onClick={()=>navigate('/faq')}
                           className={classes['card-down']}>
                               <img className={classes['card-1-icon']} src={faq} alt="" />
                               <p className={classes['card-1-words']}>FAQs</p>
                           </div>
                        </div>

                        <div className={classes['bottom-right']}>
                           <p className={classes['card-1-title']}>Chat with us</p>
                           <div onClick={showModal}
                           className={classes['card-down']}>
                               <img className={classes['card-1-icon']} src={chat} alt="" />
                               <p className={classes['card-1-words']}>Chat with us</p>
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
               
                 {/*  POP UP MODAL */}
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

    </div>
  )
}

export default VendorPopUp