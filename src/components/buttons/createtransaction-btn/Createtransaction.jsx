import React from 'react'
import './Createtransaction.css'
import { MdAddCircle } from 'react-icons/md'

const Createtransaction = () => {
  return (
    <div>
        <button className='create-transaction-btn'>Create transaction <MdAddCircle className='create-transaction-icon' /></button>
    </div>
  )
}

export default Createtransaction