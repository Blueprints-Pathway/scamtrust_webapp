/** @format */

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import ErrorInfo from "../../assets/images/svg/error-info.svg";
import CustomerTestimony from "../../components/CustomerTestimony/CustomerTestimony";
import Logo from "../../components/branding/Logo/Logo";
import { customerRegistrationSchema } from "../../model/registerModel";
import axios from "axios";
const signupDetailsFromStorage = localStorage.getItem("customer-signup");

const signupDetails = signupDetailsFromStorage
	? JSON.parse(signupDetailsFromStorage)
	: null;

const defaultValues = signupDetails
	? {
			email: signupDetails.email,
			username: signupDetails.username,
			phone: signupDetails.phone,
			location: signupDetails.location,
	  }
	: null;

const CustomerSignup = () => {
	const [emails, setEmails] = useState();
	const [errorMessage, setErrorMessage] = useState("");
	// const [emailss, setEmailss] = useState();
	const [phones, setPhones] = useState();
	const [emailsMessage, setEmailsMessage] = useState();
	// const [errorMessages, setErrorMessages] = useState("");
	const [phonesMessage, setPhonesMessage] = useState();
	const [errorPhoneMessage, setErrorPhoneMessage] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: defaultValues || {},
		resolver: yupResolver(customerRegistrationSchema),
	});

	const navigate = useNavigate();

	const customerSignupHandler = (data) => {
		const type = "CUSTOMER";
		localStorage.setItem("customer-signup", JSON.stringify({ ...data, type }));
		localStorage.setItem("user-email", data.email.toString());
		navigate("/customer-signup-setpassword");
	};

	const getEmail = async () => {
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/auth/verify/email`;
			const payload = {
				email: emails,
			};
			const data = await axios.post(API_URL, payload);
			setErrorMessage(data?.data?.message);
			console.log(data, "data emails");
			setEmailsMessage(data?.data?.status);
		} catch (error) {
			console.log(
				error,

				"errrors"
			);
		}
	};
	const validatePhone = async () => {
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/auth/verify/phone`;
			const payload = {
				phone: phones,
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
	return (
		<div className="grid bg-white grid-cols-1 lg:grid-cols-2 w-full font-secondary">
			{/* Left Grid Content */}
			<div className="font-secondary px-[10px] md:px-[66.75px] 2xl:px-[89px] py-[19px] md:py-[38.25px] 2xl:py-[51px] flex flex-col justify-between">
				<Logo />
				<div className="2xl:mt-[106px] mt-[25px] md:mt-[79.5px] mb-[126.75px] 2xl:mb-[169px] px-[30px] md:px-[74.25px] 2xl:px-[99px]">
					<h2 className="font-extrabold w-[200px] md:w-[393.75px] 2xl:w-[525px] text-lg 2xl:text-2xl text-colorPrimary mb-[52.75px] 2xl:mb-[70px]">
						Let&apos;s get you started with your{" "}
						<span className="text-colorSecondary">ScamTrust</span> Customer
						account
					</h2>
					<form onSubmit={handleSubmit(customerSignupHandler)}>
						<div className="flex flex-col mb-6">
							<label className="font-medium text-lg">Email address</label>
							<input
								{...register("email")}
								className="h-[48px] border border-[#D5D8DA] rounded-md px-3 focus:outline-none"
								onChange={(e) => setEmails(e.target.value)}
								value={emails}
								onBlur={getEmail}
								name="phone"
								type="string"
							/>
							{emailsMessage === true ? (
								<span className="flex items-center mt-2">
									{/* <img src={ErrorInfo} className="mr-2" alt="error_info" /> */}
									<span className="text-[#3AB75D]">{errorMessage}</span>
								</span>
							) : (
								<span className="flex items-center mt-2">
									<img src={ErrorInfo} className="mr-2" alt="error_info" />
									<span className="text-[#FC0D1B]">{errorMessage}</span>
								</span>
							)}
						</div>
						<div className="flex flex-col mb-6">
							<label className="font-medium text-lg">Username</label>
							<input
								{...register("username")}
								className="h-[48px] border border-[#D5D8DA] rounded-md px-3 focus:outline-none"
							/>
							{errors.username ? (
								<span className="flex items-center mt-2">
									<img src={ErrorInfo} className="mr-2" alt="error_info" />
									<span className="text-[#FC0D1B]">
										{errors.username.message}
									</span>
								</span>
							) : (
								<></>
							)}
						</div>
						<div className="flex flex-col mb-6">
							<label className="font-medium text-lg">Phone number</label>
							<input
								{...register("phone")}
								className="h-[48px] border border-[#D5D8DA] rounded-md px-3 focus:outline-none"
								onChange={(e) => setPhones(e.target.value)}
								value={phones}
								onBlur={validatePhone}
								name="phone"
								type="string"
							/>
							{phonesMessage === true ? (
								<span className="flex items-center mt-2">
									<span className="text-[#3AB75D]">{errorPhoneMessage}</span>
								</span>
							) : (
								<span className="flex items-center mt-2">
									<img src={ErrorInfo} className="mr-2" alt="error_info" />
									<span className="text-[#FC0D1B]">{errorPhoneMessage}</span>
								</span>
							)}
						</div>
						<div className="flex flex-col mb-6">
							<label className="font-medium text-lg">Location</label>
							<input
								{...register("location")}
								className="h-[48px] border border-[#D5D8DA] rounded-md px-3 focus:outline-none"
							/>
							{errors.location ? (
								<span className="flex items-center mt-2">
									<img src={ErrorInfo} className="mr-2" alt="error_info" />
									<span className="text-[#FC0D1B]">
										{errors.location.message}
									</span>
								</span>
							) : (
								<></>
							)}
						</div>
						<div
							className={
								"2xl:mt-[20px] text-xs 2xl:text-[11px] mt-[15px] mb-[13px] 2xl:mb-[18px]"
							}
						>
							<input {...register("agree")} name="agree" type="checkbox" />
							<span className="ml-[10px]">
								I agree to{" "}
								<span className="text-colorPrimary">Scam Trust&apos;s</span>{" "}
								Terms of Service and Privacy Policy
							</span>
							{errors.agree ? (
								<span className="flex items-center mt-2">
									<img src={ErrorInfo} className="mr-2" alt="error_info" />
									<span className="text-[#FC0D1B]">{errors.agree.message}</span>
								</span>
							) : (
								<></>
							)}
						</div>
						<button
							className={`${
								Object.keys(errors).length ? "bg-[#D5D8DA]" : "bg-colorPrimary"
							} justify-center flex items-center px-[10px] w-full rounded-[5px] py-2 text-white text-[13px] 2xl:text-lg`}
						>
							Proceed to set password
						</button>
					</form>
				</div>
			</div>

			{/* Right Grid Content */}
			<div className="bg-[#F9F9F9] relative lg:block hidden">
				<CustomerTestimony />
			</div>
		</div>
	);
};

export default CustomerSignup;
