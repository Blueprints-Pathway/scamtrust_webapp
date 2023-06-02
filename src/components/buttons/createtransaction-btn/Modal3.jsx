import React, { useEffect } from 'react'
import classes from './Modal3.module.css'
import success from '../../../assets/images/successful.png'
import vendorImg from '../../../assets/images/vendorImg.png'
import { getVendor } from '../../../actions/miscActions'
import { useDispatch, useSelector } from 'react-redux'
import { getLoggedInUserDetails } from '../../../actions/userActions'
import { Spin } from 'antd'
const Modal3 = ({setModal3Open}) => {
  const {  vendorId,productName,phoneNumber,dueDate,productAmount,quantity,description,} = useSelector(state => state.initiateTransaction);
  const vendorData = useSelector(state => state.misc);
  const dispatch = useDispatch()
  let date;
  let time;
useEffect(() => {
 dispatch(getVendor(vendorId));
  
}, [dispatch, getVendor])
//console.log(vendorData.getVendorLoading)
if(!vendorData.getVendorLoading){
  //console.log(vendorData.data.data.user)
   date = (new Date(vendorData.data.data.created_at).toLocaleDateString('pt-PT'))
   time = (new Date(vendorData.data.data.created_at).toLocaleTimeString('en-US').replace(":+seconds",' '))
  
}


  return (
    <div className={classes['wrapper']}>
      { vendorData.getVendorLoading ? <Spin
       spinning
       size='large'

      />: <React.Fragment><div className={classes['top']}>
            <p className={classes['top-title']}>Transaction Initiation Successful 🎉</p>
            <img className={classes['top-img']} src={success} alt="" />
            <p className={classes['top-words']}>
              A notification has been sent to {vendorData.data.data.user.name}.
              You will be notified once the vendor responds to the request.
            </p>
        </div>

        <p className={classes['recipient']}>Recipient</p>

        <div className={classes['vendor-con']}>
            <div className={classes['vendor-left']}>
                <img className={classes['vendor-img']} src={vendorImg} alt="" />
                <div className={classes['vendor-left-1']}>
                    <p className={classes['vendor-name']}>{vendorData.data.data.user.name}</p>
                    <p className={classes['vendor-id']}>ID-{vendorData.data.data.user.id}</p>
                </div>
            </div>

            <div className={classes['vendor-right']}>
                    <p>{date}</p>
                    <p>{time}</p>
            </div>
        </div>

        <div className={classes['btn-con']}>
            <button onClick={()=>{

              setModal3Open(false);
              dispatch(getLoggedInUserDetails());
            }}
            className={classes['btn']}>Done</button>
        </div></React.Fragment> }
    </div>
  )
}

export default Modal3