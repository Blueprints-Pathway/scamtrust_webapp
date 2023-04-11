/** @format */

import { useEffect, useState } from "react";
import "../SettingsVendor/settingsVendor.css";
import shielgg from "../../assets/images/shielgg 3.svg";
import Add from "../../assets/images/add.svg";
import Chat from "../../assets/images/chat.svg";
import Email from "../../assets/images/email.svg";
import Rc from "../../assets/images/rrc.svg";
import Location from "../../assets/images/location.svg";
import Phone from "../../assets/images/phone.svg";
import axios from "axios";
// import Backdrop from "../../components/UI/Backdrop";
import { useLocation } from "react-router-dom";
import { Rate } from "antd";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import AppLayout from "../../components/layout/AppLayout";
import Createtransaction from "../../components/buttons/createtransaction-btn/Createtransaction";
import classes from "../../pages/transactions/Transactions.module.css";
const VendorDetails = () => {
	const [details, setDetails] = useState();
	// const [rating, setRating] = useState(0);
	// const [showInitiateTransaction, setShowInitiateTransaction] = useState(false);
	// const [data, setData] = useState([]);
	// const [showTransactionPreview, setShowTransactionPreview] = useState(false);
	// const [showTransactionSuccess, setShowTransactionSuccess] = useState(false);
	const location = useLocation();
	const [initiate, setInitiate] = useState(false);
	const id = location?.state?.id;
	const [modalIsOpen, setModalIsOpen] = useState(false);
	let detail = localStorage.getItem("USER_DETAILS");
	let usertype = JSON.parse(detail).data.usertype;
	const auth = useSelector((state) => state.auth);
	// const handleRating = (rate: number) => {
	// 	setRating(rate);

	// 	// other logic
	// };
	const trans = () => {
		setInitiate(!initiate);
	};

	useEffect(() => {
		(async () => {
			try {
				const API_URL = `${process.env.REACT_APP_BASE_URL}/misc/get/vendor/${id}`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${auth?.data?.access_token}`,
					},
				};
				const data = await axios.get(API_URL, config);
				setDetails(data?.data?.data);
				// setData(data?.data?.data);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// useEffect(() => {
	// 	localStorage.setItem("dataKey", JSON.stringify(data));
	// }, [data]);
	// console.log(data, "locations");

	// const onCreateTransactionClicked = () => {
	// 	setShowInitiateTransaction((prevState) => !prevState);
	// };

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

	const setModalIsOpenToTrue = () => {
		setModalIsOpen(!modalIsOpen);
	};

	const setModalIsOpenToFalse = () => {
		setModalIsOpen(modalIsOpen);
	};
	console.log(details, "hello details");
	return (
		<AppLayout>
			<div className="w-full h-full rounded-3xl md:mt-10 -mt-5  h-5/6 overflow-hidden  ">
				<div className="mt-12 md:mx-10">
					<div className=" h-[120px] z-0 md:h-[150px] 2xl:h-[15vh] bg-[#232164] rounded-t-3xl ">
						<div className="flex flex-row justify-end items-center">
							<img
								src={shielgg}
								alt="shield"
								className="mt-2 mx-3 md:mx-10 w-[10vh] h-[120px] md:w-[12vh] md:h-[150px] "
							/>
						</div>
						<div className="-mt-8  mx-auto w-[90%] flex items-center  justify-between ">
							<div className="md:flex flex-row items-center gap-3">
								<div className="bg-[#D3530B] grid place-content-center font-semibold w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] text-xl md:text-[40px] border-2 md:border-4 shadow-md border-white  text-white  rounded-full md:w-[132px] md:h-[132px]">
									<img
										className="grid place-content-center object-cover font-semibold w-[50px] h-[50px] sm:w-[75px] sm:h-[70px] md:text-[40px] border-2 md:border-4 shadow-md border-white  text-white  rounded-full md:w-[132px] md:h-[132px]"
										src={details?.user?.image_url}
										alt="shield"
										// className="mt-2 mx-3 md:mx-10 w-[10vh] h-[120px] md:w-[12vh] md:h-[150px] "
									/>
								</div>
								{/* </div> */}
								<div className="flex flex-col mt-5">
									<h5 className="text-sm md:text-2xl text-[#707070]">
										{details?.user?.name || details?.user?.username}
									</h5>
									<p className=" text-sm md:text-2xl">{details?.vendor_id}</p>
								</div>
							</div>
							<div className={classes["transaction-heading"]}>
								{usertype === "CUSTOMER" && (
									<button className={classes["transaction-btn"]}>
										<Createtransaction vendor_id={details?.vendor_id} />
									</button>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="pt-28 md:pt-36 md:mx-10 px-4 md:px-2 lg:px-20 bg-white mb-9 pb-9 rounded-b-[25px]">
					<div className="">
						<div className="px-5 mb-4 md:mb-9 flex justify-between items-center border-b-2 border-b-[#EAEAEA]">
							<div className="flex mb-2">
								<img src={Email} alt="message_icon" className="mr-6" />
								<span className="font-medium text-xs md:text-xl text-[#232164]">
									Email address
								</span>
							</div>
							<p className="text-xs md:text-base">{details?.user?.email}</p>
						</div>
						<div className="px-5 mb-4 md:mb-9 md:mb-9 flex justify-between items-center border-b-2 border-b-[#EAEAEA]">
							<div className="flex mb-2">
								<img src={Phone} alt="message_icon" className="mr-6" />
								<span className="text-[#232164] font-medium text-xs md:text-xl">
									Phone number
								</span>
							</div>
							<p className="text-sm md:text-base">{details?.user?.phone}</p>
						</div>
						<div className="px-5 mb-4 md:mb-9 flex justify-between items-center border-b-2 border-b-[#EAEAEA]">
							<div className="flex mb-2">
								<img src={Rc} alt="message_icon" className="mr-6" />
								<span className="text-[#232164] font-medium text-xs md:text-xl">
									Office address
								</span>
							</div>
							<p className="text-sm md:text-base">{details?.user?.location}</p>
						</div>
						<div className="px-5 mb-4 md:mb-9 flex justify-between  border-b-2 border-b-[#EAEAEA]">
							<div className="flex mb-2">
								<img src={Location} alt="message_icon" className="mr-6" />
								<span className="font-medium text-xs md:text-xl text-[#232164]">
									RC Number
								</span>
							</div>
							<p className="text-sm md:text-base">7654321</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row justify-between lg:mx-1">
						<div className="bg-[rgba(237,237,237,0.4)] py-4 px-2 md:px-11 mb-5 md:mb-0 md:w-[375px] lg:w-[600px] rounded-2xl grid">
							<div className="flex justify-between">
								<p className=" md:text-lg text-sm">Delivery</p>
								<Rate
									style={{
										height: "10px",
										marginTop: "-2px",
									}}
									allowHalf
									defaultValue={2.5}
								/>
							</div>
							<div className="flex justify-between">
								<p className=" md:text-lg text-sm">Price</p>
								<Rate
									style={{
										height: "10px",
										marginTop: "-2px",
									}}
									allowHalf
									defaultValue={2.5}
								/>
							</div>
							<div className="flex justify-between">
								<p className=" md:text-lg text-sm">Service</p>
								<Rate
									style={{
										height: "10px",
										marginTop: "-2px",
									}}
									allowHalf
									defaultValue={2.5}
								/>
							</div>
							<div className="flex justify-between">
								<p className=" md:text-lg text-sm">Quality</p>
								<Rate
									style={{
										height: "10px",
										marginTop: "-2px",
									}}
									allowHalf
									defaultValue={2.5}
								/>
							</div>
						</div>
						<div>
							<div className="bg-[#F8F8F8] md:w-[296px] rounded-2xl">
								<div className="flex items-center justify-between md:px-3 md:py-3 px-2 py-1">
									<p className="font-medium text-base">Competence Score</p>
									<p className="bg-[#3AB75D] text-white md:py-2 md:px-2  w-11 text-center rounded-lg">
										80%
									</p>
								</div>
								<div className="flex items-center justify-between md:px-3 md:py-3 px-2 py-1">
									<p className="font-medium text-base">Grade</p>
									<p className="bg-[#3AB75D] text-white w-11 text-center md:py-2 md:px-2 rounded-lg">
										A
									</p>
								</div>
							</div>

							<div
								onClick={setModalIsOpenToTrue}
								className="mt-3 md:p-6 p-3 flex items-center bg-[#E2D8F1] text-colorPrimary md:w-[296px] rounded-2xl"
							>
								<div className="w-10 md:h-10 bg-colorPrimary grid place-content-center mr-3 rounded-full">
									<img src={Chat} alt="report_vendor" />
								</div>
								<div>
									<p className="font-semibold md:text-lg ">Report vendor</p>
									<p>Chat with us</p>
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
									{/* <AnimeList /> */}
								</Modal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AppLayout>
	);
};


export default VendorDetails;
