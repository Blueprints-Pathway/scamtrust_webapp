import React, { useEffect } from 'react'
import Vendormessage from '../../components/vendormessage/VendorMessage'
import './Signin.css'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import scamtrust from '../../assets/images/Logo.png'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/authActions';

const Signin = () => {
  const {loading, isAuthenticated, data, error} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (e)  =>  {
    dispatch(login(JSON.stringify(e)));
  


  }
  useEffect(() => {
    if(isAuthenticated){
        console.log(data);
      if(data.usertype === 'CUSTOMER'){
        navigate('/layout');

      }

    }
  }, [isAuthenticated])
  let errorText  = error && <p style={{color:'red'}}>{error+ '!'}</p>
 
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
        onFinish={loginHandler}
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
          <Form.Item name="email" required
           rules={[
            {
              required: true,
              message: 'Please input your email!',
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
                  min: 8,
                  message: 'Password must be at least 8 characters'
              },
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
         <Button loading = {loading} className='sign-in-btn' htmlType="submit">
              Continue
         </Button>
         </div>
        {errorText}
        
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