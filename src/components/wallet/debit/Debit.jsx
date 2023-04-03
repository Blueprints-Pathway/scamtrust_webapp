import React from 'react'
import classes from './Debit.module.css'
import { GoPrimitiveDot } from 'react-icons/go'

const Debit = () => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['credit-con']}>

            <p className={classes['date']}>
                10th Jan 2022
            </p>

            <div className={classes['info']}>
                <p className={classes['name']}>Ilerioluwa Brown</p>
                <p className={classes['id']}>TR-5347906</p>
            </div>

            <p className={classes['amount']}>₦500,000</p>

            <div className={classes['status']}>
                <p className={classes['status-name']}>
                   <GoPrimitiveDot className={classes['status-dot']} /> debit
                </p>
            </div>

        </div>
        <hr className={classes['status-hr']}/>
    </div>
  )
}

export default Debit