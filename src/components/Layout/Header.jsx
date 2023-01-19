/** @format */

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import BellNotification from "../../assets/images/svg/bell-notification.svg";
import Search from "../../assets/images/svg/search.svg";
import RidicVentures from "../../assets/images/svg/ridic.svg";
import APlus from "../../assets/images/svg/a-plus.svg";
import { fetchUser } from "../../services/auth";

import moment from "moment";
import axios from "axios";
const VENDORS = [
	{
		logo: RidicVentures,
		name: "Ridic Ventures",
		id: "ID-60572218",
		score: "",
	},
	{
		logo: RidicVentures,
		name: "Ridic Ventures",
		id: "ID-60572218",
		score: "",
	},
	{
		logo: RidicVentures,
		name: "Ridic Ventures",
		id: "ID-60572218",
		score: "",
	},
	{
		logo: RidicVentures,
		name: "Ridic Ventures",
		id: "ID-60572218",
		score: "",
	},
];

const Header = (props) => {
	const { heading } = props;

	const { user } = useSelector((state) => state.auth);
	const [details, setDetails] = useState();
	const [notification, setNotification] = useState();
	const [toggle, setToggle] = useState(false);
	const [userFromBackend, setUserFromBackend] = useState(null);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [id, setId] = useState();
	const [items, setItems] = useState([]);
	const [filteredResults, setFilteredResults] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [showMore, setShowMore] = useState(false);
	useEffect(() => {
		(async () => setUserFromBackend(await fetchUser(user.data.access_token)))();
	}, []);

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
	const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

	const headerItemClassName = isTabletOrMobile
		? "pl-[75px] pr-[25px]"
		: "px-[25px] ";

	const navigate = useNavigate();
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
	// console.log("details", details);

	// notification?.data?.map((newLngth)=>{
	// const get=newLngth?.status===
	// "UNREAD"
	// console.log(get,"get");
	// 	return(
	// 		<div></div>
	// 	)
	// })
	const getSearch = async () => {
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/misc/vendor/search`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};
			const payload = {
				search: searchInput,
			};

			const data = await axios.post(API_URL, payload, config);

			console.log(data?.data?.data, "user data");
			setIsLoaded(true);
			setItems(data?.data?.data);
			// console.log(values, "values");
			// return response;
		} catch (error) {
			setIsLoaded(true);
			setError(error);
			console.log(error, "errorss");
		}
	};

	const getNotification = async () => {
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/misc/toggle/notification`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};
			const payload = {
				notification_id: id,
			};

			const data = await axios.post(API_URL, payload, config);

			console.log(data, "id");
			setIsLoaded(true);

			// console.log(values, "values");
			// return response;
		} catch (error) {
			setIsLoaded(true);
			setError(error);
			console.log(error, "errorss");
		}
	};
	///notifications start///
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/misc/list/notifications?page=1`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				// console.log(data?.data.data, "user data");
				setNotification(data?.data?.data?.data);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	///notification end///
	// useEffect(() => {
	// 	();

	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);
	const nameOf = details?.name || details?.username;
	const first = nameOf?.at(0);
	const last = nameOf?.at(-1);

	console.log(notification, "notice");
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
	const check = () => {
		setToggle(!toggle);
	};
	const close = () => {
		setToggle(false);
	};
	const handleRemove = () => {
		const items = notification;
		if (items.length > 0) {
			const lastIndex = items.length - 1;
			setNotification(items.filter((item, index) => index !== lastIndex));
		}
	};
	
	return (
		<div
			className={`${headerItemClassName} flex justify-between items-center w-full h-full shadow-md z-50`}
		>
			<h3 className="font-medium lg:font-semibold text-xl lg:text-3xl text-colorPrimary">
				{heading}
			</h3>
			<div className="flex items-center" onClick={getSearch}>
				<div className="2xl:w-[541px] mr-2 lg:mr-[56px] relative lg:w-[400px] h-[47px] md:w-[300px] w-[50px]">
					{details?.usertype === "CUSTOMER" ? (
						<input
							onInput={getSearch}
							type="text"
							value={searchInput}
							onChange={(e) => searchItems(e.target.value)}
							placeholder="Search vendor's name"
							className="bg-[#C0C0C021] w-full h-full rounded-[50px] focus:outline-none pl-5 pr-5 md:pr-[60px]"
						/>
					) : null}
					{details?.usertype === "CUSTOMER" ? (
						<img
							src={Search}
							alt="search_icon"
							className="absolute h-[24px] right-[15px] -translate-x-0px] md:right-[20px] top-1/2 -translate-y-1/2"
						/>
					) : null}
					<div className="overflow-y-scroll h-62">
						{searchInput.length > 0
							? items?.map((item, id) => {
									console.log(item, "new data");
									return (
										<div key={item?.id} className="overflow-y-scroll h-32">
											<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
												<img
													class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
													src={item?.user?.image_url}
													alt="Woman's Face"
												/>
												<div class="text-center space-y-2 sm:text-left">
													<div class="space-y-0.5">
														<p class="text-lg text-black font-semibold">
															{item?.user?.name}
														</p>
														<p class="text-slate-500 font-medium">
															{item?.vendor_id}
														</p>
													</div>
													<button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
														Message
													</button>
												</div>
											</div>
										</div>
									);
							  })
							: filteredResults?.map((item) => {
									console.log(item, "data to set");
									return (
										<div>
											<span>{item?.user?.name}</span>
										</div>
									);
							  })}
					</div>
					<div className="absolute hidden py-3 px-7 left-1/2 z-30 -translate-x-1/2 w-[380px] max-h-[150px] overflow-y-scroll bg-white">
						<div className="flex justify-between mb-4">
							<p className="font-semibold text-xs">Recent Search</p>
							<p className="text-xs">Competence Score</p>
						</div>
						<div className="flex flex-col ">
							{VENDORS.map((vendor, idx) => {
								const { name, logo, id, score } = vendor;
								return (
									<div
										key={idx}
										className="flex px-3 justify-between"
										onClick={() => navigate("/vendor/ridic-ventures")}
									>
										<div className="flex items-center hover:opacity-75 mb-3 cursor-pointer">
											<div className="w-[28px] mr-3 grid place-content-center h-[28px] bg-[#EFF3FF] overflow-hidden">
												<img
													src={logo}
													alt={name}
													className="w-[25px] h-[25px] rounded-full object-contain"
												/>
											</div>

											<div>
												<p className="font-medium text-colorPrimary">{name}</p>
												<p className="text-xs text-[#7D8287]">{id}</p>
											</div>
										</div>
										<div className="w-[25px] h-[25px] mr-7 bg-[#32A45299] rounded-full grid place-content-center">
											<img src={APlus} alt="A+" />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div>
					<div className="flex-auto flex mt-40 " onClick={check}>
						<p className="text-rose-600">{notification?.length}</p>
						<img
							src={BellNotification}
							alt="notification"
							className=" w-[22px] h-[24px] mr-2 lg:mr-[56px]"
						/>
					</div>
					<div className=" overflow-y-scroll h-40 ">
						{notification?.map((newNotice) => {
							return (
								<div className="h-32">
									{toggle === true ? (
										<div className=" " key={newNotice?.id}>
											<div  key={newNotice?.id} class="block notice2 p-6 rounded-lg shadow-lg bg-white max-w-sm ">
												{" "}
												<button onClick={()=>{
													close()
												}}>close</button>
												{/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
													{newNotice?.status}
												</h5> */}
												{/* <p style={{ 
													
												 }} class="text-gray-700 text-base mb-4 text">
													{newNotice?.content}
												</p> */}
												<h6 >
													{showMore
														? newNotice?.content
														: `${newNotice?.content.substring(0, 30)}`}
														<br />
													<button
													key={newNotice?.id}
														className="btn"
														onClick={() => {
															getNotification();
															setShowMore(!showMore);
															setId(newNotice?.id);
														}}
													>
														{showMore ? "Show less" : "Show more"}
													</button>
												</h6>
												<div className="flex">
													<span>
														{moment(newNotice?.created_at).format("DD/MM/YYYY")}
													</span>
													<span className="px-3">
														{newNotice?.notification_time}
													</span>
												</div>
												{/* <button
													className="btn"
													onClick={() => {
														getNotification();
														setId(newNotice?.id);
													}}
												>
													Read
												</button> */}
											</div>
										</div>
									) : null}
								</div>
							);
						})}
					</div>
				</div>

				<span className="lg:w-[46px] w-[30px] h-[30px] lg:h-[46px] font-bold text-base lg:text-[21px] text-white bg-[#E36969] grid place-content-center overflow-hidden rounded-full">
					{first}
					{last}
				</span>
			</div>
		</div>
	);
};

export default Header;
