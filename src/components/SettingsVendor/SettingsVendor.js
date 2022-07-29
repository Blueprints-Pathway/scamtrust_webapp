import React, { Component, useState, useEffect } from 'react'
import './settingsVendor.css'
import { sideBarItems } from '../SideBar/sideBarItems'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faSearch, faPen } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
import scamTrust from '../../images/shielgg.png'
import scamSheild from '../../images/shielgg3.png'
import shielgg from '../../images/shielgg.png'
import Frame318 from '../../images/Frame318.png'

function SettingsVendor() {
    const handleCheck = () => {
        setChecked(!checked);
    }
    const [checked, setChecked] = useState(false);


    return (
        <>
            <div className='main'>
                <div className={checked ? 'side active' : 'side'}>

                    {/* className={this.state.click ? 'inActive' : '{item.cName}'}> */}

                    <Link to='/Home'>
                        <div className='side-bar-top'>
                            <div className={checked ? 'side-bar-title active' : 'side-bar-title'}>  Scam Trust </div>
                            <img className={checked ? 'side-bar-logo active' : 'side-bar-logo'} src={scamTrust} alt="Scam Trust" />

                        </div>
                    </Link>

                    {sideBarItems.map((item, index) => {
                        return (
                            <div className='sides' key={index}>
                                <Link to={`/${item.link}`} className={checked ? `${item.cName}` : `${item.cNameX}`}>
                                    <div className={checked ? 'side-item active' : 'side-item'}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <h6 className={checked ? 'inActive' : 'Active'}>{item.name}</h6>
                                    </div>
                                </Link>
                                <Link to={`/${item.link2}`} className={checked ? `${item.cName2}` : `${item.cNameX2}`}>
                                    <div className={checked ? 'side-item2 active' : 'side-item2'}>
                                        <FontAwesomeIcon icon={item.icon2} />
                                        <p className={checked ? 'inActive' : 'Active'}>{item.name2}</p>
                                    </div>
                                </Link>

                            </div>
                        )

                    }
                    )}
                    <img className='side-bar-logo-bottom' src={scamSheild} alt="Scam Trust" />

                </div>

                <div className={checked ? 'header active' : 'header'}>
                    <div className="side-icon" onClick={handleCheck}>
                        <FontAwesomeIcon icon={checked ? faArrowRight : faArrowLeft} className="toggle" />
                    </div>
                    <div className="header-title">
                        Settings
                    </div>
                    <div class="search-bar">

                        <input type="search" placeholder="Search vendor’s name" />
                        <FontAwesomeIcon icon={faSearch} className="search" />

                    </div>
                    <div className="Bell">
                        <FontAwesomeIcon icon={faBell} className="bell" />
                        <div className="bellActive"></div>
                    </div>
                    <div clasName="userAbbrevation-wrap">
                        <div className="userAbbrevation enclosed">
                            RV
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <div className={checked ? 'Center active' : 'Center'}>
                    <div className="CenterTop">
                        <img src={shielgg} alt="Scam Trust" />
                    </div>
                </div>

                <div className="CenterBottom">
                    <div className="vendorName">
                        <h1>Ridic Business Ventures</h1>
                    </div>
                    <div className="vendorAction">
                        <p>Edit <FontAwesomeIcon icon={faPen} className="pen" /></p>
                    </div>
                    <div className="CenterImg1">
                        <div className="CenterImg2">
                            <div className="CenterImg">
                                <img className="CenterImage" src={Frame318} alt="Scam Trust" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SettingsVendor