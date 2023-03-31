import React from 'react'
import FaqandChat from '../../components/customerdashboard/Faq&Chat/FaqandChat'
import AppLayout from '../../components/Layout/AppLayout'
import MainCard from '../../components/wallet/mainCard/MainCard'
import classes from './Wallet.module.css'

const Wallet = () => {
  return (
    <AppLayout>
        <MainCard />
        <FaqandChat />
    </AppLayout>
  )
}

export default Wallet