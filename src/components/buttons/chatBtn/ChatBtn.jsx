import React from 'react'
import './ChatBtn.css'
import { MdPhone, MdWhatsapp, MdEmail } from 'react-icons/md'

const ChatBtn = ({showModal}) => {

  return (
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
  )
}

export default ChatBtn