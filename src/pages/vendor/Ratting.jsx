/** @format */

import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Support from "../../components/support/Support";
import Prices from "./Price";
import Delivers from "./Delivey";
import Serviceses from "./Serviceses";
import Qualities from "./Qualities";

const Ratting = React.memo(({ totalStars }) => {
	const navigate = useNavigate();

	const [servicesSelected, serviceStar] = useState(0);
	const [priceSelected, priceStar] = useState(0);
	const [deliverySelected, deliveryStar] = useState(0);
	const [qualitySelected, qualityStar] = useState(0);
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	//console.log("user details", user_details?.data?.access_token);
	const onGoing = localStorage?.getItem("idOngoing");
	//console.log("helo boss");

	const newQuality = qualitySelected;
	const newPrice = priceSelected;
	const newDeliver = deliverySelected;
	const newServices = servicesSelected;
	const rate = async (e) => {
		e.preventDefault();
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/rating/store`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};
			const payload = {
				transaction_id: onGoing,
				quality_rating: newQuality,
				delivery_rating: newDeliver,
				support_rating: newServices,
				price_rating: newPrice,
			};
			const data = await axios.post(API_URL, payload, config);
			navigate("/");
			// setRatting(data?.data?.data);
			// const response = data?.data
			// //console.log(data, "response data");

			// return response;
		} catch (error) {
			// //console.log(error, "error");
		}
	};

	//console.log(servicesSelected, "service");

	return (
		<Layout>
			<div className="container-fluid grid justify-items-center ">
				<div className="mx-auto box-border  bg-white top-10 md:top-40 lg:top-40 sm:w-full lg:w-6/12   md:6/12  card p-4 border-2 mt-5 bottom-20    ">
					<div className="py-4">
						<span
							className="text-2xl font-bold "
							style={{
								color: "#232164",
							}}
						>
							Rate this transaction
						</span>
					</div>
					<hr className="solid" />

					<div className="grid grid-cols-6   gap-4    ">
						<div className="col-start-2 col-span-4">
							<div className="grid grid-cols-2  ">
								<div className="pt-9 text-lg grid justify-items-center ">
									<h4 className="text-lg ">Delivery</h4>
									<Delivers
										totalStars={5}
										deliverySelected={deliverySelected}
										deliveryStar={deliveryStar}
									/>
								</div>
								<div className="pt-9 text-lg grid justify-items-center ">
									<h4 className="text-lg">Price</h4>
									<Prices
										totalStars={5}
										priceSelected={priceSelected}
										priceStar={priceStar}
									/>
								</div>
								<div className="py-16  text-lg grid justify-items-center ">
									<h4 className="text-lg">Service</h4>
									<Serviceses
										servicesSelected={servicesSelected}
										serviceStar={serviceStar}
										totalStars={5}
									/>
								</div>
								<div className="py-16 text-lg grid justify-items-center ">
									<h4 className="text-lg">Quality</h4>
									<Qualities
										totalStars={5}
										qualitySelected={qualitySelected}
										qualityStar={qualityStar}
									/>
								</div>
							</div>

							<div className=" bottom grid justify-items-center mt-5 mb-5	">
								<button
									onClick={rate}
									style={{ backgroundColor: " #232164" }}
									className=" w-4/6 py-4 hover:bg-blue-700 text-white font-bold px-4 rounded"
								>
									Continue
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
});

export default Ratting;
