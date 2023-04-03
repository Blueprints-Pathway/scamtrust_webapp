import React from 'react'
import FaqandChat from '../../components/customerdashboard/Faq&Chat/FaqandChat'
import AppLayout from '../../components/Layout/AppLayout'
import MainCard from '../../components/wallet/mainCard/MainCard'
import classes from './Wallet.module.css'
import WalletHistory from '../../components/wallet/walletHistory/WalletHistory'

const Wallet = () => {
  return (
    <AppLayout>
      <div>
          <div className={classes['wrapper']}>
            <div className={classes['left']}>
              <MainCard />
              <FaqandChat />
            </div>
            <div className={classes['right']}>
              <WalletHistory />
            </div>
          </div>

          <div className={classes['mobile-screen']}>
            <div className={classes['left']}>
              <MainCard />
              <WalletHistory />
            </div>
            <div className={classes['right']}>
              <FaqandChat />
            </div>
          </div>
      </div>
    </AppLayout>
  )
}

export default Wallet