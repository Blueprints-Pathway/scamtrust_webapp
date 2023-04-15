import React from 'react'
import classes from './WalletHistory.module.css'
import empty from '../../../assets/images/empty.png'
import Credit from '../credit/Credit'
import Debit from '../debit/Debit'
import { useSelector } from 'react-redux'
import Empty from '../../customerdashboard/CustDashTransaction/empty/Empty'

const WalletHistory = () => {
    const walletTransactions = useSelector(state => state.wallet)
    console.log(walletTransactions.data);
    let content = walletTransactions?.data?.length === 0 ? <div><Empty /></div> : walletTransactions?.data?.map((transaction) => {
        if(transaction.type === "CREDIT"){
            return <Credit date = {transaction.date}  refNo = {transaction.tracking_reference} purpose = {transaction.purpose} amount = {transaction.amount}  />
        }else{
            return <Debit date = {transaction.date}  refNo = {transaction.tracking_reference} purpose = {transaction.purpose} amount = {transaction.amount}  />

        }
    })
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
            {content}
        </div>
        
    </div>
  )
}

export default WalletHistory