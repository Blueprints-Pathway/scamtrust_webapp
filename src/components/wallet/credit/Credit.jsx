import React from 'react'
import classes from './Credit.module.css'
import { GoPrimitiveDot } from 'react-icons/go'

const Credit = (props) => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['credit-con']}>

            <p className={classes['date']}>
                {props.date}
            </p>

            <div className={classes['info']}>
                <p className={classes['name']}>{props.purpose}</p>
                <p className={classes['id']}>{props.refNo}</p>
            </div>

            <p className={classes['amount']}>₦{props.amount}</p>

            <div className={classes['status']}>
                <p className={classes['status-name']}>
                   <GoPrimitiveDot className={classes['status-dot']} /> Credit
                </p>
            </div>

        </div>
        <hr className={classes['status-hr']}/>
    </div>
  )
}

export default Credit