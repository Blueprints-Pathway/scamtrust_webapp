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
import Search from "./search/Search";
import classes from "./search/Search.module.css";
import { AiFillEye } from "react-icons/ai";
import { IconContext } from "react-icons";
import axios from "axios";
const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }) => {
	const { loading, error, data } = useSelector((state) => state.user);
	const notification = useSelector((state) => state.notification);
	const [searchInput, setSearchInput] = useState("");
	const [showMore, setShowMore] = useState(false);
	const [filtredSearch, setFilteredSearch] = useState();
	const [items, setItems] = useState([]);
	const [filteredResults, setFilteredResults] = useState([]);
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

	// const searchInputChangeHandler = (e) => {
	// 	console.log(e.target.value);
	// 	dispatch(
	// 		vendorSearch({
	// 			search: e.target.value,
	// 		})
	// 	);
	// };

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

			// setIsLoaded(true);
			setItems(data?.data?.data);
		} catch (error) {
			// setIsLoaded(true);
			// setError(error);
			console.log(error, "errorss");
		}
	};
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
							<Link to={"/support"} className="side-tab-con">
									<SlSettings style={{ color: "#ffff" }} />
									<span className="side-tabs">SUPPORT</span>
								</Link>
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
								<div className="search">
									<div className="header-div-2">
										<div className="header-input-icon">
											{" "}
											<img
												className="input-icon-img"
												src={search}
												alt="..."
											/>{" "}
										</div>
										<input
											onInput={getSearch}
											type="text"
											value={searchInput}
											onChange={(e) => searchItems(e.target.value)}
											className="header-input"
											placeholder="Search vendor’s name"
										/>
									</div>
									<div>
										{searchInput.length > 0
											? items?.map((item, id) => {
													console.log(item, "new data search");

													return (
														<div className={classes["container"]}>
															<h6 className={classes["search-text"]}>
																Recently searched
															</h6>
															<hr className={classes["hr"]} />

															<div className={classes["vendor-history"]} onClick={() => {
															navigate(`/vendor/${item?.vendor_id}`, {
																state: { id: item?.vendor_id },
															});
														}} >
																<div className={classes["vendor-det"]}>
																	<div className={classes["vendor-icon"]}>
																	<img src={item?.user?.image_url}/>
																	</div>
																	<div className={classes["vendor-details"]}>
																		<h5>{item?.user?.name ||item?.user?.username }</h5>
																		<h6>ID - {item?.vendor_id
}</h6>
																	</div>
																</div>
																<div>
																	<IconContext.Provider
																		value={{ color: "#232164", size: "19px" }}
																	>
																		<AiFillEye />
																	</IconContext.Provider>
																</div>
															</div>
														</div>
													);
											  })
											: null}

										{/* <Search /> */}
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
