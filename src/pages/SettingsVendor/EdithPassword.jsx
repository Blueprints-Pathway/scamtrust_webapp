/** @format */

import React, { useState } from "react";

import "./settingsVendor.css";
import swal from "sweetalert";
import axios from "axios";
import { useSelector } from "react-redux";
import ErrorInfo from "../../assets/images/error-info.svg";
import encrypted from "../../assets/images/encrypted.png";
function EdithPassword({ closeModal }) {
	const [closed2, setClosed2] = useState(false);
	const [Edit2, setEdit2] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleClosed2 = () => {
		setClosed2(!closed2);
	};
	const password = () => {
		var x = document.getElementById("myInput");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	};
	const [input, setInput] = useState({
		previousPassword: "",
		password: "",
		confirmPassword: "",
	});
	const validateInput = (e) => {
		let { name, value } = e.target;
		setError((prev) => {
			const stateObj = { ...prev, [name]: "" };

			switch (name) {
				case "password":
					if (!value) {
						stateObj[name] = "Please enter Password.";
					} else if (input.confirmPassword && value !== input.confirmPassword) {
						stateObj["confirmPassword"] =
							"Password and Confirm Password does not match.";
					} else {
						stateObj["confirmPassword"] = input.confirmPassword
							? ""
							: error.confirmPassword;
					}
					break;

				case "confirmPassword":
					if (!value) {
						stateObj[name] = "Please enter Confirm Password.";
					} else if (input.password && value !== input.password) {
						stateObj[name] = "Password and Confirm Password does not match.";
					}
					break;

				default:
					break;
			}

			return stateObj;
		});
	};
	const onInputChange = (e) => {
		const { name, value } = e.target;
		setInput((prev) => ({
			...prev,
			[name]: value,
		}));
		validateInput(e);
	};
	const [errorMessage, setErrorMessage] = useState();
	const [error, setError] = useState({
		password: "",
		confirmPassword: "",
	});
	const handleEdit = () => {
		setStageOne(!stageOne);
		// closeModal(false);
	};

	const [submitted, setSubmitted] = useState(false);
	const [submit, setSubmit] = useState(false);
	const [passwordVisibility, setPasswordVisibility] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);

		setError(error.All === true ? true : false);
	};

	const [stageOne, setStageOne] = useState(false);

	const [closed21, setClosed21] = useState(false);

	const [checked2, setChecked2] = useState(false);
	const handleClosed21 = () => {
		setClosed21(!closed21);

		setClosed2(true);
	};
	const handleClosed6 = () => {
		setClosed6(!closed6);
	};
	const handleInput = () => {
		setInput(!input);
	};

	const [closed6, setClosed6] = useState(false);

	const [passwordVisibility1, setPasswordVisibility1] = useState(false);
	const [passwordVisibility2, setPasswordVisibility2] = useState(false);
	const auth = useSelector((state) => state?.auth?.data?.access_token);

	const PasswordChange = async (e) => {
		e.preventDefault();
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/settings/change-password`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth}`,
				},
			};
			setLoading(true);
			const payload = {
				current_password: input?.previousPassword,
				password: input?.password,
				password_confirmation: input?.confirmPassword,
			};

			const data = await axios.post(API_URL, payload, config);

			handleEdit();
			console.log(data?.data.data, "user data");

			swal({
				icon: "success",
				text: "Your password has been successfully changed",
			});
		} catch (error) {
			// setFailed(error?.response?.data?.status);
			setErrorMessage(error.response?.data?.message?.current_password[0]
                );
			console.log(errorMessage, "errors");
			swal({
				icon: "error",
				text:
                errorMessage || "check input fields"
			});
		}
	};
	const togglePasswordVisibility = () => {
		setPasswordVisibility((prevState) => !prevState);
	};
	const togglePasswordVisibility1 = () => {
		setPasswordVisibility1((prevState) => !prevState);
	};
	const togglePasswordVisibility2 = () => {
		setPasswordVisibility2((prevState) => !prevState);
	};
	const handleCheck3 = () => {
		setChecked3(!checked3);
	};
	const [checked3, setChecked3] = useState(false);
	const handleEdit14 = () => {
		setEdit14(!Edit14);
		// setClosed15(false);
	};
	const [Edit14, setEdit14] = useState(false);
	console.log(input?.previousPassword, "previous");
	const handleChange = (event) => {
		const { name, value } = event.target;
		setInput({ ...input, [name]: value });
		setSubmit(true);
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
						<div className=" mx-10 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-5 mt-10">
							<div className="">Edit Password</div>
							<div className="ml-10">
								<h1 onClick={() => closeModal(false)}>Close X </h1>
							</div>
						</div>
						<div className="EditDone-Line"></div>

						<form onSubmit={handleSubmit}>
							<div className="EditDone-card-title2  grid ml-10 mx-10">
								<h5>Enter Old Password</h5>
							</div>
							<div  className="flex-row ml-10 mx-10">
								
									
									<input
										onChange={handleChange}
										onClick={handleInput}
										value={input.previousPassword}
										className=" grow inputBox-EditSettings"
										name="previousPassword"
										placeholder=""
										type={!passwordVisibility1 ? "password" : "text"}
										id="myInput"
										autoComplete="off"
									/>
                                    <span
										onClick={togglePasswordVisibility1}
										class="fa fa-fw fa-eye field-icon toggle-password"
									></span>
								</div>
							

							<div className="my-3 grid ml-10 mx-10">
								<h5>Enter New Password</h5>
							</div>
							<div className="i f ml-10 flex d mx-10">
								<input
									id="myInput"
									onChange={onInputChange}
									onBlur={validateInput}
									value={input.password}
									className="inputBox-EditSettings"
									name="password"
									placeholder="Enter Old Password"
									type="password"
									autoComplete="off"
								/>
                                 <span
										onClick={togglePasswordVisibility1}
										class="fa fa-fw fa-eye field-icon toggle-password"
									></span>
								{error.password && (
									<span className="flex items-center mt-2">
										<img src={ErrorInfo} className="mr-2" alt="error_info" />
										<span className="text-[#FC0D1B]">{error.password}</span>
									</span>
								)}
							</div>
							<div className="EditDone-card-title2  grid mx-10">
								<h5>Confirm Password</h5>
							</div>
							<div className="flex w-5/6 mx-10">
								<input
									id="myInput"
									onChange={onInputChange}
									onBlur={validateInput}
									value={input.confirmPassword}
									className="inputBox-EditSettings"
									type="password"
									name="confirmPassword"
									placeholder="Enter Old Password"
									autoComplete="off"
								/>
                                 <span
										onClick={togglePasswordVisibility1}
										class="fa fa-fw fa-eye field-icon toggle-password"
									></span>
								{error.confirmPassword && (
									<span className="flex items-center mt-2">
										<img src={ErrorInfo} className="mr-2" alt="error_info" />
										<span className="text-[#FC0D1B]">
											{error.confirmPassword}
										</span>
									</span>
								)}
								<div className="show-hide">
									<span className="show" onClick={password}>
										{" "}
									</span>
								</div>
							</div>
							<div className="flex justify-end mt-10 ">
								<button
									onClick={PasswordChange}
									className="px-10 py-2 mx-10  bg-[#232164] text-[#ffffff] rounded-lg"
								>
															{loading ? "Loading" : "Next"}
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
								<div className=" my-10 text-slate-500 text-center overflow-hidden">
									Your Scamtrust password has been changed
									<br /> from
									<div className="number1">
										<div className="text-[#1C2E7A]"></div>
									</div>
								</div>

								<div className="successEditLong-otp"></div>
							</div>
							<div className="flex justify-end mt-10 ">
								<button
									onClick={PasswordChange}
									className="px-10 py-2 mx-10  bg-[#232164] text-[#ffffff] rounded-lg"
								>
														{loading ? "Loading" : "Next"}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default EdithPassword;
