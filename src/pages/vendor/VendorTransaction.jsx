import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ReactPaginate from "react-paginate";
import axios from "axios";
import AwaitingApproval from "../../assets/images/svg/awaiting-approval.svg";
import Completed from "../../assets/images/svg/completed.svg";
import Cancelled from "../../assets/images/svg/cancelled.svg";
import Ongoing from "../../assets/images/svg/on-going.svg";
import CancelledTab from "../../assets/images/svg/cancelled-tab.svg";
import CompletedTab from "../../assets/images/svg/completed-tab.svg";
import TransactionType from "../../components/TransactionType/TransactionType";
import { fetchTransactions } from "../../services/transactions";
import SideBar from "../../components/SideBar/SideBar";
import "./VendorTransaction.css";
import { VendorTransactionItems } from "./VendorTransactionItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import notrans from "../../assets/notrans.svg";
import Ongoings from "../../components/Pages/vendorTransact/VendorOngoing";
import Completeds from "../../components/Pages/vendorTransact/VendorCompleted";
import Cancelleds from "../../components/Pages/vendorTransact/VendorCancelled";
import Accepteds from "../../components/Pages/vendorTransact/VendorAwaitingApproval";
import moment from "moment";
import logo from '../../assets/loader-img.png'
const VendorTransaction = (props) => {
	const { data } = props;
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [view, setView] = useState();

	const [isWithdrawing, setIsWithdrawing] = useState(false);

	const [showCanceled, setShowCanceled] = useState(false);
	const [showCompleted, setShowCompleted] = useState(false);
	const [showOngoing, setShowOngoing] = useState(false);
	const [showAccepted, setShowAccepted] = useState(false);
	const [outgoing, setOutGoing] = useState();
	const [completeData, setCompleteData] = useState();
	const [cancelData, setCancelData] = useState();
	const [out, setOut] = useState();
	const [done, setDone] = useState();
	const [cancels, setCancels] = useState();
	const [active, setActive] = useState("alltransaction");
	const [accepted, setAccepted] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const showOngoingHandler = () => {
		setShowOngoing((prevState) => !prevState);
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

	const [select3, setSelect3] = useState(false);

	const handleSelect4 = () => {
		setSelect4(!select4);
		setSelect(false);
		setSelect2(false);
		setSelect3(false);
	};

	const [select4, setSelect4] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				console.log(await fetchTransactions());
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const listItemsClassName =
		"font-semibold cursor-pointer transition-all duration-200 delay-150 hover:mb-[translate-y-1] text-colorPrimary mr-[13.5vw] 2xl:mr-[100px]";

	const [transactions, setTransactionst] = useState(0);
	const [loading, setLoading] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const [transactionsPerPage, setTransactionsPerPage] = useState(0);

	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 2;
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

	useEffect(() => {
		const fetchTransactions = async () => {
			setLoading(true);
			const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
			setTransactionsPerPage(res.data);
			setLoading(false);
		};
		fetchTransactions();
	}, []);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(VendorTransactionItems.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(VendorTransactionItems.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const handlePageClick = (event) => {
		const newOffset =
			(event.selected * itemsPerPage) % VendorTransactionItems.length;
		setItemOffset(newOffset);
	};
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
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

				const data = await axios.get(API_URL, config).finally(() => {
					setIsLoading(false);
				});;
				console.log(data?.data?.data, "datas");
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
	const showCompletedHandler = () => {
		setShowCompleted((prevState) => !prevState);
	};
	const showAcceptedHandler = () => {
		setShowAccepted((prevState) => !prevState);
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
	return (
		<Layout heading="Transaction">
				{isLoading ? (
				<img
					src={logo}
					className="flex mt-90 m-auto transition-timing-function: cubic-bezier(0.4, 0, 1, 1) animate-bounce"
					alt=""
				/>
			) : (
				<div>
			{showOngoing || showCanceled || showAccepted || showCompleted ? (
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
					{showAccepted && (
						<Accepteds
							showAcceptedHandler={showAcceptedHandler}
							showAccepted={showAccepted}
						/>
					)}
				</div>
			) : (
				<div className="transactions-card-cover flex items-center justify-center mt-2">
					<div className="transactions-card h-[40rem] md:h-[41rem] lg:h-[57rem] xl:h-[65rem] 2xl:h-[100rem] 2xl:mt-20 overflow-y-scroll">
						<div className="Transactions">
							<div className="heading py-5 md:pl-8 lg:py-12 2xl:py-20">
								<h4 className="2xl:text-5xl">Transaction</h4>
							</div>
							<div className="flex items-center justify-between lg:justify-start 2xl:mb-7 pb-1 md:mx-20 lg:mx-0 lg:ml-10 font-medium 2xl:font-bold text-xs lg:text-lg 2xl:text-lg text-colorPrimary lg:border-none border-b  border-b-[#CFD8DC]">
								<span
									onClick={() => {
										setActive("alltransaction");
									}}
									className="lg:mr-5 xl:mr-7 xl:text-xl 2xl:text-3xl border-b-[3px] border-b-[#3AB75D] cursor-pointer hover:opacity-70"
								>
									All
								</span>
								<span
									onClick={() => {
										setActive("ongoing");
										console.log(active, "active");
									}}
									className="lg:mx-5 xl:mx-7 xl:text-xl 2xl:text-3xl cursor-pointer hover:opacity-70 hover:border-b-[3px] hover:border-b-colorSecondary transition-all duration-300 "
								>
									On-going
								</span>
								<span
									onClick={() => {
										setActive("cancelled");
										console.log(active, "active");
									}}
									className="lg:mx-5 xl:mx-7 xl:text-xl 2xl:text-3xl cursor-pointer hover:opacity-70 hover:border-b-[3px] hover:border-b-colorSecondary transition-all duration-300"
								>
									Cancelled
								</span>
								<span
									onClick={() => {
										setActive("completed");
										console.log(active, "active");
									}}
									className="lg:mx-5 xl:mx-7 xl:text-xl 2xl:text-3xl cursor-pointer hover:opacity-70 hover:border-b-[3px] hover:border-b-colorSecondary transition-all duration-300"
								>
									Completed
								</span>
							</div>
							<div class="tab-content" id="tabs-tabContent">
								{active === "alltransaction" && (
									<div
										className="tab-pane fade show active mt-8"
										id="tabs-home"
										role="tabpanel"
										aria-labelledby="tabs-home-tab"
									>
										{done?.map((item) => {
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
													className="grid-rows-5 grid-flow-col justify-center"
												>
														<div
														onClick={() => {
															setView(item?.transaction_id);
															getTransaction();
															window?.localStorage?.setItem(
																"idCompleted",
																item?.transaction_id
															);
															showOngoingHandler(item?.transaction_id);
														}}
														key={item?.id}
														className="tab-pane border rounded-lg mt-4 lg:py-3 fade show active"
														id="tabs-home"
														role="tabpanel"
														aria-labelledby="tabs-home-tab"
													>
														<div className="flex items-center px-1.5 mb-0 justify-between md:px-4">
															<div className="flex items-center Transaction-body-profile pushDown3 justify-center">
																<img
																	className="lg:w-16 lg:h-16 xl:w-20 xl:h-20 xl:mr-5 lg:mr-4 object-cover inline-block h-8 w-8 rounded-full ring-2 ring-white"
																	src={item?.customer?.image_url}
																	alt="Awaiting icon"
																/>
																<div className="pl-1.5">
																	<p className="lg:pb-3 lg:text-base xl:text-xl text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																		{item?.product_name}
																	</p>
																	<small className="lg:text-xs xl:text-sm block whitespace-nowrap w-[50px] md:w-[65px]">
																		{item?.status}
																	</small>
																</div>
															</div>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center">
																{item?.customer?.name ||
																	item?.customer?.username}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																{item?.amount}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center">
																{moment(item?.created_at).format(
																	"DD/MM/YYYY"
																)}
															</p>
														</div>
													</div>
												</div>
											);
										})}

										{cancels?.map((item, index, id) => {
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
													className="tab-pane border rounded-lg mt-4 lg:py-3 fade show active"
												>
													<div className="flex items-center px-1.5 mb-0 justify-between md:px-4">
															<div className="flex items-center Transaction-body-profile pushDown3 justify-center">
																<img
																	className="inline-block h-8 w-8 lg:w-16 lg:h-16 xl:w-20 xl:h-20 xl:mr-5 lg:mr-4 object-cover rounded-full ring-2 ring-white"
																	src={item?.customer?.image_url}
																	alt="Awaiting icon"
																/>
																<div className="pl-1.5">
																	<p className="text-[#262466] lg:pb-3 lg:text-base xl:text-xl mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																		{item?.product_name}
																	</p>
																	<small className="lg:text-xs xl:text-sm block whitespace-nowrap w-[50px] md:w-[65px]">
																		{item?.status}
																	</small>
																</div>
															</div>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center ">
																{item?.customer?.name ||
																	item?.customer?.username}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																{item?.amount}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center">
																{moment(item?.created_at).format(
																	"DD/MM/YYYY"
																)}
															</p>
														</div>
												</div>
											);
										})}
										{out?.map((item) => {
											return (
												<div
													key={item.id}
													onClick={() => {
														setView(item?.transaction_id);
														getTransaction();
														window?.localStorage?.setItem(
															"idOngoing",
															item?.transaction_id
														);
														showOngoingHandler(item?.transaction_id);
													}}
													className="tab-pane border rounded-lg mt-4 lg:py-3 fade show active"
												>
														<div className="flex items-center px-1.5 mb-0 justify-between md:px-4">
															<div className="flex items-center Transaction-body-profile pushDown3 justify-center">
																<img
																	className="lg:w-16 lg:h-16 xl:w-20 xl:h-20 xl:mr-5 lg:mr-4 object-cover inline-block h-8 w-8 rounded-full ring-2 ring-white "
																	src={item?.customer?.image_url}
																	alt="Awaiting icon"
																/>
																<div className="pl-1.5">
																	<p className="lg:pb-3 lg:text-base xl:text-xl Transaction-details1 text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																		{item?.product_name}
																	</p>
																	<small className="lg:text-xs xl:text-sm Transaction-description block whitespace-nowrap  w-[45px] overflow-hidden text-ellipsis md:w-[65px] ">
																		{item?.status}
																	</small>
																</div>
															</div>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center ">
																{item?.customer?.name ||
																	item?.customer?.username}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																{item?.amount}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center">
																{moment(item?.created_at).format(
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
							{active === "ongoing" && (
								<div>
									{outgoing?.length === 0 ? (
										<div>
											<img
												className="w-[283px] h-[223px] object-contain"
												src={notrans}
												alt="info"
											/>
										</div>
									) : (
										<div className="  py-2 grid-rows-4 grid-flow-col  justify-items-center">
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
														className="tab-pane border rounded-lg mt-4 lg:py-3 fade show active"
														id="tabs-home"
														role="tabpanel"
														aria-labelledby="tabs-home-tab"
													>
														<div className="flex items-center px-1.5 mb-0 justify-between md:px-4">
															<div className="flex items-center Transaction-body-profile pushDown3 justify-center">
																<img
																	className="lg:w-16 lg:h-16 xl:w-20 xl:h-20 xl:mr-5 lg:mr-4 inline-block h-8 w-8 rounded-full ring-2 ring-white "
																	src={newout?.customer?.image_url}
																	alt="Awaiting icon"
																/>
																<div className="pl-1.5">
																	<p className="lg:pb-3 lg:text-base xl:text-xl text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																		{newout?.product_name}
																	</p>
																	<small className="lg:text-xs xl:text-sm block whitespace-nowrap overflow-hidden text-ellipsis w-[50px] md:w-[65px]">
																		{newout?.status}
																	</small>
																</div>
															</div>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center">
																{newout?.customer?.name ||
																	newout?.customer?.username}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																{newout?.amount}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center">
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
								<div>
									{cancelData?.length === 0 ? (
										<div>
											<img
												className="w-[283px] h-[223px] object-contain"
												src={notrans}
												alt="info"
											/>
										</div>
									) : (
										<div className=" py-2 grid-rows-5 grid-flow-col  justify-items-center">
											{cancelData?.map((newout) => {
												return (
													<div
														onClick={() => {
															setView(newout?.transaction_id);
															getTransaction();
															window?.localStorage?.setItem(
																"idCancelled",
																newout?.transaction_id
															);
															showOngoingHandler(newout?.transaction_id);
														}}
														key={newout?.id}
														className="tab-pane border rounded-lg mt-4 lg:py-3 fade show active"
														id="tabs-home"
														role="tabpanel"
														aria-labelledby="tabs-home-tab"
													>
														<div className="flex items-center px-1.5 mb-0 justify-between md:px-4">
															<div className="flex items-center Transaction-body-profile pushDown3 justify-center">
																<img
																	className="lg:w-16 lg:h-16 xl:w-20 xl:h-20 xl:mr-5 lg:mr-4 object-cover inline-block h-8 w-8 rounded-full ring-2 ring-white "
																	src={newout?.customer?.image_url}
																	alt="Awaiting icon"
																/>
																<div className="pl-1.5">
																	<p className="lg:pb-3 lg:text-base xl:text-xl text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																		{newout?.product_name}
																	</p>
																	<small className="lg:text-xs xl:text-sm block whitespace-nowrap overflow-hidden text-ellipsis w-[50px] md:w-[65px]">
																		{newout?.status}
																	</small>
																</div>
															</div>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center">
																{newout?.customer?.name ||
																	newout?.customer?.username}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																{newout?.amount}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center">
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

							{active === "completed" && (
								<div>
									{completeData?.length === 0 ? (
										<div>
											<img
												className="w-[283px] h-[223px] object-contain"
												src={notrans}
												alt="info"
											/>
										</div>
									) : (
										<div className="py-2 grid-rows-5 grid-flow-col  justify-items-center">
											{completeData?.map((newout) => {
												return (
													<div
														onClick={() => {
															setView(newout?.transaction_id);
															getTransaction();
															window?.localStorage?.setItem(
																"idCompleted",
																newout?.transaction_id
															);
															showOngoingHandler(newout?.transaction_id);
														}}
														key={newout?.id}
														className="tab-pane border rounded-lg mt-4 lg:py-3 fade show active"
														id="tabs-home"
														role="tabpanel"
														aria-labelledby="tabs-home-tab"
													>
														<div className="flex items-center px-1.5 mb-0 justify-between md:px-4">
															<div className="flex items-center Transaction-body-profile pushDown3 justify-center">
																<img
																	className="lg:w-16 lg:h-16 xl:w-20 xl:h-20 xl:mr-5 lg:mr-4 object-cover inline-block h-8 w-8 rounded-full ring-2 ring-white "
																	src={newout?.customer?.image_url}
																	alt="Awaiting icon"
																/>
																<div className="pl-1.5">
																	<p className="lg:pb-3 lg:text-base xl:text-xl text-[#262466] mb-[-8px] block whitespace-nowrap w-[45px] overflow-hidden text-ellipsis md:w-[65px]">
																		{newout?.product_name}
																	</p>
																	<small className="lg:text-xs xl:text-sm block whitespace-nowrap overflow-hidden text-ellipsis w-[50px] md:w-[65px]">
																		{newout?.status}
																	</small>
																</div>
															</div>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center ">
																{newout?.customer?.name ||
																	newout?.customer?.username}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] block whitespace-nowrap w-[60px] text-center overflow-hidden text-ellipsis md:w-[60px]">
																{newout?.amount}
															</p>
															<p className="lg:text-base xl:text-xl text-[#262466] text-center">
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
						</div>
						{/* pagination */}
					</div>
				</div>
				
			)}
			</div>)}
		</Layout>
	);
};

export default VendorTransaction;

const transactionTypes = [
	{ name: "All Transactions" },
	{ name: "Out-going" },
	{ name: "Completed", icon: CompletedTab },
	{ name: "Cancelled", icon: CancelledTab },
];