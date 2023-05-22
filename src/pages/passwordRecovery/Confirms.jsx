/** @format */

import React, { useState } from "react";
import classes from "../passwordRecovery/Password.module.css";
import Logo from "../../assets/images/ScanTrust logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";


function Confirms({ route }) {
  const [passwords, setPasswords] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const token = location?.state;

  const newToken = JSON.stringify(token);
  console.log(newToken, "get");
  const password = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const API_URL = `${process.env.REACT_APP_BASE_URL}/auth/reset/password`;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user_details?.data?.access_token}`,
        },
      };
      const payload = {
        token: newToken,
        password: passwords,
        password_confirmation: confirmPassword,
      };

      const data = await axios.post(API_URL, payload, config);
      navigate("/password-sucess");
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

          <div className={classes["recovery-text-con"]}>
            <p className={classes["recovery-text"]}>
              Please enter a new password
            </p>

            <p className={classes["recovery-text"]}>
              Your password must be differnt from the previously used password
            </p>
          </div>
          <div>
            <div>
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
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
                      <h5 className={classes["recovery-label"]}>Password</h5>
                      <div>
                        {/* <span className="input-group-text">
												<i className="far fa-eye pointer-events-none  absolute top-1/2 transform -translate-y-1/2 left-5" viewBox="0 0 20 20" fill="currentColor" id="myInput"></i>
											</span> */}
                        <div className={classes["recovery-con"]}>
                          <div className={classes["recovery-inputt"]}>
                            <input
                              id="myInput"
                              onChange={(e) => setPasswords(e.target.value)}
                              onBlur={handleBlur}
                              value={passwords}
                              type="password"
                              name="email"
                              placeholder="password"
                            />
                            <div className="show-hide">
                              <span className="show" onClick={password}>
                                {" "}
                              </span>
                            </div>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className={classes["recovery-label"]}>
                      {" "}
                      Confirm Password
                    </h5>
                    {/* <span className="input-group-text">
										<i className="far fa-eye" id="myInput"></i>
									</span> */}
                    <div className={classes["recovery-con"]}>
                      <div className={classes["recovery-inputt"]}>
                        <input
                          id="myInput"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          onBlur={handleBlur}
                          value={confirmPassword}
                          type="password"
                          name="email"
                          placeholder="confirm password"
                        />
                        <div className="show-hide">
                          <span className="show" onClick={password}>
                            {" "}
                          </span>
                        </div>
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                    <div className={classes["recovery-continue"]}>
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        onClick={resetPassword}
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirms;
