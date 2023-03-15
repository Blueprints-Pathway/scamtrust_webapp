import React, { useState, useEffect } from "react";
import axios from "axios";
import { sideBarItems } from "../SideBar/sideBarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowRight,
	faSearch,
	faShareNodes,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
	faBell,
	faStar as faStarEmpty,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import scamTrust from "../../images/shielgg.png";
import scamSheild from "../../images/shielgg3.png";
import Chart from "react-apexcharts";
import shielgg from "../../images/shielgg.png";
import Frame318 from "../../images/Frame318.png";
import "./VendorRating.css";
import SideBar from "../SideBar/SideBar";
import Layout from "../../components/Layout/Layout";

function VendorRating() {
	const [ratting, setRatting] = useState({
		quality: 0,
		price: 0,
		delivery: 0,
		support: 0,
	});
	const onGoing = localStorage?.getItem("idOngoing");
	console.log(onGoing, "hellosssss");
	let Service = ratting.support;
	let Price = ratting.price;
	let Quality = ratting?.quality;
	let Delivery = ratting.delivery;

	let ServiceRating = (Service * 20) / 5;
	let PriceRating = (Price * 10) / 5;
	let QualityRating = (Quality * 50) / 5;
	let DeliveryRating = (Delivery * 20) / 5;

	let percent =
		((ServiceRating + PriceRating + QualityRating + DeliveryRating) / 100) *
		100;

	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `${process.env.REACT_APP_BASE_URL}/rating/list`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};
				const payload = {
					transaction_id: "SCM-TRA-62debfee024fe",
					quality_rating: 1,
					delivery_rating: 1,
					support_rating: 1,
					price_rating: 1,
				};
				const data = await axios.get(API_URL, config, payload);
				setRatting(data?.data?.data);
				// const response = data?.data
				console.log(data.data.data, "response data");

				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [apexchart, setApexchart] = useState({
		options: {
			colors: ["#39C86A"],

			chart: {
				id: "basic-bar",
				background: "transparent",
				foreground: "#FF9300",
				toolbar: { show: false },
			},
			xaxis: {
				categories: ["", "Quality", "Delivery", "", "Price", "Service"],
			},
		},
		series: [
			{
				name: "Competence Score",
				data: [2.5, Quality, Delivery, 2.5, Price, Service],
			},
		],
	});

	const handleClick = () => {
		setClick(!click);
	};
	const [click, setClick] = useState(false);

	const handleClose = () => {
		setClose(!close);
	};
	const [close, setClose] = useState(false);

	return (
		<Layout className="main" name="Ratings">
			<div className="containerRating">
				<div className="containerRating2">
					<div className="Center">
						<img className="CenterTopImg" src={shielgg} alt="Scam Trust" />
					</div>

					<div
						className={
							click ? "CenterBottomRating active" : "CenterBottomRating"
						}
					>
						<div className="RatingName">
							<h1>Competence Score</h1> <span>100%</span>
						</div>

						<div className="CenterImg1">
							<div className="CenterImgContainer">
								<div
									className={
										percent < 60
											? "RatingD"
											: percent > 60 && percent < 70
											? "RatingC"
											: percent > 70 && percent < 80
											? "RatingB"
											: "RatingA"
									}
								>
									<div className="RateBox">
										<div className="RateHolder">
											<p>
												{percent < 60
													? "D"
													: percent > 60 && percent < 70
													? "C"
													: percent > 70 && percent < 80
													? "B"
													: "A"}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="CenterGeneralSettings">
							<div className="GeneralSettings">
								<div className="rowFlex">
									<div className="rating-chart">
										<Chart
											options={apexchart.options}
											series={apexchart.series}
											type="radar"
										/>
									</div>
									<div className="scoresMain">
										<div className="scores">
											<div className="scoring">
												<div className="scoringName">Delivery</div>
												<div className="rating-Line"></div>
												{Delivery === 1 ? (
													<div className="scoringStar">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Delivery === 2 ? (
													<div className="scoringStar">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Delivery === 3 ? (
													<div className="scoringStar">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Delivery === 4 ? (
													<div className="scoringStar">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : (
													<div className="scoringStar">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
													</div>
												)}
											</div>
											<div className="scoring">
												<div className="scoringName">Price</div>
												<div className="rating-Line"></div>
												{Price === 1 ? (
													<div className="scoringStarPrice">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Price === 2 ? (
													<div className="scoringStarPrice">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Price === 3 ? (
													<div className="scoringStarPrice">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Price === 4 ? (
													<div className="scoringStarPrice">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : (
													<div className="scoringStarPrice">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
													</div>
												)}
											</div>
											<div className="scoring">
												<div className="scoringName">Service</div>
												<div className="rating-Line"></div>
												{Service === 1 ? (
													<div className="scoringStarService">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Service === 2 ? (
													<div className="scoringStarService">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Service === 3 ? (
													<div className="scoringStarService">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Service === 4 ? (
													<div className="scoringStarService">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : (
													<div className="scoringStarService">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
													</div>
												)}
											</div>
											<div className="scoring">
												<div className="scoringName">Quality</div>
												<div className="rating-Line"></div>
												{Quality === 1 ? (
													<div className="scoringStarQuality">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Quality === 2 ? (
													<div className="scoringStarQuality">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Quality === 3 ? (
													<div className="scoringStarQuality">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : Quality === 4 ? (
													<div className="scoringStarQuality">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon
															icon={faStarEmpty}
															className="star"
														/>
													</div>
												) : (
													<div className="scoringStarQuality">
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
														<FontAwesomeIcon icon={faStar} className="star" />
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*  <SideBar /> */}
		</Layout>
	);
}

export default VendorRating;
