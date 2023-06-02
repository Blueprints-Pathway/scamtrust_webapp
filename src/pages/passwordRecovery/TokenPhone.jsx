/** @format */

import React, { useState } from "react";

import classes from "../passwordRecovery/Password.module.css";
import Logo from "../../assets/images/ScanTrust logo.svg";
import Mail from "../../assets/images/mail.svg";
import InputCode from "./Token";
import { useNavigate, useLocation } from "react-router-dom";
function TokenPhone({ num }) {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState([...Array(6)].map(() => ""));
  const navigate = useNavigate();
  // //console.log(num,"number");
  const location = useLocation();
  const phone = location?.state;

  const newData = code.toString();
  const getData = parseFloat(newData.replace(/,/g, ""));

  const token = () => {
    navigate("/confirmPassword", {
      getDatas: getData,
    });
  };

  return (
    <div className={classes["recovery-container"]}>
      <div className={classes["logo-container"]}>
        <img className={classes["logo"]} alt="logo" src={Logo} />
      </div>
      <div className={classes["recovery-cont"]}>
        <div className={classes["recovery"]}>
          <h2 className={classes["recovery-header"]}>Password Recovery</h2>

          <div className={classes["recovery-img-con"]}>
            <img alt="mail" className={classes["recovery-img"]} src={Mail} />
          </div>
          <p className={classes["recovery-pp"]}>
            Please enter the 6 digit code sent to {phone}
          </p>

          <div>
            <h5 className={classes["code-label"]}>Enter code :</h5>
            <div className={classes["code-input"]}>
              <InputCode
                length={6}
                code={code}
                setCode={setCode}
                label="Code Label"
                loading={loading}
                onComplete={(code) => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 10000);
                }}
              />
            </div>
            <div className={classes["recovery-continuee"]}>
              <button onClick={token}>Confirm</button>
            </div>
            <div className={classes["recovery-footer"]}>
              <h6>Secured byy </h6>
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenPhone;
