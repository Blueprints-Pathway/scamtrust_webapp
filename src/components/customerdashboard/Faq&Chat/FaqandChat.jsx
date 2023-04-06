import React, { useState } from 'react'
import './FaqandChat.css'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import { Modal } from 'antd'
import { MdPhone, MdWhatsapp, MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

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
            <div onClick={showModal}
            className='fc-content-div'>
                <p className='fc-title'>Chat</p>
                <p className='fc-words'>Start a conversation now</p>
            </div>
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
          <div className='fc-modal-wrapper'>

            <div className='fc-modal-con' tabIndex='0'>
                <p className='fc-1'><MdPhone className='fc-call-icon' />Call us now</p>
                <p className='fc-2'>+2348169199932</p>
            </div>
    
            <a href='https://wa.me/+23407067302238' target="_blank" className='fc-modal-con' tabIndex='0'>
                <p className='fc-1'><MdWhatsapp className='fc-whatsapp-icon' />Whatsapp</p>
                <p className='fc-2'>Chat with Dami</p>
            </a>

            <a href='#' target="_blank" className='fc-modal-con' tabIndex='0'>
                <p className='fc-1'><MdEmail className='fc-mail-icon' />Email</p>
                <p className='fc-2'>Thescamtrust@gmail.com</p>
            </a>
    
          </div>
         </Modal>
    </div>
  )
}

export default FaqandChat