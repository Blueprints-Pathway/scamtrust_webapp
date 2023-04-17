import React, { useEffect } from 'react'
import classes from './VendorDashboard.module.css'
import AppLayout from '../../../components/layout/AppLayout'
import VendorMain from '../../../components/vendorDashboard/vendorMain/VendorMain'
import VendorWallet from '../../../components/vendorDashboard/vendorWallet/VendorWallet'
import VendorRatings from '../../../components/vendorDashboard/vendorRatings/VendorRatings'
import VendorTransaction from '../../../components/vendorDashboard/vendorTransactions/VendorTransaction'
import { useDispatch, useSelector } from 'react-redux'
import VendorPopUp from '../../../components/vendorDashboard/vendorPopUp/VendorPopUp'
import { getVendorCancelledTransactions, getVendorCompletedTransactions, getVendorOngoingTransactions, getVendorTransactions } from '../../../actions/vendorTransactionActions'


  

const VendorDashboard = () => {
  let   shouldPopUp = localStorage.getItem('SHOW_MODAL')
  const dispatch  = useDispatch();
  
  useEffect(() => {
    dispatch(getVendorTransactions());
    dispatch(getVendorOngoingTransactions());
    dispatch(getVendorCancelledTransactions());
    dispatch(getVendorCompletedTransactions());

    return () => {
      localStorage.removeItem('SHOW_MODAL')
    };
  }, [])

  return (
    <AppLayout>
        <div className={classes['wrapper']}>
            <div className={classes['left']}>
                <VendorMain/>
                  <VendorTransaction />
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
              <VendorTransaction  />
              <VendorRatings />
            </div>
        </div>
{
  shouldPopUp &&
        <div>
         <VendorPopUp />
        </div>}
        
    </AppLayout>
  )
}

export default VendorDashboard;
