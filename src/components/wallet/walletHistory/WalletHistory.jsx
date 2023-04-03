import React from 'react'
import classes from './WalletHistory.module.css'
import empty from '../../../assets/images/empty.png'
import Credit from '../credit/Credit'
import Debit from '../debit/Debit'

const WalletHistory = () => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['top']}>
            <p className={classes['title']}>Wallet History</p>
        <hr className={classes['hr']} />
        </div>

                   {/* EMPTY HISTORY */}
        {/* <div className={classes['bottom']}>
            <div className={classes['empty-img']}>
                <img className={classes['bottom-img']} src={empty} alt="" />
                <p className={classes['bottom-mssg']}>
                   No recent transaction yet
                </p>
            </div>
        </div> */}

        <div className={classes['history-con']}>
            <Credit />
            <Debit />
        </div>
        
    </div>
  )
}

export default WalletHistory