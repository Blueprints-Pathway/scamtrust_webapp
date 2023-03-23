import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Modal2.module.css'


const Modal2 = ({proceed}) => {
  return (
    <div className={classes['wrapper']}>

        <div className={classes['left']}>
            <div className={classes['row']}>
                <p className={classes['name']}>Vendor ID</p>
                <p className={classes['content']}>ID-60572218</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Product name</p>
                <p className={classes['content']}>Iphone 13</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Product amount</p>
                <p className={classes['content']}>N30,000</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Phone number</p>
                <p className={classes['content']}>N30,000</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Transaction cost</p>
                <p className={classes['content']}>N300</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Due date</p>
                <p className={classes['content']}> 25 - 5 - 2022</p>
            </div>
            <hr />
            <div className={classes['row']}>
                <p className={classes['name']}>Quantity</p>
                <p className={classes['content']}>2</p>
            </div>
            <hr />
               {/* DESCRIPTION */}
            <div className={classes['column']}>
                <p className={classes['name2']}>Description</p>
                <p className={classes['content2']}>One pair of black female corporate heel shoes and one pair of white unbranded sneakers</p>
            </div>
            <hr />
                    {/* TOTAL */}
            <div className={classes['total-con']}>
                <p className={classes['total-name']}>Total</p>
                <p className={classes['price']}>N30,300</p>
            </div>
        </div>

        <div className={classes['right']}>
             <p className={classes['words']}>
                <input className={classes['modal2-input']} type='checkbox' />Terms & conditions
              <Link className={classes['modal2-link']}>Read here</Link></p>
             <button onClick={()=> proceed()}
             className={classes['modal2-btn']}>Confirm</button>
        </div>

    </div>
  )
}

export default Modal2