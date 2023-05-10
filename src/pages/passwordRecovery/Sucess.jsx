import React from "react";
import classes from "../passwordRecovery/Password.module.css";
import Logo from "../../assets/images/ScanTrust logo.svg";
import { useNavigate } from "react-router-dom";
import sucess from "../../assets/images/sucess.svg";
function Sucess() {
  const navigate = useNavigate();

  const confirm = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={classes["recovery-container"]}>
        <div className={classes["logo-container"]}>
          <img className={classes["logo"]} alt="logo" src={Logo} />
        </div>
        <div className={classes["recovery-cont"]}>
          <div className={classes["recovery"]}>
            <h2 className={classes["recovery-header"]}>
              Password Change Sucessful
            </h2>
           

            <div>
			<div className={classes["recovery-img-con"]}>
			<img
                className={classes["recovery-success"]}
                alt="success"
                src={sucess}
              />
			</div>
             
            </div>
            <div className={classes["recovery-con"]}>
              <div className={classes["recovery-continue"]}>
                <button className="" onClick={confirm}>
                  Proceed to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sucess;
