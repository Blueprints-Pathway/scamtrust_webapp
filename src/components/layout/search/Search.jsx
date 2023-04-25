import React from 'react'
import { AiFillEye } from "react-icons/ai";
import classes from "./Search.module.css";
import { IconContext } from "react-icons";

const Search = () => {
  return (
    <div>
    <div className={classes["container"]}>
      <h6 className={classes["search-text"]}>Recently searched</h6>
      <hr className={classes["hr"]} />

      <div className={classes["vendor-history"]}>
        <div className={classes["vendor-det"]}>
          <div className={classes["vendor-icon"]}>
            <h6>CO</h6>
          </div>
          <div className={classes["vendor-details"]}>
            <h5>Chukwudi Osinachi</h5>
            <h6>ID - 6057702</h6>
          </div>
        </div>
        <div>
          <IconContext.Provider value={{ color: "#232164", size: "19px" }}>
            <AiFillEye />
          </IconContext.Provider>
        </div>
      </div>

      <div className={classes["vendor-history"]}>
        <div className={classes["vendor-det"]}>
          <div className={classes["vendor-icon"]}>
            <h6>CO</h6>
          </div>
          <div className={classes["vendor-details"]}>
            <h5>Chukwudi Osinachi</h5>
            <h6>ID - 6057702</h6>
          </div>
        </div>
        <div>
          <IconContext.Provider value={{ color: "#232164", size: "19px" }}>
            <AiFillEye />
          </IconContext.Provider>
        </div>
      </div>

      <div className={classes["vendor-history"]}>
        <div className={classes["vendor-det"]}>
          <div className={classes["vendor-icon"]}>
            <h6>CO</h6>
          </div>
          <div className={classes["vendor-details"]}>
            <h5>Chukwudi Osinachi</h5>
            <h6>ID - 6057702</h6>
          </div>
        </div>
        <div>
          <IconContext.Provider value={{ color: "#232164", size: "19px" }}>
            <AiFillEye />
          </IconContext.Provider>
        </div>
      </div>

      <div className={classes["vendor-history"]}>
        <div className={classes["vendor-det"]}>
          <div className={classes["vendor-icon"]}>
            <h6>CO</h6>
          </div>
          <div className={classes["vendor-details"]}>
            <h5>Chukwudi Osinachi</h5>
            <h6>ID - 6057702</h6>
          </div>
        </div>
        <div>
          <IconContext.Provider value={{ color: "#232164", size: "19px" }}>
            <AiFillEye />
          </IconContext.Provider>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Search