import React from 'react'
import './CustDashTransaction.css'
import { Tabs } from 'antd';
import Createtransaction from '../../buttons/createtransaction-btn/Createtransaction';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import AllTransaction from '../../transactions/all-transactions/AllTransaction';
import Outgoing from '../../transactions/outgoing/Outgoing';
import Completed from '../../transactions/completed/Completed';
import Cancelled from '../../transactions/cancelled/Cancelled';
import classes from '../../../pages/transactions/Transactions.module.css'
const CustDashTransaction = () => {


    const TabPanel = Tabs;

    const items = [
      {
        key: '1',
        label:(<p className={classes['tab-1']}>All Transactions</p>),
        children:(<AllTransaction />),
      },
      {
        key: '2',
        label: (<p className={classes['tab-2']}><BsFillArrowUpRightCircleFill className={classes['tab-icon']} />Out-going</p>),
        children: (<div className={classes['content']}><Outgoing /></div>),
      },
      {
        key: '3',
        label: (<p className={classes['tab-2']}><AiFillCheckCircle className={classes['tab-icon2']} />Completed</p>),
        children: (<div className={classes['content']}><Completed /></div>),
      },
      {
        key: '4',
        label: (<p className={classes['tab-4']}><MdCancel className={classes['tab-icon2']} />Cancelled</p>),
        children: (<div className={classes['content']}><Cancelled /></div>),
      },
    ];

  return (
    <div className='cust-dash-tab-wrapper'>

                     {/* TRANSACTION */}
        <div className='cust-dash-transaction-tab'>
           {/* <Tabs centered>
              <TabPanel className='cust-dash-tabPanel' tab="All" key="1">
                  <h1 style={{color: 'black'}}>Hello world 1</h1>
              </TabPanel>
              <TabPanel className='cust-dash-tabPanel' tab="Outgoing" key="2">
              <h1 style={{color: 'black'}}>Hello world 2</h1>
              </TabPanel>
              <TabPanel className='cust-dash-tabPanel' tab="Cancelled " key="3">
              <h1 style={{color: 'black'}}>Hello world 3</h1> 
              </TabPanel>
              <TabPanel className='cust-dash-tabPanel' tab="Completed" key="4">
              <h1 style={{color: 'black'}}>Hello world 4</h1>
              </TabPanel> 
  </Tabs> */}
                <div className={classes['tabs-container']}>
                    <Tabs
                     defaultActiveKey="1"
                     items={items}
                     centered
                   
                      />
                    </div>
       </div>

                       {/* BUTTON */}
       <div className='cust-dash-transaction-btn-con'>
          <Createtransaction />
       </div>  
    </div>
  )
}

export default CustDashTransaction