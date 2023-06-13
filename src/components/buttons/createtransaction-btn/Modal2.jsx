import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classes from './Modal2.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { createTransaction } from '../../../actions/customerTransactionActions';
import { customerTransactionActions } from '../../../reducers/customerTransactionsReducer'
import { getLoggedInUserDetails } from '../../../actions/userActions'
const Modal2 = ({proceed}) => {
    const {  vendorId,productName,phoneNumber,dueDate,productAmount,quantity,description,} = useSelector(state => state.initiateTransaction);
    const transaction = useSelector(state => state.customerTransaction);
    const dispatch =  useDispatch();

    useEffect(()=>{
        if(transaction.isCreateTransactionSuccessful){
            dispatch(customerTransactionActions.resetTransaction());
           
            proceed();

        }
    },[transaction.isCreateTransactionSuccessful])

const onClickHandler = () => {

       
        dispatch(createTransaction(
          {
            vendor_id: vendorId,
            product_name: productName,
            quantity: quantity,
            due_date: dueDate,
            phone: phoneNumber,
            description: description,
            amount: productAmount,
          }
        ));
}
console.log(transaction.error);
let errorText = transaction.error && <p style={{color:'red'}}>{`${transaction.error}!`}</p>
return (
    <div className={classes['wrapper']}>

        <div className={classes['left']}>
            <div className={classes['row']}>
                <p className={classes['name']}>Vendor ID</p>
                <p className={classes['content']}>{vendorId}</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Product name</p>
                <p className={classes['content']}>{productName}</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Product amount</p>
                <p className={classes['content']}>{productAmount}</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Phone number</p>
                <p className={classes['content']}>{phoneNumber}</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Transaction cost</p>
                <p className={classes['content']}>N{+quantity * +productAmount}</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Due date</p>
                <p className={classes['content']}> {dueDate}</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Quantity</p>
                <p className={classes['content']}>{quantity}</p>
            </div>
            <hr />
               {/* DESCRIPTION */}
            <div className={classes['column']}>
                <p className={classes['name2']}>Description</p>
                <p className={classes['content2']}>{description}</p>
            </div>
            <hr />
                    {/* TOTAL */}
            <div className={classes['total-con']}>
                <p className={classes['total-name']}>Total</p>
                <p className={classes['price']}>N{+quantity * +productAmount}</p>
            </div>
        </div>
        {errorText}
        <div className={classes['right']}>
             <p className={classes['words']}>
                <input className={classes['modal2-input']} type='checkbox' />Terms & conditions
              <Link className={classes['modal2-link']}>Read here</Link></p>
             <Button loading = {transaction.loading} onClick={onClickHandler}
             className={classes['modal2-btn']}>Confirm</Button>
        </div>

    </div>
  )
}

export default Modal2