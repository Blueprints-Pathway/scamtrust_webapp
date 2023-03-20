import React from 'react'
import SignupLayout from '../../../../components/signuplayout/SignupLayout'
import './VendorBvn.css'
import { Button, Form, Input,} from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const VendorBvn = () => {

  const navigate = useNavigate();
  
  return (
    <SignupLayout>
      <div className='vendorbvn-wrapper'>
            <div className='vendorbvn-head'>
                <p className='vendorbvn-title'>BVN Details </p>
                <p className='vendorbvn-words'>
                    Ensure the details provided here match the information in your bank verification bio-data.
                </p>
            </div>
            <div className='vendorbvn-form'>
                <Form layout="vertical" autoComplete="off">

                      <Form.Item className='form-item' name="Full name" 
                      label={<label className='form-label'>Full name</label>}
                      rules={[
                         {
                           message: 'Please input your Full name!',
                         },  ]}>
                       <Input className='vendorbvn-input' />
                      </Form.Item>

                      <Form.Item className='form-item' name="Date of birth" 
                      label={<label className='form-label'>Date of birth</label>}
                      rules={[
                         {
                           message: 'Please input your Date of birth!',
                         },  ]}>
                       <Input type="number" className='vendorbvn-input' />
                      </Form.Item>

                      <Form.Item className='form-item' name="phone" 
                        label={<label className='form-label'>Phone number</label>}
                        rules={[
                         {
                           message: 'Please input your Phone number!',
                         },  ]}>
                       <Input type="number" className='vendorbvn-input' />
                      </Form.Item>

                      <Form.Item className='form-item' name="Enter BVN" 
                       label={<label className='form-label'>Enter your Bank Verification Number</label>}
                       rules={[
                         {
                           message: 'Please input your Bank Verification Number!',
                         },  ]}>
                       <Input type="number" className='vendorbvn-input' />
                      </Form.Item>
                      <div className='vendorbvn-skip-con'>
                        <Link className='vendorbvn-skip'>Skip</Link>
                      </div>
                      <Button onClick={()=>{navigate('/vendor-set-password')}}
                      className='vendorbvn-btn' htmlType="submit">Verify</Button>
                </Form>
            </div>
      </div>
    </SignupLayout>
  )
}

export default VendorBvn