import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import styles from './AccountDeletionRequestPage.module.css'
import AppLayout from '../../components/layout/AppLayout';


const AccountDeletionRequestPage = () => {

return <AppLayout>
<div className={styles['form-container']}>
    <h1 className={styles.title}>REQUEST ACCOUNT DELETION</h1>
    <Form 
      
            //  name="basic"
            //  labelCol={{
            //    span: 8,
            //  }}
            //  wrapperCol={{
            //    span: 16,
            //  }}
            //  style={{
            //    maxWidth: 600,
            //  }}
            //  initialValues={{
            //    remember: true,
            //  }}
        >

                     {/* USERNAME */}
          <Form.Item required name= "username" 
           rules={[
            {
              required: true,
              message: 'Please input your username!',

            },
          ]}
          >
            <Input className='sign-in-input' placeholder='Username' inputMode='text'/>
          </Form.Item>

                 {/* EMAIL */}
          <Form.Item
             name="email"
             rules={[
          
               {
                 required: true,                
                 message: 'Please input your email!',
               },
             ]}
          >
      <Input className='sign-in-input'  placeholder='Email Address' />
    </Form.Item>
    <Form.Item
             name="Reason"
             rules={[
          
               {
                 required: true,                
                 message: 'Please Provide a Reason for your Request!',
               },

               {
                min: 8,
                message: 'Reason Provided must be at least 8 characters!'
               }
             ]}
          >
      <Input.TextArea className='sign-in-input' rows={4} cols={4} placeholder='Reason for Account Deletion!' />
    </Form.Item>

    

              

                {/* SUBMIT BUTTON */}
         <div className='sign-btn-con'>
         <Button className='sign-in-btn' htmlType="submit">
              SUBMIT REQUEST
         </Button>

        
         </div>
        
        
        </Form>
   
</div>
</AppLayout>

}


export default AccountDeletionRequestPage;