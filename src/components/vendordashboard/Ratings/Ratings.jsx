import React from 'react'
import ratings from "../../../assets/images/ratings.png"
import './Ratings.css'

function Ratings() {
  return (
    <div className='ratings-wrapper'>
        <img src={ratings} alt="" />
    </div>
  )
}

export default Ratings