import React from 'react'
import classes from './CustDashTransaction.module.css'
// import "antd/dist/antd.css";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const CustDashTransaction = () => {
  return (
    <div className={classes['wrapper']}>
          <div className='tab-container'>
          <Tabs>
            <TabPane tab={<p>All</p>} key="1">
              1st TAB PANE Content
            </TabPane>
            <TabPane tab={<p>Outgoig</p>} key="2">
              2nd TAB PANE Content
            </TabPane>
            <TabPane tab={<p>Outgoig</p>} key="3">
              3rd TAB PANE Content
            </TabPane>
            <TabPane tab="Tab 4" key="4">
              4rd TAB PANE Content
            </TabPane>
          </Tabs>
        </div>
    </div>
  )
}

export default CustDashTransaction