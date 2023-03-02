/** @format */

import React, { useState } from "react";
import "./password.css";
import Logo from "../images/ScanTrust logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
function PasswordEmail() {
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	const getEmail = async (e) => {
    e.preventDefault()
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/send/resetlink`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};
			const payload = {
				email,
			};

			const data = await axios.post(API_URL, payload, config);
      navigate("/tokenEmail" ,{ state: email });
			console.log(data?.data?.data, "user data");

			// console.log(values, "values");
			// return response;
		} catch (error) {
			console.log(error, "errorss");
		}
	};
	return (
		<div className="container-fluid ">
			<div className="m-5">
				<img className="px-5" alt="logo" src={Logo} />
			</div>
			<div
				className="mx-auto box-border  top-10 md:top-40 lg:top-40 sm:w-full lg:w-5/12   md:6/12  card p-4 border-2 mt-5 left-30 
       pass right-30 relative"
			>
				<div className="text-center ">
					<h3 className="password-recovery mt-5">Password Recovery</h3>
				</div>

				<div className="text-center ">
					<span className="font-popins password-recovery-top ">
						Please enter your Email Address to receive verification code
					</span>
				</div>
				<div className="grid grid-cols-6   gap-4 p-3   ">
					<div className="col-start-2 col-span-4">
						<Formik
							initialValues={{ email: "", password: "" }}
							validate={(values) => {
								const errors = {};
								if (!values.email) {
									errors.email = "Required";
								} else if (
									!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
								) {
									errors.email = "Invalid email address";
								}
								return errors;
							}}
							onSubmit={(values, { setSubmitting }) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
									setSubmitting(false);
								}, 400);
							}}
						>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
								/* and other goodies */
							}) => (
								<form>
									<label className="block">
										<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
											Email Address
										</span>
										<input
											required
											onChange={(e) => setEmail(e.target.value)}
											value={email}
											type="email"
											name="email"
											className="mt-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
											placeholder="you@example.com"
										/>
									</label>
									<div className="mt-3 text-decoration:line password-recovery-bottom">
										<Link to="/phoneNumber">Use phone number</Link>
									</div>
									<div className="grid justify-items-center mt-4	">
										<button
											onClick={getEmail}
											style={{ backgroundColor: " #232164" }}
											className=" w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
										>
											Continue
										</button>
									</div>
								</form>
							)}
						</Formik>

						<div className="text-center  bottom mb-5">
							<small>
								Remember your password ? <span className="login">Login</span>{" "}
							</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PasswordEmail;
