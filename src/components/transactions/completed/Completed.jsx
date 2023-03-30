import React from 'react'
import classes from './Completed.module.css'
import { BsArrowDownRightCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Completed = () => {

  const navigate = useNavigate();
  let content = <p>YOU HAVE NO COMPLETED TRANSACTIONS!</p>;
  const transactions = useSelector(state => state.customerTransaction);
  if (transactions.completedTransactions.length != 0){
   
  
   content = transactions.completedTransactions.map((transaction) => {

     return <div onClick={()=> navigate('/completed-transaction')}
     className={classes['con']}>
     <div className={classes['wrapper']}>
        <div className={classes['first']}>
         <BsArrowDownRightCircle className={classes['icon']} />
         <div className={classes['item-con']}>
           <p className={classes['item']}>{transaction.product_name}</p>
           <p className={classes['status']}>Completed</p>
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
     
    
  })}


  return (
    content
  )
}

export default Completed