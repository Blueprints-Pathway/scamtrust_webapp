import React, { useState } from 'react'
import './DashBoardVendor.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack, faBook, faShareNodes, faEye } from "@fortawesome/free-solid-svg-icons";

import trophy2 from '../../images/trophy2 (3).png'
import trophy from '../../images/trophy2 (1).png'
import scamTrustLogo from '../../images/Group114(1).png'
import Chart from 'react-apexcharts'
import { TransactionItems } from './transactionItems'
import SideBar from '../SideBar/SideBar';
import Layout from "../../components/Layout/Layout";

function DashBoardVendor() {

  const handleSelect = () => {
    setSelect(!select);
    setSelect2(false);
    setSelect3(false);
    setSelect4(false);
  }

  const [select, setSelect] = useState(true);

  const handleSelect2 = () => {
    setSelect2(!select2);
    setSelect(false);
    setSelect3(false);
    setSelect4(false);
  }
  const [select2, setSelect2] = useState(false);

  const handleSelect3 = () => {
    setSelect3(!select3);
    setSelect(false);
    setSelect2(false);
    setSelect4(false);
  }

  const [select3, setSelect3] = useState(false);

  const handleSelect4 = () => {
    setSelect4(!select4);
    setSelect(false);
    setSelect2(false);
    setSelect3(false);
  }

  const [select4, setSelect4] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }
  const [click, setClick] = useState(false)

  const handleClosed = () => {
    setClosed(!close);
  }
  const [close, setClosed] = useState(false)

  const handleEye = () => {
    setEye(!eye);
  }
  const [eye, setEye] = useState(false)

  const handleNotification = () => {
    setNotification(!notification);
  }
  const [notification, setNotification] = useState(true);


  let Service = 4; /* 20% */
  let Price = 2;/*  10% */
  let Quality = 3; /* 50% */
  let Delivery = 3; /* 20 */

  let ServiceRating = (Service * 20) / 5;
  let PriceRating = (Price * 10) / 5;
  let QualityRating = (Quality * 50) / 5;
  let DeliveryRating = (Delivery * 20) / 5;

  let percent = ((ServiceRating + PriceRating + QualityRating + DeliveryRating) / 100) * 100;




  let [apexchart, setApexchart] = useState({
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
        name: "Competence Score",
        data: [2.5, Quality, Delivery, 2.5, Price, Service]
      }
    ]
  });





  return (
    <Layout>

      <div className='main'>


        <div>
          <div className='containerDash'>

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
                      <p className='progress-text-right'>
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

              <div className='right-top-card'>
                <div className='card2-title'>
                  <p className='card2-text-left'>
                    Wallet
                  </p>
                  <p className='card2-text-right'>
                    Ridic Business Ventures
                    <h5 className='card2-text-right2'>
                      ID - 6057702

                    </h5>
                    <div className='Line'></div>
                  </p>
                </div>
                <FontAwesomeIcon className='eyeIconWallet no' onClick={handleEye} icon={faEye} />
                <div className='Wallet-card'>
                  <div className='Wallet-card-left'>
                    <div className='Wallet-card-left-top'>
                      <div className='Wallet-card-left-top-left'>
                        <div className='Wallet-card-left-top-left-text'>
                          <p className='Wallet-card-left-top-left-text-text'>
                            Total Balance
                          </p>
                          {eye ? <p className='Wallet-card-left-top-left-text-text2'>
                            $********
                          </p> : <p className='Wallet-card-left-top-left-text-text2'>
                            $500,000.00
                          </p>}
                        </div>
                      </div>
                      <div className='Wallet-card-left-top-right'>
                        <div className='Wallet-card-left-top-right-text'>
                          <p className='Wallet-card-left-top-right-text-text'>
                            Incoming Balance
                          </p>
                          {eye ? <p className='Wallet-card-left-top-right-text-text2'>
                            $********
                          </p> : <p className='Wallet-card-left-top-right-text-text2'>
                            $250,000.00
                          </p>}
                        </div>
                      </div>
                    </div>
                    <div className='Wallet-card-left-bottom'>
                      <div className='Wallet-card-left-bottom-left'>
                        <div className='Secured'> Secured by <img className='field-bottom-img' src={scamTrustLogo} alt="Scam Trust" /> </div>
                      </div>
                      <div className='Wallet-card-left-bottom-right'>
                        <p className='Withdraw-btn'>
                          WITHDRAWAL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='right '>
              <div className='left-bottom-card'>
                <div className="transactions">
                  <div className="heading">
                    <h4>Transaction</h4>
                  </div>
                  <div className="category">
                    {select ? (<h6 className="Selection active" >All</h6>
                    ) : <h6 className="Selection" onClick={handleSelect}>All</h6>}
                    {select2 ? <h6 className="Selection active" >Outgoing</h6> : <h6 className="Selection" onClick={handleSelect2}>Outgoing</h6>}
                    {select3 ? <h6 className="Selection active">Cancelled</h6> : <h6 className="Selection" onClick={handleSelect3}>Cancelled</h6>}
                    {select4 ? <h6 className="Selection active" >Completed</h6> : <h6 className="Selection" onClick={handleSelect4}>Completed</h6>}

                  </div>

                  <div className="sub-category">
                    <h6>Transactions</h6>
                    <h6>vendor’s Name</h6>
                    <h6>Amount</h6>
                    <h6>Date</h6>
                  </div>


                  {TransactionItems.map((item, index) => {
                    return (
                      <div className={select ? "Transaction" : 'hide'}>

                        <div className="Transaction-body">
                          <div className="Transaction-body-profile">
                            <img className='TransactionStatusimg' src={item.satusImg} alt="Scam Trust" />
                            <div>
                              <h5 className="Transaction-details">{item.itemName}</h5>
                              <p className="Transaction-description">{item.status}</p>
                            </div>
                          </div>
                        </div>
                        <div className="Transaction-details name">
                          <h5>{item.businessName}</h5>
                        </div>
                        <div className="Transaction-details Amount">
                          <h5>{item.amount}</h5>
                        </div>
                        <div className="Transaction-details date">
                          <h5>{item.date}</h5>
                        </div>

                      </div>

                    )
                  }
                  )}

                  {TransactionItems.filter((item) => {
                    return item.status === 'outgoing'
                  }).map((item, index) => {
                    return (
                      <div className={select2 ? "Transaction" : 'hide'}>

                        <div className="Transaction-body">
                          <div className="Transaction-body-profile">
                            <img className='TransactionStatusimg' src={item.satusImg} alt="Scam Trust" />
                            <div>
                              <h5 className="Transaction-details">{item.itemName}</h5>
                              <p className="Transaction-description">{item.status}</p>
                            </div>
                          </div>
                        </div>
                        <div className="Transaction-details name">
                          <h5>{item.businessName}</h5>
                        </div>
                        <div className="Transaction-details Amount">
                          <h5>{item.amount}</h5>
                        </div>
                        <div className="Transaction-details date">
                          <h5>{item.date}</h5>
                        </div>

                      </div>

                    )
                  }
                  )}

                  {TransactionItems.filter((item) => {
                    return item.status === 'canclled'
                  }).map((item, index) => {
                    return (
                      <div className={select3 ? "Transaction" : 'hide'}>

                        <div className="Transaction-body">
                          <div className="Transaction-body-profile">
                            <img className='TransactionStatusimg' src={item.satusImg} alt="Scam Trust" />
                            <div>
                              <h5 className="Transaction-details">{item.itemName}</h5>
                              <p className="Transaction-description">{item.status}</p>
                            </div>
                          </div>
                        </div>
                        <div className="Transaction-details name">
                          <h5>{item.businessName}</h5>
                        </div>
                        <div className="Transaction-details Amount">
                          <h5>{item.amount}</h5>
                        </div>
                        <div className="Transaction-details date">
                          <h5>{item.date}</h5>
                        </div>

                      </div>

                    )
                  }
                  )}

                  {TransactionItems.filter((item) => {
                    return item.status === 'completed'
                  }).map((item, index) => {
                    return (
                      <div className={select4 ? "Transaction" : 'hide'}>

                        <div className="Transaction-body">
                          <div className="Transaction-body-profile">
                            <img className='TransactionStatusimg' src={item.satusImg} alt="Scam Trust" />
                            <div>
                              <h5 className="Transaction-details">{item.itemName}</h5>
                              <p className="Transaction-description">{item.status}</p>
                            </div>
                          </div>
                        </div>
                        <div className="Transaction-details name">
                          <h5>{item.businessName}</h5>
                        </div>
                        <div className="Transaction-details Amount">
                          <h5>{item.amount}</h5>
                        </div>
                        <div className="Transaction-details date">
                          <h5>{item.date}</h5>
                        </div>

                      </div>

                    )
                  }
                  )}
                </div>
              </div>
              <div className='right-bottom-card'>
                <div className='card1-title'>
                  <p className='Chart-text-left'>
                    Ratings
                  </p>
                  <p className='Chart-text-right'>
                    Share Stats <FontAwesomeIcon icon={faShareNodes} className="share" />
                  </p>
                </div>
                <div className="row">
                  <div className='Rate3'>
                    <div className={(percent < 60) ? 'Rate3D' : (percent > 60 && percent < 70) ? 'Rate3C' : (percent > 70 && percent < 80) ? 'Rate3B' : 'Rate3A'}>
                      <div className='Rate2'>
                        <div className='Rate1'>
                          <p>{(percent < 60) ? 'D' : (percent > 60 && percent < 70) ? 'C' : (percent > 70 && percent < 80) ? 'B' : 'A'}</p> <p className='Rate1Up'>+</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mixed-chart">
                    <Chart
                      options={apexchart.options}
                      series={apexchart.series}
                      type="radar"
                    />
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
        <div className={close ? "welcome active" : "welcome"}>
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
            <div className='welcome-cards1'>
              <div className='action-card1'>
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
                  <h1 onClick={handleClosed}>Close X </h1>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* <SideBar /> */}
    </Layout>
  )

}

export default DashBoardVendor