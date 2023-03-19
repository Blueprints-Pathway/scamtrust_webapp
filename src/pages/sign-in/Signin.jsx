import React from 'react'
import Vendormessage from '../../components/vendormessage/VendorMessage'
import './Signin.css'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import scamtrust from '../../assets/images/Logo.png'

const Signin = () => {
  return (
    <div className='sign-in-con'>
      <div className='sign-in-left'>
        <div className='sign-logo-con'>
          <img style={{width: '125px'}} src={scamtrust} alt="" />
        </div>
        <Vendormessage className='sign-vendor-message' />
      </div>

      <div>
      <div className='sign-logo-con-right'>
          <img style={{width: '100px'}} src={scamtrust} alt="" />
        </div>
      <div className='sign-in-right'>
        <div className='sign-title-con'>
          <p>Welcome Back </p>
        </div>
        <Form 
             name="basic"
             labelCol={{
               span: 8,
             }}
             wrapperCol={{
               span: 16,
             }}
             style={{
               maxWidth: 600,
             }}
             initialValues={{
               remember: true,
             }}
        >

                     {/* USERNAME */}
          <Form.Item name="username" required
           rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          >
            <Input className='sign-in-input' placeholder='Email Address'/>
          </Form.Item>

                 {/* PASSWORD */}
          <Form.Item
             name="password"
             rules={[
               {
                 required: true,
                 message: 'Please input your password!',
               },
             ]}
          >
      <Input.Password className='sign-in-input'  placeholder='Password' />
    </Form.Item>

                 {/* CHECKBOX */}
         <div className='sign-in-check-div'>
           <Checkbox className='sign-check-words'>Remember me</Checkbox>
           <Link className='sign-check-words'>Forgot Password? </Link>
         </div>

                {/* SUBMIT BUTTON */}
         <div className='sign-btn-con'>
         <Button className='sign-in-btn' htmlType="submit">
              Continue
         </Button>
         </div>
        </Form>
                   {/* CREATE ACCOUNT */}
        <div className='sign-create-account'>
          <i>Don’t have an account? 
            <Link  className='sign-in-link'> Create</Link>
            </i>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signin