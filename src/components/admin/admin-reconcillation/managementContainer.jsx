import React from 'react';
import classes from './ManagementContainer.module.css'

const ManagementContainer = (props) => {
    return (
        <div className={classes.container} >
               <h1 style={{color:`${props.color}`,}}> {props.title} </h1>
               <h2>N{props.amount}</h2>
            </div>
    );
};

export default ManagementContainer;