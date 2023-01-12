import React, { useState } from "react";
import "./password.css";
import Logo from "../images/ScanTrust logo.svg";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
function Confirms() {
  const [passwords, setPasswords] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();
  const sucess = () => {
    navigate("/password-sucess");
  };
  const password = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  return (
    <div className="container-fluid ">
      <div className="m-5">
        <img className="px-5" alt="logo" src={Logo} />
      </div>
      <div className="mx-auto box-border  sm:w-full lg:w-5/12   md:6/12  card p-4 border-2 mt-5 pass  top-20 left-30 right-30 relative">
        <div className="text-center ">
          <h3 className="password-recovery mt-5">Password Recovery</h3>
        </div>

        <div className="text-center confirm-text ">
          <span className="font-popins password-recovery-top ">
            Please enter a new password
          </span>
          <br />
          <span className="confirm-password">
            Your password must be differnt from the previously used password
          </span>
        </div>
        <div className="grid grid-cols-6   gap-4 p-3   ">
          <div className="col-start-2 col-span-4">
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
                  <div className="form-group">
                    <label className="block"> Password</label>
                    <div className="input-group relative">
                      {/* <span className="input-group-text">
												<i className="far fa-eye pointer-events-none  absolute top-1/2 transform -translate-y-1/2 left-5" viewBox="0 0 20 20" fill="currentColor" id="myInput"></i>
											</span> */}

                      <input
                        id="myInput"
                        onChange={(e) => setPasswords(e.target.value)}
                        onBlur={handleBlur}
                        value={passwords}
                        type="password"
                        name="email"
                        className="mt-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="password"
                      />
                      <div className="show-hide">
                        <span className="show" onClick={password}>
                          {" "}
                        </span>
                      </div>
                    </div>
                    {errors.password && touched.password && errors.password}
                  </div>
                  <label className="block mt-5">Confirm Password</label>
                  {/* <span className="input-group-text">
										<i className="far fa-eye" id="myInput"></i>
									</span> */}
                  <input
                    id="myInput"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={handleBlur}
                    value={confirmPassword}
                    type="password"
                    name="email"
                    className="mt-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="confirm password"
                  />
                  <div className="show-hide">
                    <span className="show" onClick={password}>
                      {" "}
                    </span>
                  </div>
                  {errors.password && touched.password && errors.password}

                  <div className="bottom grid justify-items-center mt-4 mb-5	">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      onClick={sucess}
                      style={{ backgroundColor: " #232164" }}
                      className=" mt-5 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
  );
}

export default Confirms;
