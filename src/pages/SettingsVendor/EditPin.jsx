/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./settingsVendor.css";

import encrypted from "../../assets/images/encrypted.png";
import swal from "sweetalert";
import axios from "axios";
import { useSelector } from "react-redux";

function EditPin({ closeModal }) {

	const [loading, setLoading] = useState(false);
	const handleInput = () => {
		setInput(!Input);
	};
	const [Input, setInput] = useState(false);

	const [details, setDetails] = useState("CUSTOMER");

	const handleEdit = () => {
		setStageOne(!stageOne);
		// closeModal(false);
	};
	const handleEdit2 = () => {
		setStageTwo(!stageTwo);
		// closeModal(false);
	};

	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};

	const [stageOne, setStageOne] = useState(false);
	const [stageTwo, setStageTwo] = useState(false);
	const [pins, setPins] = useState("");
	const [year, setYear] = useState();
	const auth = useSelector((state) => state?.auth?.data?.access_token);

	const PinChange = async (e) => {
		e.preventDefault();
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/settings/change-pin`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth}`,
				},
			};

			const payload = {
				pin: pins,
			};
			setLoading(true);
			const data = await axios.post(API_URL, payload, config);
			
			swal({
				icon: "success",
				text: "pin set sucessfully",
			});
			handleEdit2();
		} catch (error) {
			swal({
				icon: "error",
				text: "pin set failled",
			});
			// setFailed(error?.response?.data?.status);
		}
	};
	console.log(pins, "pin");
	return (
		<>
			<div
				
				// class="relative z-10"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true"
			>
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

				<div class="fixed flex justify-start inset-0 z-10 sm:w-5/6 md:w-2/4 EditDone-card">
					<div className="sm:w-5/6 md:w-full">
						<div className=" mx-10 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-20">
							<div className="">Edit Transaction Pin</div>
							<div className="ml-10">
								<h1 onClick={() => closeModal(false)}>Close X </h1>
							</div>
						</div>
						<div className="EditDone-Line"></div>
						<form onSubmit={handleSubmit}>
							<div className="EditDone-card-title2 mb-10 flex ml-10 ">
								{details.usertype === "CUSTOMER" ? (
									<h5>What’s your mother’s name?</h5>
								) : (
									<h5>When was your business established?</h5>
								)}
							</div>
							<div className="input-field-EditSettings flex ml-10">
								<input
									onChange={(e) => {
										setYear(e.target.value);
									}}
									value={year}
									className="inputBox-EditSettings"
									name="phoneNumber2"
									placeholder="Answer security question"
									type="text"
									autoComplete="off"
								/>
							</div>

							<div className="flex justify-end mt-20 ">
								<button
									onClick={handleEdit}
									className="px-10 py-2 mx-10 my-10 bg-[#232164] text-[#ffffff] rounded-lg"
								>
									Next
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{stageOne && (
				<div
				
					
					// class="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

					<div class="fixed flex justify-start inset-0 z-10 sm:w-5/6 md:w-2/4 EditDone-card">
						<div className="sm:w-5/6 md:w-full">
							<div className=" mx-10 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-20">
								<div className="">Edit Transaction Pin</div>
								<div className="ml-10">
									<h1 onClick={() => closeModal(false)}>Close X </h1>
								</div>
							</div>
							<div className="EditDone-Line"></div>
							<form>
								<div className="EditDone-card-title2 mb-10 flex ml-10 ">
									<h5>Enter new transaction pin </h5>
								</div>
								<div className="input-field-EditSettings flex ml-10">
									<input
										onChange={(e) => setPins(e.target.value)}
										onClick={handleInput}
										value={pins}
										className="inputBox-EditSettings"
										name="phoneNumber4"
										placeholder="Enter new transaction pin"
										type="text"
										inputMode="numeric"
										maxLength="11"
										autoComplete="off"
									/>
								</div>

								<div className="flex justify-end mt-20 ">
									<button
										onClick={PinChange}
										className="px-10 py-2 mx-10 my-10 bg-[#232164] text-[#ffffff] rounded-lg"
									>
										{loading ? "Loading" : "Next"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}

			{stageTwo && (
				<div
					
					// class="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div class=" inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

					<div class="fixed flex justify-start inset-0 z-10 sm:w-5/6 md:w-2/4 EditDone-card">
						<div className="sm:w-5/6 md:w-full">
							<div className=" mx-10 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-20">
								<div className="">Edit Transaction Pin</div>
								<div className="ml-10">
									<h1 onClick={() => closeModal(false)}>Close X </h1>
								</div>
							</div>
							<div className="EditDone-Line"></div>

							<div className="md:shrink-0 mx-10 grid">
								<div className=" place-self-center ">
									<img src={encrypted} alt="Scam Trust" />
								</div>
							</div>
							<div className="EditDone-OTPForm">
								{/* <TokenPhone complete={setStageThree} /> */}
								<div className=" my-10 text-slate-500 text-center overflow-hidden">
									Your ScamTrust transaction pin has been <br />
									changed
								</div>

								<div className="successEditLong-otp"></div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default EditPin;
