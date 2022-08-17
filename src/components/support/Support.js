import React, { useState } from 'react'
import './support.css'

import support from '../../images/support.png'
import scamTrustLogo from '../../images/Group114(1).png'
import chat from '../../images/chart.png'
import FAQs from '../../images/FAQs.png'
import SideBar from '../SideBar/SideBar';

function Support() {


    return (
        <div className='main'>
            
            <div className='support-card'>
                <div className='support-card-header'>
                    <img className='support-img' src={support} alt="Scam Trust" />
                </div>
                <div className='support-card-body'>
                    <div className='support-title'>
                        How can we help you?
                    </div>
                    <div className='support-description'>
                        Need support? Find out how we can serve you better
                    </div>
                    <div className='support-actions'>
                        <div className='support-action'>
                            <div className='support-action-icon'>
                            <img src={chat} alt="Scam Trust" /><small className='image-text1'>...</small>
                            </div>
                            <div className='support-action-text'>
                                <div className='support-action-text-title'>
                                Chat
                                </div>
                                <div className='support-action-text-description'>
                                  Start a conversation now
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        <div className='support-action'>
                            <div className='support-action-icon'>
                            <img src={FAQs} alt="Scam Trust" /><small className='image-text2'>i</small>
                            </div>
                            <div className='support-action-text'>
                                <div className='support-action-text-title'>
                                FAQs
                                </div>
                                <div className='support-action-text-description'>
                               
                            Find answers instantly
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    <div className='support-bottom'> Secured by <img className='support-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                </div>
            </div>
            <SideBar />
        </div>

    )

}

export default Support