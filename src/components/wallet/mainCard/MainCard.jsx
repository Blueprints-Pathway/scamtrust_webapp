import { Card } from 'antd'
import React from 'react'
import classes from './MainCard.module.css'
import { RxEyeClosed } from 'react-icons/rx'
import { FaEye } from 'react-icons/fa'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import Fundbutton from '../../buttons/fundbutton/Fundbutton'
import { MdContentCopy } from 'react-icons/md'
import { useState } from 'react'
import Withdrawbutton from '../../buttons/withdrawbutton/Withdrawbtn'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MainCard = () => {

    let detail = localStorage.getItem('USER_DETAILS')
    let usertype =JSON.parse(detail).data.usertype;

    const {loading, error, data} = useSelector(state => state.user)
    const navigate = useNavigate();

    const [eye, setEye] = useState(false)

    const handleClick = () => {
        setEye((prevState)=> !prevState)
    }

  return (
    <div className={classes['wrapper']}>
        <Card className={classes['main-con']}>
                     {/* HEAD */}
            <div className={classes['head']}>
                <p className={classes['head-1']}>Account</p>
                <p className={classes['head-name']}>{data?.data.name || data?.data.username}</p>
            </div>
                <hr className={classes['line']} />
                      {/* EYE */}
             <div onClick={handleClick}
             className={classes['eye-con']}>
                { eye ? <FaEye className={classes['eye-1']} /> : <RxEyeClosed className={classes['eye-1']} />}
            </div>    
                      {/* BALANCE */}
            <div className={classes['balance-con']}>
                        {/* AVAILABLE */}
                <div className={classes['available-con']}>
                    { eye ? 
                    <p className={classes['available-digits']}>
                        <sup className={classes['available-sup']}>₦</sup>{data.walletBalance.toFixed(2)}
                    </p>   :  
                    <p className={classes['available-digits']}>
                        <sup className={classes['available-sup']}>₦</sup>*******
                    </p>  
                    }
                    <p className={classes['available']}>Available Balance <AiOutlineExclamationCircle className={classes['available-icon']} /></p>
                </div>
                         {/* PENDING */}
                <div className={classes['available-con']}>
                    { eye ? 
                    <p className={classes['pending-digits']}>
                        <sup className={classes['available-sup']}>₦</sup>{ usertype === 'VENDOR' ? data?.incomingWalletBalance.toFixed(2) : data?.outgoingWalletBalance.toFixed(2)}
                    </p>   :
                    <p className={classes['pending-digits']}>
                        <sup className={classes['available-sup']}>₦</sup>*******
                    </p>
                    }
                    <p className={classes['available']}>Outgoing Balance <AiOutlineExclamationCircle className={classes['available-icon']} /></p>
                </div>
            </div>
                          {/* BUTTONS  */}
            <div className={classes['btn-con']}>
                <Withdrawbutton />
                <Fundbutton accountNumber = {data?.virtualAccount?.account_number || 'null'} />
            </div>
                        {/* PRIMARY ACCOUNT */}
            <div className={classes['primary-con']}>
                <p className={classes['primary']}>Primary Account <AiOutlineExclamationCircle className={classes['available-icon']} /></p>
                <p className={classes['primary-copy']}><MdContentCopy className={classes['primary-copy-icon']} />{data?.virtualAccount?.account_number || ''}</p>
            </div>
                         {/* ADD ACCOUNT */}
            <div className={classes['add-account-con']}>
                <div className={classes['add-account-content']}>
                    <p className={classes['add-acc-digits']}><sup className={classes['available-sup']}>₦</sup>{data.withdrawnAmount}
                      <span className={classes['add-acc-mssg']}>Withdrawn so far by <b>{data?.virtualAccount?.account_number || ''}</b></span>
                    </p>
                </div>
                <div className={classes['add-acc-btn-con']}>
                  <button className={classes['add-acc-btn']} onClick = {() => navigate('/settings')}>Add Account</button>
                </div>
            </div>
        </Card> 
    </div>
  )
}

export default MainCard