/** @format */

import React, { useState, useEffect } from "react";
import "./DashBoardVendor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbTack,
	faBook,
	faShareNodes,
	// faEye,
} from "@fortawesome/free-solid-svg-icons";
import Eye from "../../assets/images/svg/eye.svg";
import payment from "../../assets/payment-img.png";
import faq from "../../assets/conversation-img.png";
import chat from "../../assets/chat-img.png";
import trophy2 from "../../images/trophy2 (3).png";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import trophy from "../../images/trophy2 (1).png";
import scamTrustLogo from "../../images/Group114(1).png";
import Chart from "react-apexcharts";
import SideBar from "../SideBar/SideBar";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import Modal from "react-modal";
import AnimeList from "../Pages/CustDashboard/AnimeList";
import notrans from "../../assets/notrans.svg";
import { useNavigate } from "react-router-dom";
import { IoLogoWindows, IoMdCopy } from "react-icons/io";
import CopyToClipboard from "react-copy-to-clipboard";
import WithdrawFunds from "../Pages/CustDashboard/WithdrawFunds";
import moment from "moment";
import Ongoings from "../Pages/custTransaction/Ongoing";
import Completeds from "../Pages/custTransaction/Completed";
import Cancelleds from "../Pages/custTransaction/Cancelled";
import VendorTransaction from "../../pages/vendor/VendorTransaction";

