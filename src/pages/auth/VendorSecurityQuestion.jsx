/** @format */

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";
import SecurityCard from "../../assets/images/security-card.svg";

import InputGroup from "../../components/UI/InputGroup";
import { registerUser } from "../../services/auth";
import axios from "axios";
import "./rcSettings.css";
const VendorSecurityQuestion = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [question, setQuestion] = useState();
	const [answer, setAnswer] = useState();
	const getData = async () => {
		const { data } = await axios.get(
			`https://scamtrust.herokuapp.com/api/v1/misc/list/questions`
		);
		setQuestion(data);
	};

	// const answers = async () => {
	// 	try {
	// 		const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/set-security-question`;
	// 		const config = {
	// 			headers: {
	// 				"Content-Type": "application/json",
  //         // Authorization: `Bearer ${}
	// 			},
	// 		};
	// 		const payload = {
	// 			question_id: "104",
	// 			answer,
	// 		};
	// 		const data = await axios.post(API_URL, payload, config);
	// 		console.log(data, "data");

	// 		console.log(data, "data");
	// 	} catch (error) {
	// 		console.log(error, "errror");
	// 	}
	// };
	useEffect(() => {
		getData();
	}, []);

	console.log(question, "question securitys");
	const headingText = (
		<div className=" flex justify-center space-x-96 content-center  text-center mb-[15px] mt-[43px] lg:mt-[87.75px] 2xl:mb-[42px] 2xl:mt-[117px]">
			<h3 className="text-center  text-[#232164] font-semibold text-base lg:text-xl 2xl:text-3xl">
				Security Question
			</h3>

			<img src={SecurityCard} alt="security card" />
		</div>
	);

	const navigate = useNavigate();

	const submitHandler = async () => {
		if (loading) return;
		setErrorMessage("");
		const data = localStorage.getItem("vendor-signup");
		setLoading(true);
		try {
			const response = await registerUser(data);
			if (response.status === false) {
				setLoading(false);
				const errorMessage = Object.values(response.message)[0];
				setErrorMessage(errorMessage[0]);
				return;
			}
			setLoading(false);
			navigate("/");
		} catch (error) {
			setLoading(false);
			// const message =
			//   error.response && error.response.data.message
			//     ? error.response.data.message
			//     : error.message;
		}
	};
	console.log(answer, "hello answer");
	return (
		<SignupWrapper headingText={headingText}>
			<p className=" ml-20  text-[rgba(35,33,100,0.5)] mb-[30px] lg:mb-[61px] text-[12px] 2xl:text-base w-full lg:w-full 2xl:w-full">
				Security questions add an extra layer of security to your account; It is
				to
				<br /> verify if the account really belongs to you.
			</p>
			<div className="grid mb-[15px] 2xl:mb-[35px] w-full lg:w-full 2xl:w-full">
				<label
        className='ml-20 '
					style={{
						fontFamily: "Poppins",
						fontStyle: "normal",
						fontWeight: 400,
						fontSize: "18px",
						lineHeight: "27px",
						color: "#232164",
					}}
				>
					Security Question
				</label>
				<select className="question ml-20 mb-[26.25px] 2xl:mb-[35px] w-[280px] lg:w-96 2xl:w-5/6">
					{question?.data?.map((newquestion) => {
						return (
							<option key={newquestion?.id}>{newquestion?.question}</option>
						);
					})}
				</select>
			</div>
      <label
        className='ml-20 '
					style={{
						fontFamily: "Poppins",
						fontStyle: "normal",
						fontWeight: 400,
						fontSize: "18px",
						lineHeight: "27px",
						color: "#232164",
					}}
				>
					Your Answer
				</label>
			<div className="question ml-20  mb-[26.25px] 2xl:mb-[35px] w-full lg:w-full 2xl:w-5/6">
        
				<input
					value={answer}
					className="mx-10"
					label="Your Answer"
					type="text"
					onChange={(e) => setAnswer(e.target.value)}
				/>
			</div>

			{errorMessage.length ? (
				<div className="w-[280px] bg-red-500 mb-3 p-2 rounded text-white text-center lg:w-full 2xl:w-full">
					{errorMessage}
				</div>
			) : (
				<></>
			)}

			<div className=" w-[280px] ml-20 lg:w-[353.25px] 2xl:w-5/6 mb-[58px] lg:mb-[117px] 2xl:mb-[156px]">
				<Button
					onClick={() => {
						submitHandler();
						// answers();
					}}
					bgColor="bg-colorSecondary"
				>
					{loading ? "Loading..." : "Continue"}
				</Button>
			</div>
		</SignupWrapper>
	);
};

export default VendorSecurityQuestion;
