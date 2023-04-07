import React, { useState } from "react";
import mail from "../../assets/images/mail.png";
import footer from "../../assets/images/footerLogo.png";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import classes from "./PasswordRecoveryemail.module.css";


function PasswordRecoveryPhone() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/passwordrecoveryemail");
  };
  const [isLogin, setIsLogin] = useState(true);
  const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
 
  return (
    <div className=" ">
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
                  Please enter your Phone number to receive verification code
                </p>
                <div>
                  <h5 className={classes["recovery-label"]}>Email Address</h5>
                  <div className={classes["recovery-input"]}>
                    <input className="" type="text" />
                  </div>

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
                      onClick={handleClick}
                    >
                      Use email address
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={classes["recovery-continue-button"]}
                    >
                      Continue
                    </button>
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
                  Please enter the 6 d9igit code sent to 081xxxxxx
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

                  <button
                    onClick={() => setIsLogin(false)}
                    className={classes["recovery-button"]}
                  >
                    Continue
                  </button>

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

export default PasswordRecoveryPhone;
