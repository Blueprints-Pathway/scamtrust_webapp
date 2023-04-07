import React from 'react'
import logo from "../../assets/images/logo.png"
import done from "../../assets/images/done.png"
import classes from "./PasswordRecoveryemail.module.css";
function PasswordChanged() {
  return (
    <div>
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
                 <img className={classes["recovery-done"]} src={done} alt="" />
                   

                    <div className={classes["recovery-proceed"]}>
                      <button
                      
                        
                      >
                       Proceed to Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          Password Changed Successfully
    </div>
  )
}

export default PasswordChanged