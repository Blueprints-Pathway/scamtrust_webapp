import React, { useState } from 'react'
import './SideBar.css'
import { sideBarItems } from './sideBarItems'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
import scamTrust from '../../images/shielgg.png'
import scamSheild from '../../images/shielgg3.png'
import Notification from '../Notification/Notification';

function SideBar () {

  const handleClick = () => {
    setClick(!click);
}
const [click, setClick] = useState(false);

const handleNotification = () => {
    setNotification(!notification);
}
const [notification, setNotification] = useState(true);

    return (
      <div className='main'>
                <div className='side'>

                  

                    <Link to='/Home'>
                        <div className='side-bar-top'>
                            <div className= 'side-bar-title'>  Scam Trust </div>
                            <img className={'side-bar-logo'} src={scamTrust} alt="Scam Trust" />

                        </div>
                    </Link>

                    {sideBarItems.map((item, index) => {
                        return (
                            <div className='sides' key={index}>
                                <Link to={`/${item.link}`} className={`${item.cName}`}>
                                    <center className='side-item'>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <h6 className='Active'>{item.name}</h6>
                                    </center>
                                </Link>
                                <Link to={`/${item.link2}`} className={`${item.cName2}`}>
                                    <center className='side-item2'>
                                        <FontAwesomeIcon icon={item.icon2} />
                                        <p className='Active'>{item.name2}</p>
                                    </center>
                                </Link>

                            </div>
                        )

                    }
                    )}
                    <img className='side-bar-logo-bottom' src={scamSheild} alt="Scam Trust" />

                </div>

                <div className= 'header'>
                   
                    <div className="header-title">
                        Settings
                    </div>
                    <div class="search-bar">

                        <input type="search" placeholder="Search vendor’s name" />
                        <FontAwesomeIcon icon={faSearch} className="search" />

                    </div>
                    <div className="Bell">
                        <FontAwesomeIcon icon={faBell} className="bell"  onClick={handleNotification} />
                        <div className="bellActive"></div>
                    </div>
                    <div clasName="userAbbrevation-wrap">
                        <div className="userAbbrevation enclosed">
                            RV
                        </div>
                    </div>
                </div>
            {notification ? null :

                <Notification

                />}

            </div>

    )
  
}

export default SideBar