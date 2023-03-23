/** @format */

import React, { useState } from "react";
import mail from "../../assets/images/mail.png";
import footer from "../../assets/images/footerLogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function PasswordRecoveryEmail() {
	const [email, setEmail] = useState();
	const [error, setError] = useState();
	const [emailsMessage, setEmailsMessage] = useState();
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(true);
	const validateEmail = async (event) => {
		event.preventDefault();
		setLoading(false);
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/verify/email`;
			const payload = {
				email: email,
			};
			const data = await axios.post(API_URL, payload);
			setError(data?.data?.message);
			console.log(data, "data emails");
			setErrorMessage(data?.data?.message);
			setEmailsMessage(data?.data?.status);
		} catch (error) {
			console.log(
				error,

				"errrors"
			);
		}
	};
	const getEmail = async (e) => {
		e.preventDefault();
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/send/resetlink`;

			const payload = {
				email,
			};

			const data = await axios.post(API_URL, payload);
			navigate("/tokenemail", { state: email });
			console.log(data?.data?.data, "user data");

			// console.log(values, "values");
			// return response;
		} catch (error) {
			console.log(error, "errorss");
		}
	};
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/passwordrecoveryphone");
	};
	const [isLogin, setIsLogin] = useState(true);
	const [otp, setOtp] = useState({
		digitOne: "",
		digitTwo: "",
		digitThree: "",
		digitFour: "",
		digitFive: "",
		digitSix: "",
	});
	const handleChange = (event) => {
		const { name, value } = event.target;
		setOtp((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	console.log(otp);
	// const renderInput = (keys) => {
	// 	return (
	// 		<div className="w-[26px] h-[26px] border-[1px] p-1 border-[#232164] rounded-[8px]">
	// 			<input
	// 				className="w-[100%] h-[100%] border-0 outline-none    text-[#232164]"
	// 				type="text"
	// 				name={keys}
	// 				onChange={handleChange}
	// 				maxLength="1"
	// 			/>
	// 		</div>
	// 	);
	// };
	return (
		<div className="">
			<div>
				<div className="flex justify-center items-center h-[100vh] px-4  ">
					<div className="sm:w-[460px] w-[100%] sm:h-[420px] box-shadow rounded-[20px] flex justify-center items-center font-poppins flex-col">
						<h2 className="text-primary pt-10 sm:pt-0 font-semibold  text-[22px] mb-2">
							Password Recovery
						</h2>
						<p className="font-normal text-[12px] text-black font-poppins mb-5 text-center px-3 sm:px-0">
							Please enter your Email Address to receive verification code
						</p>
						<div>
							<h5 className="text-black text-[12px] font-poppins mb-1">
								Email Address{" "}
							</h5>
							<div className="w-[300px] h-[36px] border-[1px] p-1 border-[#D5D8DA] rounded-[5px]">
								<input
									className="w-[100%] h-[100%] border-0 outline-none pl-3  text-[#0b0b0b]"
									name="email"
									value={email}
									type="text"
									onBlur={validateEmail}
									onChange={(e) => setEmail(e.target.value)}
								/>
								{emailsMessage === false ? (
									<span className=" flex items-center mt-1 py-1">
										<span className="text-xs  text-[#3AB75D]">
											email is valid
										</span>
									</span>
								) : (
									<span className=" flex items-center mt-1">
										<span className=" text-xs text-[#FC0D1B]">
											A valid email is needed
										</span>
									</span>
								)}
							</div>

							<div>
								<button
									onClick={handleClick}
									className="mb-3 pt-5"
									style={{
										border: "none",
										textDecoration: "underline",
										color: "#232164",
										fontFamily: "Poppins",
										fontSize: "10px",
									}}
								>
									Use Phone number
								</button>
							</div>

							<button
								onClick={getEmail}
								className="w-[300px] h-[38px] bg-primary rounded-[5px] text-[12px] mb-[6px]"
							>
								{!loading ? "loading" : "Continue"}
							</button>

							<h6 className="text-[12px] font-poppins text-[#8E8E8E] text-center pb-10 sm:pb-0">
								Remember your password ?
								<button className="text-primary">Log in</button>
							</h6>
						</div>
					</div>
				</div>
			</div>
			{/* 		
				<div>
					<div className="flex justify-center items-center h-[100vh] px-4 ">
						<div className="sm:w-[460px] w-[100%] sm:h-[420px] box-shadow rounded-[20px] flex justify-center items-center font-poppins flex-col">
							<h2 className="text-primary font-semibold  text-[22px] mb-2 pt-10 sm:pt-0 ">
								Password Recovery
							</h2>
							<div>
								<img className="sm:w-[100px] w-[50px]" src={mail} alt="" />
							</div>
							<p className="font-semibold text-[12px] text-black font-poppins mb-2  text-center">
								Please enter the 6 digit code sent to folaade@gmail
							</p>
							<div>
								<h5 className="text-black text-[12px] font-poppins mb-1">
									Enter code
								</h5>
								<form>
									<div className="flex justify-between w-[220px] mb-2">
										{Object.keys(otp).map((keys, index) => {
											return renderInput(keys);
										})}
									</div>
								</form>

								<button
									onClick={() => setIsLogin(false)}
									className="w-[220px] h-[38px] bg-primary rounded-[5px] text-[12px] mb-[6px]"
								>
									Continue
								</button>

								<div className="flex justify-center items-center w-[220px] mt-4 gap-1 pb-6 sm:pb-0">
									<h6 className="text-primary text-[12px]">Secured by </h6>
									<img className="w-[60px]" src={footer} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div> */}
		</div>
	);
}

export default PasswordRecoveryEmail;
