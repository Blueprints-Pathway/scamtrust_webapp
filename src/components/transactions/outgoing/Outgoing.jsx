import React from 'react'
import { useSelector } from 'react-redux'
import Awaiting from './awaiting/Awaiting'
import Ongoing from './ongoing/Ongoing'
import Empty from '../../customerdashboard/CustDashTransaction/empty/Empty'


const Outgoing = () => {
  let detail = localStorage.getItem('USER_DETAILS')
  let usertype =JSON.parse(detail).data.usertype;
  let content = <div style={{marginTop: '120px'}}><Empty /></div> ;
  
   
  
const transactions = useSelector(state => state.customerTransaction)
const vendorTransactions = useSelector(state => state.vendorTransaction)

if(usertype === 'VENDOR'){
  if (vendorTransactions.ongoingTransactions.length != 0){

    content = vendorTransactions.ongoingTransactions.map((transaction) => {
 
      return <Ongoing 
      id = {transaction.id}
       productName={transaction.product_name} 
       vendorName={transaction.customer.username}
       totalAmount={transaction.total_amount} 
       dueDate={transaction.due_date} />
     
   })
 }
}


if (transactions.ongoingTransactions.length != 0){

   content = transactions.ongoingTransactions.map((transaction) => {

     return <Ongoing 
     id = {transaction.id}
      productName={transaction.product_name} 
      vendorName={transaction.vendor.name}
      totalAmount={transaction.total_amount} 
      dueDate={transaction.due_date} />
    
  })
}


  return (
    <div style={{marginTop: '0px'}}>
          {/* <Ongoing />
          <Awaiting /> */}
          {content}
    </div>
  )
}

export default Outgoing