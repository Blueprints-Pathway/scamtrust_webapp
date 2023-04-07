import React, { useState } from 'react'
import './FaqandChat.css'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

import { useNavigate } from 'react-router-dom'
import ChatBtn from '../../buttons/chatBtn/ChatBtn'
import { Modal } from 'antd'

const FaqandChat = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const navigate = useNavigate();

  return (
    <div className='fc-con'>
    <div className='fc-wrapper'>

        <div onClick={()=>navigate('/faq')}
        className='fc-faq-div1'>
            <div className='fc-faq-icon-div'>
                <AiOutlineExclamationCircle className='fc-faq-icon1' />
            </div>
            <div className='fc-content-div'>
                <p className='fc-title'>FAQs</p>
                <p className='fc-words'>Find answers instantly</p>
            </div>
        </div>

        <div className='fc-faq-div2'>
            <div className='fc-faq-icon-div'>
                <HiOutlineChatBubbleLeftRight className='fc-faq-icon2' />
            </div>
            <div 
            onClick={showModal}
            className='fc-content-div'>
                <p className='fc-title'>Chat</p>
                <p className='fc-words'>Start a conversation now</p>
            </div>
        </div>

        <Modal open={isModalOpen}
          onCancel={handleCancel}
          centered 
          okButtonProps={{ style: { display: 'none' } }}
          cancelButtonProps={{style: { display: 'none' }}}
          onCancelprops={{style:{display: 'none'}}}
          width={400}
          bodyStyle={{
            borderRadius: '20px',
        }}
          >

            <ChatBtn showModal={showModal} />

         </Modal> 

    </div>
    </div>
  )
}

export default FaqandChat