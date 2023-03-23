import React from 'react'
import classes from './Modal1.module.css'
import { Button, Form, Input, InputNumber } from 'antd';

const Modal1 = () => {

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };

      const onFinish = (values) => {
        console.log(values);
      };

  return (
    <div className={classes['wrapper']}>
        <Form className={classes['form-con']} layout="vertical" autoComplete="off">
            <div className={classes['div1']}>
                <Form.Item 
                name="vendor ID" 
                label={<p>Vendor ID</p>}>
                  <Input className={classes['modal-input']} placeholder='Vendor ID' />
                </Form.Item>

                <Form.Item 
                name="name" 
                label={<p>Vendor ID</p>}>
                  <Input placeholder='Vendor ID' />
                </Form.Item>
            </div>
        </Form>
    </div>
  )
}

export default Modal1