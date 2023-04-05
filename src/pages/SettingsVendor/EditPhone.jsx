/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./settingsVendor.css";
import TokenPhone from "./TokenPhone";
import otp from "../../assets/images/otp.png";
import encrypted from "../../assets/images/encrypted.png";
import swal from "sweetalert";
import axios from "axios";
import { useSelector } from "react-redux";
import ErrorInfo from "../../assets/images/error-info.svg";
function EditPhone({ closeModal }) {
	const [closed2, setClosed2] = useState(false);
	const [Edit2, setEdit2] = useState(false);

	const [phonesMessage, setPhonesMessage] = useState();
	const [errorPhoneMessage, setErrorPhoneMessage] = useState("");
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
	const handleEdit3 = () => {
		setStageThree(!stageThree);
	};
	const [submitted, setSubmitted] = useState(false);
	const [submit, setSubmit] = useState(false);
	const validate = (values) => {
		const error = {};

		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		const regex2 = /^[0-9]{11}$/;

		if (!values.phoneNumber) {
			error.phoneNumber = "Phone Number is required";
		} else if (!regex2.test(values.phoneNumber)) {
			error.phoneNumber = "Invalid Phone Number";
		}
		if (!values.phoneNumber2) {
			error.phoneNumber2 = "Please Answer security the question";
		}
		if (!values.phoneNumber4) {
			error.phoneNumber4 = "Please enter new phone number";
		} else if (!regex2.test(values.phoneNumber4)) {
			error.phoneNumber4 = "Invalid Phone Number";
		}
		if (!values.email) {
			error.email = "Email is required";
		} else if (!regex.test(values.email)) {
			error.email = "Invalid email";
		}
		if (!values.email2) {
			error.email2 = "Please Answer security the question";
		}
		if (!values.email4) {
			error.email4 = "Please enter new email";
		} else if (!regex.test(values.email4)) {
			error.email4 = "Invalid email";
		}
		if (!values.office) {
			error.office = "office address is required";
		}
		if (!values.office2) {
			error.office2 = "Please Answer security the question";
		}
		if (!values.account) {
			error.account = "Active cashout account is required";
		}
		if (!values.account2) {
			error.account2 = "Active cashout account is required";
		}
		if (!values.businessName) {
			error.businessName = "Business name is required";
		}
		if (!values.businessName2) {
			error.businessName2 = "Please Answer security the question";
		}
		if (!values.bank) {
			error.bank = "Bank is required";
		}
		if (!values.bankNumber) {
			error.bankNumber = "Bank number is required";
		}
		if (!values.bankName) {
			error.bankName = "Bank name is required";
		}
		if (!values.bank2) {
			error.bank2 = "Bank is required";
		}
		if (!values.bankNumber2) {
			error.bankNumber2 = "Bank number is required";
		}
		if (!values.bankName2) {
			error.bankName2 = "Bank name is required";
		}
		if (
			!values.pin1 ||
			!values.pin2 ||
			!values.pin3 ||
			!values.pin4 ||
			!values.pin5 ||
			!values.pin6
		) {
			error.pinCheckError1 = "All field must be filled";
		}
		if (
			!values.pin7 ||
			!values.pin8 ||
			!values.pin9 ||
			!values.pin10 ||
			!values.pin11 ||
			!values.pin12
		) {
			error.pinCheckError2 = "All field must be filled";
		}

		return error;
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		setError(validate(values));
		setError(error.All === true ? true : false);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
		setSubmit(true);
	};
	const [stageOne, setStageOne] = useState(false);
	const [stageTwo, setStageTwo] = useState(false);
	const [stageThree, setStageThree] = useState(false);
	
	const [newPhone, setNewPhone] = useState();



	const auth = useSelector((state) => state?.auth?.data?.access_token);

	const changePhone = async (e) => {
		e.preventDefault();
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/settings/change/phone
		`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth}`,
				},
			};
			const payload = {
				phone: newPhone,
			};
		
			const data = await axios.post(API_URL, payload, config);
			
			handleEdit2();
			swal({
				icon: "success",
				text: "An OTP has been sent to your phone number. Check your sms to continue.",
			});

		} catch (error) {
			console.log(error.data?.message?.phone[0], "error");
			swal({
				icon: "error",
				text:   error.response?.status === 422 ? "input field is empty" : "check your neetwork",
			});
		}
	};
	const validatePhone = async () => {
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/auth/verify/phone`;
			const payload = {
				phone: newPhone,
			};
			const data = await axios.post(API_URL, payload);
			setErrorPhoneMessage(data?.data?.message);

			setPhonesMessage(data?.data?.status);
		} catch (error) {
			console.log(
				error,

				"errrors"
			);
		}
	};
	const { data } = useSelector((state) => state.user);
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
							<div className="">Edit Phone Number</div>
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
								<div className="">Edit Phone Number</div>
								<div className="ml-10">
									<h1 onClick={() => closeModal(false)}>Close X </h1>
								</div>
							</div>
							<div className="EditDone-Line"></div>
							<form onSubmit={"changePhone"}>
								<div className="EditDone-card-title2 mb-10 flex ml-10 ">
									<h5>Enter new phone number</h5>
								</div>
								<div className="input-field-EditSettings flex ml-10">
									<input
										onChange={(e) => setNewPhone(e.target.value)}
										value={newPhone}
										className="inputBox-EditSettings"
										onBlur={validatePhone}
										name="phoneNumber4"
										placeholder="Enter new phone number"
										type="text"
										inputMode="numeric"
										maxLength="11"
										autoComplete="off"
									/>
									{phonesMessage === true ? (
										<span className="flex items-center mt-2">
											<span className="text-[#3AB75D]">
												{errorPhoneMessage}
											</span>
										</span>
									) : (
										<span className="flex items-center mt-2">
											<img src={ErrorInfo} className="mr-2" alt="error_info" />
											<span className="text-[#FC0D1B]">
												{errorPhoneMessage}
											</span>
										</span>
									)}
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
										onClick={changePhone}
										className="px-10 py-2 mx-10 my-10 bg-[#232164] text-[#ffffff] rounded-lg"
									>
										Next
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
						<div className="sm:w-5/6 md:w-full ">
							<div className="mx-5 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-20">
								<div className="">Edit Phone Numbers</div>
								<div className="ml-10">
									<h1 onClick={() => closeModal(false)}>Close X </h1>
								</div>
							</div>
							<div className="EditDone-Line"></div>
							<div className="md:flex justify-between  w-full token">
								<div className="md:shrink-0  ">
									<img
										className=" object-contain mt-3   w-35 md:h-56 md:w-96 "
										src={otp}
										alt="Scam Trust"
									/>
								</div>
								<div className=" mt-1">
									<TokenPhone closeModal={handleEdit3} />

									<div className="successEditLong-otp"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{stageThree && (
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
											{data?.data?.phone} <h2 className="text-slate-500">to</h2>{" "}
											{newPhone}
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

export default EditPhone;
