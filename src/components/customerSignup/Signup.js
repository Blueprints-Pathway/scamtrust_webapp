import React, { useState, useEffect } from "react";
import "./signup.css";
import "../../index.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleQuestion,
	// faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import scamTrustLogo from "../../images/Group114(1).png";
import ellipse2 from "../../images/Ellipse2.png";
import { Link, useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomerRegisterAsync } from "../../components/redux/Auth";
import { useSelector, useDispatch } from "react-redux";

function Signup() {
	const [level, setLevel] = useState(1);
	let navigate = useNavigate();
	let schema = yup.object().shape({
		fullName: yup
			.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("fullName is required"),
		userName: yup.string().min(2, "Too Short!").max(50, "Too Long!").required(),
		phoneNumber: yup.number().required(),
		Phone: yup.number().required("phone number is required"),
		bvn: yup
			.number()
			.max(11)
			.min(1 - 10, "too short")
			.required(),
		email: yup.string().email().required(),
		location: yup.string().required(),
		DOB: yup.string().required(),
		password: yup
			.string()
			.min(7, "Too Short!")
			.required("Password is required"),
		password_confirmation: yup
			.string()
			.required()
			.oneOf([yup.ref("password"), null], "Passwords must match"),
	});
	// const currentValidationSchema = [level];
	return (
		<Formik
			initialValues={{
				phoneNumber: "",
				email: "",
				userName: "",
				location: "",
				password: "",
				password_confirmation: "",
				fullName: "",
				DOB: "",
				// bvn: "",
				phone: "",
				type: "CUSTOMER",
			}}
			validationSchema={schema}
			onSubmit={(values) => {
				console.log("submitted");
				console.log(values);
			}}
		>
			{(formikProps) => (
				<form onSubmit={formikProps.handleSubmit}>
					<UserDetails
						level={level}
						setLevel={setLevel}
						formikProps={formikProps}
					/>

					<BVN level={level} setLevel={setLevel} formikProps={formikProps} />
					<SetPassword
						level={level}
						setLevel={setLevel}
						formikProps={formikProps}
					/>
				</form>
			)}
		</Formik>
	);
}
function UserDetails({ level, setLevel, formikProps }) {
	const renderError = (message) => (
		<p className="italic text-red-600">{message}</p>
	);

	if (level === 1) {
		return (
			<main>
				<div className="signup-viewmain container">
					<div className="signup-view">
						<div className="signup-view-left">
							<div className="signup-view-left-top">
								<img src={scamTrustLogo} alt="Scam Trust" />
							</div>
							<div className="signup-view-left-bottom-text">
								Let’s get you started with your{" "}
								<bold className="green-text">ScamTrust</bold> Customer account
							</div>

							<div className="form signup">
								<>
									<div className="input-field">
										<label className="form-text">Phone Number</label>
										<input
											onChange={formikProps.handleChange}
											onBlur={formikProps.handleBlur}
											value={formikProps.values.phoneNumber}
											className="inputBox p-4"
											name="phoneNumber"
											placeholder=""
											type="text"
											inputMode="numeric"
											// maxLength="14"
										/>
									</div>
									<ErrorMessage name="phoneNumber" render={renderError} />

									<div className="input-field">
										<label className="form-text">Email address</label>
										<input
											onChange={formikProps.handleChange}
											value={formikProps.values.email}
											onBlur={formikProps.handleBlur}
											className="inputBox p-4"
											name="email"
											placeholder=""
											type="text"
										/>
									</div>

									<ErrorMessage name="email" render={renderError} />

									<div className="input-field">
										<label className="form-text">Username</label>
										<input
											onBlur={formikProps.handleBlur}
											onChange={formikProps.handleChange}
											value={formikProps.values.userName}
											className="inputBox p-4"
											name="userName"
											type="text"
											placeholder=""
										/>
									</div>
									<ErrorMessage name="userName" render={renderError} />

									<div className="input-field">
										<label className="form-text">Location</label>
										<input
											onBlur={formikProps.handleBlur}
											onChange={formikProps.handleChange}
											value={formikProps.values.location}
											className="inputBox p-4"
											name="location"
											type="text"
											placeholder=""
										/>
									</div>
									<ErrorMessage name="location" render={renderError} />
									<div className="input-field">
										<label className="form-text"> Type of Seller</label>
										<select
											onBlur={formikProps.handleBlur}
											onChange={formikProps.handleChange}
											value={formikProps.values.type}
											className="inputBox "
											name="business_type"
										>
											<option>Select Business Type</option>
											<option value="CUSTOMER">Customer</option>
										</select>
									</div>
									<div className="radio-button-container">
										<label>
											<input
												className="radio-button"
												type="checkbox"
												// onChange={handleCheckbox}
											/>
										</label>
										<span className="radio-text">
											I agree Scam Trust Terms of Service and Privacy Policy
										</span>
									</div>

									<button
										className="signup-button bg-colorPrimary font-secondary"
										type="submit"
										onClick={() => {
											setLevel((level) => level + 1);
										}}
										disabled={
											formikProps.values.location.length < 5 ||
											formikProps.values.userName.length < 5 ||
											formikProps.values.email.length < 5 ||
											formikProps.values.phoneNumber.length < 10
										}
									>
										{" "}
										<span
											style={{
												color: "#fffff",
											}}
										>
											Proceed to verify BVN{" "}
										</span>
									</button>

									<FontAwesomeIcon
										className="arrowIconSignup"
										icon={faCaretRight}
									/>
								</>
							</div>
							<div className="signup-view-left-bottom-link">
								<Link to="/dashboard"> Go back to Website</Link>
							</div>
						</div>
					</div>
					<div className="signup-view-right">
						<div className="text-top">"</div>
						<div className="text-bottom">
							As a customer I feel like I can never be scammed. ScamTrust make
							me feel really safe when transacting with instagram vendors.
						</div>

						<div className="signup-view-right-bottom-img">
							<img src={ellipse2} alt="Scam Trust" />
						</div>
						<div className="signup-view-right-bottom-name">Fadekemi Folalu</div>
						<div className="signup-view-right-bottom-nameUser">Student</div>
					</div>
				</div>
			</main>
		);
	} else return null;
}
function SetPassword({ level, setLevel, formikProps }) {
	const navigate = useNavigate();
	const renderError = (message) => (
		<p className="italic text-red-600">{message}</p>
	);
	const dispatch = useDispatch();

	const customerReg = async (values) => {
		try {
			dispatch(CustomerRegisterAsync(values));

			navigate("/dashboard");
		} catch (error) {
			console.log("ERROR");
		}
	};
	// const [error, setError] = useState({
	// 	password: "",
	// 	password_confirmation: "",
	// });

	if (level === 3) {
		return (
			<div className="signup-view">
				<div className="password-view-left">
					<div className="signup-view-left-top">
						<Link to="/Home">
							<img src={scamTrustLogo} alt="Scam Trust" />
						</Link>
					</div>
					<div className="cardContainerPassword">
						<div className="password-view-left-bottom-text">
							Let’s help you secure your{" "}
							<bold className="green-text">ScamTrust</bold> Customer account.
							Kindly set your <bold className="green-text">password</bold> and{" "}
							<bold className="green-text">transaction pin</bold>.
						</div>

						<div className="form password">
							{/*   <pre>{
                            JSON.stringify(values, null, 2)
                            }</pre> */}
							<>
								<div className="input-field">
									<label className="form-text">
										Set password{" "}
										<FontAwesomeIcon
											className="questionIcon no"
											icon={faCircleQuestion}
										/>
									</label>

									<input
										onBlur={formikProps.handleBlur}
										onChange={formikProps.handleChange}
										// onInput={formikProps.handleInput}
										value={formikProps.values.password}
										className="inputBoxBVN"
										name="password"
										placeholder=""
										type="password"
									/>
									<ErrorMessage name="password" render={renderError} />
								</div>
								<div>
									<label className="form-text">
										Confirm password{" "}
										<FontAwesomeIcon
											className="questionIcon no"
											icon={faCircleQuestion}
										/>
									</label>
									<input
										onBlur={formikProps.handleBlur}
										onChange={formikProps.handleChange}
										// onClick={formikProps.handleInput}
										value={formikProps.values.password_confirmation}
										className="inputBoxBVN"
										name="password_confirmation"
										placeholder=""
										type="password"
									/>
									<ErrorMessage
										name="password_confirmation"
										render={renderError}
									/>
								</div>

								<button
									className="button password-button  bg-colorPrimary"
									onClick={() => customerReg(formikProps.values)}
									type="submit"
								>
									<span
										style={{
											color: "#ffff",
										}}
									>
										Proceed to transaction pin{" "}
									</span>
								</button>
							</>
						</div>
						<div className="field-bottom-password">
							{" "}
							Secured by{" "}
							<img
								className="field-bottom-img"
								src={scamTrustLogo}
								alt="Scam Trust"
							/>{" "}
						</div>
					</div>
				</div>
			</div>
		);
	} else return null;
}

