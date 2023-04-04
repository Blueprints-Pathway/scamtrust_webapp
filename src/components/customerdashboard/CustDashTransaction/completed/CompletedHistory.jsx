import React from 'react'
import classes from './CompletedHistory.module.css'
import completed from '../../../../assets/images/completed.png'

const CompletedHistory = () => {
  return (
    <div className={classes['wrapper']}>
    <div className={classes['info-con']}>
        <img className={classes['image']} src={completed} alt="" />
        <div className={classes['info']}>
        <p className={classes['item']}>Iphone 11 pro</p>
        <p className={classes['status']}>On-going</p>
        </div>
    </div>
    <p className={classes['vendor']}>Ridic Ventures</p>
    <p className={classes['amount']}>₦250,000.00</p>
    <p className={classes['date']}>25th May, 2022</p>
</div>
  )
}

export default CompletedHistory