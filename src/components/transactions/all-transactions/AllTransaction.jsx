import React from 'react'
import { useSelector } from 'react-redux'
import Cancelled from '../cancelled/Cancelled'
import Completed from '../completed/Completed'
import Awaiting from '../outgoing/awaiting/Awaiting'
import Ongoing from '../outgoing/ongoing/Ongoing'

const AllTransaction = () => {
  const transactions = useSelector(state => state.customerTransaction);

  let content = <p>YOU HAVE NO CANCELLED TRANSACTIONS!</p>;

  console.log(transactions.allTransactions)
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
}
  return (
    <div>

      {content}
      {/* <Awaiting />
      <Completed />
      <Cancelled />
      <Ongoing /> */}
    </div>
  )
}

export default AllTransaction