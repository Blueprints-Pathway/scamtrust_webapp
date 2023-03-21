import React from 'react'
import SignupLayout from '../../components/sign-up/signuplayout/SignupLayout'
import classes from './PasswordRecovery.module.css'
import { Button, Form, Input } from 'antd';


const PasswordRecovery = () => {
  return (
    <SignupLayout>
        <div className={classes['wrapper']}>
            <div className={classes['header-con']}>
                <p className={classes['title-1']}>Password Recovery</p>
                <p className={classes['title-2']}>Please enter your Email Address to receive verification code</p>
            </div>
            <div className={classes['form']}>
                <Form layout="vertical" autoComplete="off">
                    <Form.Item name="email" required
                       label={<label className={classes['label']}>Email Address </label>}
                       rules={[
                        {
                          required: true,
                          message: 'Please input your email!',
                        },
                      ]}
                    >
                         <Input className={classes['input']} placeholder='example@email.com'/>
                    </Form.Item>
                    <p className={classes['use-phone']}>Use Phone number</p>
                    <Button className={classes['button']}>Continue</Button>
                    <div className={classes['div-3']}>
                      <i className={classes['remember']}>Remember your password? 
                      <span className={classes['login']}>  Log In</span></i>
                    </div>
                </Form>
            </div>
        </div>
    </SignupLayout>
  )
}

export default PasswordRecovery