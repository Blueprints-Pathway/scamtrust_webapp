import React, { Component, useState, useEffect } from 'react'
import './DashBoard.css'
import { sideBarItems } from '../SideBar/sideBarItems'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faSearch, faThumbTack, faBook, faShareNodes, faEye, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
//import { faMemo } from "@fortawesome/free-brand-svg-icons";
import { Link } from 'react-router-dom';
import scamTrust from '../../images/shielgg.png'
import scamSheild from '../../images/shielgg3.png'
import trophy2 from '../../images/trophy2 (3).png'
import trophy from '../../images/trophy2 (1).png'
import scamTrustLogo from '../../images/Group114(1).png'
import Chart from 'react-apexcharts'

class DashBoard extends Component {

  state = { click: true, close: true }
  
  Click = () => {
    this.setState({ click: !this.state.click })
  }
  /* handleCheck2 = e => {
    this.setState({ click: !this.state.click })
} */
  Closed = () => {
    this.setState({ close: !this.state.close })
  }



  /*  see = { click: true }
   Click = () => {
     this.setSee({ click: !this.see.click })
   } */
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#39C86A'],

        chart: {
          id: "basic-bar",
          background: "transparent",
          foreground: "#FF9300",
          toolbar: { show: false },
        },
        xaxis: {
          categories: ['', 'Quality', 'Delivery', '', 'Price', 'Service']
        }
      },
      series: [
        {
          name: "series-1",
          data: [2, 4, 4, 2, 4, 4]
        }
      ]
    };
    
  }


  render() {

    return (
      <div className='main'>
        <div className={this.state.click ? 'side active' : 'side'}>

          {/* className={this.state.click ? 'inActive' : '{item.cName}'}> */}

          <Link to='/Home'>
            <div className='side-bar-top'>
              <div className={this.state.click ? 'side-bar-title active' : 'side-bar-title'}>  Scam Trust </div>
              <img className={this.state.click ? 'side-bar-logo active' : 'side-bar-logo'} src={scamTrust} alt="Scam Trust" />

            </div>
          </Link>

          {sideBarItems.map((item, index) => {
            return (
              <div className='sides' key={index}>
                <Link to={`/${item.link}`} className={this.state.click ? `${item.cName}` : `${item.cNameX}`}>
                  <div className={this.state.click ? 'side-item active' : 'side-item'}>
                    <FontAwesomeIcon icon={item.icon} />
                    <h6 className={this.state.click ? 'inActive' : 'Active'}>{item.name}</h6>
                  </div>
                </Link>
                <Link to={`/${item.link2}`} className={this.state.click ? `${item.cName2}` : `${item.cNameX2}`}>
                  <div className={this.state.click ? 'side-item2 active' : 'side-item2'}>
                    <FontAwesomeIcon icon={item.icon2} />
                    <p className={this.state.click ? 'inActive' : 'Active'}>{item.name2}</p>
                  </div>
                </Link>

              </div>
            )

          }
          )}
          <img className='side-bar-logo-bottom' src={scamSheild} alt="Scam Trust" />

        </div>

        <div className={this.state.click ? 'header active' : 'header'}>
          <div className="side-icon" onClick={this.Click}>
            <FontAwesomeIcon icon={this.state.click ? faArrowRight : faArrowLeft} className="toggle" />
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

        <main>
          <div className={this.state.click ? 'container center active' : 'container center'}>

            <div className='left'>
              <div className='left-top-card'>
                <div className='vendor-trophy'>
                  <img className='vendor-trophy-img' src={trophy2} alt="Scam Trust" />
                </div>
                <div className='vendor-name'>
                  Hello Ridic Ventures
                </div>
                <small className='vendor-description'>
                  Here is what is going on with your business
                </small>
                <div className='left-top-card1'>
                  <FontAwesomeIcon icon={faThumbTack} className="pin" />
                  <div className='left-top-card1-text'>
                    <h1 className='card1-text'> Elite <br /> Vendor</h1>
                    <div className='card1-title'>
                      <p className='progress-text-left'>
                        Ratings
                      </p>
                      <p className={this.state.click ? 'progress-text-right' : 'progress-text-right active'}>
                        200 transactions
                      </p>
                    </div>
                    <div className='progress-bar'>
                      <div className='progress'></div>
                    </div>

                    <img className='vendor-trophyCup-img' src={trophy} alt="Scam Trust" />
                    <div className='left-top-card2'>
                      <FontAwesomeIcon icon={faBook} className="book" />
                      10 done
                    </div>
                  </div>


                </div>
              </div>
              <div className='left-bottom-card'>
                <div className="transactions">
                  <div className="heading">
                    <h4>Transaction</h4>
                  </div>

                  <div className="category">
                    <h6 className="active">All</h6>
                    <h6>Outgoing</h6>
                    <h6>Cancelled</h6>
                    <h6>Completed</h6>
                  </div>
                  <div className="sub-category">
                    <h6>Transactions</h6>
                    <h6>vendor’s Name</h6>
                    <h6>Amount</h6>
                    <h6>Date</h6>
                  </div>

                  <div className="Transaction">

                    <div className="Transaction-body">
                      <div className="Transaction-body-profile">
                        <img className='trophyCup-img' src={trophy} alt="Scam Trust" />
                        <div>
                          <h5 className="Transaction-details">Awaiting approval</h5>
                          <p className="Transaction-description">Awaiting approval</p>
                        </div>
                      </div>
                    </div>
                    <div className="Transaction-details name">
                      <h5>Ridic Ventures</h5>
                    </div>
                    <div className="Transaction-details Amount">
                      <h5>250,000.00</h5>
                    </div>
                    <div className="Transaction-details date">
                      <h5>25th May, 2022</h5>
                    </div>

                  </div>
                  <div className="Transaction">

                    <div className="Transaction-body">
                      <div className="Transaction-body-profile">
                        <img className='trophyCup-img' src={trophy} alt="Scam Trust" />
                        <div>
                          <h5 className="Transaction-details">Awaiting approval</h5>
                          <p className="Transaction-description">Awaiting approval</p>
                        </div>
                      </div>
                    </div>
                    <div className="Transaction-details name">
                      <h5>Ridic Ventures</h5>
                    </div>
                    <div className="Transaction-details Amount">
                      <h5>250,000.00</h5>
                    </div>
                    <div className="Transaction-details date">
                      <h5>25th May, 2022</h5>
                    </div>

                  </div>
                  <div className="Transaction">

                    <div className="Transaction-body">
                      <div className="Transaction-body-profile">
                        <img className='trophyCup-img' src={trophy} alt="Scam Trust" />
                        <div>
                          <h5 className="Transaction-details">Awaiting approval</h5>
                          <p className="Transaction-description">Awaiting approval</p>
                        </div>
                      </div>
                    </div>
                    <div className="Transaction-details name">
                      <h5>Ridic Ventures</h5>
                    </div>
                    <div className="Transaction-details Amount">
                      <h5>250,000.00</h5>
                    </div>
                    <div className="Transaction-details date">
                      <h5>25th May, 2022</h5>
                    </div>

                  </div>
                  <div className="Transaction">

                    <div className="Transaction-body">
                      <div className="Transaction-body-profile">
                        <img className='trophyCup-img' src={trophy} alt="Scam Trust" />
                        <div>
                          <h5 className="Transaction-details">Awaiting approval</h5>
                          <p className="Transaction-description">Awaiting approval</p>
                        </div>
                      </div>
                    </div>
                    <div className="Transaction-details name">
                      <h5>Ridic Ventures</h5>
                    </div>
                    <div className="Transaction-details Amount">
                      <h5>250,000.00</h5>
                    </div>
                    <div className="Transaction-details date">
                      <h5>25th May, 2022</h5>
                    </div>

                  </div>
                  <div className="Transaction">

                    <div className="Transaction-body">
                      <div className="Transaction-body-profile">
                        <img className='trophyCup-img' src={trophy} alt="Scam Trust" />
                        <div>
                          <h5 className="Transaction-details">Awaiting approval</h5>
                          <p className="Transaction-description">Awaiting approval</p>
                        </div>
                      </div>
                    </div>
                    <div className="Transaction-details name">
                      <h5>Ridic Ventures</h5>
                    </div>
                    <div className="Transaction-details Amount">
                      <h5>250,000.00</h5>
                    </div>
                    <div className="Transaction-details date">
                      <h5>25th May, 2022</h5>
                    </div>

                  </div>
                  <div className="Transaction">

                    <div className="Transaction-body">
                      <div className="Transaction-body-profile">
                        <img className='trophyCup-img' src={trophy} alt="Scam Trust" />
                        <div>
                          <h5 className="Transaction-details">Awaiting approval</h5>
                          <p className="Transaction-description">Awaiting approval</p>
                        </div>
                      </div>
                    </div>
                    <div className="Transaction-details name">
                      <h5>Ridic Ventures</h5>
                    </div>
                    <div className="Transaction-details Amount">
                      <h5>250,000.00</h5>
                    </div>
                    <div className="Transaction-details date">
                      <h5>25th May, 2022</h5>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div className='right'>
              <div className='right-top-card'>
                <div className='card2-title'>
                  <p className='card2-text-left'>
                    Wallet
                  </p>
                  <p className={this.state.click ? 'card2-text-right' : 'card2-text-right active'}>
                    Ridic Business Ventures
                    <h5 className='card2-text-right2'>
                      ID - 6057702

                    </h5>
                    <div className={this.state.click ? 'Line' : 'Line active'}></div>
                  </p>
                </div>
                <FontAwesomeIcon className={this.state.click ? 'eyeIconWallet active no' : 'eyeIconWallet no'} icon={faEye} />
                <div className='Wallet-card'>
                  <div className='Wallet-card-left'>
                    <div className='Wallet-card-left-top'>
                      <div className='Wallet-card-left-top-left'>
                        <div className='Wallet-card-left-top-left-text'>
                          <p className='Wallet-card-left-top-left-text-text'>
                            Total Balance
                          </p>
                          <p className='Wallet-card-left-top-left-text-text2'>
                            $500,000.00
                          </p>
                        </div>
                      </div>
                      <div className={this.state.click ? 'Wallet-card-left-top-right active' : 'Wallet-card-left-top-right'}>
                        <div className='Wallet-card-left-top-right-text'>
                          <p className='Wallet-card-left-top-right-text-text'>
                            Incoming Balance
                          </p>
                          <p className='Wallet-card-left-top-right-text-text2'>
                            $250,000.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='Wallet-card-left-bottom'>
                      <div className='Wallet-card-left-bottom-left'>
                        <div className='Secured'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                      </div>
                      <div className='Wallet-card-left-bottom-right'>
                        <p className={this.state.click ? 'Withdraw active' : 'Withdraw'}>
                          WITHDRAWAL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right-bottom-card'>
                <div className='card1-title'>
                  <p className='Chart-text-left'>
                    Ratings
                  </p>
                  <p className={this.state.click ? 'Chart-text-right' : 'Chart-text-right active'}>
                    Share Stats <FontAwesomeIcon icon={faShareNodes} className="share" />
                  </p>
                </div>
                <div className="row">
                  <div className={this.state.click ? 'Rate3' : 'Rate3 active'}>
                    <div className='Rate2'>
                      <div className='Rate1'>
                        <p>A</p> <p className='Rate1Up'>+</p>
                      </div>
                    </div>
                  </div>

                  <div className={this.state.click ? "mixed-chart" : "mixed-chart active"}>
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="radar"
                      width="350"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
        <div className={this.state.close ? "welcome active" : "welcome"}>
          <div className='welcome-card'>
            <div className='welcome-message'>
              Welcome to ScamTrust!
            </div>
            <small className='welcome-description'>
              Get secuired by ScamTrust
            </small>
            <div className="action-card-title">
              <h5>Get Started</h5>
            </div>
            <div className='welcome-cards'>
              <div className='action-card'>
              <FontAwesomeIcon icon={faShareNodes} className="action-icon" /> Add withdarwal account
              </div>

            </div>
            <div className='help-section'>
              <div className="action-card-title">
                <h5> Need help?</h5>
              </div>
              <div className='help-cards'>
                <div className='welcome-cards'>
                  <div className='action-card'>
                  <FontAwesomeIcon icon={faShareNodes} className="action-icon" />FAQs
                  </div>
                </div>
                <div className='welcome-cards'>
                  <div className='action-card'>
                  <FontAwesomeIcon icon={faShareNodes} className="action-icon" />Chat with us
                  </div>
                </div>
                <div className='welcome-card-close'>
                  <h1 onClick={this.Closed}>Close X </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default DashBoard