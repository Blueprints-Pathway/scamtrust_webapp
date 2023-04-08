import React from 'react';
import classes from './Completed.module.css'
import { BsArrowDownRightCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
const CompletedItem = (props) => {
    const navigate = useNavigate();
    return (
         <div onClick={()=> navigate(`/completed-transaction/${props.id}`)}
        className={classes['con']}>
          <div className={classes['wrapper']}>
           <div className={classes['first']}>
           <BsArrowDownRightCircle className={classes['icon']} />
            <div className={classes['item-con']}>
              <p className={classes['item']}>{props.product_name}</p>
              <p className={classes['status']}>Completed</p>
            </div>
          </div>
          <div className={classes['second']}>
            <p className={classes['vendor']}>{props.name}</p>
          </div>
          <div className={classes['third']}>
            <p className={classes['amount']}>₦{props.total_amount}</p>
          </div>
          <div className={classes['four']}>
            <p className={classes['date']}>{props.due_date}</p>
          </div>
        </div>
        </div>
    );
};

export default CompletedItem;