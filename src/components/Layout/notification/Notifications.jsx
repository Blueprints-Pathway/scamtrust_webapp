import React from 'react'
import classes from './Notification.module.css'
import { Dropdown, Badge, Menu } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { GoPrimitiveDot } from 'react-icons/go';
import { CiLock, CiMail } from 'react-icons/ci';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { MdNotificationsNone } from 'react-icons/md';

const Notifications = () => {
    const notifications = [
        { id: 1, title: 'New message from John', timestamp: '2 hours ago' },
        { id: 2, title: 'New order received', timestamp: '5 hours ago' },
        { id: 3, title: 'Server maintenance scheduled', timestamp: '1 day ago' },
      ];

      const menuStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '20rem',
        overflowY: 'scroll',
      };
    
      const menu = (
        <Menu style={menuStyle}>
          
          <div className={classes['drop1-con']}>
            <GoPrimitiveDot className={classes['drop-dot']} />
            <div className={classes['drop-message']}>
                <p className={classes['message-top']}>New Confirmation from Naija gadgets.</p>
                <p className={classes['message-bottom']}>May 31,2021 at 08:10AM</p>
            </div>
            <CiMail className={classes['drop-icon2']} />
          </div>
          <hr className={classes['hr']} />


          <div className={classes['drop1-con']}>
            <GoPrimitiveDot className={classes['drop-dot']} />
            <div className={classes['drop-message']}>
                <p className={classes['message-top']}>Your Password has been successfully changed.</p>
                <p className={classes['message-bottom']}>May 31,2021 at 08:10AM</p>
            </div>
            <CiLock className={classes['drop-icon2']} />
          </div>
          <hr className={classes['hr']} />


          <div className={classes['drop1-con']}>
            <GoPrimitiveDot className={classes['drop-dot']} />
            <div className={classes['drop-message']}>
                <p className={classes['message-top']}>Your Username has been successfully changed.</p>
                <p className={classes['message-bottom']}>May 31,2021 at 08:10AM</p>
            </div>
            <IoCheckmarkCircleSharp className={classes['drop-icon2']} />
          </div>
          <hr className={classes['hr']} />

        </Menu>
      );
  return (
    <div className={classes['wrapper']}>
    <Dropdown 
    overlay={menu}
    placement="topRight"
    trigger={['click']}
    >
      <div className={classes['notificatiion-con']}>
        <Badge count={notifications.length}>
             <div>
                <MdNotificationsNone className={classes['header-icon']} style={{ fill: '#232164' }} />
             </div>
        </Badge>
      </div>
    </Dropdown>
    </div>
  )
}

export default Notifications