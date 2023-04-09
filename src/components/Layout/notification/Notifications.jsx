import React from 'react'
import classes from './Notification.module.css'
import { Dropdown, Badge, Menu } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { GoPrimitiveDot } from 'react-icons/go';
import { CiLock, CiMail } from 'react-icons/ci';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { MdNotificationsNone } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Notifications = () => {
  const notification = useSelector(state => state.notification);

 let menuItem =  notification.unreadNotifications.map((notificationItem, index) => {

      
    return <div> 
      <div className={classes['drop1-con']}>
    <GoPrimitiveDot className={classes['drop-dot']} />
    <div className={classes['drop-message']}>
        <p className={classes['message-top']}>{notificationItem.content}</p>
        <p className={classes['message-bottom']}>{notificationItem.notification_time}</p>
    </div>
    <CiMail className={classes['drop-icon2']} />
  </div>
  <hr className={classes['hr']} />
  </div>
  })
  

      const menuStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '20rem',
        overflowY: 'scroll',
      };
    
      const menu = (
        <Menu style={menuStyle}>
       
          {menuItem}
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
        <Badge count={notification.unreadNotifications.length}>
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