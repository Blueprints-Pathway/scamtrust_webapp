import React from 'react'
import classes from './Completed.module.css'
import { BsArrowDownRightCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const Completed = () => {

  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate('/completed-transaction')}
    className={classes['con']}>
    <div className={classes['wrapper']}>
       <div className={classes['first']}>
        <BsArrowDownRightCircle className={classes['icon']} />
        <div className={classes['item-con']}>
          <p className={classes['item']}>Airpod pro 3</p>
          <p className={classes['status']}>Completed</p>
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

export default Completed