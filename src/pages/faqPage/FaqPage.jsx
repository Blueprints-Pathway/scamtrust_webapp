import React from 'react'
import classes from './FaqPage.module.css'
import AppLayout from '../../components/Layout/AppLayout'
import { Tabs } from 'antd';
import VendorFaq from './vendorfaq/VendorFaq';
import BuyerFaq from './buyerfaq/BuyerFaq';

const FaqPage = () => {

    const onChange = (key) => {
        console.log(key);
      };

    const items = [
        {
          key: '1',
          label: (<p className={classes['faq-title']}>Vendor</p>),
          children: (<VendorFaq />),
        },
        {
          key: '2',
          label: (<p className={classes['faq-title']}>Buyer</p>),
          children: (<BuyerFaq />),
        },
      ];
  return (
    <AppLayout>
        <div className={classes['wrapper']}>
           <Tabs defaultActiveKey="1" 
           centered items={items} 
           onChange={onChange} />
        </div>
    </AppLayout>
  )
}

export default FaqPage