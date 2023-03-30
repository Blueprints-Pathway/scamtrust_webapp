import React from 'react'
import classes from './Cancelled.module.css'
import { TbRefreshAlert } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cancelled = () => {

  const navigate = useNavigate();  
  let content = <p>YOU HAVE NO CANCELLED TRANSACTIONS!</p>;
  const transactions = useSelector(state => state.customerTransaction);
  if (transactions.cancelledTransactions.length != 0){
   
  
   content = transactions.cancelledTransactions.map((transaction) => {

    return (
      <div onClick={()=>navigate('/cancelled-transaction')}
      className={classes['con']}>
        <div className={classes['wrapper']}>
         <div className={classes['first']}>
          <TbRefreshAlert className={classes['icon']} />
          <div className={classes['item-con']}>
            <p className={classes['item']}>{transaction.product_name}</p>
            <p className={classes['status']}>Cancelled</p>
          </div>
        </div>
        <div className={classes['second']}>
          <p className={classes['vendor']}>{transaction.vendor.name}</p>
        </div>
        <div className={classes['third']}>
          <p className={classes['amount']}>₦{transaction.total_amount}</p>
        </div>
        <div className={classes['four']}>
          <p className={classes['date']}>{transaction.due_date}</p>
        </div>
      </div>
      </div>
    )
     
    
  })}


  return (
    <div style={{marginTop: '0px'}}>
          {/* <Ongoing />
          <Awaiting /> */}
          {content}
    </div>
  )

  
}

export default Cancelled