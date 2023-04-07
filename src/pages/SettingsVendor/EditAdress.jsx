/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./settingsVendor.css";

import encrypted from "../../assets/images/encrypted.png";
import swal from "sweetalert";
import axios from "axios";
import { useSelector } from "react-redux";
function EditAdress({ closeModal }) {
	const [closed2, setClosed2] = useState(false);
	const [Edit2, setEdit2] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleInput = () => {
		setInput(!Input);
	};
	const [Input, setInput] = useState(false);

	const [details, setDetails] = useState("CUSTOMER");
	const [values, setValues] = useState({
		phoneNumber: "",
		phoneNumber2: "",
		phoneNumber4: "",
	});
	const [error, setError] = useState({
		phoneNumber: "",
		phoneNumber2: "",
		phoneNumber4: "",
	});
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

		setError(error.All === true ? true : false);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};
	const [stageOne, setStageOne] = useState(false);
	const [stageTwo, setStageTwo] = useState(false);
	const [adress, setAdress] = useState("");
	const { data } = useSelector((state) => state.user);
	const auth = useSelector((state) => state?.auth?.data?.access_token);

	const AdressChange= async (e) => {
		e.preventDefault();
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/settings/update/address`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth}`,
				},
			};
			setLoading(true);
			const payload = {
				location: adress,
			};

			const data = await axios.post(API_URL, payload, config);

			// console.log(data?.data, "user datasssss");
			handleEdit2();
			swal({
				icon: "success",
				text: "Location updated successfully",
			});
		} catch (error) {
            console.log(error.response?.status, "error");
			swal({
				icon: "error",
				text:   error.response?.status === 422? "input field is required" : "check your neetwork",
			});
			// setFailed(error?.response?.data?.status);
		}
	};

	return (
		<>
			<div
				className={
					closed2 ? "EditDone active" : Edit2 ? "EditDone" : "EditDone active"
				}
				// class="relative z-10"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true"
			>
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

				<div class="fixed flex justify-start inset-0 z-10 sm:w-5/6 md:w-2/4 EditDone-card">
					<div className="sm:w-5/6 md:w-full">
						<div className=" mx-10 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-20">
							<div className="">Edit Office Address</div>
							<div className="ml-10">
								<h1 onClick={() => closeModal(false)}>Close X </h1>
							</div>
						</div>
						<div className="EditDone-Line"></div>
						<form onSubmit={handleSubmit}>
							<div className="EditDone-card-title2 mb-10 flex ml-10 ">
								{data?.data?.usertype === "CUSTOMER" ? (
									<h5>What’s your mother’s name?</h5>
								) : (
									<h5>When was your business established?</h5>
								)}
							</div>
							<div className="input-field-EditSettings flex ml-10">
								<input
									onChange={handleChange}
									value={values.phoneNumber2}
									className="inputBox-EditSettings"
									name="phoneNumber2"
									placeholder="Answer security question"
									type="text"
									autoComplete="off"
								/>
							</div>
							{submitted && error.phoneNumber2 && (
								<div className="error editSetting">
									<FontAwesomeIcon
										className="exIconTrans"
										icon={faCircleExclamation}
									/>
									{error.phoneNumber2}
								</div>
							)}

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
					className={
						closed2 ? "EditDone active" : Edit2 ? "EditDone" : "EditDone active"
					}
					// class="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

					<div class="fixed flex justify-start inset-0 z-10 sm:w-5/6 md:w-2/4 EditDone-card">
						<div className="sm:w-5/6 md:w-full">
							<div className=" mx-10 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-20">
								<div className="">Edit Office Address</div>
								<div className="ml-10">
									<h1 onClick={() => closeModal(false)}>Close X </h1>
								</div>
							</div>
							<div className="EditDone-Line"></div>
							<form>
								<div className="EditDone-card-title2 mb-10 flex ml-10 ">
									<h5>New Office Adress</h5>
								</div>
								<div className="input-field-EditSettings flex ml-10">
									<input
										onChange={(e) => setAdress(e.target.value)}
										onClick={handleInput}
										value={adress}
										className="inputBox-EditSettings"
										name="phoneNumber4"
										placeholder="Enter new office adress"
										type="text"
										inputMode="text"
									/>
								</div>
								{submitted && error.phoneNumber2 && (
									<div className="error editSetting">
										<FontAwesomeIcon
											className="exIconTrans"
											icon={faCircleExclamation}
										/>
										{error.phoneNumber2}
									</div>
								)}

								<div className="flex justify-end mt-20 ">
									<button
										onClick={AdressChange}
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
            className={
                closed2 ? "EditDone active" : Edit2 ? "EditDone" : "EditDone active"
            }
            // class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class=" inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed flex justify-start inset-0 z-10 sm:w-5/6 md:w-2/4 EditDone-card">
                <div className="sm:w-5/6 md:w-full">
                    <div className=" mx-10 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-20">
                        <div className="">Edit Phone Numberss</div>
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
                            Your phone number has been changed
                            <br /> from
                            <div className="number1">
                                <div className="text-[#1C2E7A]">
                                {data?.data?.location} <h2 className="text-slate-500">to</h2>{" "}
                                    {adress}
                                </div>
                            </div>
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

export default EditAdress;
