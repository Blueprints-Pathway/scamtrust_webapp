

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import AnimeList from "./AnimeList";
import Info from "../../../assets/images/svg/info.svg";
import Chat from "../../../assets/images/svg/chat.svg";
import SecuredBy from "../../../assets/images/svg/secured-by.svg";
import Add from "../../../assets/images/svg/add.svg";
import EmptyTxn from "../../../assets/images/svg/EmptyTxn.svg";
import { fetchUser } from "../../../services/auth";
import axios from "axios";
import onGoing from "../../../assets/on-going-icon.png";
import cancelled from "../../../assets/cancel-icon.png";
import completed from "../../../assets/complete-icon.png";
import useModal from "./AnimeList";
import { Link, useNavigate } from "react-router-dom";
import ConfirmAccount from "../Wallet/ConfirmAccount";
import FundWallet from "../Wallet/FundWallet";
import moment from "moment";
import Ongoings from ".././custTransaction/Ongoing";
import Completeds from ".././custTransaction/Completed";
import Cancelleds from ".././custTransaction/Cancelled";
const CustomerDashboard = (props) => {
	const { setShowInitiateTransaction, setIsWithdrawing, setIsFunding } = props;
	const { isShowing, toggle } = useModal();
	const [transactionAmount, setTransactionAmount] = useState("");
	const [details, setDetails] = useState();
	const [userFromBackend, setUserFromBackend] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [showConfirmAccount, setShowConfirmAccont] = useState(false);
	const [showFundWallet, setShowFundWallet] = useState(false);
	const [outgoing, setOutGoing] = useState();
	const [completeData, setCompleteData] = useState();
	const [cancelData, setCancelData] = useState();
	const [active, setActive] = useState("alltransaction");
	const [view, setView] = useState();
	const [out, setOut] = useState();
	const [done, setDone] = useState();
	const [cancels, setCancels] = useState();
	const [showCanceled, setShowCanceled] = useState(false);
	const [showCompleted, setShowCompleted] = useState(false);
	const [showOngoing, setShowOngoing] = useState(false);
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
	let amount = userFromBackend?.walletBalance;
	const balance = Math.round((amount + Number.EPSILON) * 100) / 100;
	const setModalIsOpenToTrue = () => {
		setModalIsOpen(true);
	};

	const setModalIsOpenToFalse = (e) => {
		e.stopPropagation();
		setModalIsOpen(false);
	};

	const handleConfirmAccount = () => {
		setShowConfirmAccont((prevState) => !prevState);
	};

	const fundWalletHandler = () => {
		setShowFundWallet((prevState) => !prevState);
	};
	const showOngoingHandler = () => {
		setShowOngoing((prevState) => !prevState);
	};
	const showCancelHandler = () => {
		setShowCanceled((prevState) => !prevState);
	};
	const showCompletedHandler = () => {
		setShowCompleted((prevState) => !prevState);
	};
	const { user } = useSelector((state) => state.auth);

	console.log(userFromBackend);

	const onCreateTransactionClicked = () => {
		setShowInitiateTransaction((prevState) => !prevState);
	};

	const TRANSACTION_FEE = transactionAmount * 0.02;
	const TOTAL_AMOUNT = +TRANSACTION_FEE + +transactionAmount;

	/////transaction data start///
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/customer`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

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
				setOut(datas);
				setDone(datacompleted);
				setCancels(datacancelled);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/customer/ongoing`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				console.log(data?.data.data, "completed");
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
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/customer/cancelled`;
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
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/customer/completed`;
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
	/////transaction data end////

	useEffect(() => {
		(async () => setUserFromBackend(await fetchUser(user.data.access_token)))();
	}, []);
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

				// console.log(data?.data.data, "user data");
				setDetails(data?.data?.data);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log("details", userFromBackend);

	const navigate = useNavigate();

	const handleFaq = () => {
		navigate("/faq");
	};

	return (
		<div className="flex-col w-full px-2 pb-10 md:flex-row gap-7">
			<FundWallet
				setShowConfirmAccont={setShowConfirmAccont}
				fundWalletHandler={fundWalletHandler}
				showFundWallet={showFundWallet}
			/>
			<ConfirmAccount
				setShowFundWallet={setShowFundWallet}
				showConfirmAccount={showConfirmAccount}
				setShowConfirmAccont={setShowConfirmAccont}
			/>

			<div className="flex w-full px-2 flex-col md:flex-row gap-7 justify-between">
				<div className="min-w-[260px] mx-auto w-[70%] 2xl:w-[685px]">
					<div className="w-full bg-[#FFFEFE] lg:rounded-[24px] rounded-lg lg:px-[37px] px-5 py-3 lg:py-[29px] mb-[13px] hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
						<p className="font-semibold text-lg 2xl:text-2xl text-colorPrimary">
							{userFromBackend?.data.name}
						</p>
						<p className="font-semibold text-lg 2xl:text-2xl text-[#7D8287]">
							ID - {userFromBackend?.data.id}
						</p>

						<div className="border-b-2 mb-5 2xl:mb-[53px] border-b-colorGreen mt-[13px]" />

						<div className="flex justify-between">
							<div className="flex flex-col text-left">
								<h4 className="text-[#7d8287] font-normal 2xl:font-semibold text-sm 2xl:text-lg">
									Total Balance
								</h4>
								<h2 className="text-colorPrimary font-semibold text-sm 2xl:font-bold lg:text-lg 2xl:text-3xl">
									&#8358; {balance}
								</h2>
							</div>

							<div className="flex flex-col text-left">
								<h4 className="text-[#7d8287] font-normal 2xl:font-semibold text-sm 2xl:text-lg">
									Outgoing Balance
								</h4>
								<h2 className="text-[#7d8287] font-semibold text-sm 2xl:font-bold lg:text-lg 2xl:text-3xl">
									&#8358; {userFromBackend?.outgoingWalletBalance}
								</h2>
							</div>
						</div>

						<div className="flex justify-between mt-[20px] 2xl:mt-[53px]">
							<button
								onClick={() => setIsWithdrawing(true)}
								className="bg-[#E9303B] text-xs lg:text-base w-[100px] hover:shadow-xl transition-all duration-300 2xl:w-[143px] text-center text-white py-[9px] rounded-lg"
							>
								WITHDRAW
							</button>
							<button
								// onClick={() => setIsFunding(true)}
								onClick={handleConfirmAccount}
								className="bg-colorGreen text-xs lg:text-base w-[100px] hover:shadow-xl transition-all duration-300 2xl:w-[143px] text-center text-white py-[9px] rounded-lg"
							>
								FUND
							</button>
						</div>
					</div>

					{/* FEE CALCULATOR */}
					<div className="w-full bg-[#FFFEFE] lg:rounded-[24px] rounded-lg lg:px-[37px] px-5 py-3 lg:py-[29px] mb-[13px] hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
						<p className="2xl:text-xl text-colorPrimary">Fee Calculator</p>

						<div className="border-b-2 mb-5 2xl:mb-[53px] border-b-colorGreen mt-[13px]" />

						<div className="">
							<div className="flex justify-between items-center text-left mb-4 2xl:mb-5">
								<h4 className="text-colorPrimary font-medium lg:font-semibold text-xs lg:text-sm 2xl:text-lg">
									Enter Transaction amount:
								</h4>
								<input
									type="text"
									value={transactionAmount}
									onChange={(e) => setTransactionAmount(e.target.value)}
									placeholder="Enter amount"
									className="w-[100px] lg:w-[144px] ml-4 inline-block text-[10px] h-7 2xl:h-[34px] items-center border focus:outline-none border-[#E6E7E8] placeholder:text-[8px] 2xl:placeholder:text-xs pl-6 rounded-md"
								/>
							</div>
							<div className="flex justify-between items-center text-left mb-4 2xl:mb-5">
								<h4 className="text-colorPrimary font-medium lg:font-semibold text-xs lg:text-sm 2xl:text-lg">
									Transaction fee:
								</h4>
								<input
									type="text"
									value={TRANSACTION_FEE === 0 ? "" : TRANSACTION_FEE}
									disabled
									className="w-[100px] lg:w-[144px] ml-4 inline-block text-[10px] h-7 2xl:h-[34px] items-center disabled:bg-[#E6E7E8] border focus:outline-none border-[#E6E7E8] placeholder:text-[8px] 2xl:placeholder:text-xs pl-6 rounded-md"
								/>
							</div>
							<div className="flex justify-between items-center text-left mb-4 2xl:mb-5">
								<h4 className="text-colorPrimary font-medium lg:font-semibold text-xs lg:text-sm 2xl:text-lg">
									Total amount:
								</h4>
								<input
									type="text"
									disabled
									value={TOTAL_AMOUNT === 0 ? "" : TOTAL_AMOUNT}
									className="w-[100px] lg:w-[144px] ml-4 inline-block text-[10px] h-7 2xl:h-[34px] items-center disabled:bg-[#E6E7E8] border focus:outline-none border-[#E6E7E8] placeholder:text-[8px] 2xl:placeholder:text-xs pl-6 rounded-md"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* TRANSACTIONS PAGE */}
				<div className="w-full h-[100%] overflow-y-scroll mt-[-20px] md:mt-0 mx-1 py-7 lg:py-8 px-7 lg:px-12 bg-white rounded-[24px]">
				<div
						className="flex justify-end "
						onClick={onCreateTransactionClicked}
					>
						<button className="bg-colorGreen text-xs lg:text-base flex text-white items-center rounded-md px-2 py-2 lg:py-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-700 pointer-events-auto">
							<span>Create transaction</span>
							<img src={Add} alt="add" className="mb-[-6px]" />
						</button>
					</div>
					<div className="flex justify-between  mb-3 font-medium 2xl:font-bold text-xs lg:text-base 2xl:text-lg text-colorPrimary items-start border-b border-b-[#CFD8DC]">
						<span
							onClick={() => {
								setActive("alltransaction");
							}}
							className="border-b-[3px] border-b-colorSecondary pb-5 cursor-pointer hover:opacity-70"
						>
							All
						</span>
						<span
							onClick={() => {
								setActive("ongoing");
								console.log(active, "active");
							}}
							className="cursor-pointer hover:opacity-70 hover:border-b-[3px] hover:border-b-colorSecondary transition-all duration-300 "
						>
							On-going
						</span>
						<span
							onClick={() => {
								setActive("cancelled");
								console.log(active, "active");
							}}
							className="cursor-pointer hover:opacity-70 hover:border-b-[3px] hover:border-b-colorSecondary transition-all duration-300"
						>
							Cancelled
						</span>
						<span
							onClick={() => {
								setActive("completed");
								console.log(active, "active");
							}}
							className="cursor-pointer hover:opacity-70 hover:border-b-[3px] hover:border-b-colorSecondary transition-all duration-300"
						>
							Completed
						</span>
					</div>

					
					<div />

					<div className=" overflow-x-auto mx-auto h-[57rem]">
						<table className="w-full  justify-between text-left">
							{/* <thead className="text-sm font-bold text-[#A6A6A6]">
							<tr className=" ">
								<th scope="col" className="py-3 px-6">
									Transactions
								</th>
								<th scope="col" className="py-3 px-6">
									Vendor name
								</th>
								<th scope="col" className="py-3 px-6">
									Amount
								</th>
								<th scope="col" className="py-3 px-6">
									Date
								</th>
							</tr>
						</thead> */}

						{
							showOngoing || showCanceled || showCompleted ?(
								<div>
					{showOngoing && (
						<Ongoings
							showOngoingHandler={showOngoingHandler}
							showOngoing={showOngoing}
						/>
					)}
					{showCompleted && (
						<Completeds
							showCompletedHandler={showCompletedHandler}
							showCompleted={showCompleted}
						/>
					)}
					{showCanceled && (
						<Cancelleds
							showCancelHandler={showCancelHandler}
							showCanceled={showCanceled}
						/>
					)}
				</div>
							):(
							
										<tbody className="text-colorPrimary font-medium text-xs">
								{active === "alltransaction" && (
									<div>
										<div
											className="tab-pane fade show active"
											id="tabs-home"
											role="tabpanel"
											aria-labelledby="tabs-home-tab"
										>
											{done?.length === 0 ? (
												<div>
													<img
														className="w-[283px] h-[223px] object-contain"
														src={"notrans"}
														alt="info"
													/>
												</div>
											) : (
												<div>
													{done?.map((item) => (
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
															className="flex items-center px-1.5 mb-4 justify-between  rounded-md  md:px-4"
														>
															<div className="flex items-center justify-center">
																<img
																	className="w-6"
																	src={completed}
																	alt="Awaiting icon"
																/>
																<div className="pl-1.5 pt-2">
																	<p className="text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																		{item?.product_name}
																	</p>
																	<small className=" w-[50px] overflow-hidden md:w-[65px]">
																		Completed
																	</small>
																</div>
															</div>
															<p className="text-[#262466] text-center">
																{item?.vendor?.location?.toUpperCase()}
															</p>
															<p className="text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																₦{item?.amount}
															</p>
															<p className="text-[#262466] text-center">
																{moment(item?.created_at).format("DD/MM/YYYY")}
															</p>
														</div>
													))}
												</div>
											)}

											{cancels?.map((item) => (
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
													className="flex items-center px-1.5 mb-4 justify-between  rounded-md md:px-4"
												>
													<div className="flex items-center justify-center">
														<img
															className="w-6"
															src={cancelled}
															alt="Awaiting icon"
														/>
														<div className="pl-1.5 pt-2">
															<p className="text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																{item?.product_name}
															</p>
															<small className=" w-[50px] overflow-hidden md:w-[65px]">
																{item?.status}
															</small>
														</div>
													</div>
													<p className="text-[#262466] text-center">
														{item?.vendor?.location?.toUpperCase()}
													</p>
													<p className="text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
														₦{item?.amount}
													</p>
													<p className="text-[#262466] text-center">
														{moment(item?.created_at).format("DD/MM/YYYY")}
													</p>
												</div>
											))}
											{out?.map((item) => (
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
													className="flex items-center px-1.5 mb-4 justify-between  rounded-md md:px-4"
												>
													<div className="flex items-center justify-center">
														<img
															className="w-6"
															src={onGoing}
															alt="Awaiting icon"
														/>
														<div className="pl-1.5 pt-2">
															<p className="text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																{item?.product_name}
															</p>
															<small className=" w-[50px] overflow-hidden md:w-[65px]">
																{item?.status}
															</small>
														</div>
													</div>
													<p className="text-[#262466] text-center">
														{item?.vendor?.location?.toUpperCase()}
													</p>
													<p className="text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
														₦{item?.amount}
													</p>
													<p className="text-[#262466] text-center">
														{moment(item?.created_at).format("DD/MM/YYYY")}
													</p>
												</div>
											))}
										</div>
									</div>
								)}

								{active === "ongoing" && (
									<div>
										{outgoing?.length === 0 ? (
											<div>
												<img
													className="w-[283px] h-[223px] object-contain"
													src={"notrans"}
													alt="info"
												/>
											</div>
										) : (
											<div>
												{outgoing?.map((newout) => {
													console.log(newout, "new out");
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
															className="tab-pane fade show active"
															id="tabs-home"
															role="tabpanel"
															aria-labelledby="tabs-home-tab"
														>
															<div className="flex items-center px-1.5 mb-4 justify-between rounded-md md:px-4">
																<div className="flex items-center justify-center">
																	<img
																		className="w-6"
																		src={onGoing}
																		alt="Awaiting icon"
																	/>
																	<div className="pl-1.5 pt-2">
																		<p className="text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																			{newout?.product_name}
																		</p>
																		<small className="block whitespace-nowrap w-[50px]   md:w-[65px]">
																			On-going
																		</small>
																	</div>
																</div>
																<p className="text-[#262466] text-center">
																	{newout?.amount}
																</p>
																<p className="text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																	{newout?.vendor?.location.toUpperCase()}
																</p>
																<p className="text-[#262466] text-center">
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

								{/* COMPLETED */}
								{active === "completed" && (
									<div>
										{completeData?.length === 0 ? (
											<div>
												<img
													className="w-[283px] h-[223px] object-contain"
													src={"notrans"}
													alt="info"
												/>
											</div>
										) : (
											<div>
												{completeData?.map((completeS) => {
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
															className="tab-pane fade show active"
															id="tabs-home"
															role="tabpanel"
															aria-labelledby="tabs-home-tab"
														>
															<div className="flex items-center px-1.5 mb-4 justify-between  rounded-md  md:px-4">
																<div className="flex items-center justify-center">
																	<img
																		className="w-6"
																		src={completed}
																		alt="Awaiting icon"
																	/>
																	<div className="pl-1.5 pt-2">
																		<p className="text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																			{completeS?.product_name}
																		</p>
																		<small className="block whitespace-nowrap w-[50px]  text-ellipsis md:w-[65px]">
																			Completed
																		</small>
																	</div>
																</div>
																<p className="text-[#262466] text-center">
																	{completeS?.vendor?.location.toUpperCase()}
																</p>
																<p className="text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																	{completeS?.amount}
																</p>
																<p className="text-[#262466] text-center">
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
								{/* CANCELLED  */}
								{active === "cancelled" && (
									<div>
										{cancelData?.length === 0 ? (
											<div>
												<img
													className="w-[283px] h-[223px] object-contain"
													src={"notrans"}
													alt="info"
												/>
											</div>
										) : (
											<div>
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
															className="tab-pane fade show active"
															id="tabs-home"
															role="tabpanel"
															aria-labelledby="tabs-home-tab"
														>
															<div className="flex items-center px-1.5 mb-4 justify-between  rounded-md md:px-4">
																<div className="flex items-center justify-center">
																	<img
																		className="w-6"
																		src={cancelled}
																		alt="Awaiting icon"
																	/>
																	<div className="pl-1.5 pt-2">
																		<p className="text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																			{newcancel?.product_name}
																		</p>
																		<small className="block whitespace-nowrap w-[50px]  text-ellipsis md:w-[65px]">
																			Cancelled
																		</small>
																	</div>
																</div>
																<p className="text-[#262466] text-center">
																	{newcancel?.vendor?.location?.toUpperCase()}
																</p>
																<p className="text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																	{newcancel?.amount}
																</p>
																<p className="text-[#262466] text-center">
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
							</tbody>
							
							)
						}
						</table>
					</div>
				</div>
			</div>

			<div className="hidden md:flex md:justify-center md:items-center md:ml-96 md:mt-16 md:mb-5 lg:hidden">
				<img src={SecuredBy} alt="secured by scam trust" />
			</div>

			{/* FAQ AND CHAT BUTTON */}
			<div className="flex flex-wrap md:flex-col lg:flex-row lg:mt-[-180px] lg:mx-8 justify-start items-start text-colorPrimary mt-6 md:mt-[-23.7rem] md:ml-11 ml-9">
				<div
					onClick={handleFaq}
					className="w-[200px] mx-auto md:mx-0 lg:mx-0 hover:scale-105 transition-all duration-500 2xl:w-[180px] py-[31px] px-[35px] bg-[#FFEFD9] rounded-3xl mb-3 lg:mb-0 lg:mr-5"
				>
					<div className="bg-[#ff9300] mb-4 grid place-content-center h-[46px] w-[46px] rounded-full">
						<img
							className="w-[23px] h-[23px] object-contain"
							src={Info}
							alt="info"
						/>
					</div>
					<h6 className="font-semibold text-xl">FAQs</h6>
					<p>Find answers instantly</p>
				</div>

				<div
					onClick={setModalIsOpenToTrue}
					className="w-[200px] mx-auto md:mx-0 lg:mx-0 hover:scale-105 transition-all duration-500 2xl:w-[180px] py-[31px] px-[35px] bg-[#E2D8F1] rounded-3xl"
				>
					<div className="bg-[#5F0AC3] mb-4 grid place-content-center h-[46px] w-[46px] rounded-full">
						<img
							className="w-[23px] h-[23px] object-contain"
							src={Chat}
							alt="chat"
						/>
					</div>
					<h6 className="font-semibold text-xl">Chat</h6>
					<div>
						<button>Click to chat</button>

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

			<div className="lg:flex lg:mt-28 lg:mb-0 md:hidden mt-16 flex items-center justify-center">
				<img src={SecuredBy} className="ml-5" alt="secured by scam trust" />
			</div>
		</div>
	);
};


export default CustomerDashboard;
