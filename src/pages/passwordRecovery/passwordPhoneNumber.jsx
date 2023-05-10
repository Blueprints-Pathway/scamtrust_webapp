/** @format */

import React, { useState } from "react";
import classes from "../passwordRecovery/Password.module.css";
import Logo from "../../assets/images/ScanTrust logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
function PasswordPhoneNumber() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState();
  const confirm = () => {
    navigate("/tokenPhone", { state: phoneNumber });
  };
  return (
    <div className={classes["recovery-container"]}>
      <div className={classes["logo-container"]}>
        <img className={classes["logo"]} src={Logo} alt="logo" />
      </div>
      <div className={classes["recovery-cont"]}>
        <div className={classes["recovery"]}>
          <h2 className={classes["recovery-header"]}>Password Recovery</h2>

          <p className={classes["recovery-p"]}>
            Please enter your Phone Number to receive verification code
          </p>

          <div className={classes["recovery-form"]}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className={classes["recovery-con"]}>
                    <h5 className={classes["recovery-label"]}> Phone Number</h5>
                    <div className={classes["recovery-input"]}>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        type="text"
                        name="phone Number"
                      />
                      {errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber}
                    </div>

                    <div className={classes["recovery-phone"]}>
                      <Link to="/password-recovery">Use Email Address</Link>
                    </div>
                    <div className={classes["recovery-continue"]}>
                      <button onClick={confirm}>Continue</button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>

            <div className={classes["recovery-remember"]}>
              <h5>
                Remember your password ? <span className="Log in">Log in</span>{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordPhoneNumber;
