import React from 'react'
import classes from './AwaitingHistory.module.css'
import awaiting from '../../../../assets/images/awaiting.png'

const AwaitingHistory = (props) => {
  return (
    <div className={classes['wrapper']}>
    <div className={classes['info-con']}>
        <img className={classes['image']} src={awaiting} alt="" />
        <div className={classes['info']}>
        <p className={classes['item']}>{props.productName}</p>
        <p className={classes['status']}>Awaiting approval</p>
        </div>
    </div>
    <p className={classes['vendor']}>{props.vendorName}</p>
    <p className={classes['amount']}>₦{props.totalAmount}</p>
    <p className={classes['date']}>{props.dueDate}</p>
</div>
  )
}

export default AwaitingHistory