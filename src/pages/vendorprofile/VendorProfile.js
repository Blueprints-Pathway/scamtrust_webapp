import React from "react";
import Sidebar from "../../components/Sidebar";
import bell from "../../assets/images/bell.png";
import chatus from "../../assets/images/chatus.png";
import classes from "./VendorProfile.module.css";
import trust from "../../assets/images/Trust.png";
import { AiFillCheckCircle, AiFillPhone, AiFillStar } from "react-icons/ai";

import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

function VendorProfile() {
  return (
    <div className={classes["container"]}>
      <Sidebar />

      <div className={classes["profile-container"]}>
        <div>
          <header className={classes["profile-header"]}>
            <h3>Profile</h3>
            <div className={classes["notification"]}>
              <img src={bell} alt="" />
              <div className={classes["profile-abbr"]}>
                <h5>RV</h5>
              </div>
            </div>
          </header>
        </div>
        <div className={classes["profile-board"]}>
          <div className={classes["profile-trust"]}>
            <img src={trust} alt="" />
          </div>
          <div className={classes["vendor-profile"]}>
            <div className={classes["vendor-icon"]}>
              <h4>RC</h4>
            </div>
            <div className={classes["vendor-details"]}>
              <div>
                <h5>Ridic Ventures</h5>
                <h6>ID23232</h6>
              </div>
              
            </div>
            <div className={classes["vendor-info"]}>
              <ul>
                <IconContext.Provider value={{ size: "20px" }}>
                  <li className={classes["vendor-key-cont"]}>
                    <div className={classes["vendor-key"]}>
                      <HiMail />
                      <h6>Email address</h6>
                    </div>
                    <div className={classes["vendor-value"]}>
                      <h6>Ridic@gmail.com</h6>
                    </div>
                  </li>
                  <li className={classes["vendor-key-cont"]}>
                    <div className={classes["vendor-key"]}>
                      <AiFillPhone />
                      <h6>Phone number</h6>
                    </div>
                    <div className={classes["vendor-value"]}>
                      <h6>08156711115</h6>
                    </div>
                  </li>
                  <li className={classes["vendor-key-cont"]}>
                    <div className={classes["vendor-key"]}>
                      <IoLocationSharp />
                      <h6>Office address</h6>
                    </div>
                    <div className={classes["vendor-value"]}>
                      <h6>Ikate, Lekki, Lagos</h6>
                    </div>
                  </li>
                  <li className={classes["vendor-key-cont"]}>
                    <div className={classes["vendor-key"]}>
                      <AiFillCheckCircle />
                      <h6>RN Number</h6>
                    </div>
                    <div className={classes["vendor-value"]}>
                      <h6>Ridic@gmail.com</h6>
                    </div>
                  </li>
                </IconContext.Provider>
              </ul>
            </div>
            <div className={classes["vendor-score"]}>
              <div className={classes["vendor-ratings"]}>
                <ul>
                  <li className={classes["vendor-ratings-key"]}>
                    <h6>Delivery</h6>
                    <div className={classes["ratings"]}>
                      <IconContext.Provider
                        value={{ color: "#FFAA00", size: "20px" }}
                      >
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </IconContext.Provider>
                    </div>
                  </li>
                  <li className={classes["vendor-ratings-key"]}>
                    <h6>Price</h6>
                    <div className={classes["ratings"]}>
                      <IconContext.Provider
                        value={{ color: "#FFAA00", size: "20px" }}
                      >
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </IconContext.Provider>
                    </div>
                  </li>
                  <li className={classes["vendor-ratings-key"]}>
                    <h6>Service</h6>
                    <div className={classes["ratings"]}>
                      <IconContext.Provider
                        value={{ color: "#FFAA00", size: "20px" }}
                      >
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </IconContext.Provider>
                    </div>
                  </li>
                  <li className={classes["vendor-ratings-keyy"]}>
                    <h6>Quantity</h6>
                    <div className={classes["ratings"]}>
                      <IconContext.Provider
                        value={{ color: "#FFAA00", size: "20px" }}
                      >
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </IconContext.Provider>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={classes["score-report"]}>
                <div className={classes["score"]}>
                  <div className={classes["score-value"]}>
                    <h6>Competence Score</h6>
                    <h4>80%</h4>
                  </div>
                  <div className={classes["score-value"]}>
                    <h6>Grade</h6>
                    <h4>A</h4>
                  </div>
                </div>
                <div className={classes["report"]}>
                  <div className={classes["report-icon"]}>
                    <img src={chatus} alt="" />
                  </div>
                  <div className={classes["report-vendor"]}>
                    <h5>Report vendor</h5>
                    <h6>Chat with us</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorProfile;
