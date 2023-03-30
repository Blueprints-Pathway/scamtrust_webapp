import React, { useState } from "react"
import transfer from "../../assets/images/transfer.png"
import footer from "../../assets/images/footerLogo.png"
function PasswordRecovery() {
  const [isLogin, setIsLogin] = useState(true)
  const [otp, setOtp] = useState({
    digitOne: "",
    digitTwo: "",
    digitThree: "",
    digitFour: "",
    digitFive: "",
    digitSix: "",
  })
  const handleChange = (event) => {
    const { name, value } = event.target
    setOtp((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  console.log(otp)
  const renderInput = (keys) => {
    return  (
      <div className='w-[26px] h-[26px] border-[1px] p-1 border-[#232164] rounded-[8px]'>
        <input
          className='w-[100%] h-[100%] border-0 outline-none    text-[#232164]'
          type='text'
          name={keys}
          onChange={handleChange}
          maxLength="1"
        />
      </div>
    )
  }
  return (
    <div className=''>
      {isLogin ? (
        <div>
          <div className='flex justify-center items-center h-[100vh] px-4  '>
            <div className='sm:w-[460px] w-[100%] sm:h-[420px] box-shadow rounded-[20px] flex justify-center items-center font-poppins flex-col'>
              <h2 className='text-primary pt-10 sm:pt-0 font-semibold  text-[22px] mb-2'>
                Password Recovery
              </h2>
              <p className='font-normal text-[12px] text-black font-poppins mb-5 text-center px-3 sm:px-0'>
                Please enter your Email Address to receive verification code
              </p>
              <div>
                <h5 className='text-black text-[12px] font-poppins mb-1'>
                  Email Address{" "}
                </h5>
                <div className='w-[300px] h-[36px] border-[1px] p-1 border-[#D5D8DA] rounded-[5px]'>
                  <input
                    className='w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]'
                    type='text'
                  />
                </div>

                <div>
                  <button
                    className='mb-3'
                    style={{
                      border: "none",
                      textDecoration: "underline",
                      color: "#232164",
                      fontFamily: "Poppins",
                      fontSize: "10px",
                    }}
                  >
                    Use Phone number
                  </button>
                </div>

                <button
                  onClick={() => setIsLogin(false)}
                  className='w-[300px] h-[38px] bg-primary rounded-[5px] text-[12px] mb-[6px]'
                >
                  Continue
                </button>

                <h6 className='text-[12px] font-poppins text-[#8E8E8E] text-center pb-10 sm:pb-0'>
                  Remember your password ?
                  <button className='text-primary'>Log in</button>
                </h6>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='flex justify-center items-center h-[100vh] px-4 '>
            <div className='sm:w-[460px] w-[100%] sm:h-[420px] box-shadow rounded-[20px] flex justify-center items-center font-poppins flex-col'>
              <h2 className='text-primary font-semibold  text-[22px] mb-2 pt-10 sm:pt-0 '>
                Password Recovery
              </h2>
              <div>
                <img className='w-[100px]' src={transfer} alt='' />
              </div>
              <p className='font-semibold text-[12px] text-black font-poppins mb-5'>
                Please enter the 6 digit code sent to folaade@gmail
              </p>
              <div>
                <h5 className='text-black text-[12px] font-poppins mb-1'>
                  Enter code
                </h5>
                <form>
                  <div className='flex justify-between w-[220px] mb-4'>
                    {Object.keys(otp).map((keys, index) => {
                      return renderInput(keys)
                    })}
                  </div>
                </form>

                <button
                  onClick={() => setIsLogin(false)}
                  className='w-[220px] h-[38px] bg-primary rounded-[5px] text-[12px] mb-[6px]'
                >
                  Continue
                </button>

                <div className="flex items-center gap-1 pb-10 sm:pb-0">
                  <h6 className="text-primary text-[12px]">Secured byy </h6>
                  <img src={footer} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PasswordRecovery