function DashBoardVendor() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [copy, setCopy] = useState(false);
	const [isWithdrawing, setIsWithdrawing] = useState(false);
	const [allData, setAllData] = useState();
	const [outgoing, setOutGoing] = useState();
	const [completeData, setCompleteData] = useState();
	const [cancelData, setCancelData] = useState();
	const [active, setActive] = useState("alltransaction");
	const [view, setView] = useState();
	const [out, setOut] = useState();
	const [done, setDone] = useState();
	const [accepted, setAccepted] = useState();
	const [cancels, setCancels] = useState();
	const [showCanceled, setShowCanceled] = useState(false);
	const [showCompleted, setShowCompleted] = useState(false);
	const [showOngoing, setShowOngoing] = useState(false);
	const [showAccepted, setShowAccepted] = useState(false);
	const handleCopy = () => {
		setCopy(true);
		setTimeout(() => setCopy(false), 1500);
	};
	const showCompletedHandler = () => {
		setShowCompleted((prevState) => !prevState);
	};
	const setModalIsOpenToTrue = () => {
		setModalIsOpen(true);
	};
	const showCancelHandler = () => {
		setShowCanceled((prevState) => !prevState);
	};
	const setModalIsOpenToFalse = () => {
		setModalIsOpen(false);
	};
	const showAcceptedHandler = () => {
		setShowAccepted((prevState) => !prevState);
	};

	const customStyles = {
		content: {
			width: "50vh",
			color: "#01306B",
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			backgroundColor: "#ffffffff",
		},
	};

	const navigate = useNavigate();

	const openFaq = () => {
		navigate("/faq");
	};

	const handleSelect = () => {
		setSelect(!select);
		setSelect2(false);
		setSelect3(false);
		setSelect4(false);
	};

	const [select, setSelect] = useState(true);

	const handleSelect2 = () => {
		setSelect2(!select2);
		setSelect(false);
		setSelect3(false);
		setSelect4(false);
	};
	const [select2, setSelect2] = useState(false);

	const handleSelect3 = () => {
		setSelect3(!select3);
		setSelect(false);
		setSelect2(false);
		setSelect4(false);
	};
	const [details, setDetails] = useState();
	const [walletInfo, setWalletInfo] = useState('Loading...');
	const [select3, setSelect3] = useState(false);

	const handleSelect4 = () => {
		setSelect4(!select4);
		setSelect(false);
		setSelect2(false);
		setSelect3(false);
	};

	const [select4, setSelect4] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};
	const [click, setClick] = useState(false);

	const handleClosed = () => {
		setClosed(!close);
	};
	const [close, setClosed] = useState(false);

	const [eye, setEye] = useState(false);

	const handleEye = () => {
		setEye(!eye);
	};
	const handleNotification = () => {
		setNotification(!notification);
	};
	const [notification, setNotification] = useState(true);

	let Service = 4; /* 20% */
	let Price = 2; /*  10% */
	let Quality = 3; /* 50% */
	let Delivery = 3; /* 20 */

	let ServiceRating = (Service * 20) / 5;
	let PriceRating = (Price * 10) / 5;
	let QualityRating = (Quality * 50) / 5;
	let DeliveryRating = (Delivery * 20) / 5;

	let percent =
		((ServiceRating + PriceRating + QualityRating + DeliveryRating) / 100) *
		100;

	let [apexchart, setApexchart] = useState({
		options: {
			colors: ["#39C86A"],

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

	const vendorID = details?.vendor?.vendor_id;

	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/user/getdetails`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				console.log(data?.data.data, "user data");
				setDetails(data?.data?.data);
				setWalletInfo(data.data);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/vendor`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);
				setAllData(data?.data?.data)
				console.log(data?.data?.data, "all data");
				const mappeddata = data?.data?.data?.map((data) => data);
				const datas = mappeddata?.filter(
					(filtered) => filtered?.status === "PENDING VENDOR ACCEPTANCE"
				);
				const datacompleted = mappeddata?.filter(
					(filtered) => filtered?.status === "COMPLETED"
				);
				const datacancelled = mappeddata?.filter(
					(filtered) => filtered?.status === "CANCELLED BY VENDOR"
				);
				const dataaccepted = mappeddata?.filter(
					(filtered) => filtered?.status === "ACCEPTED BY VENDOR"
				);
				setOut(datas);
				setDone(datacompleted);
				setCancels(datacancelled);
				setAccepted(dataaccepted);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/vendor/ongoing`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				console.log(data?.data.data, "out");
				setOutGoing(data?.data?.data);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/vendor/cancelled`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				console.log(data?.data.data, "completed");
				setCancelData(data?.data?.data);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/vendor/completed`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				console.log(data?.data.data, "completed");
				setCompleteData(data?.data?.data);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const handleWithdraw = () => {
		setIsWithdrawing((prevState) => !prevState);
	};
	const getTransaction = async () => {
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/view/${view}`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};

			const data = await axios.get(API_URL, config);

			console.log(data, "view on customer");

			// console.log(values, "values");
			// return response;
		} catch (error) {
			console.log(error, "errorss");
		}
	};
	const showOngoingHandler = () => {
		setShowOngoing((prevState) => !prevState);
	};
	return (
		<Layout>
			{isWithdrawing ? (
				<WithdrawFunds setIsWithdrawing={setIsWithdrawing}
				userName =  {walletInfo?.data?.username}
				availableBalance  = {walletInfo['walletBalance']} />
			) : (
				<></>
			)}
			<div className="main">
				<div className="vendor-wrapper">
					<div className="containerDash">
						<div className="left">
							<div className="left-top-card">
								<div className="vendor-trophy">
									<img
										className="vendor-trophy-img"
										src={trophy2}
										alt="Scam Trust"
									/>
								</div>
								<div className="vendor-name">{details?.name}</div>
								<small className="vendor-description">
									Here is what is going on with your business
								</small>
								<div className="left-top-card1">
									<FontAwesomeIcon icon={faThumbTack} className="pin" />
									<div className="left-top-card1-text">
										<h1 className="card1-text">
											{" "}
											Elite <br /> Vendor
										</h1>
										<div className="vendor-card1-title">
											<p className="progress-text-left">Ratings</p>
											<p className="progress-text-right">{allData?.length} transactions</p>
										</div>
										<div className="progress-bar">
											<div className="progress"></div>
										</div>

										<img
											className="vendor-trophyCup-img"
											src={trophy}
											alt="Scam Trust"
										/>
										<div className="left-top-card2">
											<FontAwesomeIcon icon={faBook} className="book" />
											{done?.length} done
										</div>
									</div>
								</div>
							</div>

							<div className="right-top-card">
								<div className="card2-title pointer-events-none">
									<p className="card2-text-left">Wallet</p>
									<p className="card2-text-right pointer-events-none">
										{details?.name}
										<h5 className="card2-text-right2">
											<span className="text-[12px] text-[#FF9300] font-semibold pr-2">
												ID :
											</span>
											{vendorID}
										</h5>
										<CopyToClipboard text={vendorID}>
											<button onClick={() => setCopy(handleCopy)}>
												{copy ? (
													<p className="my-2">copied!</p>
												) : (
													<IoMdCopy className="text-[20px] text-[#86D19B]" />
												)}
											</button>
										</CopyToClipboard>
										<div className="bg-[#86d19b] w-96 ml-[-174px] mt-2 h-[0.1rem] md:w-[23rem] md:ml-[-13rem] lg:w-[380px] lg:ml-[-215px] xl:w-[400px] xl:ml-[-215px]"></div>
									</p>
								</div>
								<img
									onClick={handleEye}
									src={Eye}
									alt="eye"
									className="eyeIconWallet"
								/>

								  <div className="Wallet-card mt-5">
									<div className="Wallet-card-left">
										<div className="Wallet-card-left-top">
											<div className="Wallet-card-left-top-left">
												<div className="Wallet-card-left-top-left-text">
													<p className="Wallet-card-left-top-left-text-text">
														Total Balance
													</p>
													{eye ? (
														<p className="Wallet-card-left-top-left-text-text2">
															₦********
														</p>
													) : (
														<p className="Wallet-card-left-top-left-text-text2">
															₦{walletInfo['walletBalance']}
														</p>)}
												</div>
											</div>
											<div className="Wallet-card-left-top-right">
												<div className="Wallet-card-left-top-right-text">
													<p className="Wallet-card-left-top-right-text-text">
														Incoming Balance
													</p>
													{eye ? (
														<p className="Wallet-card-left-top-right-text-text2">
															₦********
														</p>
													) : (
														<p className="Wallet-card-left-top-right-text-text2">
															₦{walletInfo['incomingWalletBalance']}
														</p>)}
												</div>
											</div>
										</div>
										<div className="Wallet-card-left-bottom">
											<div className="Wallet-card-left-bottom-left">
												<div className="Secured">
													{" "}
													Secured by{" "}
													<img
														className="field-bottom-img"
														src={scamTrustLogo}
														alt="Scam Trust"
													/>{" "}
												</div>
											</div>
											<div className="Wallet-card-left-bottom-right">
												<p onClick={handleWithdraw} className="Withdraw-btn">
													WITHDRAWAL
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>					


					 <div className="right">
						
						    {/* TRANSACTION */}
							<div className="left-bottom-card md:px-12 lg:px-7 xl:px-12 overflow-y-scroll">
							<div className="Transactions overflow-y-scroll">
							<div className="heading">
								<h4 className="text-xl mt-[-5px]">Transaction</h4>
							</div>
							<div className="Category flex items-center gap-6">
								{select ? (
									<h6
										onClick={() => {
											setActive("alltransaction");
										}}
										className="text-xs Selection active"
									>
										All
									</h6>
								) : (
									<h6
										className="text-xs Selection"
										onClick={() => {
											setActive("alltransaction");
											handleSelect();
										}}
									>
										All
									</h6>
								)}
								{select2 ? (
									<h6
										onClick={() => {
											setActive("ongoing");
											console.log(active, "active");
										}}
										className="text-xs Selection active"
									>
										On-going
									</h6>
								) : (
									<h6
										className="text-xs Selection"
										onClick={() => {
											setActive("ongoing");
											handleSelect2();
											console.log(active, "active");
										}}
									>
										On-going
									</h6>
								)}
								{select3 ? (
									<h6
										onClick={() => {
											setActive("cancelled");
											console.log(active, "active");
										}}
										className="Selection active"
									>
										Cancelled
									</h6>
								) : (
									<h6
										className="Selection"
										onClick={() => {
											setActive("cancelled");
											console.log(active, "active");
											handleSelect3();
										}}
									>
										Cancelled
									</h6>
								)}
								{select4 ? (
									<h6
										onClick={() => {
											setActive("completed");
											console.log(active, "active");
										}}
										className="Selection active"
									>
										Completed
									</h6>
								) : (
									<h6
										className="Selection"
										onClick={() => {
											setActive("completed");
											console.log(active, "active");
											handleSelect4();
										}}
									>
										Completed
									</h6>
								)}
							</div>

							{out?.map((item, index, id) => {
								console.log(item, "out vendor");
								return (
									<div
										onClick={() => {
											setView(item?.transaction_id);
											getTransaction();
											window?.localStorage?.setItem(
												"idOngoing",
												item?.transaction_id
											);
											showOngoingHandler(item?.transaction_id);
										}}
										className="py-2 grid-rows-5 grid-flow-col justify-items-center"
									>
										<div
											className={select ? "flex items-center justify-between border rounded-md md:px-3 lg:px-4 xl:px-5" : "hide"}
											key={item.id}
										>
											<div className="">
												<div className="flex items-center justify-right">
													<img
														className="mr-2 object-cover inline-block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-[50px] xl:w-[50px] md:mr-5 rounded-full ring-2 ring-white"
														src={item?.customer?.image_url}
														alt="Scam Trust"
													/>
													<div className="flex-col">
														<h5 className="text-[#262466] xl:text-base mb-[-8px] block whitespace-nowrap w-[48px] md:w-[55px] xl:w-[75px] overflow-hidden text-ellipsis">
															{item?.product_name}
														</h5>
														<small className="Transaction block whitespace-nowrap  w-[45px] overflow-hidden text-ellipsis md:w-[65px] xl:w-[80px]">
															{item.status}
														</small>
													</div>
												</div>
											</div>
											<div className="flex items-center">
												<h5 className="xl:text-base text-[#262466] block whitespace-nowrap w-[28px] md:w-[40px] overflow-hidden text-ellipsis ml-3">
													{item.customer?.name || item?.customer?.username}
												</h5>
											</div>
											<div className="xl:text-base text-[#262466]">
												<h5>{item.amount}</h5>
											</div>
											<div className="xl:text-base text-[#262466]">
												<h5>{item?.due_date}</h5>
											</div>
										</div>
									</div>
								);
							})}
							{accepted?.map((item, index, id) => {
								console.log(item, "out vendor");
								return (
									<div
										onClick={() => {
											setView(item?.transaction_id);
											getTransaction();
											window?.localStorage?.setItem(
												"idAwaiting",
												item?.transaction_id
											);
											showAcceptedHandler(item?.transaction_id);
										}}
										className="py-2 grid-rows-5 grid-flow-col justify-items-center"
									>
										<div
											className={select ? "flex items-center justify-between border rounded-md md:px-3 lg:px-4 xl:px-5" : "hide"}
											key={item.id}
										>
											<div className="">
												<div className="flex items-center justify-right">
													<img
														className="mr-2 object-cover inline-block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-[50px] xl:w-[50px] md:mr-5 rounded-full ring-2 ring-white"
														src={item?.customer?.image_url}
														alt="Scam Trust"
													/>
													<div className="flex-col">
														<h5 className="text-[#262466] xl:text-base mb-[-8px] block whitespace-nowrap w-[48px] md:w-[55px] xl:w-[75px] overflow-hidden text-ellipsis">
															{item?.product_name}
														</h5>
														<small className="Transaction block whitespace-nowrap  w-[45px] overflow-hidden text-ellipsis md:w-[65px] xl:w-[80px]">
															{item.status}
														</small>
													</div>
												</div>
											</div>
											<div className="flex items-center">
												<h5 className="xl:text-base text-[#262466] block whitespace-nowrap w-[28px] md:w-[40px] overflow-hidden text-ellipsis ml-3">
													{item.customer?.name || item?.customer?.username}
												</h5>
											</div>
											<div className="xl:text-base text-[#262466]">
												<h5>{item.amount}</h5>
											</div>
											<div className="xl:text-base text-[#262466]">
												<h5>{item?.due_date}</h5>
											</div>
										</div>
									</div>
								);
							})}
							{done?.map((item, index, id) => {
								return (
									<div
										onClick={() => {
											setView(item?.transaction_id);
											getTransaction();
											showCompletedHandler(item?.transaction_id);
											window?.localStorage?.setItem(
												"idCompleted",
												item?.transaction_id
											);
										}}
										className="py-2 grid-rows-5 grid-flow-col justify-items-center"
									>
										<div
											className={select ? "flex items-center justify-between border rounded-md md:px-3 lg:px-4 xl:px-5" : "hide"}
											key={item.id}
										>
											<div className="">
												<div className="flex items-center justify-right">
													<img
														className="mr-2 object-cover inline-block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-[50px] xl:w-[50px] md:mr-5 rounded-full ring-2 ring-white"
														src={item?.customer?.image_url}
														alt="Scam Trust"
													/>
													<div className="flex-col">
														<h5 className="text-[#262466] xl:text-base mb-[-8px] block whitespace-nowrap w-[48px] md:w-[55px] xl:w-[75px] overflow-hidden text-ellipsis">
															{item?.product_name}
														</h5>
														<small className="Transaction block whitespace-nowrap  w-[45px] overflow-hidden text-ellipsis md:w-[65px] xl:w-[80px]">
															{item.status}
														</small>
													</div>
												</div>
											</div>
											<div className="flex items-center">
												<h5 className="xl:text-base text-[#262466] block whitespace-nowrap w-[28px] md:w-[40px] overflow-hidden text-ellipsis ml-3">
													{item.customer?.name || item?.customer?.username}
												</h5>
											</div>
											<div className="xl:text-base text-[#262466]">
												<h5>{item.amount}</h5>
											</div>
											<div className="xl:text-base text-[#262466]">
												<h5>{item.due_date}</h5>
											</div>
										</div>
									</div>
								);
							})}
							{cancels?.map((item, index, id) => {
								console.log(item,"item cancelled")
								return (
									<div
										onClick={() => {
											setView(item?.transaction_id);
											getTransaction();
											showCancelHandler();
											window?.localStorage?.setItem(
												"idCancelled",
												item?.transaction_id
											);
										}}
										className="py-2 grid-rows-5 grid-flow-col justify-items-center"
									>
										<div
											className={select ? "flex items-center justify-between border rounded-md md:px-3 lg:px-4 xl:px-5" : "hide"}
											key={item?.id}
										>
											<div className="">
												<div className="flex items-center justify-right">
													<img
														className="mr-2 object-cover inline-block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-[50px] xl:w-[50px] md:mr-5 rounded-full ring-2 ring-white"
														src={item?.customer?.image_url}
														alt="Scam Trust"
													/>
													<div className="flex-col">
														<h5 className="text-[#262466] xl:text-base mb-[-8px] block whitespace-nowrap w-[48px] md:w-[55px] xl:w-[75px] overflow-hidden text-ellipsis">
															{item?.product_name}
														</h5>
														<small className="Transaction block whitespace-nowrap  w-[45px] overflow-hidden text-ellipsis md:w-[65px] xl:w-[80px]">
															{item.status}
														</small>
													</div>
												</div>
											</div>
											<div className="flex items-center">
												<h5>
													{item?.customer?.name || item?.customer?.username}
												</h5>
											</div>
											<div className="xl:text-base text-[#262466]">
												<h5>{item?.amount}</h5>
											</div>
											<div className="xl:text-base text-[#262466]">
												<h5>{item?.due_date}</h5>
											</div>
										</div>
									</div>
								);
							})}

							{active === "ongoing" && (
								<div className="flex-col justify-start items-center mt-[-21.5rem]">
									{outgoing?.length === 0 ? (
										<div>
											<img
												className="w-[283px] h-[223px] object-contain"
												src={notrans}
												alt="info"
											/>
										</div>
									) : (
										<div className="grid-rows-5 grid-flow-col justify-items-center">
											{outgoing?.map((newout) => {
												return (
													<div
														onClick={() => {
															setView(newout?.transaction_id);
															getTransaction();
															window?.localStorage?.setItem(
																"idOngoing",
																newout?.transaction_id
															);
															showOngoingHandler(newout?.transaction_id);
														}}
														key={newout?.id}
														className="tab-pan fade show active flex items-center mt-4 justify-between md:px-3 lg:px-4 xl:px-5"
														id="tabs-home"
														role="tabpanel"
														aria-labelledby="tabs-home-tab"
													>
														<div className="flex items-center px-1.5 justify-between w-full border rounded-md md:px-4">
															<div className="flex items-center Transaction-body-profile pushDown3 justify-center">
																   <img
																   	className="mr-2 object-cover inline-block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-[50px] xl:w-[50px] md:mr-5 rounded-full ring-2 ring-white"
																   	src={newout?.customer?.image_url}
																   	alt="Awaiting icon"
																   />
																<div className="flex-col justify-center items-center mb-[-8px]">
																	<p className="text-[#262466] xl:text-base mb-[-8px] block whitespace-nowrap w-[48px] md:w-[55px] xl:w-[75px] overflow-hidden text-ellipsis">
																		{newout?.product_name}
																	</p>
																	<small className="block whitespace-nowrap  w-[45px] overflow-hidden text-ellipsis md:w-[65px] xl:w-[80px]">
																	{newout?.status}
																	</small>
																</div>
															</div>
															<p className="text-[#262466] text-center xl:text-base text-[#262466] block whitespace-nowrap w-[28px] md:w-[40px] overflow-hidden text-ellipsis ml-3">
																{newout?.customer?.name ||
																	newout?.customer?.username}
															</p>
															<p className="text-[#262466] xl:text-base block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																{newout?.amount}
															</p>
															<p className="text-[#262466] xl:text-base text-center">
																{moment(newout?.created_at).format(
																	"DD/MM/YYYY"
																)}
															</p>
														</div>
													</div> 
												);
											})}
											</div> 
									)}
								</div>
							)}

							{active === "cancelled" && (
								<div className="flex-col justify-start items-center mt-[-21.5rem]">
									{cancelData?.length === 0 ? (
										<div>
											<img
												className="w-[283px] h-[223px] object-contain"
												src={notrans}
												alt="info"
											/>
										</div>
									) : (
										<div className="grid-rows-5 grid-flow-col justify-items-center">
											{cancelData?.map((newcancel) => {
												return (
													<div
														onClick={() => {
															setView(newcancel?.transaction_id);
															getTransaction();
															showCancelHandler();
															window?.localStorage?.setItem(
																"idCancelled",
																newcancel?.transaction_id
															);
														}}
														key={newcancel?.id}
														className="tab-pan fade show active flex items-center mt-4 justify-between md:px-3 lg:px-4 xl:px-5"
														id="tabs-home"
														role="tabpanel"
														aria-labelledby="tabs-home-tab"
													>
														<div className="flex items-center px-1.5 justify-between w-full border rounded-md md:px-4">
															<div className="flex items-center Transaction-body-profile pushDown3 justify-center">
																<img
																	className="mr-2 object-cover inline-block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-[50px] xl:w-[50px] md:mr-5 rounded-full ring-2 ring-white"
																	src={newcancel?.customer?.image_url}
																	alt="Awaiting icon"
																/>
																<div className="flex-col justify-center items-center mb-[-8px]">
																	<p className="text-[#262466] xl:text-base mb-[-8px] block whitespace-nowrap w-[48px] md:w-[55px] xl:w-[75px] overflow-hidden text-ellipsis">
																		{newcancel?.product_name}
																	</p>
																	<small className="block whitespace-nowrap  w-[45px] overflow-hidden text-ellipsis md:w-[65px] xl:w-[80px]">
																		Cancelled
																	</small>
																</div>
															</div>
															<p className="text-[#262466] text-center xl:text-base text-[#262466] block whitespace-nowrap w-[28px] md:w-[40px] overflow-hidden text-ellipsis ml-3">
																{newcancel?.customer?.username ||newcancel?.customer?.name }
															</p>
															<p className="text-[#262466] xl:text-base block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																{newcancel?.amount}
															</p>
															<p className="text-[#262466] xl:text-base text-center">
																{moment(newcancel?.created_at).format(
																	"DD/MM/YYYY"
																)}
															</p>
														</div>
													</div>
												);
											})}
										</div>
									)}
								</div>
							)}

							{active === "completed" && (
								<div className="flex-col justify-start items-center mt-[-21.5rem]">
									{completeData?.length === 0 ? (
										<div>
											<img
												className="w-[283px] h-[223px] object-contain"
												src={notrans}
												alt="info"
											/>
										</div>
									) : (
										<div>
											{completeData?.map((completeS) => {
												// {
												// 	console.log(completeS, "hi");
												// }
												return (
													<div
														onClick={() => {
															setView(completeS?.transaction_id);
															getTransaction();
															showCompletedHandler(completeS?.transaction_id);
															window?.localStorage?.setItem(
																"idCompleted",
																completeS?.transaction_id
															);
														}}
														key={completeS.id}
														className="tab-pan fade show active flex items-center mt-4 justify-between md:px-3 lg:px-4 xl:px-5"
														id="tabs-home"
														role="tabpanel"
														aria-labelledby="tabs-home-tab"
													>
														<div className="flex items-center px-1.5 justify-between w-full border rounded-md md:px-4">
															<div className="flex items-center Transaction-body-profile pushDown3 justify-center">
																<img
																	className="mr-2 object-cover inline-block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-[50px] xl:w-[50px] md:mr-5 rounded-full ring-2 ring-white"
																	src={completeS?.customer?.image_url}
																	alt="Awaiting icon"
																/>
																<div className="flex-col justify-center items-center mb-[-8px]">
																	<p className="text-[#262466] xl:text-base mb-[-8px] block whitespace-nowrap w-[48px] md:w-[55px] xl:w-[75px] overflow-hidden text-ellipsis">
																		{completeS?.product_name}
																	</p>
																	<small className="block whitespace-nowrap  w-[45px] overflow-hidden text-ellipsis md:w-[65px] xl:w-[80px]">
																		Completed
																	</small>
																</div>
															</div>
															<p className="text-[#262466] text-center xl:text-base text-[#262466] block whitespace-nowrap w-[28px] md:w-[40px] overflow-hidden text-ellipsis ml-3">
																{completeS?.customer?.name ||
																	completeS?.customer?.username}
															</p>
															<p className="text-[#262466] xl:text-base block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																{completeS?.amount}
															</p>
															<p className="text-[#262466] xl:text-base text-center">
																{moment(completeS?.created_at).format(
																	"DD/MM/YYYY"
																)}
															</p>
														</div>
													</div>
												);
											})}
										</div>
									)}
								</div> 
							)} 
						</div> 
					  </div>  

							<div className="right-bottom-card">
								<div className="card1-title">
									<p className="Chart-text-left">Ratings</p>
									<p className="Chart-text-right">
										Share Stats{" "}
										<FontAwesomeIcon icon={faShareNodes} className="share" />
									</p>
								</div>
								<div className="row">
									<div className="Rate3">
										<div
											className={
												percent < 60
													? "Rate3D"
													: percent > 60 && percent < 70
													? "Rate3C"
													: percent > 70 && percent < 80
													? "Rate3B"
													: "Rate3A"
											}
										>
											<div className="Rate2">
												<div className="Rate1">
													<p>
														{percent < 60
															? "D"
															: percent > 60 && percent < 70
															? "C"
															: percent > 70 && percent < 80
															? "B"
															: "A"}
													</p>{" "}
													<p className="Rate1Up">+</p>
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
					<div className="welcome-card mx-3 md:mx-[-10px] lg:mx-[50px]">
						<div className="mx-[-25px] mb-3.5">
							<div className="welcome-message">Welcome to ScamTrust!</div>
							<small className="welcome-description px-12">
								Get secured by ScamTrust
							</small>
						</div>

						<div className=" flex flex-col items-center justify-center mx-0 mt-[-30px]">
							<div className="action-card-title text-sm ">
								<h5 className="ml-1 md:ml-[10px] smallsize">Get Started</h5>
								<div className="welcome-cards1">
									<img className="w-8" src={payment} alt="payment icon" />
									<p className="px-2">Add withdrawal account</p>
								</div>
							</div>

							<div className="md:flex">
								<div className="action-card-title text-sm  md:px-5">
									<h5 className="smallsize ml-1 md:ml-[10px]">Need help?</h5>
									<div onClick={openFaq} className="welcome-cards1 pr-[90px]">
										<img className="w-8" src={faq} alt="faq icon" />
										<p className="px-4">FAQs</p>
									</div>
								</div>

								<div className="action-card-title text-sm  md:px-5">
									<h5 className=" smallsize ml-1 md:ml-[10px]">Chat with us</h5>
									<div
										onClick={setModalIsOpenToTrue}
										className="welcome-cards1 pr-[60px]"
									>
										<img className="w-8" src={chat} alt="chat icon" />
										<p className="px-4">Chat with us</p>
									</div>

									<Modal
										isOpen={modalIsOpen}
										style={customStyles}
										onRequestClose={setModalIsOpenToFalse}
									>
										<button
											className="pl-28 pt-5 text-lg md:pl-5 lg:pl-16"
											onClick={setModalIsOpenToFalse}
										>
											X
										</button>
										<AnimeList />
									</Modal>
								</div>
							</div>
						</div>

						<div className="welcome-card-close">
							<h1 onClick={handleClosed}>Close x </h1>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default DashBoardVendor;
