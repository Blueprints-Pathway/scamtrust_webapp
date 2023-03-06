/** @format */

import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import Logo from "../../../assets/images/logo.svg";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import moment from "moment";
import logo from '../../../assets/loader-img.png'
const Ongoing = ({ showOngoingHandler }) => {
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	const onGoing = localStorage?.getItem("idOngoing");
	// console.log(onGoing, "hello");

	const [going, setGoing] = useState();
	const [isLoading, setIsLoading] = useState(true);
	// console.log(going, "ongoing");
	const id = going?.transaction_id;
	const back = () => {
		showOngoingHandler();
	};
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/view/${onGoing}`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config).finally(() => {
					setIsLoading(false);
				});
				setGoing(data?.data?.data);
				console.log(data?.data.data, "cancelled");
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const accepted = async () => {
		showOngoingHandler();
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/transaction/customer/approve/${id}`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};

			const data = await axios.get(API_URL, config);
			navigate("/customer-ratting");
			console.log(data, "trans done");
		} catch (error) {
			console.log(error, "errorss");
		}
	};
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function openModal() {
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	const customStyles = {
		content: {
			top: "50%",
			left: "56%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			backgroundColor: "#002257",
			color: "#ffff",
			borderRadius: "15px",
		},
	};

	const navigate = useNavigate();

	return (
		<div>
			<Layout>
			{ isLoading ?
         <img src={logo} className= "flex   m-auto transition-timing-function: cubic-bezier(0.4, 0, 1, 1) animate-bounce" alt="" /> 
      
      :
				<div className="flex justify-center mx-[-120px] items-start">
					<div className="bg-[#fff] rounded-3xl md:w-[53rem] w-[22rem] mr-9 lg:ml-[-185px] mt-[-80px] md:mt-[-72px] lg:w-[90rem] lg:mt-[-75px] lg:pb-16 py-10 pt-12 lg:pt-12 md:pt-8 md:px-12 px-5">
						<h6
							onClick={back}
							className="flex items-center text-[#262466] text-sm mb-4 md:mb-0 lg:mb-8 lg:ml-4"
						>
							<BsArrowLeft className="text-lg lg:text-4xl" />
							<span className="mx-1 lg:text-2xl lg:mb-1 lg:font-semibold">
								Back
							</span>
						</h6>

						<div className="flex flex-wrap items-center justify-between md:mx-5">
							<div>
								<h1 className="font-bold text-sm lg:text-2xl lg:font-bold">
									<span className="text-[#3AB75D] pr-1">ID:</span>{" "}
									{going?.transaction_id}
								</h1>
								<p className="text-sm lg:text-2xl font-bold text-[#262466] my-1 lg:my-4">
									{going?.vendor?.name || going?.vendor?.username}
								</p>
							</div>
							<div className="md:ml-[-30px] lg:ml-[-5rem]">
								<p className="text-sm lg:text-xl font-bold">
									Status:
									<span className="font-normal pl-1 text-[#95999D] text-sm lg:text-xl lg:px-3">
										{going?.status}
									</span>{" "}
								</p>
								<p className="text-sm lg:text-2xl mt-1 lg:my-4 font-normal">
									{moment(going?.updated_at).format("DD MM YYYY hh:mm")}
								</p>
							</div>
							<div>
								{/* S T A G E S */}
								<div className="flex items-center justify-center mt-6 mx-[55px] md:mx-0">
									<div className="flex-column items-center justify-center">
										<div className="flex items-center justify-center">
											<div className="flex items-center justify-center border-[1px] border-[#95999D] rounded-[100%] bg-[#3AB75D] text-[#ffff] w-7 h-7 lg:w-12 lg:h-12">
												<h1 className="text-center text-sm lg:text-xl">1</h1>
											</div>
											<div className="w-16 lg:w-24 border-[#95999D] border-[1px]"></div>
										</div>
										<div className="items-center mb-5 mt-1 lg:mt-2 ml-[-30px] lg:ml-[-50px]">
											<p className="items-center lg:text-xl lg:font-semibold">
												Awaiting approval
											</p>
										</div>
									</div>

									<div className="flex-column items-center justify-center">
										<div className="flex items-center justify-center">
											<div className="flex items-center justify-center border-[1px] border-[#95999D] rounded-[100%] bg-[#3AB75D] text-[#ffff] w-7 h-7 lg:w-12 lg:h-12">
												<h1 className="text-center text-sm lg:text-xl">2</h1>
											</div>
											<div className="w-16 lg:w-24 border-[#95999D] border-[1px]"></div>
										</div>
										<div className="items-center mb-5 mt-1 lg:mt-2 ml-[-8px] lg:ml-[-11px]">
											<p className="items-center lg:text-xl lg:font-semibold">
												On-going
											</p>
										</div>
									</div>

									<div className="flex-column items-center justify-center ml-[-13px] lg:ml-[-20px]">
										<div className="flex items-center justify-center">
											<div className="flex items-center justify-center border-[1px] border-[#95999D] rounded-[100%] w-7 h-7 lg:w-12 lg:h-12">
												<h1 className="text-center text-sm lg:text-xl text-[#95999D]">
													3
												</h1>
											</div>
										</div>
										<div className="items-center mb-5 mt-1 lg:mt-2">
											<p className="lg:items-center lg:text-xl lg:font-semibold">
												{" "}
												Completed
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="border-[1px] border-[#95999D] rounded-2xl lg:mt-2">
							<div className="bg-[#EAEAEA] rounded-t-2xl">
								<h4 className="text-base lg:text-3xl font-bold px-7 lg:px-16 py-7 lg:py-10">
									Transaction details
								</h4>
							</div>

							<div className="flex-column items-center justify-center mt-7 px-5 lg:px-28">
								<div className="flex items-center justify-between text-base lg:text-2xl my-7 lg:my-10">
									<p className="font-medium">Product name</p>
									<p className="text-[#8D9296]">{going?.product_name}</p>
								</div>
								<div className="flex items-center justify-between text-base lg:text-2xl my-7 lg:my-10">
									<p className="font-medium">Product amount</p>
									<p className="text-[#8D9296]">₦{going?.total_amount}</p>
								</div>
								<div className="flex items-center justify-between text-base lg:text-2xl my-7 lg:my-10">
									<p className="font-medium">Quantity</p>
									<p className="text-[#8D9296]">{going?.quantity}</p>
								</div>
								<div className="flex items-center justify-between text-base lg:text-2xl my-7 lg:my-10">
									<p className="font-medium">Due date</p>
									<p className="text-[#8D9296]">
										{moment(going?.updated_at).format("DD MM YYYY")}
									</p>
								</div>
								<div className="flex items-start justify-between text-base lg:text-2xl my-7 lg:mt-10">
									<p className="font-medium">Description</p>
									<p className="text-[#8D9296] w-40 lg:w-[25rem] text-right">
										{going?.description}
									</p>
								</div>
							</div>
						</div>

						<div className="flex justify-center mt-10 mx-5 md:mx-36 lg:mx-56 md:mt-12 lg:mt-24">
							{/* <button
							onClick={openModal}
							className="text-black bg-[#EDEDED] text-base rounded lg:rounded-md lg:text-2xl py-2 lg:py-6 px-10 lg:px-32 md:px-12"
						>
							Cancel
						</button> */}
							{going?.status === "ACCEPTED BY VENDOR" ? (
								<button
									onClick={() => {
										accepted();
									}}
									className="text-[#ffff] bg-[#3AB75D] text-base rounded lg:rounded-md lg:text-2xl py-2 lg:py-6 px-7 lg:px-28"
								>
									Complete
								</button>
							) : null}

							{/* CANCEL TRANSACTION MODAL  */}
							<Modal
								isOpen={modalIsOpen}
								onRequestClose={closeModal}
								style={customStyles}
							>
								<div className="text-[#ffff]">
									<h1 className="text-base pt-12 lg:text-3xl lg:w-[45rem] lg:mt-20 lg:text-center">
										Are you sure you want to cancel this transaction?
									</h1>
									<div className="flex items-center justify-between mx-12 mt-10 mb-10 lg:mt-28 lg:mb-28">
										<button
											onClick={() => navigate("/cancellation-reason")}
											className="border-[1px] py-1 px-10 text-sm lg:text-xl lg:py-4 lg:px-28 hover:bg-[#fff] hover:text-[#002257]"
										>
											Yes
										</button>
										<button
											onClick={closeModal}
											className="border-[1px] py-1 px-10 text-sm lg:text-xl lg:py-4 lg:px-28 hover:bg-[#fff] hover:text-[#002257]"
										>
											No
										</button>
									</div>
								</div>
							</Modal>
						</div>

						<div className="flex items-center justify-center mt-10 lg:mt-24 lg:mb-1">
							<h1 className="text-sm text-[#8D9296] mx-1">Secured by</h1>
							<img className="w-24 mx-1" src={Logo} alt="Scamtrust logo" />
						</div>
					</div>
				</div>}
			</Layout>
		</div>
	);
};

export default Ongoing;
