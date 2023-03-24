import React from 'react'
import classes from './Modal3.module.css'
import success from '../../../assets/images/successful.png'
import vendorImg from '../../../assets/images/vendorImg.png'

const Modal3 = ({setModal3Open}) => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['top']}>
            <p className={classes['top-title']}>Transaction Initiation Successful 🎉</p>
            <img className={classes['top-img']} src={success} alt="" />
            <p className={classes['top-words']}>
              A notification has been sent to Ridic Ventures.
              You will be notified once the vendor responds to the request.
            </p>
        </div>

        <p className={classes['recipient']}>Recipient</p>

        <div className={classes['vendor-con']}>
            <div className={classes['vendor-left']}>
                <img className={classes['vendor-img']} src={vendorImg} alt="" />
                <div className={classes['vendor-left-1']}>
                    <p className={classes['vendor-name']}>Ridic ventures</p>
                    <p className={classes['vendor-id']}>ID-50572218</p>
                </div>
            </div>

            <div className={classes['vendor-right']}>
                    <p>30th May 2022</p>
                    <p>8:48 AM</p>
            </div>
        </div>

        <div className={classes['btn-con']}>
            <button onClick={()=>{setModal3Open(false)}}
            className={classes['btn']}>Done</button>
        </div>
    </div>
  )
}

export default Modal3