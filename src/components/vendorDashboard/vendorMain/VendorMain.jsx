import React from 'react'
import classes from './VendorMain.module.css'
import star from '../../../assets/images/star.png'
import pin from '../../../assets/images/pin.png'
import trophy from '../../../assets/images/trophy.png'
import { Progress } from 'antd'
import { CgNotes } from 'react-icons/cg'
import { useSelector } from 'react-redux'

const VendorMain = (props) => {
    const {loading, error, data} = useSelector(state => state.user);
  return (
    <div className={classes['wrapper']}>
            <div className={classes['con']}>
                <div className={classes['top-img-con']}>
                    <img className={classes['top-img']} src={star} alt="" />
                </div>
                <div className={classes['title-con']}>
                    <p className={classes['title-1']}>Hello {data.data.name}</p>
                    <p className={classes['title-2']}>Here is what is going on with your business</p>
                </div>

                <div className={classes['content-con']}>

                    <div className={classes['content-left']}>
                        <img className={classes['content-left-img']} src={pin} alt="" />
                        <p className={classes['content-left-text']}>Elite Vendor</p>
                    </div>

                    <div className={classes['content-middle']}>
                        <div className={classes['content-middle-top']}>
                            <p className={classes['content-middle-top-left']}>Progress</p>
                            <p className={classes['content-middle-top-right']}>200 transactions</p>
                        </div>
                        <div className={classes['content-progress-con']}>
                          <Progress className={classes['content-progress']} percent={50} showInfo={false} />
                        </div>
                        <div className={classes['content-middle-bottom']}>
                           <div className={classes['content-middle-bottom-con']}>
                              <CgNotes className={classes['content-middle-bottom-icon']} />
                              <p className={classes['content-middle-bottom-text']}>10 done</p>
                           </div>
                        </div>
                    </div>

                    <div className={classes['content-right']}>
                        <img className={classes['content-right-img']} src={trophy} alt="" />
                    </div>

                </div>
            </div>
    </div>
  )
}

export default VendorMain