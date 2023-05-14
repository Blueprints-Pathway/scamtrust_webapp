/** @format */

import React from "react";
import bell from "../../assets/images/bell.png";
import support from "../../assets/images/suppo.svg";
import chatt from "../../assets/images/Chatt.png";
import info from "../../assets/images/Info.svg";
import classes from "../support/Support.module.css";

import footerLogo from "../../assets/images/footerLogo.png";
import AppLayout from "../../components/layout/AppLayout";
function Support() {
  return (
    <AppLayout>
      <div className={classes["support-container"]}>
        <div className={classes["support"]}>
          <div>
            <img src={support} className={classes["support-img"]} alt="" />
          </div>

          <div className={classes["support-text"]}>
            <h4 className={classes["support-header"]}>How can we help you?</h4>
            <p className={classes["support-p"]}>
              Need support? Find out how we can serve you better
            </p>
            <div className={classes["support-menuu"]}>
              <div className={classes["support-menu"]}>
                <a
                  href="https://wa.me/2348169199932"
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={classes["support-chat"]}>
                    <div className={classes["support-chat-box"]}>
                      <div className={classes["support-chat-img"]}>
                        <img className="" src={chatt} alt="" />
                      </div>
                      <div>
                        <h4 className={classes["support-chat-header"]}>Chat</h4>
                        <h5 className={classes["support-chat-p"]}>
                          Start a conversation now
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>

                <div className={classes["support-chat"]}>
                  <div className={classes["support-chat-box"]}>
                    <div className={classes["support-chat-img"]}>
                      <img src={info} alt="" />
                    </div>
                    <div>
                      <h4 className={classes["support-chat-header"]}>FAQs</h4>
                      <h5 className={classes["support-chat-p"]}>
                        Find answers instantly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["support-footer"]}>
          <h5 className={classes["support-footer-h5"]}>Secured by</h5>
          <img className=" " src={footerLogo} alt="" />
        </div>
      </div>
    </AppLayout>
  );
}

export default Support;
