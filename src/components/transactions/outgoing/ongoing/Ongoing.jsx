import React from 'react'
import classes from './Ongoing.module.css'
import { TbRefresh } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const Ongoing = (props) => {

  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/ongoing-transaction/${props.id}`)}
    className={classes['con']}>
    <div className={classes['wrapper']}>
       <div className={classes['first']}>
        <TbRefresh className={classes['icon']} />
        <div className={classes['item-con']}>
          <p className={classes['item']}>{props.productName}</p>
          <p className={classes['status']}>On-going</p>
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

export default Ongoing