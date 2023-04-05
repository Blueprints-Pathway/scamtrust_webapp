import React from 'react'
import classes from './CompletedHistory.module.css'
import completed from '../../../../assets/images/completed.png'

const CompletedHistory = (props) => {
  return (
    <div className={classes['wrapper']}>
    <div className={classes['info-con']}>
        <img className={classes['image']} src={completed} alt="" />
        <div className={classes['info']}>
        <p className={classes['item']}>{props.productName}</p>
        <p className={classes['status']}>Completed</p>
        </div>
    </div>
    <p className={classes['vendor']}>{props.vendorName}</p>
    <p className={classes['amount']}>₦{props.totalAmount}</p>
    <p className={classes['date']}>{props.dueDate}</p>
</div>
  )
}

export default CompletedHistory