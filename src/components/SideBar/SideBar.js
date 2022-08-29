import React, { useState } from 'react'
import './SideBar.css'
import { sideBarItems } from './sideBarItems'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark, faSearch, faBarsStaggered, faStar, faHouse, faGear, faArrowRightFromBracket, faUserGroup, faWallet, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from 'react-router-dom';
import scamTrust from '../../images/shielgg.png'
import scamSheild from '../../images/shielgg3.png'
import Notification from '../Notification/Notification';

function SideBar(props) {

    const handleClick = () => {
        setClick(!click);
    }
    const [click, setClick] = useState(false);

    const handleClick2 = () => {
        setClick2(!click2);
    }
    const [click2, setClick2] = useState(false);

    const handleClick3 = () => {
        setClick3(!click3);
    }   
    const [click3, setClick3] = useState(false);
    const handleClick4 = () => {
        setClick4(!click4);
    }
    const [click4, setClick4] = useState(false);
    const handleClick5 = () => {
        setClick5(!click5);
    }
    const [click5, setClick5] = useState(false);

    const handleClick6 = () => {
        setClick6(!click6);
    }
    const [click6, setClick6] = useState(false);

    const handleClick7 = () => {
        setClick7(!click7);
    }
    const [click7, setClick7] = useState(false);

    const handleClick8 = () => {
        setClick8(!click8);
    }
    const [click8, setClick8] = useState(false);
    

    const handleNotification = () => {
        setNotification(!notification);
    }
    const [notification, setNotification] = useState(true);
    
    /* let heading */

    return (
        <aside className='main'>
             {props.children} 
            <div className={click ? 'side active' : 'side'}>



                <NavLink to='/Home'>
                    <div className='side-bar-top'>
                        <div className={click ? 'side-bar-title active' : 'side-bar-title'}>  Scam Trust </div>
                        <img className={click ? 'side-bar-logo active' : 'side-bar-logo'} src={scamTrust} alt="Scam Trust" />

                    </div>
                </NavLink>
                <div className="side-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faXmark : faBarsStaggered} className="Toggle" />
                    </div>

              
                <nav className='sides'>
                    <ul>
                        <li>
                            <div onClick={handleClick2}>
                                <NavLink to="/customer-dashboard" className={click2 ? 'side-link ActiveView' : 'side-link'}>
                                    <center className={click ? 'side-item active' : 'side-item'}>
                                        <FontAwesomeIcon icon={faHouse} />
                                        <h6 className={click ? 'Active active' : 'Active'}>DASHBOARD</h6>
                                    </center>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div onClick={handleClick3}>
                                <NavLink to="/customer-transaction" className={click3 ? 'side-link ActiveView' : 'side-link'}>
                                    <center className={click ? 'side-item active' : 'side-item'}>
                                        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                                        <h6 className={click ? 'Active active' : 'Active'}>TRANSACTIONS</h6>
                                    </center>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                        <div onClick={handleClick4}>
                                <NavLink to="/#" className={click3 ? 'side-link ActiveView' : 'side-link'}>
                                    <center className={click ? 'side-item active' : 'side-item'}>
                                        <FontAwesomeIcon icon={faWallet} />
                                        <h6 className={click ? 'Active active' : 'Active'}>WALLET</h6>
                                    </center>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div onClick={handleClick5}>
                                <NavLink to="/vendor-rating" className={click5 ? 'side-link ActiveView' : 'side-link'}>
                                    <center className={click ? 'side-item active' : 'side-item'}>
                                        <FontAwesomeIcon icon={faStar} />
                                        <h6 className={click ? 'Active active' : 'Active'}>RATINGS</h6>
                                    </center>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div onClick={handleClick6}>
                                <NavLink to="/vendor-settings" className={click6 ? 'side-link ActiveView' : 'side-link'}>
                                    <center className={click ? 'side-item active' : 'side-item'}>
                                        <FontAwesomeIcon icon={faGear} />
                                        <h6 className={click ? 'Active active' : 'Active'}>SETTINGS</h6>
                                    </center>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div onClick={handleClick7}>
                                <NavLink to="/support" className={click7 ? 'side-link2 ActiveView' : 'side-link2'}>
                                    <center className={click ? 'side-item active' : 'side-item'}>
                                        <FontAwesomeIcon icon={faUserGroup} />
                                        <h6 className={click ? 'Active active' : 'Active'}>SUPPORT</h6>
                                    </center>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div onClick={handleClick8}>
                                <NavLink to="/#" className={click8 ? 'side-link2 ActiveView' : 'side-link2'}>
                                    <center className={click ? 'side-item active' : 'side-item'}>
                                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                        <h6 className={click ? 'Active active' : 'Active'}>LOGOUT</h6>
                                    </center>
                                </NavLink>
                            </div>
                        </li>


                    </ul>
                </nav>
                    {/*  <Link to={`/${item.link}`} className={`${item.cName}`}>
                                <center className={click ? 'side-item active' : 'side-item'}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <h6 className={click ? 'Active active' : 'Active'}>{item.name}</h6>
                                </center>
                            </Link> */}
                     {/*  <Link to={`/${item.link2}`} className={`${item.cName2}`}>
                                <center className={click ? 'side-item2 active' : 'side-item2'}>
                                    <FontAwesomeIcon icon={item.icon2} />
                                    <p className={click ? 'Active active' : 'Active'}>{item.name2}</p>
                                </center>
                            </Link> */}
                
                <img className={click ? 'side-bar-logo-bottom active' : 'side-bar-logo-bottom'} src={scamSheild} alt="Scam Trust" />

            </div>

            <nav className={click ? 'header active' : 'header'}>

                <div className={click ? 'header-title active' : "header-title"}>
                    {props.name}
                </div>
                <div class={click ? 'search-bar active' : "search-bar"}>

                    <input type="search" placeholder="Search vendor’s name" />
                    <FontAwesomeIcon icon={faSearch} className="search" />

                </div>
                <div className="Bell">
                    <FontAwesomeIcon icon={faBell} className="bell" onClick={handleNotification} />
                    <div className="bellActive"></div>
                    <div className="notificationPopUp">{notification ? null : <Notification/>}</div>
                    
                </div>
                
                <div clasName="userAbbrevation-wrap">
                    <div className="userAbbrevation enclosed">
                        RV
                    </div>
                </div>
                
            
            </nav>
            
        </aside>

    )

}

export default SideBar