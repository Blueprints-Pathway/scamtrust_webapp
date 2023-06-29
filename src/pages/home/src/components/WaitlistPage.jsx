import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaCogs, FaLinkedinIn } from 'react-icons/fa'
import { TiLocationArrow } from 'react-icons/ti'
import { RxInstagramLogo } from 'react-icons/rx'
import { GrFacebookOption } from 'react-icons/gr'
import engineer from '../Assets/engineer.png'
import whiteLogo from '../Assets/whiteLogo.png'
import background from '../Assets/back2.png'

const WaitlistPage = () => {


  return (
    <div className='flex items-center justify-center w-full'>
    <div className='bg-cover bg-center hidden lg:flex lg:flex-col items-center justify-center pt-12 w-[50%] h-[100vh]' style={{backgroundImage: `url(${background})`}}>
        <img className='h-52 xl:h-60'
        src={engineer} alt="..." />
        <h1 className='font-bold text-center text-[25px] lg:text-[#ffff] mt-3 xl:text-[35px]'>
            We are rebuilding to serve <br /> you better.
        </h1>
        <div className='flex items-center justify-center mt-5 w-[80%] xl:mt-8'>
            <p className='text-white text-[13px] xl:text-[17px]'>
               Get secured with scamtrust.
            </p>
            <img className='w-6 ml-3 xl:w-8 xl:ml-5'
            src={whiteLogo} alt="whitelogo" />
        </div>
    </div>
    <div className='flex flex-col items-center justify-center pt-16 pb-5 w-full md:w-[70%] lg:w-[50%]'>
        <div className='flex items-start justify-center w-full mb-8 text-[#232164]'>
            <FaCogs className='h-16 w-full md:h-20 lg:h-16 xl:h-24' />
        </div>
        <div className='flex flex-col items-start justify-center w-[80%] lg:w-[70%] xl:w-[65%]'>
            <h1 className='font-bold text-[21px] mb-2 text-[#333232] md:text-[23px] lg:text-[23px] xl:text-[30px]'>
                Update!!! We are rebuilding Scamtrust
            </h1>
            <p className='text-[16px] font-normal text-[#333232] md:text-[16px] lg:text-[15px] lg:font-normal xl:text-[20px]'>
                Scamtrust is currently being updated for a better user experience, so we had to suspend some operations. <br /> 
                 This means that while you can join our waitlist, you cannot yet create an account. <br />
                 You recieve early access as a member and tasty incentives for creating with us.
            </p>
        </div>
        <div className='w-[80%] mt-10 md:mt-8 lg:w-[70%] xl:w-[65%]'>
            <a href='https://jvabkl456oj.typeform.com/to/CjpLqeeI' target='_blank' rel="noreferrer"
             className='flex items-center justify-center bg-[#232164] h-10 w-full text-center text-[14px] text-white md:h-11 xl:h-14 xl:text-[18px]'>
                Join our waitlist
                <span className='ml-5 text-[28px] xl:text-[30px]'>
                    <TiLocationArrow />
                </span>
            </a>
            <div className='grid place-items-center my-5 text-[14px] lg:text-[13px] xl:text-[17px] xl:mt-10'>
                <p className='text-[#333232]'>follow for more updates</p>
            </div>
            <div className='flex items-center justify-center'>
               <div className='flex items-start justify-between w-[70%] text-[20px] xl:text-[27px]'>
                   <AiOutlineTwitter className='text-[#1C99E6]' />
                   <RxInstagramLogo className='text-[#AF3283]' />
                   <FaLinkedinIn className='text-[#0A66C2]' />
                   <GrFacebookOption className='text-[#1877F2]' />
               </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WaitlistPage