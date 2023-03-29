import React from 'react'
import classes from './Awaiting.module.css'
import { BsArrowUpLeftCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Awaiting = () => {

  const navigate = useNavigate();
  
  return (
    <div onClick={()=> navigate('/awaiting-approval')}
    className={classes['con']}>
    <div className={classes['wrapper']}>
       <div className={classes['first']}>
        <BsArrowUpLeftCircle className={classes['icon']} />
        <div className={classes['item-con']}>
          <p className={classes['item']}>Iphone 11 pro</p>
          <p className={classes['status']}>Awaiting approval </p>
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

export default Awaiting