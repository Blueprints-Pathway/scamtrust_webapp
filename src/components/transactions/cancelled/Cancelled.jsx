import React from 'react'
import classes from './Cancelled.module.css'
import { TbRefreshAlert } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const Cancelled = () => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate('/cancelled-transaction')}
    className={classes['con']}>
      <div className={classes['wrapper']}>
       <div className={classes['first']}>
        <TbRefreshAlert className={classes['icon']} />
        <div className={classes['item-con']}>
          <p className={classes['item']}>pounded yam</p>
          <p className={classes['status']}>Cancelled</p>
        </div>
      </div>
      <div className={classes['second']}>
        <p className={classes['vendor']}>Ridic Ventures</p>
      </div>
      <div className={classes['third']}>
        <p className={classes['amount']}>₦250,000.00</p>
      </div>
      <div className={classes['four']}>
        <p className={classes['date']}>25th May, 2022</p>
      </div>
    </div>
    </div>
  )
}

export default Cancelled