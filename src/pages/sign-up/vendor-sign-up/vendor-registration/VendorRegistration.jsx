import React from 'react'
import './VendorRegistration.css'
import scamtrust from '../../../../assets/images/Logo.png'
import { Button, Checkbox, Form, Input, Select} from 'antd';
import Vendormessage from '../../../../components/sign-up/vendormessage/VendorMessage';
import { useNavigate } from 'react-router-dom';
import { listBusinessIndustry, listBusinessTypes } from '../../../../actions/miscActions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { verifyEmailExist, verifyPhoneExist } from '../../../../actions/authActions';
import { registerActions } from '../../../../reducers/registerReducer';
const VendorRegistration = () => {
  let businessTypes = [];
  let businessIndustries = [];

let errorText = null;
let error = <p></p>;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const misc = useSelector(state => state.misc)
  const auth = useSelector(state => state.auth)

  const [industryId, setIndustryId] = useState('');
  const [businessTypeId, setBusinessTypeId] = useState('');
  useEffect(() => {
    dispatch(listBusinessIndustry());
    dispatch(listBusinessTypes());
  },[dispatch])
  useEffect(() => {
    if(auth.isEmailValid && auth.isPhoneValid){
      navigate('/verify-bvn')
    }
  }, [auth.isEmailValid, auth.isPhoneValid])
  if (!misc.businessIndustriesLoading && !misc.businessTypesLoading) {
    console.log(misc.businessTypes.data); 
    console.log(misc.businessIndustries.data)
    businessTypes = misc.businessTypes.data;
    businessIndustries = misc.businessIndustries.data;
  //  questions = data.data.data; 
  }



    const { Option } = Select;

    const submitFormHandler = (e) => {
      console.log(e.BusinessName, e.EmailAddress, e.PhoneNumber, e.BusinessIndustry, e.BusinessAddress, e.BusinessType  + 'hi');

      dispatch(verifyEmailExist({email: e.EmailAddress}));
      dispatch(verifyPhoneExist({phone: e.PhoneNumber}));

      dispatch(registerActions.setName(e.BusinessName))
      dispatch(registerActions.setEmail(e.EmailAddress))
      dispatch(registerActions.setLocation('Lagos, Nigeria'))
      dispatch(registerActions.setPhone(e.PhoneNumber))
      dispatch(registerActions.setBusinessTypeId(businessTypeId))
      dispatch(registerActions.setIndustry(industryId))
     
      dispatch(registerActions.setType('VENDOR'))
      //  navigate('/vendor-verify-bvn')
    }
    const onFinishFailed = (errorInfo) => {
      console.log(errorInfo);
    }
    if(!misc.phoneExistData && !misc.emailExistData){
    console.log(auth.emailExistData, auth.phoneExistData)
     errorText =  auth.emailExistData.message || auth.phoneExistData.message
    
    error = errorText && <p>{errorText}</p>
    }
     
    



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
                onFinish={submitFormHandler}  onFinishFailed = {onFinishFailed}
                layout="vertical" 
                initialValues={{
                  remember: true,
                }}
               
                >
               <div className='ven-signup-form'>
                <div className='vendor-form-left'>
                  <div layout="vertical" 
                  autoComplete="off"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={submitFormHandler}
                  onFinishFailed={onFinishFailed}
                  >
                      <Form.Item name="BusinessName" label="Business Name" rules={[
                         {
                           required: true,
                           message: 'Please input your Business Name!',
                         }, 

                         
                         ]}>
                       <Input className='ven-signup-input' />
                      </Form.Item>
                      <Form.Item name="PhoneNumber" label="Phone Number"   rules={[
                         {
                           required: true,
                           message: 'Please Phone Number!',
                         }, 
                         {
                          len :11,
                          message: 'Please input a valid phone number'
                         } ]}>
                        <Input className='ven-signup-input'  />
                      </Form.Item>
                      <Form.Item name="BusinessAddress" label="Business Address"   rules={[
                         {
                           required: true,
                           message: 'Business Address!',
                         }, 
                        
                         ]}>
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
                  onFinish={submitFormHandler}
                  onFinishFailed={onFinishFailed}
                  >
                      <Form.Item name="EmailAddress" label="Email Address"  rules={[
                         {
                           required: true,
                           message: 'Email Address!',
                         },  ]}>
                       <Input className='ven-signup-input'  />
                      </Form.Item>
                      <Form.Item name="BusinessIndustry" label="Business Industry"  hasFeedback
                             rules={[
                               {
                                 required: true,
                                 message: 'Please select your Business Industry!',
                               },
                             ]}
                           >
                           <Select onSelect={(id) => setIndustryId(id)} placeholder="Select Business Industry">
                           {
                          businessIndustries.map((e, index) => {
                            return  <Option key={e.id} value={`${e.id}`}>{e.name}</Option>
                          })
                        }
                       
                           </Select>
                      </Form.Item>
                      <Form.Item name="BusinessType" label="Business Type"  hasFeedback
                             rules={[
                               {
                                 required: true,
                                 message: 'Please select your Select Business Type!',
                               },
                             ]}
                           >
                           <Select onSelect={(id) => setBusinessTypeId(id)} placeholder="Select Business Type">
                           {
                          businessTypes.map((e, index) => {
                            return  <Option  key={e.id}  value={`${e.id}`}>{e.name}</Option>
                          })
                        }
                       
                           </Select>
                      </Form.Item>
                  </div>
                  </div>
               </div>
                   <Form.Item
                   name="remember"
                   required
                   valuePropName="checked"
                   rules={[
                    {
                      required: true,
                      message: 'Please check the box!',
                    },
                  ]}
                   >
                     <Checkbox  value="A" className="ven-signup-checkbox">
                        I agree to <span style={{color: '#01306B'}}>ScamTrust’s</span> Terms of Service and Privacy Policy
                     </Checkbox>
                     {error}
                   </Form.Item>
                     <Button  
                     loading = {auth.loading}
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