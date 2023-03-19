/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./settingsVendor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Eye from "../../assets/images/svg/eye.svg";
import ErrorInfo from "../../assets/images/svg/error-info.svg";
import {
	faCircleExclamation,
	faEyeSlash,
	faEye,
	faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import encrypted from "../../images/encrypted.png";
import swal from "sweetalert";
function SecuritySettings() {
	const [values, setValues] = useState({
		previousPassword: "",
		password: "",
		confirmPassword: "",
	});
	const [failed, setFailed] = useState();
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [passwordVisibility1, setPasswordVisibility1] = useState(false);
	const [passwordVisibility2, setPasswordVisibility2] = useState(false);
	const [password, setPassword] = useState();
	const [error, setError] = useState({
		phoneNumber3: "",
		email3: "",
		password: "",
		confirmPassword: "",
	});
	const [pins, setPins] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [Errors, setErrors] = useState(true);
	const togglePasswordVisibility = () => {
		setPasswordVisibility((prevState) => !prevState);
	};
	const togglePasswordVisibility1 = () => {
		setPasswordVisibility1((prevState) => !prevState);
	};
	const togglePasswordVisibility2 = () => {
		setPasswordVisibility2((prevState) => !prevState);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
		setSubmit(true);
	};
	const [submit, setSubmit] = useState(false);

	const validate = (values) => {
		const error = {};

		const regexPassword =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

		if (!values.password) {
			error.password = "Password is required";
		} else if (!regexPassword.test(values.password)) {
			error.password =
				" Must contain a Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character";
		}
		if (!values.confirmPassword) {
			error.confirmPassword = "Confirm password is required";
		} else if (values.confirmPassword !== values.password) {
			error.confirmPassword = "Password must match";
		}
		if (!values.phoneNumber3) {
			error.phoneNumber3 = "Please enter a transaction pin";
		}
		if (!values.email3) {
			error.email3 = "Please Answer security the question";
		}
		return error;
	};

	const handleClosed5 = () => {
		setClosed5(!closed5);
	};
	const [closed5, setClosed5] = useState(false);

	const handleClosed6 = () => {
		setClosed6(!closed6);
	};
	const [closed6, setClosed6] = useState(false);

	const handleClosed7 = () => {
		setClosed7(!closed7);
	};
	const [closed7, setClosed7] = useState(false);

	const handleClosed15 = () => {
		setClosed15(!closed15);
		setClosed6(true);
	};
	const [closed15, setClosed15] = useState(false);

	const handleClosed16 = () => {
		setClosed16(!closed16);
		setClosed7(true);
		setClosed5(true);
	};
	const [closed16, setClosed16] = useState(false);

	const handleEdit5 = () => {
		setEdit5(!Edit5);
		setClosed5(false);
	};
	const [Edit5, setEdit5] = useState(false);

	const handleEdit6 = () => {
		setEdit6(!Edit6);
		setClosed6(false);
	};
	const [Edit6, setEdit6] = useState(false);

	const handleEdit7 = () => {
		setEdit7(!Edit7);
		setClosed7(false);
	};
	const [Edit7, setEdit7] = useState(false);

	const handleEdit14 = () => {
		setEdit14(!Edit14);
		setClosed15(false);
	};
	const [Edit14, setEdit14] = useState(false);

	const handleEdit15 = () => {
		setEdit15(!Edit15);
		setClosed16(false);
	};
	const [Edit15, setEdit15] = useState(false);

	const [submitted, setSubmitted] = useState(false);

	// const handleCheck2 = () => {
	// 	setChecked2(!checked2);
	// };
	const [checked2, setChecked2] = useState(false);

	const handleCheck3 = () => {
		setChecked3(!checked3);
	};
	const [checked3, setChecked3] = useState(false);

	const handleCheck4 = () => {
		setChecked4(!checked4);
	};
	const [checked4, setChecked4] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		setError(validate(values));
		setErrors(error.All === true ? true : false);
	};

	const handleInput = () => {
		setInput(!Input);
	};
	const [Input, setInput] = useState(false);

	useEffect(() => {
		if (Object.keys(error).length === 0 && submitted);
	}, [error]);
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));

	const PasswordChange = async (e) => {
		e.preventDefault();
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/settings/change-password`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};

			const payload = {
				current_password: values?.previousPassword,
				password: values?.password,
				password_confirmation: values?.confirmPassword,
			};

			const data = await axios.post(API_URL, payload, config);
			handleClosed6();
			console.log(data?.data.data, "user data");
			setPassword(data?.data?.data);
			swal({
				icon: "success",
				text: "Your password has been successfully changed",
			});
		} catch (error) {
			// setFailed(error?.response?.data?.status);
			setErrorMessage(error);
			console.log(errorMessage, "error");
			swal({
				icon: "error",
				text:
					errorMessage ||
					error?.message?.password[0] ||
					"check your inputs field to be sure",
			});
		}
	};
	console.log(values?.previousPassword, "hello current");
	const PinChange = async (e) => {
		e.preventDefault();
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/settings/change-pin`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};

			const payload = {
				pin: pins,
			};

			const data = await axios.post(API_URL, payload, config);

			console.log(data?.data?.data, "user data");
			setPassword(data?.data?.data);
			swal({
				icon: "success",
				text: "pin set sucessfully",
			});
		} catch (error) {
			// setFailed(error?.response?.data?.status);
			setErrorMessage(error?.response?.data?.message);
			console.log(errorMessage.current_password[0], "error");
			swal({
				icon: "error",
				text: errorMessage.current_password[0],
			});
		}
	};

	const validateInput = (e) => {
		let { name, value } = e.target;
		setError((prev) => {
			const stateObj = { ...prev, [name]: "" };

			switch (name) {
				case "password":
					if (!value) {
						stateObj[name] = "Please enter Password.";
					} else if (
						values.confirmPassword &&
						value !== values.confirmPassword
					) {
						stateObj["confirmPassword"] =
							"Password and Confirm Password does not match.";
					} else {
						stateObj["confirmPassword"] = values.confirmPassword
							? ""
							: error.confirmPassword;
					}
					break;

				case "confirmPassword":
					if (!value) {
						stateObj[name] = "Please enter Confirm Password.";
					} else if (values.password && value !== values.password) {
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
	return (
		<div>
			<div className="password-Settings">
				<label className="password-text">Password</label>
				<label className="password-text-hash">********</label>
				<button className="pass-button yes" onClick={handleEdit6}>
					{" "}
					Change password{" "}
				</button>
			</div>

			<div className="password-Settings">
				<label className="password-text">Transaction pin</label>
				<label className="password-text-hash">********</label>
				<button className="pass-button yes" onClick={handleEdit5}>
					{" "}
					Change pin{" "}
				</button>
			</div>
			<div
				className={
					closed5 ? "EditDone active" : Edit5 ? "EditDone" : "EditDone active"
				}
			>
				<div className="EditDone-card">
					<div className="EditDone-message">Edit transaction pin</div>
					<div className="EditDone-card-close">
						<h1 onClick={handleClosed5}>Close X </h1>
					</div>
					<div className="EditDone-Line"></div>
					<form onSubmit={handleSubmit}>
						<div className="EditDone-card-title2">
							<h5>When was your business established?</h5>
						</div>
						<div className="input-field-EditSettings">
							<input
								onChange={handleChange}
								value={values.email3}
								className="inputBox-EditSettings"
								name="email3"
								placeholder="Answer security question"
								type="text"
								autoComplete="off"
							/>
						</div>
						{submitted && error.email3 && (
							<div className="error editSetting">
								<FontAwesomeIcon
									className="exIconTrans"
									icon={faCircleExclamation}
								/>
								{error.email3}
							</div>
						)}

						{submitted && !error.email3 ? (
							<button onClick={handleEdit7} className="Next-button yes">
								{" "}
								Next{" "}
							</button>
						) : submitted && error.email3 ? (
							<button className="Next-button yes"> Next </button>
						) : (
							<button className="Next-button yes"> Next </button>
						)}
					</form>
				</div>
			</div>

			<div
				className={
					closed6 ? "EditDone active" : Edit6 ? "EditDone" : "EditDone active"
				}
			>
				<div className="EditDone-card">
					<div className="EditDone-message">Edit password</div>
					<div className="EditDone-card-close">
						<h1 onClick={handleClosed6}>Close X </h1>
					</div>
					<div className="EditDone-Line"></div>
					<form onSubmit={PasswordChange}>
						<div className="input-field">
							<label className="form-text EditPass">
								Enter old password{" "}
								<FontAwesomeIcon
									className="questionIcon no"
									icon={faCircleQuestion}
								/>
								<span className="show mx-4" onClick={togglePasswordVisibility1}>
									<img
										src={Eye}
										alt="view"
										className="inline right-[147px] cursor-pointer "
									/>
								</span>
							</label>

							{checked2 ? (
								<input
									onChange={handleChange}
									value={values.previousPassword}
									className="inputBox-EditSettings2"
									name="previousPassword"
									id="myInput"
									placeholder=""
									type={!passwordVisibility1 ? "password" : "text"}
									autoComplete="off"
								/>
							) : (
								<input
									onChange={handleChange}
									onClick={handleInput}
									value={values.previousPassword}
									className="inputBox-EditSettings2"
									name="previousPassword"
									placeholder="current password"
									id="myInput"
									type={!passwordVisibility1 ? "password" : "text"}
									autoComplete="off"
								/>
							)}
						</div>
						{submitted && error.password && (
							<span className="error passShift editSettingError">
								<FontAwesomeIcon
									className="exIconTrans"
									icon={faCircleExclamation}
								/>
								{error.password}
							</span>
						)}
						<div className="input-field">
							<label className="form-text EditPass">
								Enter new password{" "}
								<FontAwesomeIcon
									className="questionIcon no"
									icon={faCircleQuestion}
								/>
								<span className="show mx-3" onClick={togglePasswordVisibility}>
									<img
										src={Eye}
										alt="view"
										className="inline right-[147px] cursor-pointer "
									/>
								</span>
							</label>

							{checked2 ? (
								<input
									onChange={handleChange}
									onInput={handleInput}
									value={values.confirmPassword}
									className="inputBox-EditSettings2"
									name="password"
									placeholder=""
									type={!passwordVisibility ? "password" : "text"}
									autoComplete="off"
								/>
							) : (
								<input
									onChange={handleChange}
									onClick={handleInput}
									value={values?.password}
									className="inputBox-EditSettings2"
									onBlur={validateInput}
									name="password"
									placeholder="password must be at least 7 characters"
									type={!passwordVisibility ? "password" : "text"}
									autoComplete="off"
								/>
							)}
						</div>
						{error.password && (
												<span className="flex items-center mt-2">
													<img
														src={ErrorInfo}
														className="mr-2"
														alt="error_info"
													/>
													<span className="text-[#FC0D1B]">
														{error.password}
													</span>
												</span>
											)}
						<div className="input-field">
							<label className="form-text EditPass">
								Confirm password
								<span className="show mx-4" onClick={togglePasswordVisibility2}>
									<img
										src={Eye}
										alt="view"
										className="inline right-[147px] cursor-pointer "
									/>
								</span>
							</label>

							{checked3 ? (
								<input
									onChange={handleChange}
									value={values.confirmPassword}
									className="inputBox-EditSettings2"
									name="confirmPassword"
									placeholder=""
									type={!passwordVisibility2 ? "password" : "text"}
									autoComplete="off"
								/>
							) : (
								<input
									onChange={handleChange}
									value={values.confirmPassword}
									className="inputBox-EditSettings2"
									onBlur={validateInput}
									name="confirmPassword"
									placeholder="confirm password must be exact with password"
									// type="password"
									autoComplete="off"
									type={!passwordVisibility2 ? "password" : "text"}
								/>
							)}

							<div
								className="passwordSee passView"
								onClick={handleCheck3}
							></div>
						</div>

						{error.confirmPassword && (
										<span className="flex items-center mt-2">
											<img src={ErrorInfo} className="mr-2" alt="error_info" />
											<span className="text-[#FC0D1B]">
												{error.confirmPassword}
											</span>
										</span>
									)}

						{submitted &&
						!error.confirmPassword &&
						submitted &&
						!error.password ? (
							<button
								className="Next-button yes"
								type="submit"
								onClick={handleEdit14}
							>
								{" "}
								Next{" "}
							</button>
						) : (
							<button className="Next-button yes" type="submit">
								{" "}
								Submit{" "}
							</button>
						)}
					</form>
				</div>
			</div>
			<div
				className={
					closed7 ? "EditDone active" : Edit7 ? "EditDone" : "EditDone active"
				}
			>
				<div className="EditDone-card">
					<div className="EditDone-message">Edit transaction pin</div>
					<div className="EditDone-card-close">
						<h1 onClick={handleClosed7}>Close X </h1>
					</div>
					<div className="EditDone-Line"></div>
					<form onSubmit={PinChange}>
						<div className="input-field">
							<label className="form-text EditPass">
								Enter transaction pin{" "}
								<FontAwesomeIcon
									className="questionIcon no"
									icon={faCircleQuestion}
								/>
							</label>

							<input
								onChange={(e) => setPins(e.target.value)}
								onClick={handleInput}
								value={pins}
								className="inputBox-EditSettings2"
								name="phoneNumber3"
								placeholder=""
								type="password"
								inputMode="numeric"
								maxLength="4"
								autoComplete="off"
							/>

							<div className="passwordSee editSetting2" onClick={handleCheck4}>
								{checked4 ? (
									<FontAwesomeIcon className="eyeIcon no" icon={faEye} />
								) : (
									<FontAwesomeIcon className="eyeIcon yes" icon={faEyeSlash} />
								)}
							</div>
						</div>
						{submitted && error.phoneNumber3 && (
							<span className="error passShift editSettingError">
								<FontAwesomeIcon
									className="exIconTrans"
									icon={faCircleExclamation}
								/>
								{error.phoneNumber3}
							</span>
						)}

						{submitted && !error.phoneNumber3 ? (
							<button
								className="Next-button yes"
								type="submit"
								onClick={handleEdit15}
							>
								{" "}
								Save{" "}
							</button>
						) : (
							<button className="Next-button yes" type="submit">
								{" "}
								Save{" "}
							</button>
						)}
					</form>
				</div>
			</div>

			<div
				className={
					closed15 ? "EditDone active" : Edit14 ? "EditDone" : "EditDone active"
				}
			>
				<div className="EditDone-card">
					<div className="EditDone-message">Hello Ridic</div>
					<div className="EditDone-card-close">
						<h1 onClick={handleClosed15}>Close X </h1>
					</div>
					<div className="EditDone-Line"></div>
					<center>
						{" "}
						<img className="DoneImg" src={encrypted} alt="Scam Trust" />
					</center>
					<center className="successEditSmall">
						Your ScamTrust password has been changed
					</center>

					<button onClick={handleClosed15} className="Next-button yes">
						{" "}
						Done{" "}
					</button>
				</div>
			</div>

			<div
				className={
					closed16 ? "EditDone active" : Edit15 ? "EditDone" : "EditDone active"
				}
			>
				<div className="EditDone-card">
					<div className="EditDone-message">Hello Ridic</div>
					<div className="EditDone-card-close">
						<h1 onClick={handleClosed16}>Close X </h1>
					</div>
					<div className="EditDone-Line"></div>
					<center>
						<img className="DoneImg" src={encrypted} alt="Scam Trust" />
					</center>
					<center className="successEditSmall">
						Your ScamTrust Transaction pin has been changed
					</center>

					<button onClick={handleClosed16} className="Next-button yes">
						{" "}
						Done{" "}
					</button>
				</div>
			</div>
		</div>
	);
}

export default SecuritySettings;
