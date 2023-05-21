/** @format */

import React, { useState } from "react";

import classes from "../passwordRecovery/Password.module.css";
import Logo from "../../assets/images/ScanTrust logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
function PasswordEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
  const getEmail = async (e) => {
    e.preventDefault();
    try {
      const API_URL = `${process.env.REACT_APP_BASE_URL}/auth/send/resetlink`;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user_details?.data?.access_token}`,
        },
      };
      const payload = {
        email,
      };

      const data = await axios.post(API_URL, payload, config);
      navigate("/tokenEmail", { state: email });
      console.log(data?.data?.data, "user data");

      // console.log(values, "values");
      // return response;
    } catch (error) {
      console.log(error, "errorss");
    }
  };
  return (
    <div className={classes["recovery-container"]}>
      <div className={classes["logo-container"]}>
        <img className={classes["logo"]} alt="logo" src={Logo} />
      </div>
      <div className={classes["recovery-cont"]}>
        <div className={classes["recovery"]}>
          <h2 className={classes["recovery-header"]}>Password Recovery</h2>

          <p className={classes["recovery-p"]}>
            Please enter your Email Address to receive verification code
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
                <form>
                  <div className={classes["recovery-con"]}>
                    <h5 className={classes["recovery-label"]}>Email Address</h5>
                    <div className={classes["recovery-input"]}>
                      <input
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="email"
                      />
                    </div>
                    <div className={classes["recovery-phone"]}>
                    <Link to="/phoneNumber">Use phone number</Link>
                  </div>
                  <div className={classes["recovery-continue"]}>
                    <button onClick={getEmail}>Continue</button>
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

export default PasswordEmail;
