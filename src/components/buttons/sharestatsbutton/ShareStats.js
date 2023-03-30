import React from 'react'
import './ShareStats.css'
import { BsFillShareFill} from "react-icons/bs";
function ShareStats() {
  return (
    <div>
         <button className='share-btn flex justify-center items-center gap-1'>Share Stats<span><BsFillShareFill/></span></button>
    </div>
  )
}

export default ShareStats