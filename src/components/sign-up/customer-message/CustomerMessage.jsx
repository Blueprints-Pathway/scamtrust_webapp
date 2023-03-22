import React from 'react'
import classes from './CustomerMessage.module.css'
import fade  from '../../../assets/images/Fade.jpg'
import { GoQuote } from 'react-icons/go'

const CustomerMessage = () => {
  return (
    <div className={classes['wrapper']}>
         <div className={classes['message-con']}>
            <p className={classes['message-quote']}><GoQuote style={{color: '#232164'}} /></p>
            <p className={classes['message']}>
            As a customer I feel like I can never be scammed. ScamTrust make me feel really safe when transacting with instagram vendors.
            </p>
        </div>
        <div className={classes['message-bottom']}>
            <div className={classes['message-img-con']}>
                <img className={classes['message-img']} src={fade} alt="" />
            </div>
            <div  className={classes['message-details']}>
                <p className={classes['message-name']}>Fadekemi Folalu</p>
                <p className={classes['message-status']}>student</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerMessage