import React, { useState , useRef} from "react"
import mail from "../../assets/images/mail.png"
import footer from "../../assets/images/footerLogo.png"
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { sendResetPasswordLink, verifyEmailToken } from "../../actions/authActions"
import { EmailRounded } from "@mui/icons-material"
import { Button } from "antd"
import classes from "./PasswordRecoveryEmail.module.css";
import swal from "sweetalert"
import { authActions } from "../../reducers/authReducer"


function PasswordRecoveryEmail() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  // const handleClick = () => {
    //   navigate("/passwordrecoveryphone")
    // }
    // const [isLogin, setIsLogin] = useState(true)
    const [otp, setOtp] = useState(new Array(6).fill(""));
  const [email, setEmail] = useState('')
  const emailRef = useRef();
  // const [otp, setOtp] = useState({
  //   digitOne: "",
  //   digitTwo: "",
  //   digitThree: "",
  //   digitFour: "",
  //   digitFive: "",
  //   digitSix: "",
  // })
  let code = otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5];

  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setOtp((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }))
  // }
  console.log(code)
  console.log(otp)


  const handleClick = () => {
    navigate("/passwordrecoveryphone");
  };
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (element, index) => {
     if (isNaN(+element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

      //Focus next input
      if (element.nextSibling) {
          element.nextSibling.focus();
      }
  };

  const continueHandler = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    setEmail(emailRef.current.value);
    dispatch(sendResetPasswordLink({email: emailRef.current.value}));
    
  }

  const verifyEmailOtp = () => {
    navigate(`/update-password/${+code}`)
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

   navigate(`/update-password/${code}`)
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
    <div className="">
      {isLogin ? (
        <div>
          <div className={classes["container"]}>
            <div className={classes["img-container"]}>
              <img src={logo} alt="" />
            </div>
            <div className={classes["recovery-container"]}>
              <div className={classes["recovery"]}>
                <h2 className={classes["recovery-header"]}>
                  Password Recovery
                </h2>
                <p className={classes["recovery-text"]}>
                  Please enter your Email Address to receive verification code
                </p>
                <div>
                  <h5 className={classes["recovery-label"]}>Email Address</h5>
                  <div className={classes["recovery-input"]}>
                    <input className="" type="text" ref={emailRef} />
                  </div>
​
                  <div>
                    <button
                      className={classes["recovery-phone-number"]}
                      style={{
                        border: "none",
                        textDecoration: "underline",
                        color: "#232164",
                        fontFamily: "Poppins",
                        fontSize: "10px",
                      }}
                      onClick={handleClick }
                    >
                      Use phone number
                    </button>
                  </div>
​
                  <div>
                    <Button
                      onClick={continueHandler}
                      className={classes["recovery-continue-button"]}
                      loading = {auth.loading}
                    >
                      Continue
                    </Button>
                    <div className={classes["recovery-remember"]}>
                      <h6 className="">Remember your password ?</h6>
                      <button> Log in</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={classes["container"]}>
            <div className={classes["img-container"]}>
              <img src={logo} alt="" />
            </div>
            <div className={classes["recovery-container"]}>
              <div className={classes["recovery"]}>
                <h2 className={classes["recovery-header"]}>
                  Password Recovery
                </h2>
                <div className={classes["recover-code"]}>
                  <img src={mail} alt="" />
                </div>
                <p className={classes["recovery-code-text"]}>
                  Please enter the 6 d9igit code sent to folaade@gmail
                </p>
                <div>
                  <h5 className={classes["recovery-label"]}>Enter code</h5>
                  <form className={classes['recovery-form']}>
                  {otp.map((data, index) => {
                     return(
                   
                      <input
                        className={classes['otp-input']}
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()}
                      />
               
                     )
                      })}
                   
                  </form>

                  <Button
                    onClick={verifyEmailOtp}
                    className={classes["recovery-button"]}
                  >
                    Continue
                  </Button>
                  <div className={classes["recovery-secured"]}>
                    <h6>Secured byy </h6>
                    <img src={footer} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordRecoveryEmail
