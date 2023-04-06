import React from 'react'
import classes from './Withdrawbutton.module.css'
import { Form, Modal, Input, message, Button } from 'antd'
import { useState } from 'react';
import FooterLogo from '../../FooterLogo/FooterLogo';
import success from '../../../assets/images/success.png'
import { useDispatch, useSelector } from 'react-redux';
import { getWalletTransactionsDetails, withdraw } from '../../../actions/walletActions';
import { walletActions } from '../../../reducers/walletReducer';
import swal from 'sweetalert';
import { getLoggedInUserDetails } from '../../../actions/userActions';

const Withdrawbtn = () =>{

const user = useSelector(state => state.user);
const wallet = useSelector(state => state.wallet);
const dispatch = useDispatch();
const [isModalOpen1, setIsModalOpen1] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [isModalOpen3, setIsModalOpen3] = useState(false);
const [isModalOpen4, setIsModalOpen4] = useState(false);
const [amount, setAmount] = useState('');
const [accountNo, setAccountNo] = useState('');
const [bankId, setBankId] = useState('');
const [error, setError] = useState('');
const [beneficiaryError, setBeneficiaryError] = useState('');

        //  MODAL 1
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
    setAmount('');
  };
  
     //  MODAL 2
  const showModal2 = () => {
    setIsModalOpen2(true);
    setIsModalOpen1(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setAccountNo('');
    setBankId('');
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

  const completeTransactionHandler = () => {

    dispatch(getLoggedInUserDetails())
    dispatch(getWalletTransactionsDetails())
    dispatch(getWalletTransactionsDetails())

     handleCancel4();
  }


  const [form] = Form.useForm();
  console.log(amount < user.data.walletBalance);
  const onFinishAmountInput = () => {
    console.log(amount);
    if(amount === ''|| amount === null){
      setError('Input a Valid Amount!');
      return;
    }
    if ( +amount > +user.data.walletBalance) {
        setError('Amount Must Not Exceed Wallet Balance!')
      return;
    }

   
    

  showModal2();
  };

  const addBeneficiaryHandler = () => {
    if(accountNo === '' || bankId === ''){
      setBeneficiaryError('Select a Beneficiary Account');
      return
    }
   
    showModal3();
  }

  const transactionPinFinish = (e) => {
    console.log(e);
    dispatch(withdraw({
      amount: +amount,
      bank_account_id: +bankId,
      pin: +e.pin

    }));
    
  }

  
  if(wallet.isWithdrawalSuccessful){
    console.log(wallet.data)
    swal({
      icon:'success',
      text: wallet.data,
    })
    dispatch(walletActions.resetWithrawalData())
    showModal4();

    
  }
console.log(wallet.error)
  if(wallet.error){
    
    swal({
      icon:'error',
      text: wallet.error,
    })
    dispatch(walletActions.resetWithrawalData())


  }



  console.log(user)

  const accounts = user?.data.bankAccounts?.length === 0 ? <p>GO TO SETTINGS AND ADD A BENEFICIARY!</p> : user?.data.bankAccounts?.map((account) => {
    return <div className={classes['beneficiary-con']} tabIndex="0" onClick={()=>{
      setAccountNo(account.account_number);
      setBankId(account.id)
      setBeneficiaryError('')
    }}>
    <p  className={classes['beneficiary-name']}>
      Name: <span className={classes['beneficiary-span']}>{account.account_name}</span>
    </p>
    <p  className={classes['beneficiary-name']}>
      ACCOUNT NO: <span className={classes['beneficiary-span']}>{account.account_number}</span>
    </p>
 </div>
  })

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
                 
                  
                  autoComplete="off"
                  
            >
              <Form.Item
              name="amount"
              label={<label className={classes['withdraw-label']}  >Amount</label>}

              // rules={[
              //   {
              //     required: true,
              //     message:'Amount is Required!',
                 
                  
              //   },
            
              // ]}
              >
              <Input className={classes['withdraw-input']} placeholder="Enter amount" value={amount} onChange = {(e) => {setAmount(e.target.value); setError('')}} type="number" />
              <p style={{color: 'red'}}>{error}</p>
              </Form.Item>
              <div>
              <div className={classes['withdraw-footer']}>
            <div className={classes['footer-logo']}>
              <FooterLogo />
            </div>
              <button
              onClick={onFinishAmountInput}
              className={classes['modal-1-btn']}>
                 Continue
              </button>
          </div>
              
            </div>
            
            </Form>
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
            {accounts}
            <p style={{color: 'red'}}>{beneficiaryError}</p>
          </div>
          <div className={classes['beneficiary-footer']}>
              {/* <FooterLogo /> */}
              <button className={classes['add-btn']}>
                Add Beneficiary
              </button>
              <button onClick={addBeneficiaryHandler}
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
                  onFinish={transactionPinFinish}
                  
                  autoComplete="off"
            >
              <Form.Item
              name="pin"
              label={<label className={classes['withdraw-label']}>Transaction pin</label>}
              rules={[
                {
                  required: true,
                  message:'Transaction Pin is Required!'
                },
                {len: 4,
                  message:'Input a Valid Transaction Pin!'
                }
              ]}
              >
              <Input className={classes['withdraw-input']} placeholder="Enter transaction pin" type="number" />
              </Form.Item>
              <div className={classes['withdraw-footer']}>
            <div className={classes['footer-logo']}>
              <FooterLogo />
            </div>
            <div>
              <Button 
              loading = {wallet.loading}
              htmlType='submit'
              className={classes['modal-1-btn']}>
                 Continue
              </Button>
            </div>
          </div>
              </Form>
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
             Hello {user.data?.username || user.data?.name} 👋🏽
          </p>
          <div className={classes['success-con']}>
            <p className={classes['success-1']}>
                 Withdrawal Successful
            </p>
            <img src={success} className={classes['success-2']} alt="" />
            <p className={classes['success-3']}>₦{amount}</p>
            <p className={classes['success-4']}>
                has been successfuly sent to your Bank account
            </p>
          </div>
          <div className={classes['withdraw-footer']}>
            <div className={classes['footer-logo']}>
              <FooterLogo />
            </div>
            <div>
              <button onClick={completeTransactionHandler}
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