import React from 'react';
import classes from './ManagementContainer.module.css'

const ManagementContainer = (props) => {
    return (
        <div className={classes.container} >
               <p className={classes.title} style={{color:`${props.color}`,}}> {props.title} </p>

               <h2 className={classes.amount}>
                 <sup> ₦</sup>
                 {props.amount}
              </h2>
            </div>
    );
};

export default ManagementContainer;