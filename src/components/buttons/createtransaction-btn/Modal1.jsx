import React from 'react'
import classes from './Modal1.module.css'
import { Button, Form, Input, InputNumber, DatePicker } from 'antd';
import FooterLogo from '../../FooterLogo/FooterLogo';
import { useDispatch, useSelector } from 'react-redux';

import { initiateTransactionActions } from '../../../reducers/initiateTransactionReducer';

const Modal1 = ({confirm, showTrans,vendor_id}) => {
const dispatch =  useDispatch();

    // const layout = {
    //     labelCol: {
    //       span: 8,
    //     },SCT-VEN-641D5A7B76E09
    //     wrapperCol: {
    //       span: 16,
    //     },
    //   };

      const onFinish = (values) => {
        //console.log('Success:', values);
        let date = new Date(values.datePicker['$d']).toLocaleDateString('zh-Hans-CN').replace(/\//g,'-');
        dispatch(initiateTransactionActions.setVendorId(values.vendorID));
        dispatch(initiateTransactionActions.setProductName(values.productName));
        dispatch(initiateTransactionActions.setPhoneNumber(values.phoneNumber));
        dispatch(initiateTransactionActions.setQuantity(values.quantity));
        dispatch(initiateTransactionActions.setDueDate(date));
        dispatch(initiateTransactionActions.setDescription(values.description));
        dispatch(initiateTransactionActions.setProductAmount(values.productAmount));
        
      confirm()
      };
      const onFinishFailed = (errorInfo) => {
        //console.log('Failed:', errorInfo);
      };
 
      //console.log(vendor_id,"id")
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
                name="vendorID" 
                
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
                name="productName" 
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
                name="phoneNumber" 
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
                name="datePicker"
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
                name="productAmount" 
                label={<label className={classes['input-label']}>Product amount</label>}
                rules={[
                    {
                      required: true,
                      message: 'Please input product amount!',
                    },
                  ]}
                >
                  <Input type='number' className={classes['modal-input']} placeholder='Product amount' />
                </Form.Item>
                <Form.Item 
                name="quantity" 
                label={<label className={classes['input-label']}>Quantity</label>}
                rules={[
                    {
                      required: true,
                      message: 'Please input quantity!',
                    },
                  ]}
                >
                  <Input type='number' className={classes['modal-input']} placeholder='Quantity' />
                </Form.Item>
            </div>

            <div className={classes['text-area-con']}>
            <Form.Item name= 'description' label={<label className={classes['text-area-label']}>Description (optional)</label>}
            >
                <Input.TextArea className={classes['text-area']}  showCount placeholder='Describe the product' />
            </Form.Item>
            </div>
        

            <div className={classes['form-bottom']}>
                <FooterLogo />
            <Button  htmlType = 'submit' className={classes['trans-continue-btn']}>Continue</Button>
            </div>

            </div>
        </Form>
    </div>
  )
}

export default Modal1