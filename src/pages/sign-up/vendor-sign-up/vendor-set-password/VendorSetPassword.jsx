import React from 'react'
import SignupLayout from '../../../../components/signuplayout/SignupLayout'
import './VendorSetPassword.css'
import { Button, Form, Input,} from 'antd';
import { AiFillQuestionCircle } from 'react-icons/ai'
import { CaretRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const VendorSetPassword = () => {
  
  const navigate = useNavigate();
  return (
    <SignupLayout>
      <div className='ven-set-pass-wrapper'>
        <div className='ven-set-pass-title'>
          <p className=''>
            Let’s help you secure your <span style={{color: '#3AB75D'}}>ScamTrust</span> Customer account. Kindly set your <span style={{color: '#3AB75D'}}>password</span> and <span style={{color: '#3AB75D'}}>transaction pin</span>.
          </p>
        </div>
        <div className='ven-set-pass-form'>
          <Form  layout="vertical" autoComplete="off">
              <Form.Item label={<label className='ven-set-pass-label'>Set password</label>}
               name='password' 
               tooltip={{
                title: 'Tooltip with customize icon',
                icon: <AiFillQuestionCircle style={{fontSize: '15px', margin: '0px 0px 1px 8px'}} />,
              }}
               >
                 <Input.Password className='ven-set-pass-input' placeholder="Confirm password" />
              </Form.Item>
              <Form.Item label={<label className='ven-set-pass-label'>Confirm password</label>}
               name='password'
               >
                 <Input.Password className='ven-set-pass-input' placeholder="Input password" />
              </Form.Item>
              <Button onClick={()=>{navigate('/vendor-transaction-pin')}}
              className='ven-set-pass-btn'>Proceed to set a transaction pin
               <CaretRightOutlined className='ven-set-pass-btn-icon' /></Button>
          </Form>
        </div>
      </div>
    </SignupLayout>
  )
}

export default VendorSetPassword