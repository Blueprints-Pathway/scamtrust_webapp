import React, { useState } from 'react'
import './DashBoardVendor.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faThumbTack, faBook, faShareNodes, faEye } from "@fortawesome/free-solid-svg-icons";
import trophy2 from '../../images/trophy2 (3).png'
import trophy from '../../images/trophy2 (1).png'
import scamTrustLogo from '../../images/Group114(1).png'
import Layout from '../Layout/Layout'
import SideBar from '../SideBar/SideBar';

import Chart from 'react-apexcharts'
import { TransactionItems } from './transactionItems'

function VendorDashboard() {

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
    <SideBar> 

    
    </SideBar>
  )

}

export default VendorDashboard