import React from 'react'
import './CustDashTransaction.css'
import { Tabs } from 'antd';
import Createtransaction from '../../buttons/createtransaction-btn/Createtransaction';


const CustDashTransaction = () => {


    const TabPanel = Tabs;

  return (
    <div className='cust-dash-tab-wrapper'>

                     {/* TRANSACTION */}
        <div className='cust-dash-transaction-tab'>
           <Tabs centered>
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
           </Tabs>
       </div>

                       {/* BUTTON */}
       <div className='cust-dash-transaction-btn-con'>
          <Createtransaction />
       </div>  
    </div>
  )
}

export default CustDashTransaction