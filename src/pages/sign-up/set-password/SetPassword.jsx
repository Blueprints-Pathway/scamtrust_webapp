import React from 'react'
import SignupLayout from '../../../components/sign-up/signuplayout/SignupLayout'
import './SetPassword.css'
import { Button, Form, Input,} from 'antd';
import { AiFillQuestionCircle } from 'react-icons/ai'
import { CaretRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { registerActions } from '../../../reducers/registerReducer';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../actions/authActions';
import { useEffect } from 'react';


const VendorSetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(state => state.register)
  const {loading, isAuthenticated, data, error} = useSelector(state => state.auth)
  let errorT = '';
  useEffect(() => {
    if(isAuthenticated){
      console.log(data);
      
      navigate('/transaction-pin')
    }
  }, [isAuthenticated])
  
  console.log(loading, isAuthenticated, data, error)
  if(error){
    errorT = error.email[0] || error.location[0] ||error.phone[0]|| error.type[0] || error.username[0] || error.name[0] || '';

  }
  
  let errorText  = error && <p style={{color:'red'}}>{errorT+ '!'}</p>

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(registerActions.setPassword(values.password));
    dispatch(registerActions.setPasswordConfirmation(values.confirm_password));
   
      
          dispatch(registerUser({
            ...userInfo,
            name: userInfo.username,
            password: values.password,
            password_confirmation: values.confirm_password,
          }))

    
   
    

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  
  return (
    <SignupLayout>
      <div className='ven-set-pass-wrapper'>
        <div className='ven-set-pass-title'>
          <p className=''>
            Let’s help you secure your <span style={{color: '#3AB75D'}}>ScamTrust</span> Customer account. Kindly set your <span style={{color: '#3AB75D'}}>password</span> and <span style={{color: '#3AB75D'}}>transaction pin</span>.
          </p>
        </div>
        <div className='ven-set-pass-form'>
          <Form  layout="vertical"
                autoComplete="off"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
          >
              <Form.Item label={<label className='ven-set-pass-label'>Set password</label>}
               name='password' 
               tooltip={{
                title: 'Tooltip with customize icon',
                icon: <AiFillQuestionCircle style={{fontSize: '15px', margin: '0px 0px 1px 8px'}} />,
              }}
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  min:8,
                  message: 'Password must be at least 8 characters'
                }
              ]}
              hasFeedback
               >
                 <Input.Password className='ven-set-pass-input' placeholder="Confirm password" />
              </Form.Item>

              <Form.Item   label={<label className='ven-set-pass-label'>Confirm password</label>}
               name='confirm_password'
               dependencies={['password']}
               rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
              hasFeedback
               >
                 <Input.Password className='ven-set-pass-input' placeholder="Input password" />
              </Form.Item>
              <p>{errorText}</p>
              <Button
             
              className='ven-set-pass-btn' loading = {loading} htmlType="submit">Proceed to set a transaction pin
               <CaretRightOutlined className='ven-set-pass-btn-icon' />
               </Button>
          </Form>
        </div>
      </div>
    </SignupLayout>
  )
}

export default VendorSetPassword