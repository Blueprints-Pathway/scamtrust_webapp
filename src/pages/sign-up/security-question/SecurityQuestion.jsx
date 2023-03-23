import React from 'react'
import SignupLayout from '../../../components/sign-up/signuplayout/SignupLayout'
import './SecurityQuestion.css'
import { Form, Button, Input, Select} from 'antd';
import { HiCreditCard } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import { listSecurityQuestion } from '../../../actions/miscActions';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSecurityQuestion } from '../../../actions/authActions';

const VendorSecurity = () => {

    const { Option } = Select;
    const {loading, error, data} = useSelector(state => state.misc)
    const auth = useSelector(state => state.auth)
    let questions = [];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listSecurityQuestion());
    },[dispatch])
    if (!loading) {
      console.log(data.data.data); 
     questions = data.data.data; 
    }

    const finish = (e) => {
      console.log(e);
    //  let i =  questions.findIndex(element => element.question == e.question);
     
    //   dispatch(setSecurityQuestion({
    //     question_id: i,
    //     answer: e.answer
    //   }));
    navigate('/vendor-activate-account')
    }
    
  return (
    <SignupLayout>
        <div className='ven-security-wrapper'>
            <div className='ven-security-top'>
                <div className='ven-sec-title-con1'>
                    <p className='ven-sec-title1'>Security Question</p>
                    <HiCreditCard className='ven-sec-icon' />
                </div>
                <p className='ven-sec-words'>
                    Security questions add an extra layer of security to your account; It is to verify if the account really belongs to you.
                </p>
            </div>
            <div className='ven-security-bottom'>
                <Form onFinish={finish} layout="vertical" autoComplete="off">


                  <Form.Item
                       className='ven-sec-input-con'
                       required
                       name="question"
                       label={<label className='ven-sec-label'>Security Question</label>}
                       rules={[
                         {
                                 required: true,
                             message: 'Choose a security question',
                            },
                       ]}
                     >
                       <Select loading = {loading} className='ven-sec-input' placeholder="Choose a security question">

                        {
                          questions.map((e, index) => {
                            return  <Option key={e.id} value={`${e.question}`}>{e.question}</Option>
                          })
                        }
                       
                       </Select>
                  </Form.Item>

                  <Form.Item  className='ven-sec-input-con'
                        name="answer"
                         label={<label className='ven-sec-label'>Your Answer</label>}>
                      <Input required className='ven-sec-input' />
                  </Form.Item>

                  <Button
                    className='ven-sec-btn' htmlType='submit'>Continue
                  </Button>

                </Form>
            </div>
        </div>
    </SignupLayout>
  )
}

export default VendorSecurity