import React from 'react'
import classes from './AllTransaction.module.css'
import { useSelector } from 'react-redux'
import empty from '../../../assets/images/empty.png'
import Cancelled from '../cancelled/Cancelled'
import Completed from '../completed/Completed'
import Awaiting from '../outgoing/awaiting/Awaiting'
import Ongoing from '../outgoing/ongoing/Ongoing'
import Empty from '../../customerdashboard/CustDashTransaction/empty/Empty'

const AllTransaction = () => {
  const transactions = useSelector(state => state.customerTransaction);
  const auth = useSelector(state => state.auth)
  const vendorTransactions = useSelector(state => state.vendorTransaction)

  let content = (<div className={classes['con']}><Empty /></div>);

  console.log(vendorTransactions.allTransactions)
  console.log(auth.data)
  if(auth?.data?.usertype == 'VENDOR'){
    if(vendorTransactions.allTransactions.length != 0){

      content = vendorTransactions.allTransactions.map((transaction) => {
   
       if (transaction.status == 'PENDING VENDOR ACCEPTANCE') {
        return <Awaiting 
         id = {transaction.id}
         productName={transaction.product_name} 
         vendorName={transaction.customer.username}
         totalAmount={transaction.total_amount} 
         dueDate={transaction.due_date} />
       }
       if (transaction.status == 'CANCELLED BY VENDOR') {
        return <Cancelled
         id = {transaction.id}
         productName={transaction.product_name} 
         vendorName={transaction.customer.username}
         totalAmount={transaction.total_amount} 
         dueDate={transaction.due_date} />
       }
       if (transaction.status == 'ACCEPTED BY VENDOR') {
        return <Completed 
         id = {transaction.id}
         productName={transaction.product_name} 
         vendorName={transaction.customer.username}
         totalAmount={transaction.total_amount} 
         dueDate={transaction.due_date} />
       }
     })
  }else{
  if(transactions.allTransactions.length != 0){

   content = transactions.allTransactions.map((transaction) => {

    if (transaction.status == 'PENDING VENDOR ACCEPTANCE') {
     return <Ongoing 
      id = {transaction.id}
      productName={transaction.product_name} 
      vendorName={transaction.vendor.name}
      totalAmount={transaction.total_amount} 
      dueDate={transaction.due_date} />
    }
  })
}}
  return (
    <div>
      {content}
      {/* <Awaiting />
      <Completed />
      <Cancelled />
      <Ongoing /> */}
    </div>
  )
}}

export default AllTransaction