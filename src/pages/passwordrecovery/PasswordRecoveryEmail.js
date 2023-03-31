import React, { useState , useRef} from "react"
import mail from "../../assets/images/mail.png"
import footer from "../../assets/images/footerLogo.png"
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { sendResetPasswordLink, verifyEmailToken } from "../../actions/authActions"
import { EmailRounded } from "@mui/icons-material"
import { Button } from "antd"
import swal from "sweetalert"
import { authActions } from "../../reducers/authReducer"

function PasswordRecoveryEmail() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const handleClick = () => {
    navigate("/passwordrecoveryphone")
  }
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const emailRef = useRef();
  const [otp, setOtp] = useState({
    digitOne: "",
    digitTwo: "",
    digitThree: "",
    digitFour: "",
    digitFive: "",
    digitSix: "",
  })
  let code = otp.digitOne + otp.digitTwo + otp.digitThree + otp.digitFour + otp.digitFive + otp.digitSix;

  const handleChange = (event) => {
    const { name, value } = event.target
    setOtp((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  console.log(otp)

  const continueHandler = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    setEmail(emailRef.current.value);
    dispatch(sendResetPasswordLink({email: emailRef.current.value}));
    
  }

  const verifyEmailOtp = () => {
    dispatch(verifyEmailToken(code))
  }
  const renderInput = (keys) => {
    return (
      <div className='w-[26px] h-[26px] border-[1px] p-1 border-[#232164] rounded-[8px]'>
        <input
          className='w-[100%] h-[100%] border-0 outline-none text-[#232164]'
          type='text'
          name={keys}
          onChange={handleChange}
          maxLength='1'
        />
      </div>
    )
  }
console.log(auth.resetPasswordLinkSuccessful)
  if(auth.resetPasswordLinkSuccessful){
    console.log(auth.data)
    swal({
      icon:'success',
      text: auth.data,
    })
    dispatch(authActions.resetPasswordLink())

    setIsLogin(false);
  }
console.log(auth.error)
  if(auth.error){
    console.log(auth.error.response.data.message)
    swal({
      icon:'error',
      text: auth.error.response.data.message,
    })
    dispatch(authActions.resetPasswordLink())

  }


  if(auth.isVerifyEmailTokenSuccessful){
    console.log(auth.data)
    swal({
      icon:'success',
      text: auth.data,
    })
    dispatch(authActions.resetEmailToken())

   navigate(`/updatedpassword/${code}`)
  }
console.log(auth.error)
  if(auth.error){
    console.log(auth.error.response.data.message)
    swal({
      icon:'error',
      text: auth.error.response.data.message,
    })
    dispatch(authActions.resetEmailToken())

  }
  return (
    <div className=''>
      {isLogin ? (
        <div>
          <div className=' h-[100vh] px-4 overflow-y-hidden  '>
            <div className='px-6 mt-5 mb-20 md:mb-3 md:mt-10'>
              <img className='md:w-[164px] w-[100px]' src={logo} alt='' />
            </div>
            <div className='flex items-center justify-center '>
              <form onSubmit={continueHandler}>
              <div className='sm:w-[480px] w-[100%] sm:h-[460px] box-shadow rounded-[20px] flex justify-center items-center font-poppins flex-col'>
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
                      ref={emailRef}
                      className='w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]'
                      type='text'
                    />
                  </div>

                  <div>
                    <button
                      onClick={handleClick}
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

                  <div className=''>
                    <Button
                    
                   htmlType="submit"
                   loading = {auth.loading}
                      // className='w-[300px] h-[38px] bg-primary rounded-[5px] text-[12px] mb-[6px] flex justify-center items-center'
                    >
                      Continue
                    </Button>
                    <div className='flex justify-center items-center'>
                      <h6 className='text-[12px] font-poppins text-[#8E8E8E] text-center pb-10 sm:pb-0'>
                        Remember your password ?
                      </h6>
                      <button className='text-primary text-xs'>Log in</button>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
       <div className="h-[100vh] overflow-y-hidden px-4">
       <div className="px-6 mt-5 mb-20 md:mb-3 md:mt-10">
          <img className='md:w-[164px] w-[100px]' src={logo} alt='' />
          </div>
          <div className='flex justify-center items-center  '>
            <div className='sm:w-[480px] w-[100%] sm:h-[460px] box-shadow rounded-[20px] flex justify-center items-center font-poppins flex-col'>
              <h2 className='text-primary font-semibold  text-[22px] mb-2 pt-10 sm:pt-0 '>
                Password Recovery
              </h2>
              <div>
                <img className='sm:w-[100px] w-[50px]' src={mail} alt='' />
              </div>
              <p className='font-semibold text-[12px] text-black font-poppins mb-2  text-center'>
                Please enter the 6 digit code sent to {email}
              </p>
              <div>
                <h5 className='text-black text-[12px] font-poppins mb-1'>
                  Enter code
                </h5>
                <form>
                  <div className='flex justify-between w-[220px] mb-2'>
                    {Object.keys(otp).map((keys, index) => {
                      return renderInput(keys)
                    })}
                  </div>
                </form>

                <Button
                  loading = {auth.loading}
                  onClick={verifyEmailOtp}
                  className='w-[220px] h-[38px] bg-primary rounded-[5px] text-[12px] mb-[6px] flex justify-center items-center'
                >
                  Continue
                </Button>

                <div className='flex justify-center items-center w-[220px] mt-4 gap-1 pb-6 sm:pb-0'>
                  <h6 className='text-primary text-[12px]'>Secured byy </h6>
                  <img className='w-[60px]' src={footer} alt='' />
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

export default PasswordRecoveryEmail