function BVN({ level, setLevel, formikProps }) {
	const renderError = (message) => (
		<p className="italic text-red-600">{message}</p>
	);
	if (level === 2) {
		return (
			<div className="signup-view">
				<div className="password-view-left">
					<div className="signup-view-left-top">
						<img src={scamTrustLogo} alt="Scam Trust" />
					</div>
					<div className="cardContainer-bvn">
						<div className="card">
							<div className="card-body">
								<h5 className="card-titleBVN">Bank Details</h5>

								<div className="field">
									<h4 className="form-textBVN">
										We use your BVN to confirm rhat your personal information
										provided on ScamTrust are the same as it is in your BVN.
									</h4>
								</div>
								<div className="form bvn">
									{/*   <pre>{
                                JSON.stringify(values, null, 2)
                                }</pre> */}
									<>
										<div className="input-field-bvn">
											<label className="form-text">Full name</label>
											<input
												onBlur={formikProps.handleBlur}
												onChange={formikProps.handleChange}
												value={formikProps.values.fullName}
												className="inputBoxBVN"
												name="fullName"
												placeholder=""
												type="text"
												// autoComplete='off'
											/>
										</div>
										<ErrorMessage name="fullName" render={renderError} />

										<div className="input-field">
											<label className="form-text">Date of birth</label>
											<input
												onChange={formikProps.handleChange}
												value={formikProps.values.DOB}
												className="inputBoxBVN"
												name="DOB"
												placeholder=""
												type="text"
												onBlur={formikProps.handleBlur}
												// autoComplete="off"
											/>
										</div>

										<ErrorMessage name="DOB" render={renderError} />
										<div className="input-field">
											<label className="form-text">Phone number</label>
											<input
												onChange={formikProps.handleChange}
												onBlur={formikProps.handleBlur}
												value={formikProps.values.phone}
												className="inputBoxBVN"
												name="phone"
												type="text"
												required
												placeholder=""
												// inputMode="numeric"
												// maxLength="11"
											/>
										</div>

										<ErrorMessage name="phone" render={renderError} />

										<div className="input-field">
											<label className="form-text">
												Enter your Bank Verification Number
											</label>
											<input
												onChange={formikProps.handleChange}
												value={formikProps.values.BVN}
												className="inputBoxBVN"
												name="bvn"
												type="text"
												// required
												onBlur={formikProps.values.handleBlur}
												placeholder=""
												inputMode="numeric"
												maxLength="11"
											/>
										</div>

										<ErrorMessage name="bvn" render={renderError} />

										<button
											className="bvn-button bg-colorPrimary"
											type="button"
											onClick={() => {
												setLevel((level) => level + 1);
											}}
										>
											<span
												style={{
													color: "#ffff",
												}}
											>
												Verify{" "}
											</span>
										</button>
									</>
									<div className="field-bottom-bvn mt-8">
										{" "}
										Secured by{" "}
										<img
											className="field-bottom-img"
											src={scamTrustLogo}
											alt="Scam Trust"
										/>{" "}
										<Link to="/setPassword">
											<div className="skip-link">Skip</div>
										</Link>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else return null;
}

export default Signup;
