/** @format */

import React from "react";
import add from "../../assets/create-icon.png";
import cancel from "../../assets/cancelled-icon.png";
import complete from "../../assets/completed-icon.png";
import onGoing from "../../assets/on-going-icon.png";
import cancelled from "../../assets/cancel-icon.png";
import completed from "../../assets/complete-icon.png";
import Layout from "../Layout/Layout";
import Backdrop from "../../components/UI/Backdrop";
import notrans from "../../assets/notrans.svg";
import InitiationSuccessful from "../InitiateTransaction/InitiationSuccessful";
import TransactionPreview from "../InitiateTransaction/TransactionPreview";
import InitiateTransaction from "../../components/InitiateTransaction/InitiateTransaction";
import { useNavigate } from "react-router-dom";
import "./customerTransact.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
// import { useNavigate } from "react-router-dom";
import Ongoing from "./custTransaction/Ongoing";
import Completed from "./custTransaction/Completed";
import Cancelled from "./custTransaction/Cancelled";

const CustomerTransact = (props) => {
	//	const { setShowInitiateTransaction } = props;

	const [showInitiateTransaction, setShowInitiateTransaction] = useState(false);
	const [showTransactionPreview, setShowTransactionPreview] = useState(false);
	const [showTransactionSuccess, setShowTransactionSuccess] = useState(false);
	const [active, setActive] = useState("alltransaction");
	const [outgoing, setOutGoing] = useState();
	const [completeData, setCompleteData] = useState();
	const [cancelData, setCancelData] = useState();

	const [view, setView] = useState();
	const [out, setOut] = useState();
	const [done, setDone] = useState();
	const [cancels, setCancels] = useState();
	const onCreateTransactionClicked = () => {
		setShowInitiateTransaction((prevState) => !prevState);
		console.log("props");
	};
	const [showCanceled, setShowCanceled] = useState(false);
	const [showCompleted, setShowCompleted] = useState(false);
	const [showOngoing, setShowOngoing] = useState(false);
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	const showOngoingHandler = () => {
		setShowOngoing((prevState) => !prevState);
	};
	const showCancelHandler = () => {
		setShowCanceled((prevState) => !prevState);
	};
	const showCompletedHandler = () => {
		setShowCompleted((prevState) => !prevState);
	};
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

			// console.log(values, "values");
			// return response;
		} catch (error) {
			console.log(error, "errorss");
		}
	};

	const navigate = useNavigate();

	return (
		<Layout>
			{showInitiateTransaction ? (
				<Backdrop showInitiateTransaction={showInitiateTransaction}>
					<InitiateTransaction
						setShowInitiateTransaction={setShowInitiateTransaction}
						setShowTransactionPreview={setShowTransactionPreview}
					/>
				</Backdrop>
			) : (
				<></>
			)}
			{showTransactionPreview ? (
				<Backdrop showTransactionPreview={showTransactionPreview}>
					<TransactionPreview
						setShowInitiateTransaction={setShowInitiateTransaction}
						setShowTransactionPreview={setShowTransactionPreview}
						setShowTransactionSuccess={setShowTransactionSuccess}
					/>
				</Backdrop>
			) : (
				<></>
			)}
			{showTransactionSuccess ? (
				<Backdrop showTransactionSuccess={showTransactionSuccess}>
					<InitiationSuccessful
						setShowTransactionSuccess={setShowTransactionSuccess}
					/>
				</Backdrop>
			) : (
				<></>
			)}
			{showOngoing || showCanceled || showCompleted ? (
				<div>
					{showOngoing && (
						<Ongoing
							showOngoingHandler={showOngoingHandler}
							showOngoing={showOngoing}
						/>
					)}
					{showCompleted && (
						<Completed
							showCompletedHandler={showCompletedHandler}
							showCompleted={showCompleted}
						/>
					)}
					{showCanceled && (
						<Cancelled
							showCancelHandler={showCancelHandler}
							showCanceled={showCanceled}
						/>
					)}
				</div>
			) : (
				<div className=" ml-5 bg-white rounded-[10px] h-full md:h-full lg:h-full py-7 px-3 md:mb-[30px] md:mt-[0px] md:mx[25px] lg:mt-[10px] lg:px-[50px] lg:mx-12">
					<div className="items-center my-5 mx-3 md:mx-12 lg:mx-[10px]">
						<h1 className="text-xl lg:text-3xl text-[#262466] font-semibold lg:font-bold md:text-2xl">
							Transactions
						</h1>
						<div className="flex justify-end">
							<button
								onClick={onCreateTransactionClicked}
								className="bg-[#3ab75d] text-white rounded-md flex justify-center py-0 pl-2 w-[125px] lg:w-[150px]"
							>
								<span className="pt-3 text-xs lg:text-sm">
									Create transaction
								</span>
								<span className="pl-1 pt-1.5">
									<img src={add} alt="..." />
								</span>
							</button>
						</div>
					</div>
					<ul
						class="nav nav-tabs flex justify-center lg:justify-start list-none border-b-0 mt-3 mb-5"
						id="tabs-tab"
						role="tablist"
					>
						<li
							onClick={() => {
								setActive("alltransaction");
							}}
							className="nav-item md:px-5"
							role="presentation"
						>
							<a
								href="/"
								className="
      nav-link
      block
      font-medium
      text-xs
      border-x-0 border-t-0 border-b-2 border-transparent  
      pr-1
      py-2
      my-2
      md:text-sm
      lg:text-base
      active
    "
								id="tabs-home-tab"
								data-bs-toggle="pill"
								data-bs-target="#tabs-home"
								role="tab"
								aria-controls="tabs-home"
								aria-selected="true"
							>
								All Transactions
							</a>
						</li>
						<li
							onClick={() => {
								setActive("ongoing");
								console.log(active, "active");
							}}
							className="nav-item md:px-5"
							role="presentation"
						>
							<a
								href="/"
								class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      px-1
      py-2
      my-2
      md:text-sm
      lg:text-base
      focus:border-transparent
    "
								id="tabs-profile-tab"
								data-bs-toggle="pill"
								data-bs-target="#tabs-profile"
								role="tab"
								aria-controls="tabs-profile"
								aria-selected="false"
							>
								On-going
							</a>
						</li>
						<li
							onClick={() => {
								setActive("completed");
								console.log(active, "active");
							}}
							className="nav-item md:px-5"
							role="presentation"
						>
							<a
								href="/"
								class="
      nav-link
      flex
      items-center
      justify-center
      font-medium
      text-xs
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      px-1
      py-2
      my-2
      md:text-sm
      lg:text-base
      focus:border-transparent
    "
								id="tabs-messages-tab"
								data-bs-toggle="pill"
								data-bs-target="#tabs-messages"
								role="tab"
								aria-controls="tabs-messages"
								aria-selected="false"
							>
								<span className="px-1">
									<img src={complete} alt="..." />
								</span>
								<span>Completed</span>
							</a>
						</li>
						<li
							onClick={() => {
								setActive("cancelled");
								console.log(active, "active");
							}}
							className="nav-item md:px-5"
							role="presentation"
						>
							<a
								href="/"
								class="
      nav-link
      flex
      items-center
      justify-center
      font-medium
      font-medium
      text-xs
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      pl-1
      py-2
      my-2
      md:text-sm
      lg:text-base
      focus:border-transparent
    "
								id="tabs-cancel-tab"
								data-bs-toggle="pill"
								data-bs-target="#tabs-cancel"
								role="tab"
								aria-controls="tabs-cancel"
								aria-selected="false"
							>
								<span className="px-1">
									<img src={cancel} alt="..." />
								</span>
								<span>Cancelled</span>
							</a>
						</li>
					</ul>

					{/* TAB CONTENT */}
					<div class="tab-content" id="tabs-tabContent">
						{/* ALL TRANSACTONS */}

						{active === "alltransaction" && (
							<div>
								<div
									className="tab-pane fade show active"
									id="tabs-home"
									role="tabpanel"
									aria-labelledby="tabs-home-tab"
								>
									{done?.length === 0 ? (
										<div className="flex items-center justify-center">
											<div>
												<img
													className="w-[150px] h-[220px]  object-contain"
													src={notrans}
													alt="info"
												/>
												<div></div>
											</div>
										</div>
									) : (
										<div>
											{done?.map((item) => (
												<div
													key={item?.id}
													onClick={() => {
														setView(item?.transaction_id);
														getTransaction();
														showCompletedHandler(item?.transaction_id);
														window?.localStorage?.setItem(
															"idCompleted",
															item?.transaction_id
														);
													}}
													className="flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md  md:px-4"
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
															<small className="location w-[50px] overflow-hidden md:w-[65px]">
																{item?.status}
															</small>
														</div>
													</div>
													<p className="location text-[#262466] text-center">
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
											key={item?.id}
											onClick={() => {
												setView(item?.transaction_id);
												getTransaction();
												showCancelHandler();
												window?.localStorage?.setItem(
													"idCancelled",
													item?.transaction_id
												);
											}}
											className="flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md md:px-4"
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
													<small className="location overflow-hidden md:w-[65px]">
														{item?.status}
													</small>
												</div>
											</div>
											<p className="location text-[#262466] text-center">
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
											key={item?.id}
											onClick={() => {
												setView(item?.transaction_id);
												getTransaction();
												window?.localStorage?.setItem(
													"idOngoing",
													item?.transaction_id
												);
												showOngoingHandler(item?.transaction_id);
											}}
											className="flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md md:px-4"
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
													<small className=" w-[50px] location overflow-hidden md:w-[65px]">
														{item?.status}
													</small>
												</div>
											</div>
											<p className="location text-center">
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

						{/* OUT-GOING */}

						{active === "ongoing" && (
							<div>
								{outgoing?.length === 0 ? (
									<div className="flex items-center justify-center">
										<div>
											<img
												className="w-[150px] h-[220px]  object-contain"
												src={notrans}
												alt="info"
											/>
											<div></div>
										</div>
									</div>
								) : (
									<div>
										{outgoing?.map((newout) => {
											
											return (
												<div
													key={newout?.id}
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
													<div className="flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md md:px-4">
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
																<small className="w-[50px] location overflow-hidden md:w-[65px]">
																	{newout?.status}
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
															{moment(newout?.created_at).format("DD/MM/YYYY")}
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
									<div className="flex items-center justify-center">
										<div>
											<img
												className="w-[150px] h-[220px]  object-contain"
												src={notrans}
												alt="info"
											/>
											<div></div>
										</div>
									</div>
								) : (
									<div>
										{completeData?.map((completeS) => {
											return (
												<div
													key={completeS.id}
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
													<div className="flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md  md:px-4">
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
									<div className="flex items-center justify-center">
										<div>
											<img
												className="w-[150px] h-[220px]  object-contain"
												src={notrans}
												alt="info"
											/>
											<div></div>
										</div>
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
													<div className="flex items-center px-1.5 mb-4 justify-between border-[1.5px] rounded-md md:px-4">
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
					</div>

					{/* PAGINATION */}
					<div class="flex justify-end mt-10 md:mt-5 lg:mt-[50px]">
						<nav aria-label="Page navigation example">
							<ul class="flex list-style-none">
								<li class="page-item disabled">
									<a
										class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
										href="#"
										tabindex="-1"
										aria-disabled="true"
									>
										Previous
									</a>
								</li>
								<li class="page-item active">
									<a
										class="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
										href="#"
									>
										1 <span class="visually-hidden">(current)</span>
									</a>
								</li>
								<li class="page-item">
									<a
										class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
										href="#"
									>
										2
									</a>
								</li>
								<li class="page-item">
									<a
										class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
										href="#"
									>
										3
									</a>
								</li>
								<li class="page-item">
									<a
										class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
										href="#"
									>
										Next
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			)}
		</Layout>
	);
};

export default CustomerTransact;
