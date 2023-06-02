
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../../../components/layout/AppLayout";

import { Button, Rate } from "antd";

const Ratting = () => {
	const navigate = useNavigate();
	const param = useParams();
	const [serviceValue, setServiceValue] = useState(0);
	const [priceValue, setPriceValue] = useState(0);
	const [deliveryValue, setDeliveryValue] = useState(0);
	const [qualityValue, setQualityValue] = useState(0);
	const auth = useSelector((state) => state?.auth?.data?.access_token);
	const transactions = useSelector((state) => state.customerTransaction);
	const newQuality = qualityValue;
	const newPrice = priceValue;
	const newDeliver = deliveryValue;
	const newServices = serviceValue;
	let transaction = transactions.allTransactions.find(
		(transaction) => transaction.id == param.id
	);
	// const onGoing = localStorage?.getItem("idOngoing");
	const rate = async (e) => {

		e.preventDefault();
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/rating/store`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth}`,
				},
			};
			const payload = {
				transaction_id: transaction.transaction_id,
				quality_rating: newQuality,
				delivery_rating: newDeliver,
				support_rating: newServices,
				price_rating: newPrice,
			};
			const data = await axios.post(API_URL, payload, config);
			navigate(`/completed-transaction/${param.id}`);
			// setRatting(data?.data?.data);
			// const response = data?.data
			//console.log(data, "response data");

			// return response;
		} catch (error) {
			// //console.log(error, "error");
		}
	};

	return (
		<AppLayout>
			<div className="md:w-5/6 w-full rounded-xl   bg-[#FFFFFF] md:mt-40 mt-10 md:mx-20 md:px-20 md:py-10 h-3/5 md:h-fit">
				<div className="border-b-2 border-[#707070] my-20 md:my-1 md:py-0 py-5 md:px-0 px-2 ">
					<span className=" text-[#232164] font-bold text-xl">
						Rate this Transaction
					</span>
				</div>
				<div className="py-5 px-3 flex justify-between md:px-20 md:py-20">
					<div>
						<p className=" text-center md:text-lg text-sm">Delivery</p>
						<Rate
							style={{
								height: "10px",
								marginTop: "-2px",
							}}
							onChange={(value) => {
								setDeliveryValue(value);
							}}
							value={deliveryValue}
						/>
					</div>
					<div>
						<p className="text-center  md:text-lg text-sm">Price</p>
						<Rate
							style={{
								height: "10px",
								marginTop: "-2px",
							}}
							onChange={(value) => {
								setPriceValue(value);
							}}
							value={priceValue}
						/>
					</div>
				</div>
				<div className="flex justify-between md:px-20 md:py-10 py-5 px-3">
					<div>
						<p className="text-center md:text-lg text-sm">Service</p>
						<Rate
							style={{
								height: "10px",
								marginTop: "-2px",
							}}
							onChange={(value) => {
								setServiceValue(value);
							}}
							value={serviceValue}
						/>
					</div>
					<div>
						<p className="text-center md:text-lg text-sm">Quality</p>
						<Rate
							style={{
								height: "10px",
								marginTop: "-2px",
							}}
							onChange={(value) => {
								setQualityValue(value);
							}}
							value={qualityValue}
						/>
					</div>
				</div>

				<div className="  md:mx-40 mt-20 mb-10 mx-20  flex justify-center text-center bg-[#232164]  py-2">
					<button onClick={rate} class="py-1 text-white  text-center">
						Continue
					</button>
				</div>
			</div>
		</AppLayout>
	);
};

export default Ratting;
