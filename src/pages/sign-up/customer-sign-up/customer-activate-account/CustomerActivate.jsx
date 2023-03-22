import React from 'react'
import Activate from '../../../../components/sign-up/activate/Activate'
import CustomerMessage from '../../../../components/sign-up/customer-message/CustomerMessage'
import classes from './CustomerActivate.module.css'

const CustomerActivate = () => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['activate-left']}>
            <Activate />
         </div>
         <div className={classes['activate-right']}>
             <CustomerMessage />
         </div>
    </div>
  )
}

export default CustomerActivate