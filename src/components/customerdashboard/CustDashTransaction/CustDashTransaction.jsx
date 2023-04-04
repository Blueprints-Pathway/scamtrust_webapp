import React from 'react'
import classes from './CustDashTransaction.module.css'
import { Tabs } from 'antd';
import Createtransaction from '../../buttons/createtransaction-btn/Createtransaction';
import Empty from './empty/Empty';
import OngoingHistory from './outgoing/ongoing/OngoingHistory';
import AwaitingHistory from './awaiting/AwaitingHistory';
import CompletedHistory from './completed/CompletedHistory';
import CancelledHistory from './cancelled/CancelledHistory';

const { TabPane } = Tabs;

const CustDashTransaction = () => {
  return (
    <div className={classes['wrapper']}>
        <div>
            <div className={classes['transaction-btn']}>
              <Createtransaction />
            </div>
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
                  <AwaitingHistory />
                  <CompletedHistory />
                  <OngoingHistory />
                  <CancelledHistory />
               </div>
            </TabPane>
            <TabPane tab={<p className={classes['tab-middle']}>Outgoing</p>} key="2">
                         {/* EMPTY IMAGE */}
               {/* <div className={classes['empty-con']}>
                  <Empty />
               </div> */}
               <div className={classes['history-content']}>
                  <AwaitingHistory />
                  <OngoingHistory />
               </div>
            </TabPane>
            <TabPane tab={<p className={classes['tab-middle']}>Cancelled </p>} key="3">
                         {/* EMPTY IMAGE */}
               {/* <div className={classes['empty-con']}>
                  <Empty />
               </div> */}
               <div className={classes['history-content']}>
                  <CancelledHistory />
               </div>
            </TabPane>
            <TabPane tab={<p className={classes['right-tab']}>Completed</p>} key="4">
                         {/* EMPTY IMAGE */}
               {/* <div className={classes['empty-con']}>
                  <Empty />
               </div> */}
               <div className={classes['history-content']}>
                  <CompletedHistory />
               </div>
            </TabPane>
          </Tabs>
        </div>
    </div>
  )
}

export default CustDashTransaction