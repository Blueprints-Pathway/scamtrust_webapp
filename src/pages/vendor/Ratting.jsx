import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import Support from "../../components/support/Support";
function Ratting() {
	const [services, setServices] = useState({
		service: 0,
	});
	const [prices, setPrices] = useState({});
	const [qualitys, setQualitys] = useState({});
	const [Deliverys, setDeliverys] = useState({});

	const Delivery = {
		size: 30,
		value: setDeliverys,
		activeColor: "#FFAA00",
		edit: true,
	};
	const Price = {
		size: 30,
		value: setPrices,
		activeColor: "#FFAA00",
		edit: true,
	};
	const Service = {
		size: 30,
		value: setServices,
		activeColor: "#FFAA00",
		edit: true,
	};
	const Quality = {
		size: 30,
		value: setQualitys,
		activeColor: "#FFAA00",
		edit: true,
	};
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	console.log("user details",user_details?.data?.access_token);
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/rating/store`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};
				const payload = {
					transaction_id: "SCM-TRA-62debfee024fe",
					quality_rating: qualitys,
					delivery_rating: Deliverys,
					support_rating: services,
					price_rating: prices,
				};
				const data = await axios.post(API_URL, config, payload);
				// setRatting(data?.data?.data);
				// const response = data?.data
				console.log(data.data.data, "response data");

				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
									<ReactStars {...Delivery} />
								</div>
								<div className="pt-9 text-lg grid justify-items-center ">
									<h4 className="text-lg">Price</h4>
									<ReactStars {...Price} />
								</div>
								<div className="py-16  text-lg grid justify-items-center ">
									<h4 className="text-lg">Service</h4>
									<ReactStars {...Service} />
								</div>
								<div className="py-16 text-lg grid justify-items-center ">
									<h4 className="text-lg">Quality</h4>
									<ReactStars {...Quality} />
								</div>
							</div>

							<div className=" bottom grid justify-items-center mt-5 mb-5	">
								<button
									onClick={"confirm"}
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
}

export default Ratting;
