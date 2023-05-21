import React from 'react'
import classes from './AllTransaction.module.css'
import { useSelector } from 'react-redux'
import empty from '../../../assets/images/empty.png'
import Cancelled from '../cancelled/Cancelled'
import Completed from '../completed/Completed'
import Awaiting from '../outgoing/awaiting/Awaiting'
import Ongoing from '../outgoing/ongoing/Ongoing'
import Empty from '../../customerdashboard/CustDashTransaction/empty/Empty'
import { useNavigate } from 'react-router'
import { TbRefreshAlert } from 'react-icons/tb'
import CancelledItem from '../cancelled/CancelledItem'
import CompletedItem from '../completed/CompletedItem'

const AllTransaction = () => {
  const transactions = useSelector(state => state.customerTransaction);
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate();
  const vendorTransactions = useSelector(state => state.vendorTransaction)
  let detail = localStorage.getItem('USER_DETAILS')
  let usertype =JSON.parse(detail).data.usertype;
  let content = (<div className={classes['con']}><Empty /></div>);


  if(usertype === 'VENDOR'){
    if(vendorTransactions.allTransactions.length != 0){
      
      console.log(vendorTransactions.allTransactions);
      content = vendorTransactions.allTransactions.map((transaction) => {
   
       if (transaction.status === 'PENDING VENDOR ACCEPTANCE') {
        return <Awaiting 
         id = {transaction.id}
         productName={transaction.product_name} 
         vendorName={transaction.customer.username}
         totalAmount={transaction.total_amount} 
         dueDate={transaction.due_date} />
       }
       if (transaction.status == 'CANCELLED BY VENDOR') {
        return <CancelledItem  id = {transaction.id} product_name = {transaction.product_name} name = {transaction.customer.username} total_amount = {transaction.total_amount} due_date = {transaction.due_date} />
       }
       if (transaction.status == 'ACCEPTED BY VENDOR') {
        return <Ongoing 
       id = {transaction.id}
       productName={transaction.product_name} 
       vendorName={transaction.customer.username}
       totalAmount={transaction.total_amount} 
       dueDate={transaction.due_date} />
     }
     if (transaction.status == 'ACCEPTED BY CUSTOMER') {
      return <Ongoing 
     id = {transaction.id}
     productName={transaction.product_name} 
     vendorName={transaction.customer.username}
     totalAmount={transaction.total_amount} 
     dueDate={transaction.due_date} />
   }
     if (transaction.status == 'COMPLETED') {
      return  <CompletedItem id = {transaction.id} product_name =  {transaction.product_name} name = {transaction.customer.username} total_amount = {transaction.total_amount} due_date = {transaction.due_date} />

     }
     })
  }}else{
  if(transactions.allTransactions.length != 0){

   content = transactions.allTransactions.map((transaction) => {

    if (transaction.status == 'PENDING VENDOR ACCEPTANCE') {
     return <Awaiting 
      id = {transaction.id}
      productName={transaction.product_name} 
      vendorName={transaction.vendor.name}
      totalAmount={transaction.total_amount} 
      dueDate={transaction.due_date} />
    }
    if (transaction.status == 'ACCEPTED BY VENDOR') {
      return <Ongoing 
       id = {transaction.id}
       productName={transaction.product_name} 
       vendorName={transaction.vendor.name}
       totalAmount={transaction.total_amount} 
       dueDate={transaction.due_date} />
     }
    if (transaction.status == 'CANCELLED BY VENDOR') {
      return  <CancelledItem id = {transaction.id} product_name =  {transaction.product_name} name = {transaction.vendor.name} total_amount = {transaction.total_amount} due_date = {transaction.due_date} />

     }
     if (transaction.status == 'ACCEPTED BY CUSTOMER') {
      return <Ongoing 
      id = {transaction.id}
      productName={transaction.product_name} 
      vendorName={transaction.vendor.name}
      totalAmount={transaction.total_amount} 
      dueDate={transaction.due_date} />
     }
     if (transaction.status == 'COMPLETED') {
      return  <CompletedItem id = {transaction.id} product_name =  {transaction.product_name} name = {transaction.vendor.name} total_amount = {transaction.total_amount} due_date = {transaction.due_date} />

     }
     

  })
}}
  return (
    <div>
      {content}
    </div>
  )
}

export default AllTransaction