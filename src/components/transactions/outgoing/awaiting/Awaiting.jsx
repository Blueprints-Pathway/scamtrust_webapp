import React from 'react'
import classes from './Awaiting.module.css'
import { BsArrowUpLeftCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Awaiting = (props) => {

  const navigate = useNavigate();
  
  return (
    <div onClick={()=> navigate(`/awaiting-approval/${props.id}`)}
    className={classes['con']}>
    <div className={classes['wrapper']}>
       <div className={classes['first']}>
        <BsArrowUpLeftCircle className={classes['icon']} />
        <div className={classes['item-con']}>
          <p className={classes['item']}>{props.productName}</p>
          <p className={classes['status']}>Awaiting approval</p>
        </div>
      </div>
      <div className={classes['second']}>
        <p className={classes['vendor']}>{props.vendorName}</p>
      </div>
      <div className={classes['third']}>
        <p className={classes['amount']}>₦{props.totalAmount}</p>
      </div>
      <div className={classes['four']}>
        <p className={classes['date']}>{props.dueDate}</p>
      </div>
    </div>
    </div>
  )
}

export default Awaiting