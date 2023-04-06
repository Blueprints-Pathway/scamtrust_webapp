import React from 'react'
import classes from './VendorRatings.module.css'
import { Card } from 'antd'
import { CgShare } from 'react-icons/cg'
import ratings from '../../../assets/images/ratings.png'

const VendorRatings = () => {
  return (
    <div className={classes['wrapper']}>
        <Card className={classes['con']}>
            <div className={classes['top']}>
                <p className={classes['top-left']}>Ratings</p>
                <button className={classes['top-right']}>Share Stats<CgShare className={classes['top-right-icon']} /></button>
            </div>
            <div className={classes['bottom']}>
                <img className={classes['bottom-img']} src={ratings} alt="..." />
            </div>
        </Card>
    </div>
  )
}

export default VendorRatings