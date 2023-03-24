import React from 'react'
import ratings from "../../assets/images/ratings.png" 
import ShareStats from '../buttons/sharestatsbutton/ShareStats'
function VendorRatings() {
  return (
    <div className='flex '>
        <div className='w-[100%] lg:w-[450px] md:w-[358px] sm:w-[307px] ss:w-[250px]  box-1 h-[500px] bg-white rounded-[25px] mt-8 px-6  lg:px-12 pt-7'>
      <div className='flex justify-between items-center'>
      <h3 className='text-sm md:text-lg lg:text-xl text-primary font-bold'>Ratings</h3>
      <ShareStats/>

      </div>
        <div className='mt-10 sm:mt-5'>
        <img className='' src={ratings} alt="" />
        </div>
        </div>
    </div>
  )
}

export default VendorRatings