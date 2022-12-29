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
import sucess from "../../images/done.svg";
import cancled from "../../images/failled.svg";
import ongoing from "../../images/ongoing.svg";

const VendorTransaction = (props) => {
	const { data } = props;
	const [activeTab, setActiveTab] = useState("All Transactions");
	const [transaction, setTransaction] = useState();
	const [onGoing, setOngoing] = useState();
	const [cancelled, setCancelled] = useState();
	const transactionTabChangeHandler = (transactionTabName) => {
		setActiveTab(transactionTabName);
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
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/customer`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);
				setTransaction(data?.data?.data);

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
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/customer/ongoing`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);
				setOngoing(data?.data?.data);
				const response = data?.data;
				// console.log(data.data.data, "ongoing data");

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
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/customer/cancelled
        `;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);
				setCancelled(data?.data?.data);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/lists/customer/completed
        `;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);
				setCancelled(data?.data?.data);
				// const response = data?.data;
				console.log(cancelled, "cancelled data");

				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// console.log(cancelled,"hello");
	return (
		<Layout heading="Transaction">
			<div className="transactions-card-cover ">
				<div className="transactions-card">
					<div className="Transactions">
						<div className="heading px-9 py-9">
							<h4>Transaction</h4>
						</div>
						<div className="Category flex gap-6">
							{select ? (
								<h6 className="Selection active">All Transaction</h6>
							) : (
								<h6 className="Selection" onClick={handleSelect}>
									All Transaction
								</h6>
							)}
							{select2 ? (
								<h6 className="Selection active">Out-going</h6>
							) : (
								<h6 className="Selection" onClick={handleSelect2}>
									Out-going
								</h6>
							)}
							{select3 ? (
								<h6 className="Selection active">Cancelled</h6>
							) : (
								<h6 className="Selection" onClick={handleSelect3}>
									Cancelled
								</h6>
							)}
							{select4 ? (
								<h6 className="Selection active">Completed</h6>
							) : (
								<h6 className="Selection" onClick={handleSelect4}>
									Completed
								</h6>
							)}
						</div>

						{transaction?.map((item, index, id) => {
							return (
								<div className=" px-9 py-2 grid-rows-5 grid-flow-col  justify-items-center">
									<div
										className={select ? "Transaction1 border" : "hide"}
										key={item.id}
									>
										<div className="Transaction-body">
											<div className="Transaction-body-profile pushDown3">
												<img
													className="TransactionStatusimg pushDown1"
													src={ongoing}
													alt="Scam Trust"
												/>
												<div>
													<h5 className="Transaction-details1">
														{item.product_name}
													</h5>
													<p className="Transaction-description">
														{item.status}
													</p>
												</div>
											</div>
										</div>
										<div className="Transaction-details1 ">
											<h5>{item.vendor.answer}</h5>
										</div>
										<div className="Transaction-details1 pushDown">
											<h5>{item.amount}</h5>
										</div>
										<div className="Transaction-details1 pushDown">
											<h5>{item.due_date}</h5>
										</div>
										<div className="Transaction-details2 pushDown">
											<h5>
												<FontAwesomeIcon icon={faEllipsis} />
											</h5>
										</div>
									</div>
								</div>
							);
						})}

						{onGoing
							?.filter((item) => {
								return item.status === "PENDING VENDOR ACCEPTANCE";
							})
							.map((item, index, id) => {
								return (
									<div
										className={select2 ? "Transaction1 border" : "hide"}
										key={item.id}
									>
										<div className="Transaction-body">
											<div className="Transaction-body-profile pushDown3">
												<img
													className="TransactionStatusimg pushDown1"
													src={ongoing}
													alt="Scam Trust"
												/>
												<div>
													<h5 className="Transaction-details1">
														{item.product_name}
													</h5>
													<p className="Transaction-description">
														{item.status}
													</p>
												</div>
											</div>
										</div>
										<div className="Transaction-details1 pushDown">
											<h5>{item.vendor.answer}</h5>
										</div>
										<div className="Transaction-details1 pushDown">
											<h5>{item.amount}</h5>
										</div>
										<div className="Transaction-details1 pushDown">
											<h5>{item.due_date}</h5>
										</div>
										<div className="Transaction-details2 pushDown">
											<h5>
												<FontAwesomeIcon icon={faEllipsis} />
											</h5>
										</div>
									</div>
								);
							})}

						{cancelled
							?.filter((item) => {
								return item.status === "CANCELLED BY VENDOR";
							})
							.map((item, index) => {
								return (
									<div className="px-9">
										{" "}
										<div className={select3 ? "Transaction1 border" : "hide"}>
											<div className="Transaction-body ">
												<div className="Transaction-body-profile pushDown3">
													<img
														className="TransactionStatusimg pushDown1"
														src={cancled}
														alt="Scam Trust"
													/>
													<div>
														<h5 className="Transaction-details1">
															{item?.product_name}
														</h5>
														<p className="Transaction-description">
															{item.status}
														</p>
													</div>
												</div>
											</div>{" "}
											<div className="Transaction-details1 pushDown">
												<h5>{item?.vendor?.name}</h5>
											</div>
											<div className="Transaction-details1 pushDown">
												<h5>{item?.amount}</h5>
											</div>
											<div className="Transaction-details1 pushDown">
												<h5>{item?.due_date}</h5>
											</div>
											<div className="Transaction-details2 pushDown">
												<h5>
													<FontAwesomeIcon icon={faEllipsis} />
												</h5>
											</div>
										</div>
									</div>
								);
							})}

						{VendorTransactionItems.filter((item) => {
							return item.status === "completed";
						}).map((item, index) => {
							return (
								<div className="px-9 py-2">
									<div className={select4 ? "Transaction1 border" : "hide"}>
										<div className="Transaction-body">
											<div className="Transaction-body-profile pushDown3">
												<img
													className="TransactionStatusimg pushDown1"
													src={item.satusImg}
													alt="Scam Trust"
												/>
												<div>
													<h5 className="Transaction-details1">
														{item.itemName}
													</h5>
													<p className="Transaction-description">
														{item.status}
													</p>
												</div>
											</div>
										</div>
										<div className="Transaction-details1 pushDown">
											<h5>{item.businessName}</h5>
										</div>
										<div className="Transaction-details1 pushDown">
											<h5>{item.amount}</h5>
										</div>
										<div className="Transaction-details1 pushDown1">
											<h5>{item.date}</h5>
										</div>
										<div className="Transaction-details2 pushDown">
											<h5>
												<FontAwesomeIcon icon={faEllipsis} />
											</h5>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					{/* pagination */}
				</div>
			</div>
	      {/* </div> */}
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
const transactions = [
	{
		id: 0,
		icon: AwaitingApproval,
		transactionItem: "Iphone 11...",
		transactionStatus: "Awaiting approval",
		buyer: "Ilerioluwa Brown",
		amount: "250,000.00",
		date: "25th May, 2022",
	},
	{
		id: 1,
		icon: Completed,
		transactionItem: "Airpod pro...",
		transactionStatus: "Completed",
		buyer: "Ilerioluwa Brown",
		amount: "250,000.00",
		date: "25th May, 2022",
	},
	{
		id: 2,
		icon: Cancelled,
		transactionItem: "Iphone 11...",
		transactionStatus: "Cancelled",
		buyer: "Ilerioluwa Brown",
		amount: "250,000.00",
		date: "25th May, 2022",
	},
	{
		id: 3,
		icon: Ongoing,
		transactionItem: "On-going",
		transactionStatus: "Awaiting approval",
		buyer: "Ilerioluwa Brown",
		amount: "250,000.00",
		date: "25th May, 2022",
	},
];
