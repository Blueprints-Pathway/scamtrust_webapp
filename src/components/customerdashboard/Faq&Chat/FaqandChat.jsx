import React from 'react'
import './FaqandChat.css'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

const FaqandChat = () => {
  return (
    <div className='fc-con'>
    <div className='fc-wrapper'>

        <div className='fc-faq-div1'>
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
            <div className='fc-content-div'>
                <p className='fc-title'>Chat</p>
                <p className='fc-words'>Start a conversation now</p>
            </div>
        </div>

    </div>
    </div>
  )
}

export default FaqandChat