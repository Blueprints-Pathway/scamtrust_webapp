import React from 'react'
import classes from './Notification.module.css'
import { MdNotificationsNone } from 'react-icons/md'
import { Badge } from 'antd';
import { Dropdown } from 'antd';
import { GoPrimitiveDot } from 'react-icons/go'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { CiMail, CiLock } from 'react-icons/ci'


const Notification = () => {
    const items = [
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
            <div className={classes['drop-message']}>
                <p className={classes['message-top']}>Your Username has been successfully changed.</p>
                <p className={classes['message-bottom']}>May 31,2021 at 08:10AM</p>
            </div>
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
        {
          type: 'divider',
        },
        {
          label: (
            <div className={classes['drop1-con']}>
              <GoPrimitiveDot className={classes['drop-dot']} />
              <div className={classes['drop-message']}>
                  <p className={classes['message-top']}>Your Password has been successfully changed.</p>
                  <p className={classes['message-bottom']}>May 30,2021 at 09:10AM</p>
              </div>
              <CiLock className={classes['drop-icon2']} />
            </div>),
          key: '3',
        },
      ];

  return (
    <div className={classes['wrapper']}>
        {/* <div className={classes['dropdown']}> */}
        <Dropdown
          menu={{
            items,
          }}
          placement="topRight"
          trigger={['click']}
        //   style={{width: "100px"}}
        >
        <div onClick={(e) => e.preventDefault()}
        className={classes['notifocatiion-con']}>
           <Badge count={7} overflowCount={99}>
             <div>
                <MdNotificationsNone className={classes['header-icon']} style={{ fill: '#232164' }} />
             </div>
           </Badge>
        </div>
        </Dropdown>
        {/* </div> */}
    </div>
  )
}

export default Notification