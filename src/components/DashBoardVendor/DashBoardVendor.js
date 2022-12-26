import React, { useState } from 'react'
import './DashBoardVendor.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack, faBook, faShareNodes, faEye } from "@fortawesome/free-solid-svg-icons";
import payment from '../../assets/payment-img.png'
import faq from '../../assets/conversation-img.png'
import chat from '../../assets/chat-img.png'

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
        style: {
          colors: ["#0357BF"],
         
      },
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
                        Progress
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
                            ₦********
                          </p> : <p className='Wallet-card-left-top-left-text-text2'>
                           <sup>₦</sup>500,000.00
                          </p>}
                        </div>
                      </div>
                      <div className='Wallet-card-left-top-right'>
                        <div className='Wallet-card-left-top-right-text'>
                          <p className='Wallet-card-left-top-right-text-text'>
                            Incoming Balance
                          </p>
                          {eye ? <p className='Wallet-card-left-top-right-text-text2'>
                           ₦********
                          </p> : <p className='Wallet-card-left-top-right-text-text2'>
                            <sup>₦</sup>250,000.00
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
                  
                  {/* BOTTOM CARDS */}
            <div className='right'>
              <div className='left-bottom-card'>
                <div className="transactions">
                  <div className="heading">
                    <h4>Transactions</h4>
                  </div>
                  <div className="category">
                    {select ? (<h6 className="Selection active" >All</h6>
                    ) : <h6 className="Selection" onClick={handleSelect}>All</h6>}
                    {select2 ? <h6 className="Selection active">Outgoing</h6> : <h6 className="Selection" onClick={handleSelect2}>Outgoing</h6>}
                    {select3 ? <h6 className="Selection active">Cancelled</h6> : <h6 className="Selection" onClick={handleSelect3}>Cancelled</h6>}
                    {select4 ? <h6 className="Selection active" >Completed</h6> : <h6 className="Selection" onClick={handleSelect4}>Completed</h6>}
                  
                  </div>

                  <div className="sub-category">
                    <h6>Transactions</h6>
                    <h6 className='vendor-title'>vendor’s Name</h6>
                    <h6 className='amount-title'>Amount</h6>
                    <h6 className='amount-date'>Date</h6>
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
                <div className='card4-title card1-title'>
                  <p className='Chart-text-left'>
                    Ratings
                  </p>
                  <p className='Chart-text-right'>
                    Share Stats 
                    <FontAwesomeIcon icon={faShareNodes} className="share px-2" />
                  </p>
                </div>
                <div className="row" >
                  <div className='Rate3'>
                    <div className={(percent < 60) ? 'Rate3D' : (percent > 60 && percent < 70) ? 'Rate3C' : (percent > 70 && percent < 80) ? 'Rate3B' : 'Rate3A'}>
                      <div className='Rate2'>
                        <div className='Rate1'>
                          <p >{(percent < 60) ? 'D' : (percent > 60 && percent < 70) ? 'C' : (percent > 70 && percent < 80) ? 'B' : 'A'}</p> <p className='Rate1Up'>+</p>
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
          <div className='welcome-card md:mt-[75px] ml-3 lg:mt-[-25px] lg:ml-[50px]'>
            <div className='md:pt-5 mt-[-50px] text-xs text-center leading-10 pr-5 lg:mt-3'>
            <div className='welcome-message'>
              Welcome to ScamTrust!
            </div>
            <small className='welcome-description'>
              Get secured by ScamTrust
            </small>
            </div>

            <div className=' flex flex-col items-center justify-center mt-[-12px] md:pt-2 '>
            {/* <div className="action-card-title text-sm pr-[70px]"> */}
            <div className="action-card-title text-sm">
              <h5 className='ml-[-12px] text-lg pb-1 pl-5'>Get Started</h5>
            {/* </div> */}
            <div className='welcome-cards1'>
              {/* <div className='action-card1'> */}
                {/* <FontAwesomeIcon icon={faShareNodes} className="action-icon" /> */}
                <img className='w-8' src={payment} alt='payment icon' />
                <p className='px-2'>Add withdrawal account</p>
              {/* </div> */}
            </div>
            </div>

            {/* <div className='help-section'> */}
            {/* <div className='flex-column items-center justify-center mt-3 mx-[58px]'> */}
              <div className='md:flex md:mb-[-10px] lg:mt-4'>
              <div className="action-card-title text-sm md:px-5 lg:mx-12">
                <h5 className='ml-[-12px] text-lg pb-1 pl-5'>Need help?</h5>
              {/* <div className='help-cards'> */}
                <div className='welcome-cards1 pr-[80px]'>
                  {/* <div className='action-card'> */}
                  <img className='w-8' src={faq} alt='faq icon' />
                  <p className='px-4'>FAQs</p>
                  {/* </div> */}
                </div>
                </div>

                <div className="action-card-title text-sm  md:px-5 lg:mx-12">
                <h5 className='ml-[-12px] text-lg pb-1 pl-5'>Chat with us</h5>
                <div className='welcome-cards1 pr-[60px]'>
                  {/* <div className='action-card'> */}
                  <img className='w-8' src={chat} alt='chat icon' />
                  <p className='px-4'>Chat with us</p>
                  {/* </div> */}
                </div>
                </div>
                </div>
                </div>
              {/* </div> */}
            {/* </div> */}

            <div className='welcome-card-close cursor-pointer mr-1 md:mr-5 md:mb-5 lg:mr-[75px] lg:font-bold'>
                  <h1 onClick={handleClosed}>Close  x </h1>
                </div>
          </div>
        </div>

      </div>
      {/* <SideBar /> */}
    </Layout>
  )

}

export default DashBoardVendor