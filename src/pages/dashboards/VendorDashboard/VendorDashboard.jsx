import React from 'react'
import classes from './VendorDashboard.module.css'
import AppLayout from '../../../components/Layout/AppLayout'
import VendorMain from '../../../components/vendorDashboard/vendorMain/VendorMain'
import Transactions from '../../transactions/Transactions'
import CustDashTransaction from '../../../components/customerdashboard/CustDashTransaction/CustDashTransaction'
import VendorWallet from '../../../components/vendorDashboard/vendorWallet/VendorWallet'
import VendorRatings from '../../../components/vendorDashboard/vendorRatings/VendorRatings'

const VendorDashboard = () => {
  return (
    <AppLayout>
        <div className={classes['wrapper']}>
            <div className={classes['left']}>
              <VendorMain />
              <CustDashTransaction  />
            </div>
            <div className={classes['right']}>
                <VendorWallet />
                <VendorRatings />
            </div>
        </div>
        <div className={classes['wrapper-2']}>
            <div className={classes['left']}>
              <VendorMain />
                <VendorWallet />
            </div>
            <div className={classes['right']}>
              <CustDashTransaction  />
              <VendorRatings />
            </div>
        </div>
    </AppLayout>
  )
}

export default VendorDashboard