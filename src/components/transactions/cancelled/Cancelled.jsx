import React from 'react'
import classes from './Cancelled.module.css'
import { TbRefreshAlert } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Empty from '../../customerdashboard/CustDashTransaction/empty/Empty'
import CancelledItem from './CancelledItem'


const Cancelled = () => {
  let detail = localStorage.getItem('USER_DETAILS')
  let usertype =JSON.parse(detail).data.usertype;

  const navigate = useNavigate();  
  const vendorTransactions = useSelector(state => state.vendorTransaction)
  let content = <div className={classes['con']}><Empty /></div>;
  const transactions = useSelector(state => state.customerTransaction);
  if(usertype === 'VENDOR'){
    if (vendorTransactions.cancelledTransactions.length != 0){
   
  
      content = vendorTransactions.cancelledTransactions.map((transaction) => {
   
       return (
       <CancelledItem product_name = {transaction.product_name} name = {transaction.customer.username} total_amount = {transaction.total_amount} due_date = {transaction.due_date} />
       )
        
       
     })}
  }


  if (transactions.cancelledTransactions.length != 0){
   
  
   content = transactions.cancelledTransactions.map((transaction) => {

    return (
    <CancelledItem product_name = {transaction.product_name} name = {transaction.vendor.name} total_amount = {transaction.total_amount} due_date = {transaction.due_date} />
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