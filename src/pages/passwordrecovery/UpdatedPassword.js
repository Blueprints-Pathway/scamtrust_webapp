import React from "react";
import logo from "../../assets/images/logo.png";
import { BiErrorCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import classes from "./PasswordRecoveryemail.module.css";
function UpdatedPassword() {
  const [isUpdated, setIsUpdated] = React.useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/passwordchanged");
  };
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

                        <div className={classes["recovery-input"]}>
                          <input
                            className="w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]"
                            type="text"
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
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-7">
                      <button
                        onClick={() => setIsUpdated(false)}
                        className={classes["recovery-continue-button"]}
                      >
                        Update password
                      </button>
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

                        <div className={classes["recovery-input"]}>
                          <input
                            className="w-[100%] h-[100%] border-0 outline-none pl-3  text-[#D5D8DA]"
                            type="text"
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
                          />
                        </div>
                        <h6 className={classes["recovery-error"]}>
                        <span>
                          <BiErrorCircle />
                        </span>{" "}
                        Passwords do not match
                      </h6>
                      </div>
                     
                    </div>

                    <div className="mt-7">
                      <button
                        onClick={() => setIsUpdated(false)}
                        className={classes["recovery-continue-button"]}
                      >
                        Update password
                      </button>
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

export default UpdatedPassword;
