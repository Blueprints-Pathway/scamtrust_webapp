import React from 'react'
import CustomerMessage from '../../../../components/sign-up/customer-message/CustomerMessage'
import classes from './CustomerRegistration.module.css'
import logo from '../../../../assets/images/logo.png'
import { Button, Checkbox, Form, Input, Select} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { registerActions } from '../../../../reducers/registerReducer';
import { useDispatch } from 'react-redux';
import { verifyPhoneExist, verifyEmailExist } from '../../../../actions/authActions';
import { authActions } from '../../../../reducers/authReducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const CustomerRegistration = () => {
  const auth = useSelector(state => state.auth)
  const misc = useSelector(state => state.misc)

  useEffect(() => {
    if(auth.isEmailValid && auth.isPhoneValid){
      navigate('/verify-bvn')
      dispatch(authActions.vendorRegistrationComplete())
    }
  }, [auth.isEmailValid, auth.isPhoneValid])

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let errorText = null;
    let error = <p></p>;

    const onFinish = (values) => {


      dispatch(verifyEmailExist({email: values.Email}));
      dispatch(verifyPhoneExist({phone: values.PhoneNumber}));


      dispatch(registerActions.setName(`${values.FirstName} ${values.LastName}`))
      dispatch(registerActions.setEmail(values.Email))
      dispatch(registerActions.setLocation(values.Location))
      dispatch(registerActions.setPhone(values.PhoneNumber))
      dispatch(registerActions.setType('CUSTOMER'))

     

        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      if(!misc.phoneExistData && !misc.emailExistData){
        console.log(auth.emailExistData, auth.phoneExistData)
         errorText =  auth.emailExistData.message || auth.phoneExistData.message
        
        error = errorText && <p style={{color:'red'}}>{errorText}!</p>
        }
console.log(auth.emailExistDataLoading || auth.phoneExistingDataLoading);
  return (
    <div className={classes['wrapper']}>
        <div className={classes['left']}>
            <div className={classes['logo-con']}>
                <img className={classes['logo']} src={logo} alt="" />
            </div>
            <div className={classes['content']}>
                <p className={classes['content-title']}>
                Let’s get you started with your <span style={{color: '#3AB75D'}}>ScamTrust</span> Customer account
                </p>
                <Form 
                className='form'
                layout="vertical"
                initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off" 
                >
                      <Form.Item name="Email" label={<label className={classes['input-label']}>Email address</label>}
                       rules={[
                         {
                           required: true,
                           message: 'Please input your Email address!',
                         },  ]}>
                       <Input className={classes['form-input']} placeholder='email@example.com'/>
                      </Form.Item>

                      <div className={classes['form-name-div']}>
                      <Form.Item name="FirstName" label={<label className={classes['input-label']}>First Name</label>}
                       rules={[
                         {
                           required: true,
                           message: 'Please input your First Name!',
                         },  ]}>
                       <Input className={classes['name']} placeholder="John" />
                      </Form.Item>

                      <Form.Item name="LastName" label={<label className={classes['input-label']}>Last Name</label>}
                       rules={[
                         {
                           required: true,
                           message: 'Please input your Last Name!',
                         },  ]}>
                       <Input className={classes['lastname']} placeholder='Doe' />
                      </Form.Item>
                      </div>

                      <Form.Item name="PhoneNumber" label={<label className={classes['input-label']}>Phone number</label>}
                       rules={[
                         {
                           required: true,
                           message: 'Please input your Phone number!',
                         },  ]}>
                       <Input className={classes['form-input']}  type="number" placeholder='0700 000 0000'/>
                      </Form.Item>

                      <Form.Item name="Location" label={<label className={classes['input-label']}>Location</label>}
                       rules={[
                         {
                           required: true,
                           message: 'Please input your Location!',
                         },  ]}>
                       <Input className={classes['form-input']} placeholder='Abuja' />
                      </Form.Item>

                      <Form.Item
                   name="remember"
                   valuePropName="checked"
                   rules={[
                    {
                        validator: (_, value) =>
                          value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                      },
                  ]}
                   >
                     <Checkbox value="A" className={classes['form-checkbox']}>
                        I agree to <span style={{color: '#01306B'}}>ScamTrust’s</span> Terms of Service and Privacy Policy
                     </Checkbox>
                     {error}
                   </Form.Item>
                     <Button
                     loading = {(auth.emailExistDataLoading || auth.phoneExistingDataLoading)}
                     className={classes['form-btn']} htmlType="submit">Proceed to verify BVN
                     <CaretRightOutlined className={classes['btn-icon']} />
                     </Button>

                </Form>
            </div>
        </div>
        <div className={classes['right']}>
            <CustomerMessage />
        </div>
    </div>
  )
}

export default CustomerRegistration