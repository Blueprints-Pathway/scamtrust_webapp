import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import './Notification.css'
import { NotificationItem } from './NotificationItem'

function Notification() {
    return (
        <div className='dropdown'>
            <div className='dropdown-header'>
                <div className='dropdown-title'>
                    <p>Notifications</p>
                </div>
                <div className='dropdown-count'>
                    <p>2</p>
                </div>
            </div>
            <div className='dropdown-Line'></div>
            {NotificationItem.map((item, index) => {
                return (
                    <div className='dropdown-body' key={index}>
                        <div className='notification-item-success'></div>
                        <div className='dropdown-item'>
                            <div className='dropdown-details'>
                                <div className='dropdown-name'>
                                    {item.name}
                                </div>

                                <div className='dropdown-date'>
                                    {item.date}
                                </div>
                            </div>
                            <div className='dropdown-img'>
                                <FontAwesomeIcon className='dropDownIcon' icon={item.icon} />
                            </div>
                        </div>
                        <div className='dropdown-Line2'></div>
                    </div>
                )}
            )}


        </div>
    )
}

export default Notification