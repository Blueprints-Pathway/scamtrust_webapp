import React from "react"
import logo from "../../assets/images/logo.png"
import { BiErrorCircle} from "react-icons/bi";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../actions/authActions";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { Button } from "antd";
import { authActions } from "../../reducers/authReducer";
import classes from "./PasswordRecoveryEmail.module.css";
function UpdatedPassword() {
  const [isUpdated, setIsUpdated] = React.useState(true)
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const dispatch = useDispatch();
  const param = useParams()
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)

  const updatePassword = () => {
    dispatch(resetPassword({
      token: param.token,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value,
    }));


    console.log('update password');
  }


  if(auth.isResetPasswordSuccessful){
    console.log(auth.data)
    swal({
      icon:'success',
      text: auth.data,
    })
    dispatch(authActions.resetPasswordData())

   navigate('/sign-in')
  }
// console.log(auth.error.response.data.status)
  if(auth.error){
    console.log(auth.error.response.data.message)
    swal({
      icon:'error',
      text:  auth?.error?.response?.data?.message?.token[0] || auth?.error?.response?.data?.message?.password[0]  || 'Unsuccessful' 
    })
    dispatch(authActions.resetPasswordData())
    navigate('/sign-in')

  }
  return (
    <div>
      {isUpdated ? (
        <div>
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
                    Please enter new password differnt from the one previously
                    used
                  </p>
                  <div>
                    <div className={classes["recovery-gap"]}>
                      <div>
                        <h5 className={classes["recovery-label"]}>Password</h5>
​
                        <div className={classes["recovery-input"]}>
                          <input
                            className="w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]"
                            type="text"
                            ref={passwordRef}
                          />
                        </div>
                      </div>
                      <div>
                        <h5 className={classes["recovery-label"]}>
                          Confirm password
                        </h5>
                        <div className={classes["recovery-input"]}>
                          <input
                            className="w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]"
                            type="text"
                            ref={confirmPasswordRef}
                          />
                        </div>
                      </div>
                    </div>
​
                    <div className="mt-7">
                      <Button
                        onClick={updatePassword}
                        className={classes["recovery-continue-button"]}
                        loading = {auth.loading}
                      >
                        Update password
                      </Button>
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
                    Please enter new password differnt from the one previously
                    used
                  </p>
                  <div>
                    <div className={classes["recovery-gap"]}>
                      <div>
                        <h5 className={classes["recovery-label"]}>Password</h5>
​
                        <div className={classes["recovery-input"]}>
                          <input
                            className="w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]"
                            type="text"
                            ref={passwordRef}
                          />
                        </div>
                      </div>
                      <div>
                        <h5 className={classes["recovery-label"]}>
                          Confirm password
                        </h5>
                        <div className={classes["recovery-input"]}>
                          <input
                            className="w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]"
                            type="text"
                            ref={confirmPasswordRef}
                          />
                        </div>
                      
                   
                      </div>
                     
                    </div>
​
                    <div className="mt-7">
                      <Button
                        onClick={updatePassword}
                        className={classes["recovery-continue-button"]}
                        loading = {auth.loading}
                      >
                        Update password
                      </Button>
                    </div>
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
export default UpdatedPassword
