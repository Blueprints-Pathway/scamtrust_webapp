import React from 'react'
import classes from './Withdrawbutton.module.css'
import { Form, Modal, Input, message } from 'antd'
import { useState } from 'react';
import FooterLogo from '../../FooterLogo/FooterLogo';
import success from '../../../assets/images/success.png'

const Withdrawbtn = () => {

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

        //  MODAL 1
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  
     //  MODAL 2
  const showModal2 = () => {
    setIsModalOpen2(true);
    setIsModalOpen1(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

        //  MODAL 3
  const showModal3 = () => {
    setIsModalOpen3(true);
    setIsModalOpen2(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

        //  MODAL 4
  const showModal4 = () => {
    setIsModalOpen4(true);
    setIsModalOpen3(false);
  };
  const handleCancel4 = () => {
    setIsModalOpen4(false);
  };


  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  return (
    <div className={classes['wrapper']}>
      <button onClick={showModal1}
      className={classes['withdraw-btn']}>
          WITHDRAW
      </button>
            
            {/* FIRST MODAL */}
      <Modal open={isModalOpen1}
         onCancel={handleCancel1}
         centered 
         okButtonProps={{ style: { display: 'none' } }}
         cancelButtonProps={{style: { display: 'none' }}}
         onCancelprops={{style:{display: 'none'}}}
        //  width={500}
         bodyStyle={{
           borderRadius: '20px',
       }}
      >
        <div className={classes['withdraw-con']}>
          <div className={classes['withdraw-title-con']}>
            <p className={classes['withdraw-title']}>
               Withdrawal
            </p>
            <hr   className={classes['withdraw-hr']}/>
          </div>
          <div className={classes['withdraw-form']}>
          <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
            >
              <Form.Item
              name="amount"
              label={<label className={classes['withdraw-label']}>Amount</label>}
              rules={[
                {
                  required: true,
                },
              ]}
              >
              <Input className={classes['withdraw-input']} placeholder="Enter amount" type="number" />
              </Form.Item>
            </Form>
          </div>
          <div className={classes['withdraw-footer']}>
            <div className={classes['footer-logo']}>
              <FooterLogo />
            </div>
            <div>
              <button onClick={showModal2}
              className={classes['modal-1-btn']}>
                 Continue
              </button>
            </div>
          </div>
        </div>
      </Modal>



            {/* SECOND MODAL */}
      <Modal open={isModalOpen2}
         onCancel={handleCancel2}
         centered 
         okButtonProps={{ style: { display: 'none' } }}
         cancelButtonProps={{style: { display: 'none' }}}
         onCancelprops={{style:{display: 'none'}}}
        //  width={500}
         bodyStyle={{
           borderRadius: '20px',
       }}
      >
        <div className={classes['withdraw-con']}>
          <div className={classes['withdraw-title-con']}>
            <p className={classes['withdraw-title']}>
               Select Beneficiary Account
            </p>
            <hr   className={classes['withdraw-hr']}/>
          </div>
          <div className={classes['withdraw-form']}>
             <div className={classes['beneficiary-con']} tabindex="0">
                <p  className={classes['beneficiary-name']}>
                  Name: <span className={classes['beneficiary-span']}>Adekunle Ciroma Chukwuma</span>
                </p>
                <p  className={classes['beneficiary-name']}>
                  Gt Bank: <span className={classes['beneficiary-span']}>1234567890</span>
                </p>
             </div>
             <div className={classes['beneficiary-con']} tabindex="0">
                <p  className={classes['beneficiary-name']}>
                  Name: <span className={classes['beneficiary-span']}>Adekunle Ciroma Chukwuma</span>
                </p>
                <p  className={classes['beneficiary-name']}>
                  Gt Bank: <span className={classes['beneficiary-span']}>1234567890</span>
                </p>
             </div>
          </div>
          <div className={classes['beneficiary-footer']}>
              {/* <FooterLogo /> */}
              <button className={classes['add-btn']}>
                Add Beneficiary
              </button>
              <button onClick={showModal3}
              className={classes['modal-1-btn']}>
                 Continue
              </button>
          </div>
        </div>
      </Modal>


                  {/* THIRD MODAL */}
       <Modal open={isModalOpen3}
         onCancel={handleCancel3}
         centered 
         okButtonProps={{ style: { display: 'none' } }}
         cancelButtonProps={{style: { display: 'none' }}}
         onCancelprops={{style:{display: 'none'}}}
        //  width={500}
         bodyStyle={{
           borderRadius: '20px',
       }}
      >
        <div className={classes['withdraw-con']}>
          <div className={classes['withdraw-title-con']}>
            <p className={classes['withdraw-title']}>
               Withdrawal
            </p>
            <hr   className={classes['withdraw-hr']}/>
          </div>
          <div className={classes['withdraw-form']}>
          <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
            >
              <Form.Item
              name="amount"
              label={<label className={classes['withdraw-label']}>Transaction pin</label>}
              rules={[
                {
                  required: true,
                },
              ]}
              >
              <Input className={classes['withdraw-input']} placeholder="Enter transaction pin" type="number" />
              </Form.Item>
            </Form>
          </div>
          <div className={classes['withdraw-footer']}>
            <div className={classes['footer-logo']}>
              <FooterLogo />
            </div>
            <div>
              <button onClick={showModal4}
              className={classes['modal-1-btn']}>
                 Continue
              </button>
            </div>
          </div>
        </div>
      </Modal>


                  {/* FOURTH MODAL */}
       <Modal open={isModalOpen4}
         onCancel={handleCancel4}
         centered 
         okButtonProps={{ style: { display: 'none' } }}
         cancelButtonProps={{style: { display: 'none' }}}
         onCancelprops={{style:{display: 'none'}}}
        //  width={500}
         bodyStyle={{
           borderRadius: '20px',
       }}
      >
        <div className={classes['withdraw-con']}>
          <div className={classes['withdraw-title-con']}>
            <p className={classes['withdraw-title']}>
               Withdrawal details
            </p>
            <hr   className={classes['withdraw-hr']}/>
          </div>
          <p className={classes['hello']}>
             Hello Chukwudi 👋🏽
          </p>
          <div className={classes['success-con']}>
            <p className={classes['success-1']}>
                 Withdrawal Successful
            </p>
            <img src={success} className={classes['success-2']} alt="" />
            <p className={classes['success-3']}>₦25,000</p>
            <p className={classes['success-4']}>
                has been successfuly sent to your Zenith Bank account
            </p>
          </div>
          <div className={classes['withdraw-footer']}>
            <div className={classes['footer-logo']}>
              <FooterLogo />
            </div>
            <div>
              <button onClick={handleCancel4}
              className={classes['modal-1-btn']}>
                 Done
              </button>
            </div>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default Withdrawbtn;