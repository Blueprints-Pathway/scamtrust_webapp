import React, { useEffect, useState } from 'react'
import Vendormessage from '../../components/sign-up/vendormessage/VendorMessage'
import './Signin.css'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import scamtrust from '../../assets/images/logo.png'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, } from 'react-router-dom';
import { login, logoutUser, logoutUserTimer } from '../../actions/authActions';
import { getCustomerCancelledTransactions, getCustomerCompletedTransactions, getCustomerOngoingTransactions, getCustomerTransactions } from '../../actions/customerTransactionActions';

import Modal from 'react-modal';
import wave from '../../assets/images/wave.png'
import frame from '../../assets/images/frame.png'
import { Analytics, LogoutTwoTone } from '@mui/icons-material';
import { getLoggedInUserDetails } from '../../actions/userActions';
import { getWalletTransactionsDetails } from '../../actions/walletActions';
import { listNotifications } from '../../actions/notificationActions';
import { getVendorCancelledTransactions, getVendorCompletedTransactions, getVendorOngoingTransactions, getVendorTransactions } from '../../actions/vendorTransactionActions';
import Navbar from '../home/src/components/Navbar/Navbar';

const customStyles = {
  // overlay: {
  //   backgroundColor: "black",
  //   opacity: '0.8'
  // },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    backgroundColor: 'white',
    // backgroundColor: "black",
    // opacity: '0.8',
    padding: '0px',
  },
};

const Signin = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isChecked, setCheck] = useState(false);
  
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }



  const {loading, isAuthenticated, data, error} = useSelector(state => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();




  const loginHandler = (e)  =>  {
    dispatch(login(JSON.stringify(e)));
  }


  useEffect(() => {
    if(localStorage.getItem('sign-up')){
      openModal();
      localStorage.removeItem('sign-up')
    }
    if(isAuthenticated){

      if (data?.usertype === 'VENDOR'){
        dispatch(getVendorTransactions());
        dispatch(getVendorOngoingTransactions());
        dispatch(getVendorCancelledTransactions());
        dispatch(getVendorCompletedTransactions());
       }else if(data?.usertype === 'CUSTOMER'){
        dispatch(getCustomerTransactions());
        dispatch(getCustomerOngoingTransactions());
        dispatch(getCustomerCancelledTransactions());
        dispatch(getCustomerCompletedTransactions());
  
       }else{
        //admin
       }
      dispatch(getLoggedInUserDetails());
      dispatch(getWalletTransactionsDetails())
  
      dispatch(listNotifications());
        // //console.log(data);
        dispatch(logoutUserTimer())
      if(data?.usertype === 'CUSTOMER'){
        navigate('/customer-dashboard');

      }
      if(data?.usertype === 'VENDOR'){
        navigate('/vendor-dashboard');

      }
      if(data?.usertype === 'ADMIN'){
        navigate('/admin-dashboard');

      }
    

    }
  }, [isAuthenticated, data, navigate, dispatch])
  let errorText  = error && <p style={{color:'red'}}>{error+ '!'}</p>
 
  return (
    <div className='sign-in-con'>
      <div className='sign-in-left'>
        <div className='sign-logo-con'>
          <img style={{width: '125px'}} src={scamtrust} alt="" />
        </div>
        <Vendormessage className='sign-vendor-message' />
      </div>

      <div>
      <div className='sign-logo-con-right'>
          <img style={{width: '100px'}} src={scamtrust} alt="" />
        </div>
      <div className='sign-in-right'>
        <div className='sign-title-con'>
          <p>Welcome Back </p>
        </div>

        <Form 
        onFinish={loginHandler}
             name="basic"
             labelCol={{
               span: 8,
             }}
             wrapperCol={{
               span: 16,
             }}
             style={{
               maxWidth: 600,
             }}
             initialValues={{
               remember: true,
             }}
        >

                     {/* USERNAME */}
          <Form.Item name="email" required
           rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
          >
            <Input className='sign-in-input' placeholder='Email Address'/>
          </Form.Item>

                 {/* PASSWORD */}
          <Form.Item
             name="password"
             rules={[
              {
                  min: 8,
                  message: 'Password must be at least 8 characters'
              },
               {
                 required: true,                
                 message: 'Please input your password!',
               },
             ]}
          >
      <Input.Password className='sign-in-input'  placeholder='Password' />
    </Form.Item>

                 {/* CHECKBOX */}
         <div className='sign-in-check-div'>
           <Checkbox onChange={(e) => {
            setCheck(e.target.checked);
            
           }}  className='sign-check-words'>Remember me</Checkbox>
           <p onClick={()=>{navigate('/password-recovery')}}
            className='sign-check-words'>Forgot Password? </p>
         </div>

                {/* SUBMIT BUTTON */}
         <div className='sign-btn-con'>
         <Button loading = {loading} className='sign-in-btn' htmlType="submit">
              Continue
         </Button>

        
         </div>
        {errorText}
        
        </Form>
   
                   {/* CREATE ACCOUNT */}
        <div className='sign-create-account'>
          <i>Don’t have an account? 
            <i onClick={openModal}
            className='sign-in-link'> Create</i>
            </i>
        </div>

      </div>
      </div>

                   {/* SIGN UP MODAL */}
      <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlay= "customOverlay"
        modal= "customModal"
      >
        <div className='modal-div'>
          <p className='modal-title'>Welcome to ScamTrust
          <span><img className='modal-wave' src={wave} alt="" /></span></p>
          <div className='modal-frame-con'>
             <div onClick={()=>{navigate('/vendor-registration')}}
             className='modal-div-1'>
               <img onClick={()=>{navigate('/vendor-registration')}}
               className='modal-img-1' src={frame} alt="" />
               <div className='modal-words-con-1'>
                 <p className='modal-word-1'>Vendor</p>
                 <p className='modal-word-2'>Get a risk-free payment for almost any product or service.</p>
               </div>
             </div>
             <div onClick={()=>{navigate('/customer-registration')}}
             className='modal-div-2'>
               <img 
               className='modal-img-2' src={frame} alt="" />
               <div className='modal-words-con-2'>
                 <p className='modal-word-1'>Customer</p>
                 <p className='modal-word-2'>Verify and enjoy transaction transparency before product delivery.</p>
               </div>
             </div>
             </div>
        </div>
        
      </Modal>
      </div>
    </div>
  )
}

export default Signin

