import React from 'react'
import classes from './Modal1.module.css'
import { Button, Form, Input, InputNumber, DatePicker } from 'antd';
import FooterLogo from '../../FooterLogo/FooterLogo';

const Modal1 = ({confirm}) => {

    // const layout = {
    //     labelCol: {
    //       span: 8,
    //     },
    //     wrapperCol: {
    //       span: 16,
    //     },
    //   };

      const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div className={classes['wrapper']}>
        <Form className={classes['form-con']} layout="vertical"
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           autoComplete="off"
        >
            <div>
            <div className={classes['row-con']}>
                <Form.Item 
                name="vendor ID" 
                rules={[
                    {
                      required: true,
                      message: 'Please input vendor ID!',
                    },
                  ]}
                label={<label className={classes['input-label']}>Vendor ID</label>}>
                  <Input className={classes['modal-input']} placeholder='Vendor ID' />
                </Form.Item>
                <Form.Item 
                name="Product name" 
                label={<label className={classes['input-label']}>Product name</label>}
                rules={[
                    {
                      required: true,
                      message: 'Please input product name!'
                    },
                  ]}
                >
                  <Input className={classes['modal-input']} placeholder='Product name' />
                </Form.Item>
            </div>

            <div className={classes['row-con']}>
                <Form.Item 
                name="Phone number" 
                label={<label className={classes['input-label']}>Phone number</label>}
                rules={[
                    {
                      required: true,
                      message: 'Please input phone number!',
                    },
                  ]}
                >
                  <Input type='number' className={classes['modal-input']} placeholder='Phone number' />
                </Form.Item>
                <Form.Item 
                name="date-picker"
                hasFeedback validateStatus="success" 
                label={<label className={classes['input-label']}>Due date</label>}
                rules={[
                    {
                      required: true,
                      message: 'Please fill due date!',
                    },
                  ]}
                >
                  <DatePicker className={classes['modal-input']} />
                </Form.Item>
            </div>

            <div className={classes['row-con']}>
                <Form.Item 
                name="Product amount" 
                label={<label className={classes['input-label']}>Product amount</label>}
                rules={[
                    {
                      required: true,
                      message: 'Please input product amount!',
                    },
                  ]}
                >
                  <Input className={classes['modal-input']} placeholder='Product amount' />
                </Form.Item>
                <Form.Item 
                name="Quantity" 
                label={<label className={classes['input-label']}>Quantity</label>}
                rules={[
                    {
                      required: true,
                      message: 'Please input quantity!',
                    },
                  ]}
                >
                  <InputNumber className={classes['modal-input']} placeholder='Quantity' />
                </Form.Item>
            </div>

            <div className={classes['text-area-con']}>
            <Form.Item label={<label className={classes['text-area-label']}>Description (optional)</label>}
            >
                <Input.TextArea className={classes['text-area']}  showCount placeholder='Describe the product' />
            </Form.Item>
            </div>

            <div className={classes['form-bottom']}>
                <FooterLogo />
            <button className={classes['trans-continue-btn']} onClick={()=> confirm()}>Continue</button>
            </div>

            </div>
        </Form>
    </div>
  )
}

export default Modal1