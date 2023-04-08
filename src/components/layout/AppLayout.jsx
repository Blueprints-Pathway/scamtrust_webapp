/** @format */

import { Layout, Menu, Avatar, Spin } from "antd";
import React, { useEffect, useState } from "react";
import "./AppLayout.css";
import { VscArrowSwap } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import { CiWallet } from "react-icons/ci";
import { VscHome } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import search from "../../assets/images/search.png";
import scamTrustLogo from "../../assets/images/scamTrustLogo.png";
import { getLoggedInUserDetails } from "../../actions/userActions";
import ReactSearchBox from "react-search-box";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import {
	getCustomerCancelledTransactions,
	getCustomerCompletedTransactions,
	getCustomerOngoingTransactions,
	getCustomerTransactions,
} from "../../actions/customerTransactionActions";
import { listNotifications } from "../../actions/notificationActions";
import { vendorSearch } from "../../actions/miscActions";
import Notification from "./notification/Notification";
import { Link } from "react-router-dom";
import { getWalletTransactionsDetails } from "../../actions/walletActions";
import Notifications from "./notification/Notifications";
const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }) => {
	const [items, setItems] = useState([]);
	const [filteredResults, setFilteredResults] = useState([]);
	const { loading, error, data } = useSelector((state) => state.user);
	const [datas, setDatas] = useState();
	const notification = useSelector((state) => state.notification);
	const [searchInput, setSearchInput] = useState("");
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.log(
		"get user details" + loading + data + error + auth.isAuthenticated
	);
	useEffect(() => {
		if (!auth.isAuthenticated) {
			navigate("/sign-in");
			return;
		}
		dispatch(getLoggedInUserDetails());
		dispatch(getCustomerTransactions());
		dispatch(getCustomerOngoingTransactions());
		dispatch(getWalletTransactionsDetails());
		dispatch(getCustomerCancelledTransactions());
		dispatch(getCustomerCompletedTransactions());
		dispatch(listNotifications());
	}, [dispatch, auth.isAuthenticated]);
	// const {
	//   token: { colorBgContainer },
	// } = theme.useToken();
	console.log(data);
	const nameOf = loading ? "hi" : data?.data?.name || data?.data?.username;
	const first = nameOf?.at(0);
	const last = nameOf?.match(/\b(\w)/g).at(1);
	let detail = localStorage.getItem("USER_DETAILS");
	let usertype = JSON.parse(detail).data.usertype;

	const logoutUserHandler = () => {
		dispatch(logoutUser());
		console.log("logout from app layout");
		navigate("/sign-in");
	};
	console.log(notification.unreadNotifications);

	const searchInputChangeHandler = (e) => {
		console.log(e.target.value);
		dispatch(
			vendorSearch({
				search: e.target.value,
			})
		);
	};
	const getSearch = async () => {
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/misc/vendor/search`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth?.data?.access_token}`,
				},
			};
			const payload = {
				search: searchInput,
			};

			const data = await axios.post(API_URL, payload, config);

			setItems(data?.data?.data);
			// console.log(values, "values");
			// return response;
		} catch (error) {
			console.log(error, "errorss");
		}
	};
	const searchItems = (searchValue) => {
		setSearchInput(searchValue);
		if (searchInput !== "") {
			const filteredData = items.filter((item) => {
				return Object.values(item)
					.join("")
					.toLowerCase()
					.includes(searchInput.toLowerCase());
			});
			setFilteredResults(filteredData);
		} else {
			setFilteredResults(items);
		}
	};
	console.log(items, "items");

	return (
		<Layout className="wrapper">
			{loading ? (
				<Spin spinning style={{ margin: "auto" }} size="large" />
			) : (
				<React.Fragment>
					<Sider
						style={{ backgroundColor: "#232164", zIndex: "30" }}
						breakpoint="lg"
						collapsedWidth="0"
						onBreakpoint={(broken) => {
							console.log(broken);
						}}
						onCollapse={(collapsed, type) => {
							console.log(collapsed, type);
						}}
					>
						<div className="logo" />
						<Menu className="sider">
							<div className="sider-logo-con">
								<img className="sider-logo" src={scamTrustLogo} alt="" />
							</div>

							<div className="side-tab-wrapper">
								<div className="side-tab-con">
									<VscHome style={{ color: "#ffff" }} />
									<span
										onClick={
											usertype === "VENDOR"
												? () => navigate("/vendor-dashboard")
												: () => navigate("/customer-dashboard")
										}
										className="side-tabs"
									>
										DASHBOARD
									</span>
								</div>

								<div className="side-tab-con">
									<VscArrowSwap style={{ color: "#ffff" }} />
									<span
										onClick={() => navigate("/transactions")}
										className="side-tabs"
									>
										TRANSACTIONS
									</span>
								</div>

								<div className="side-tab-con">
									<CiWallet style={{ color: "#ffff" }} />
									<span
										className="side-tabs"
										onClick={() => navigate("/wallet")}
									>
										WALLET
									</span>
								</div>

								<Link to={"/settings"} className="side-tab-con">
									<SlSettings style={{ color: "#ffff" }} />
									<span className="side-tabs">SETTINGS</span>
								</Link>
							</div>

							<div className="side-bottom-tab">
								<div className="side-tab-con">
									<BiSupport style={{ color: "#ffff" }} />
									<span className="side-tabs">SUPPORT</span>
								</div>
								<div className="side-tab-con" onClick={logoutUserHandler}>
									<IoLogOutOutline style={{ color: "#ffff" }} />
									<span className="side-tabs">LOGOUT</span>
								</div>
							</div>
						</Menu>
					</Sider>

					<Layout className="content-con">
						<Header className="header">
							<div className="header-div1">
								<p className="header-dash">Dashboard</p>
							</div>

							<div className="header-right-div">
								{/* SEARCH INPUT  */}
								<div className="header-div-2">
									<div className="header-input-icon">
										{" "}
										<img
											className="input-icon-img"
											src={search}
											alt="..."
										/>{" "}
									</div>
									<div>
										
										<input
											onChange={(e) => searchItems(e.target.value)}
											className="header-input"
											onInput={getSearch}
											type="text"
											value={searchInput}
											placeholder="Search vendor’s name"
										/>
										
									</div>
									<div className="overflow-y-scroll flex-column items-center justify-center h-42">
						{searchInput.length > 0
							? items?.map((item, id) => {
									console.log(item, "new data search");

									return (
										<div
											key={item?.id}
											className="flex items-center justify-center overflow-y-scroll h-32"
										>
											<div className="flex items-center justify-center py-2 px-3 max-w-sm ml-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
												<img
													class="block mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0"
													src={item?.user?.image_url}
													alt="Vendor pic"
												/>
												<div class="text-center space-y-2 sm:text-left">
													<div class="space-y-0.5">
														<p class="text-base text-black font-semibold">
															{item?.user?.name}
														</p>
														<p class="text-slate-500 text-xs font-medium">
															{item?.vendor_id}
														</p>
													</div>
													<button
														onClick={() => {
															navigate(`/vendor/${item?.vendor_id}`, {
																state: { id: item?.vendor_id },
															});
														}}
														className="px-12 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
													>
														Message
													</button>
												</div>
											</div>
										</div>
									);
							  })
							: null
						}
					</div>
									
								</div>

								{/* NOTIFICATION */}
								<div className="header-div-3">
									<Notifications />
								</div>

								{/* INITIALS */}
								<div>
									<Avatar className="header-avatar">
										<p className="header-initials">
											{first} {last}
										</p>
									</Avatar>
								</div>
							</div>
						</Header>

						{/* INNER CONTENT */}
						<Content
							className="layout-content"
							style={{ margin: "0px 16px", color: "black" }}
						>
							{children}
						</Content>
					</Layout>
				</React.Fragment>
			)}
		</Layout>
	);
};
export default AppLayout;
