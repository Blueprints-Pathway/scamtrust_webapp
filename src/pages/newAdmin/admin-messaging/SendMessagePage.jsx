import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import AdminTable from '../../../components/admin/general/AdminTable';
import { Checkbox } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import classes from './SendMessagePage.module.css';

const SendMessagePage = () => {
   
    return (
       <AppLayout>
       <h1 className={classes.heading}>Select Notification Type</h1>
       <div className={classes.wrapper}>
        <div className={classes.radio}>
            <Checkbox>Email</Checkbox>
            <Checkbox>SMS</Checkbox>
            <Checkbox>In-App</Checkbox>
        </div>
        <h2>Input Message</h2>
        <TextArea
      showCount
      maxLength={100}
      style={{
        height: 350,
        marginBottom: 24,
      }}
      onChange={null}
      placeholder="Type Message"
    />
     <button className={classes.button} onClick={null}>Send</button>
           

       </div>
       </AppLayout>
    );
};

export default SendMessagePage;