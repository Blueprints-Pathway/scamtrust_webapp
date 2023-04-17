/** @format */

import React, { useEffect } from "react";
import CustDashTransaction from "../../../components/customerdashboard/CustDashTransaction/CustDashTransaction";
import CustomerPopUp from "../../../components/customerdashboard/customerPopUp/CustomerPopUp";
import CustomerProfileCard from "../../../components/customerdashboard/CustomerProfileCard/CustomerProfileCard";
import FaqandChat from "../../../components/customerdashboard/Faq&Chat/FaqandChat";
import FeeCalculator from "../../../components/customerdashboard/FeeCalculator/FeeCalculator";
import FooterLogo from "../../../components/FooterLogo/FooterLogo";
import AppLayout from "../../../components/layout/AppLayout";
import "./CustomerDashboard.css";

const CustomerDashboard = () => {
	let   shouldPopUp = localStorage.getItem('SHOW_MODAL')
	
	
	useEffect(() => {
	
  
	  return () => {
		localStorage.removeItem('SHOW_MODAL')
	  };
	}, [])
	return (
		<AppLayout>
			<div className="cust-dash-wrapper">
				<div className="cust-dash-left">
					<CustomerProfileCard />
					<FeeCalculator />
					<div className="cust-dash-bigScreen">
						<FaqandChat />
						<FooterLogo />
					</div>
				</div>

				<div className="cust-dash-right">
					<CustDashTransaction />
					<div className="cust-dash-smallScreen">
						<FaqandChat />
						<FooterLogo />
					</div>
				</div>
			</div>
			{
  shouldPopUp &&
        <div>
         <CustomerPopUp />
        </div>}
		</AppLayout>
	);
};

export default CustomerDashboard;
