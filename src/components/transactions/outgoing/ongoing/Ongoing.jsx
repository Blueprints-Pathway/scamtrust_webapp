import React from 'react'
import classes from './Ongoing.module.css'
import { TbRefresh } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const Ongoing = () => {

  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/ongoing-transaction')}
    className={classes['con']}>
    <div className={classes['wrapper']}>
       <div className={classes['first']}>
        <TbRefresh className={classes['icon']} />
        <div className={classes['item-con']}>
          <p className={classes['item']}>Iphone 11 pro</p>
          <p className={classes['status']}>On-going</p>
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

export default Ongoing