import React from 'react'
import CustomerMessage from '../../../../components/sign-up/customer-message/CustomerMessage'
import classes from './CustomerRegistration.module.css'
import logo from '../../../../assets/images/Logo.png'
import { Button, Checkbox, Form, Input, Select} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { registerActions } from '../../../../reducers/registerReducer';
import { useDispatch } from 'react-redux';
const CustomerRegistration = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = (values) => {

      dispatch(registerActions.setName(`${values.FirstName} ${values.LastName}`))
      dispatch(registerActions.setEmail(values.Email))
      dispatch(registerActions.setLocation(values.Location))
      dispatch(registerActions.setPhone(values.PhoneNumber))
      dispatch(registerActions.setType('CUSTOMER'))

      navigate('/verify-bvn');

        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

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
                   </Form.Item>
                     <Button
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