import React, { useState } from 'react'
import classes from './VendorWallet.module.css'
import { Card } from 'antd'
import { RxEyeClosed } from 'react-icons/rx'
import { FaEye } from 'react-icons/fa'
import FooterLogo from '../../FooterLogo/FooterLogo'
import Withdrawbtn from '../../buttons/withdrawbutton/Withdrawbtn'

const VendorWallet = () => {

    const [eye, setEye] = useState(false);

    const handleClick = () => {
        setEye((prevState) => !prevState)
    }

  return (
    <div className={classes['wrapper']}>
        <Card className={classes['con']}>

            <div className={classes['top']}>
                <p className={classes['top-left']}>Wallet</p>
                <div className={classes['top-right']}>
                    <p className={classes['top-right-1']}>Ridic Business Ventures</p>
                    <p className={classes['top-right-2']}>ID - 6057702</p>
                </div>
            </div>

            <hr className={classes['hr']} />

            <div onClick={handleClick}
            className={classes['eye-con']}>
                { eye ? 
                  <FaEye className={classes['eye']} />
                       :
                  <RxEyeClosed className={classes['eye']} />
                }
            </div>

            <div className={classes['balance-con']}>
                <div className={classes['total-con']}>
                    <p className={classes['balance-1']}>Total Balance</p>
                    { eye ? 
                    <p className={classes['amount']}><sup className={classes['sup']}>₦</sup>500,000.00</p>
                          :
                    <p className={classes['amount']}><sup className={classes['sup']}>₦</sup>*******</p>
                    }
                </div>
                <div className={classes['total-con']}>
                    <p className={classes['balance-1']}>Total Balance</p>
                    { eye ? 
                    <p className={classes['amount-2']}><sup className={classes['sup']}>₦</sup>500,000.00</p>
                          :
                    <p className={classes['amount-2']}><sup className={classes['sup']}>₦</sup>*******</p>
                    }
                </div>
            </div>

            <div className={classes['bottom-con']}>
                <div className={classes['bottom-left']}>
                    <FooterLogo />
                </div>
                <div className={classes['bottom-right']}>
                    <Withdrawbtn />
                </div>
            </div>
        </Card>
    </div>
  )
}

export default VendorWallet