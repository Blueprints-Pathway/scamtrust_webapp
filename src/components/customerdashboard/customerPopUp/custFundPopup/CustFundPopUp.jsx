import React from 'react'
import classes from './CustFundPopup.module.css'
import { Modal } from 'antd';
import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md'
import fund from '../../../../assets/images/withdrawal.png'


const CustFundPopUp = (props) => {
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [copied, setCopied] = useState(false)
  
    const showModal1 = () => {
      setIsModalOpen1(true);
    };
    const handleCancel1 = () => {
      setIsModalOpen1(false);
    };
    
  
    const showModal2 = () => {
      setIsModalOpen2(true);
      setIsModalOpen1(false);
    };
    const handleCancel2 = () => {
      setIsModalOpen2(false);
    };
  
    const handleCopy = () => {
      setCopied(true)
      navigator.clipboard.writeText(props.accountNumber)
    }

  return (
    <div>
           {/* <button onClick={showModal1} 
         className={classes['fund-btn']}>FUND</button> */}

       <div onClick={showModal1} 
        className={classes['card-down']}>
           <img className={classes['card-icon']} src={fund} alt="" />
           <p className={classes['card-words']}>Fund your wallet</p>
        </div>

                   {/* FIRST MODAL */}
         <Modal open={isModalOpen1}
          onCancel={handleCancel1}
          centered 
          okButtonProps={{ style: { display: 'none' } }}
          cancelButtonProps={{style: { display: 'none' }}}
          onCancelprops={{style:{display: 'none'}}}
          width={400}
          bodyStyle={{
            borderRadius: '20px',
        }}
          >
            <div className={classes['wrapper']}>
              <div className={classes['top']}>
                <p className={classes['title']}>Copy or Share Number</p>
                <p className={classes['content']}>
                  Copy or transfer or send to your account number {props.accountNumber} to receive payment from anyone
                </p>
              </div>
              <hr className={classes['line']}/>
              <div className={classes['btn-con']}>
                <p onClick={showModal2}
                className={classes['left-btn']}>Copy</p>
                <p className={classes['right-btn']}>Share</p>
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
          width={400}
          bodyStyle={{
            borderRadius: '25px',
        }}
          >
           <div className={classes['modal2-con']}>
            <div className={classes['modal2-div-1']}>
              <p className={classes['modal2-title']}>Fund your ScamTrust Wallet</p>
              <p className={classes['modal2-bank']}>Bank: WEMA BANK</p>
            </div>
            <div className={classes['modal2-div-2']}>
              <button onClick={handleCopy}
              className={classes['modal2-btn']}>
                <MdContentCopy className={classes['modal2-icon']} />
                   { copied ? 'Copied' : '7820857716' }
                </button>
            </div>
            <div className={classes['modal2-div-3']}>
              <p className={classes['modal2-content']}>
              This works like a regular bank account number. Transferfrom any source to {props.accountNumber}. Select WEMA BANK as the destination bank. Funds will be credited to your ScamTrust account immediately
              </p>
            </div>
           </div>
         </Modal>
    </div>
  )
}

export default CustFundPopUp