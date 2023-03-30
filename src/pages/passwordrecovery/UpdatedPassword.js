import React from "react"
import logo from "../../assets/images/logo.png"
import { BiErrorCircle} from "react-icons/bi";
function UpdatedPassword() {
  const [isUpdated, setIsUpdated] = React.useState(true)
  return (
    <div>
      {isUpdated ? (
        <div>
          <div>
            <div className=' h-[100vh] px-4 overflow-y-hidden  '>
              <div className='px-6 mt-5 mb-20 md:mb-3 md:mt-10'>
                <img className='md:w-[164px] w-[100px]' src={logo} alt='' />
              </div>
              <div className='flex items-center justify-center '>
                <div className='sm:w-[480px] w-[100%] sm:h-[460px] box-shadow rounded-[20px] flex justify-center items-center font-poppins flex-col'>
                  <h2 className='text-primary pt-10 sm:pt-0 font-semibold  text-[22px] mb-2'>
                    Password Recovery
                  </h2>
                  <p className='font-normal text-[12px] text-black font-poppins mb-5 text-center px-3 sm:px-0'>
                    Please enter new password differnt from the one previously
                    used
                  </p>
                  <div>
                    <div className='flex flex-col gap-5'>
                      <div>
                        <h5 className='text-black text-[12px] font-poppins mb-1'>
                          Password
                        </h5>

                        <div className='w-[300px] h-[36px] border-[1px] p-1 border-[#D5D8DA] rounded-[5px]'>
                          <input
                            className='w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]'
                            type='text'
                          />
                        </div>
                      </div>
                      <div>
                        <h5 className='text-black text-[12px] font-poppins mb-1'>
                          Confirm password
                        </h5>
                        <div className='w-[300px] h-[36px] border-[1px] p-1 border-[#D5D8DA] rounded-[5px]'>
                          <input
                            className='w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]'
                            type='text'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='mt-7'>
                      <button
                        onClick={() => setIsUpdated(false)}
                        className='w-[300px] h-[38px] bg-primary rounded-[5px] text-[12px] mb-[6px] flex justify-center items-center'
                      >
                        Update password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className=' h-[100vh] px-4 overflow-y-hidden  '>
              <div className='px-6 mt-5 mb-20 md:mb-3 md:mt-10'>
                <img className='md:w-[164px] w-[100px]' src={logo} alt='' />
              </div>
              <div className='flex items-center justify-center '>
                <div className='sm:w-[480px] w-[100%] sm:h-[460px] box-shadow rounded-[20px] flex justify-center items-center font-poppins flex-col'>
                  <h2 className='text-primary pt-10 sm:pt-0 font-semibold  text-[22px] mb-2'>
                    Password Recovery
                  </h2>
                  <p className='font-normal text-[12px] text-black font-poppins mb-5 text-center px-3 sm:px-0'>
                    Please enter new password differnt from the one previously
                    used
                  </p>
                  <div>
                    <div className='flex flex-col gap-5'>
                      <div>
                        <h5 className='text-black text-[12px] font-poppins mb-1'>
                          Password
                        </h5>

                        <div className='w-[300px] h-[36px] border-[1px] p-1 border-[#D5D8DA] rounded-[5px]'>
                          <input
                            className='w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]'
                            type='text'
                          />
                        </div>
                      </div>
                      <div>
                        <h5 className='text-black text-[12px] font-poppins mb-1'>
                          Confirm password
                        </h5>
                        <div className='w-[300px] h-[36px] border-[1px] p-1 border-[#D5D8DA] rounded-[5px]'>
                          <input
                            className='w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]'
                            type='text'
                          />
                        </div>
                      </div>
                    </div>
                    <h6 className='text-[#FC0D1B] text-[10px] mt-1 flex items-center gap-2'>
                     <span><BiErrorCircle/></span> Passwords do not match
                    </h6>
                    <div className='mt-4'>
                      <button className='w-[300px] h-[38px] bg-primary rounded-[5px] text-[12px] mb-[6px] flex justify-center items-center'>
                        Update password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdatedPassword
