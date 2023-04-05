import React from 'react'
import classes from './OngoingHistory.module.css'
import ongoing from '../../../../../assets/images/ongoing.png'

const OngoingHistory = (props) => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['info-con']}>
            <img className={classes['image']} src={ongoing} alt="" />
            <div className={classes['info']}>
            <p className={classes['item']}>{props.productName}</p>
            <p className={classes['status']}>On-going</p>
            </div>
        </div>
        <p className={classes['vendor']}>{props.vendorName}</p>
        <p className={classes['amount']}>₦{props.totalAmount}</p>
        <p className={classes['date']}>{props.dueDate}</p>
    </div>
  )
}

export default OngoingHistory