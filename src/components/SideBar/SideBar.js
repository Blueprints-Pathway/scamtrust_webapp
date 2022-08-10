import React, { useState } from 'react'
import './SideBar.css'
import { sideBarItems } from './sideBarItems'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
import scamTrust from '../../images/shielgg.png'
import scamSheild from '../../images/shielgg3.png'

function SideBar () {

  const handleClick = () => {
    setClick(!click);
}
const [click, setClick] = useState(false);

    return (
      <div className='main'>
                <div className={click ? 'side active' : 'side'}>

                    {/* className={this.state.click ? 'inActive' : '{item.cName}'}> */}

                    <Link to='/Home'>
                        <div className='side-bar-top'>
                            <div className={click ? 'side-bar-title active' : 'side-bar-title'}>  Scam Trust </div>
                            <img className={click ? 'side-bar-logo active' : 'side-bar-logo'} src={scamTrust} alt="Scam Trust" />

                        </div>
                    </Link>

                    {sideBarItems.map((item, index) => {
                        return (
                            <div className='sides' key={index}>
                                <Link to={`/${item.link}`} className={click ? `${item.cName}` : `${item.cNameX}`}>
                                    <div className={click ? 'side-item active' : 'side-item'}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <h6 className={click ? 'inActive' : 'Active'}>{item.name}</h6>
                                    </div>
                                </Link>
                                <Link to={`/${item.link2}`} className={click ? `${item.cName2}` : `${item.cNameX2}`}>
                                    <div className={click ? 'side-item2 active' : 'side-item2'}>
                                        <FontAwesomeIcon icon={item.icon2} />
                                        <p className={click ? 'inActive' : 'Active'}>{item.name2}</p>
                                    </div>
                                </Link>

                            </div>
                        )

                    }
                    )}
                    <img className='side-bar-logo-bottom' src={scamSheild} alt="Scam Trust" />

                </div>

                <div className={click ? 'header active' : 'header'}>
                    <div className="side-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faArrowRight : faArrowLeft} className="toggle" />
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

    )
  
}

export default SideBar