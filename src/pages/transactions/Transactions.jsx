import React, { useEffect } from 'react'
import classes from './Transactions.module.css'
import { Card, Tabs, Pagination } from 'antd';
import Createtransaction from '../../components/buttons/createtransaction-btn/Createtransaction';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import Outgoing from '../../components/transactions/outgoing/Outgoing';
import Completed from '../../components/transactions/completed/Completed';
import Cancelled from '../../components/transactions/cancelled/Cancelled';
import AllTransaction from '../../components/transactions/all-transactions/AllTransaction';
import AppLayout from '../../components/Layout/AppLayout';
import Layout, { Content } from 'antd/es/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerCancelledTransactions, getCustomerCompletedTransactions, getCustomerOngoingTransactions, getCustomerTransactions } from '../../actions/customerTransactionActions';
import { getVendorCancelledTransactions, getVendorCompletedTransactions, getVendorOngoingTransactions, getVendorTransactions } from '../../actions/vendorTransactionActions';

const Transactions = () => {

  const dispatch  = useDispatch();
 const auth = useSelector(state => state.auth)
console.log((JSON.parse(auth.data).data));
let usertype = JSON.parse(auth.data).data.usertype;
  useEffect(() => {
     if (usertype === 'VENDOR'){
      dispatch(getVendorTransactions());
      dispatch(getVendorOngoingTransactions());
      dispatch(getVendorCancelledTransactions());
      dispatch(getVendorCompletedTransactions ());
     }else{
      dispatch(getCustomerTransactions());
      dispatch(getCustomerOngoingTransactions());
      dispatch(getCustomerCancelledTransactions());
      dispatch(getCustomerCompletedTransactions());

     }

  },[dispatch])

    const onChange = (key) => {
        console.log(key);
      };

      const items = [
        {
          key: '1',
          label:(<p className={classes['tab-1']}>All Transactions</p>),
          children:(<AllTransaction />),
        },
        {
          key: '2',
          label: (<p className={classes['tab-2']}><BsFillArrowUpRightCircleFill className={classes['tab-icon']} />Out-going</p>),
          children: (<div className={classes['content']}><Outgoing /></div>),
        },
        {
          key: '3',
          label: (<p className={classes['tab-2']}><AiFillCheckCircle className={classes['tab-icon2']} />Completed</p>),
          children: (<div className={classes['content']}><Completed /></div>),
        },
        {
          key: '4',
          label: (<p className={classes['tab-4']}><MdCancel className={classes['tab-icon2']} />Cancelled</p>),
          children: (<div className={classes['content']}><Cancelled /></div>),
        },
      ];

  return (
    <AppLayout>
        <div className={['wrapper']}>
              <Card
                centered
               >
                <div className={classes['card-wrapper']}>
                    <div className={classes['transaction-heading']}>
                        <p className={classes['transactions']}>Transactions</p>
                      { usertype === 'CUSTOMER' && <button className={classes['transaction-btn']}>
                         <Createtransaction />
                        </button>}
                    </div>
                    <div className={classes['tabs-container']}>
                    <Tabs
                     defaultActiveKey="1"
                     items={items}
                     centered
                      onChange={onChange} 
                      />
                    </div>
                </div>
                <div className={classes['pagination']}>
                 <Pagination centered className={classes['page-index']}
                  defaultCurrent={1} total={30} />
                </div>
              </Card>
        </div>
       </AppLayout>
  )
}

export default Transactions