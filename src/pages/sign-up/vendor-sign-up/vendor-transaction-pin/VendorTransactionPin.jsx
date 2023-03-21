import React, { useState } from 'react'
import SignupLayout from '../../../../components/sign-up/signuplayout/SignupLayout'
import classes from './VendorTransactionPin.module.css'
import { Form, Button } from 'antd';
import { BsQuestionCircleFill } from 'react-icons/bs'
import { CaretRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import  { PinInput }  from 'react-input-pin-code'

const VendorTransactionPin = () => {

   const navigate = useNavigate();

   
   const inputStyle = {
      border: '1px solid #999b9d',
      borderRadius: '10px',
      fontSize: '18px',
      margin: '0px 5px',
      height: '40px',
      width: '40px',
   };

   const [values, setValues] = React.useState(['', '', '', '']);

  return (
    <SignupLayout>
        <div className={classes['ven-transaction-wrapper']}>
            <div className={classes['ven-trans-top']}>
               <p className={classes['ven-trans-title1']}>
                  Let’s help you secure your <span style={{color: '#3AB75D'}}>ScamTrust</span> Customer account. Kindly set your <span style={{color: '#3AB75D'}}>password</span> and <span style={{color: '#3AB75D'}}>transaction pin</span>.
               </p>
               <p className={classes['ven-trans-title2']}>
                  To set up your pin, input your 4-digit code and confirm it below.
               </p>
            </div>

            <div className={classes['ven-trans-bottom']}>
               <Form layout="vertical" autoComplete="off">
                  <div name="number" className={classes['ven-trans-pin-div']}>
                     <p className={classes['ven-trans-pin-label']}>Transaction pin <BsQuestionCircleFill className='ven-trans-icon' /></p>
                       <div className={classes['ven-trans-input-con1']}>
                          <PinInput
                            inputStyle={inputStyle}
                            values={values}
                            onChange={(value, index, values) => setValues(values)}
                          />
                       </div>
                  </div>
                              
                               {/* CONFIRM TRANSACTION PIN */}
                  <div name="number" className={classes['ven-trans-pin-div']}>
                     <p className={classes['ven-trans-pin-label']}>Confirm transaction pin</p>
                     <div className={classes['ven-trans-input-con1']}>
                          <PinInput
                            inputStyle={inputStyle}
                            values={values}
                            onChange={(value, index, values) => setValues(values)}
                          />
                       </div>
                  </div>
                  <Button onClick={()=>{navigate('/vendor-security-question')}}
                    className={classes['ven-trans-btn']}>Set security question
                    <CaretRightOutlined className={classes['ven-trans-btn-icon2']} />
                  </Button>
               </Form>
            </div>
        </div>
    </SignupLayout>
  )
}

export default VendorTransactionPin