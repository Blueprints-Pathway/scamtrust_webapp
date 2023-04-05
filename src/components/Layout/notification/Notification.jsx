import React from 'react'
import classes from './Notification.module.css'
import { MdNotificationsNone } from 'react-icons/md'
import { Badge } from 'antd';
import { Dropdown } from 'antd';
import { GoPrimitiveDot } from 'react-icons/go'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { CiMail, CiLock } from 'react-icons/ci'
import { useSelector } from 'react-redux';
import { Margin } from '@mui/icons-material';

const Notification = () => {
  const notification = useSelector(state => state.notification);
  const items = notification.unreadNotifications.map((notificationItem, index) => {
    return ({
      key: index.toString(),
        label: (
          <div key={notification.id} id={notification.id} className={classes['drop1-con']}>
            <GoPrimitiveDot className={classes['drop-dot']} />
            <div className={classes['drop-message']}>
                <p className={classes['message-top']}>{notificationItem.content}</p>
                <p className={classes['message-bottom']}>{notificationItem.notification_time}</p>
            </div>
            <CiMail className={classes['drop-icon2']} />
          </div>
          ),
        
      })});
      const items3  = [
        {
          label: (
          <div className={classes['drop-top']}>
              <p>Notifications</p>
              <p>2</p>
          </div>
          ),
          key: '0',
        },
        { 
            type: 'divider',
          },
        {
          label: (
          <div className={classes['drop1-con']}>
            
            <GoPrimitiveDot className={classes['drop-dot']} />
           {
              notification.unreadNotifications.map((notificationItem) => {
                return  <  div id={notificationItem.id} className={classes['drop-message']}>
                <p className={classes['message-top']}>{notificationItem.content}</p>
                <p className={classes['message-bottom']}>May 31,2021 at 08:10AM</p>
            </div>
              })
            }
            <IoCheckmarkCircleSharp className={classes['drop-icon1']} />
          </div>),
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: (
            <div className={classes['drop1-con']}>
              <GoPrimitiveDot className={classes['drop-dot']} />
              <div className={classes['drop-message']}>
                  <p className={classes['message-top']}>New Confirmation from Naija gadgets.</p>
                  <p className={classes['message-bottom']}>May 30,2021 at 12:10AM</p>
              </div>
              <CiMail className={classes['drop-icon2']} />
            </div>),
          key: '2',
         
        },
        // {
        //   type: 'divider',
        // },
        {
          label: (
            <div className={classes['drop1-con']}>
              <GoPrimitiveDot className={classes['drop-dot']} />
              <div className={classes['drop-message']}>
                  <p className={classes['message-top']}>Your Password has been successfully changed.</p>
                  <p className={classes['message-bottom']}>May 30,2021 at 09:10AM</p>
              </div>
              <CiLock className={classes['drop-icon2']} />
            </div>
            ),
          key: '3',
        },
      ];

      // console.log(items2)
      console.log(items3)
  return (
    <div className={classes['wrapper']}>
        <Dropdown
          menu={{
           items
          }}
          placement="topRight"
          trigger={['click']}
        >
        <div onClick={(e) => e.preventDefault()}
        className={classes['notificatiion-con']}>
           <Badge count={notification.unreadNotifications.length} overflowCount={99}>
             <div>
                <MdNotificationsNone className={classes['header-icon']} style={{ fill: '#232164' }} />
             </div>
           </Badge>
        </div>
        </Dropdown>
    </div>
  )
}

export default Notification