import React from 'react'
import classes from './Empty.module.css'
import empty from '../../../../assets/images/empty.png'

const Empty = () => {
  return (
    <div className={classes['wrapper']}>
        <img src={empty} className={classes['empty-img']} alt="" />
        <p className={classes['empty-mssg']}>No recent transaction yet</p>
    </div>
  )
}

export default Empty