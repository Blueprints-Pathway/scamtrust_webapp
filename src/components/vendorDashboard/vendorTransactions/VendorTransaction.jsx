import React from 'react'
import classes from './VendorTransaction.module.css'
import { Tabs } from 'antd';
import Createtransaction from '../../buttons/createtransaction-btn/Createtransaction';
import { useSelector } from 'react-redux';
import AwaitingHistory from '../../customerdashboard/CustDashTransaction/awaiting/AwaitingHistory';
import OngoingHistory from '../../customerdashboard/CustDashTransaction/outgoing/ongoing/OngoingHistory';
import CancelledHistory from '../../customerdashboard/CustDashTransaction/cancelled/CancelledHistory';
import CompletedHistory from '../../customerdashboard/CustDashTransaction/completed/CompletedHistory';
import Empty from '../../customerdashboard/CustDashTransaction/empty/Empty';

const { TabPane } = Tabs;

const VendorTransaction = () => {

    const transactions = useSelector(state => state.customerTransaction);
    let allTransactionsContent =  <div className={classes['empty-con']}>
    <Empty/>
 </div>;
 
   
    if(transactions.allTransactions.length != 0){
  
     allTransactionsContent = transactions.allTransactions.map((transaction) => {
  
      if (transaction.status == 'PENDING VENDOR ACCEPTANCE') {
       return <AwaitingHistory 
        id = {transaction.id}
        productName={transaction.product_name} 
        vendorName={transaction.vendor.name}
        totalAmount={transaction.total_amount} 
        dueDate={transaction.due_date} />
      }
      if (transaction.status == 'ACCEPTED BY VENDOR') {
       return <OngoingHistory
        id = {transaction.id}
        productName={transaction.product_name} 
        vendorName={transaction.vendor.name}
        totalAmount={transaction.total_amount} 
        dueDate={transaction.due_date} />
      }
 
    })}
 
    let outgoingTransactionContent =  <div className={classes['empty-con']}>
    <Empty />
 </div>;
 
    
    if(transactions.allTransactions.length != 0){
  
     outgoingTransactionContent = transactions.allTransactions.map((transaction) => {
  
      if (transaction.status == 'PENDING VENDOR ACCEPTANCE') {
       return <AwaitingHistory 
        id = {transaction.id}
        productName={transaction.product_name} 
        vendorName={transaction.vendor.name}
        totalAmount={transaction.total_amount} 
        dueDate={transaction.due_date} />
      }
      if (transaction.status == 'ACCEPTED BY VENDOR') {
       return <OngoingHistory 
        id = {transaction.id}
        productName={transaction.product_name} 
        vendorName={transaction.vendor.name}
        totalAmount={transaction.total_amount} 
        dueDate={transaction.due_date} />
      }
 
    })}
 
    let allCancelledTransactionsContent =  <div className={classes['empty-con']}>
    <Empty />
 </div>;
 
   
    if(transactions.cancelledTransactions.length != 0){
  
      
       allCancelledTransactionsContent = transactions.cancelledTransactions.map((transaction) => {
  
      if (transaction.status == 'CANCELLED TRANSACTIONS') {
       return <CancelledHistory 
        id = {transaction.id}
        productName={transaction.product_name} 
        vendorName={transaction.vendor.name}
        totalAmount={transaction.total_amount} 
        dueDate={transaction.due_date} />
      }
    
    })}
 
 
    let allCompletedTransactionContent =  <div className={classes['empty-con']}>
    <Empty />
 </div>;
 
   
    if(transactions.completedTransactions.length != 0){
  
      
       allCompletedTransactionContent = transactions.completedTransactions.map((transaction) => {
  
      if (transaction.status == 'COMPLETED TRANSACTIONS') {
       return <CompletedHistory
        id = {transaction.id}
        productName={transaction.product_name} 
        vendorName={transaction.vendor.name}
        totalAmount={transaction.total_amount} 
        dueDate={transaction.due_date} />
      }
    
    })}

  return (
    <div className={classes['wrapper']}>
        <div>
            {/* <div className={classes['transaction-btn']}>
              <Createtransaction />
            </div> */}
            {/* <div className={classes['categories-con']}>
              <p className={classes['categories']}>Transactions</p>
              <p className={classes['categories']}>Vendor name</p>
              <p className={classes['categories']}>Amount</p>
              <p className={classes['categories']}>Date</p>
            </div> */}
          <Tabs className={classes['tab-container']}>
            <TabPane tab={<p className={classes['left-tab']}>All</p>} key="1">
                         {/* EMPTY IMAGE */}
               {/* <div className={classes['empty-con']}>
                  <Empty />
               </div> */}
               <div className={classes['history-content']}>
                  {allTransactionsContent}
               </div>
            </TabPane>
            <TabPane tab={<p className={classes['tab-middle']}>Outgoing</p>} key="2">
                         {/* EMPTY IMAGE */}
               {/* <div className={classes['empty-con']}>
                  <Empty />
               </div> */}
               <div className={classes['history-content']}>
                 {outgoingTransactionContent}
               </div>
            </TabPane>
            <TabPane tab={<p className={classes['tab-middle']}>Cancelled </p>} key="3">
                         {/* EMPTY IMAGE */}
               {/* <div className={classes['empty-con']}>
                  <Empty />
               </div> */}
               <div className={classes['history-content']}>
                  {allCancelledTransactionsContent}
               </div>
            </TabPane>
            <TabPane tab={<p className={classes['right-tab']}>Completed</p>} key="4">
                         {/* EMPTY IMAGE */}
               {/* <div className={classes['empty-con']}>
                  <Empty />
               </div> */}
               <div className={classes['history-content']}>
                  {allCompletedTransactionContent}
                 
               </div>
            </TabPane>
          </Tabs>
        </div>
    </div>
  )
}

export default VendorTransaction