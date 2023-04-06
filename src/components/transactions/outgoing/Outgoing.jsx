import React from 'react'
import { useSelector } from 'react-redux'
import Awaiting from './awaiting/Awaiting'
import Ongoing from './ongoing/Ongoing'
import Empty from '../../customerdashboard/CustDashTransaction/empty/Empty'

const Outgoing = () => {
  let content = <div style={{marginTop: '120px'}}><Empty /></div> ;
   
  
const transactions = useSelector(state => state.customerTransaction)
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