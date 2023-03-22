import React from 'react'
import './VendorRegistration.css'
import scamtrust from '../../../../assets/images/Logo.png'
import { Button, Checkbox, Form, Input, Select} from 'antd';
import Vendormessage from '../../../../components/sign-up/vendormessage/VendorMessage';
import { useNavigate } from 'react-router-dom';

const VendorRegistration = () => {

  const navigate = useNavigate();

    const { Option } = Select;

    const onFinish = (values) => {
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

  return (

    <div className='ven-signup-wrapper'>
                {/* LEFT SIDE */}
        <div className='ven-signup-left'>
               {/* SCAMTRUST LOGO */}
            <div className='ven-signup-logo'>
                   <img src={scamtrust} className="ven-signup-img" alt="" />
            </div>
            <div className='ven-signup-form-con'>
               <div className='ven-signup-title'>
               Let’s get you started with your <span style={{color: '#3AB75D'}}> ScamTrust </span> <br /> Vendor account
               </div>

                <Form className='ven-sign-up-form-wrapper' 
                layout="vertical" 
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
               <div className='ven-signup-form'>
                <div className='vendor-form-left'>
                  <div layout="vertical" 
                  autoComplete="off"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  >
                      <Form.Item name="Business Name" label="Business Name" rules={[
                         {
                           required: true,
                           message: 'Please input your Business Name!',
                         },  ]}>
                       <Input className='ven-signup-input' />
                      </Form.Item>
                      <Form.Item name="Phone Number" label="Phone Number"   rules={[
                         {
                           required: true,
                           message: 'Please Phone Number!',
                         },  ]}>
                        <Input className='ven-signup-input'  type='number' />
                      </Form.Item>
                      <Form.Item name="Business Address" label="Business Address"   rules={[
                         {
                           required: true,
                           message: 'Business Address!',
                         },  ]}>
                        <Input className='ven-signup-input' />
                      </Form.Item>
                  </div>
                  </div>

                <div className='vendor-form-right'>
                  <div layout="vertical"
                  name="basic" 
                  autoComplete="off"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  >
                      <Form.Item name="Email Address " label="Email Address"  rules={[
                         {
                           required: true,
                           message: 'Email Address!',
                         },  ]}>
                       <Input className='ven-signup-input' />
                      </Form.Item>
                      <Form.Item name="Business Industry" label="Business Industry"  hasFeedback
                             rules={[
                               {
                                 required: true,
                                 message: 'Please select your Business Industry!',
                               },
                             ]}
                           >
                           <Select placeholder="Select Business Industry">
                             <Option value="Fashion">Fashion</Option>
                             <Option value="Restaurant">Restaurant</Option>
                           </Select>
                      </Form.Item>
                      <Form.Item name="Business Type" label="Business Type"  hasFeedback
                             rules={[
                               {
                                 required: true,
                                 message: 'Please select your Select Business Type!',
                               },
                             ]}
                           >
                           <Select placeholder="Select Business Type">
                             <Option value="Fashion">Fashion</Option>
                             <Option value="Restaurant">Restaurant</Option>
                           </Select>
                      </Form.Item>
                  </div>
                  </div>
               </div>
                   <Form.Item
                   name="remember"
                   valuePropName="checked"
                   rules={[
                    {
                      required: true,
                      message: 'Please check the box!',
                    },
                  ]}
                   >
                     <Checkbox value="A" className="ven-signup-checkbox">
                        I agree to <span style={{color: '#01306B'}}>ScamTrust’s</span> Terms of Service and Privacy Policy
                     </Checkbox>
                   </Form.Item>
                     <Button  
                     onClick={()=>{navigate('/verify-bvn')}}
                     className='ven-signup-btn' htmlType="submit">Proceed to verify BVN
                     </Button>

               </Form>


               </div>
        </div>

                     {/* RIGHT SIDE */}
        <div className='ven-signup-right'>
            <Vendormessage />
        </div>
    </div>
  )
}

export default VendorRegistration