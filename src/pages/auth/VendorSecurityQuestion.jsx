/** @format */

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";
import SecurityCard from "../../assets/images/security-card.svg";

import InputGroup from "../../components/UI/InputGroup";
import SelectGroup from "../../components/UI/SelectGroup";
import { registerUser } from "../../services/auth";
import axios from "axios";
import "./rcSettings.css";

const VendorSecurityQuestion = (props) => {
	const { label, option } = props;
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [question, setQuestion] = useState();
	const [id, setId] = useState();
	const [choice, setChoice] = useState();
	const getData = async () => {
		const { data } = await axios.get(
			`https://scamtrust.herokuapp.com/api/v1/misc/list/questions`
		);
		setQuestion(data);
	};

	const answers = async () => {
		const user_auth = JSON.parse(localStorage.getItem("auth"));
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/set-security-question`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_auth}`,
				},
			};
			const payload = {
				question_id: id,
				answer: choice,
			};
			const data = await axios.post(API_URL, payload, config);
			console.log(data, "data");
			// navigate("/");
			console.log(data, "data");
		} catch (error) {
			console.log(error, "errror");
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const headingText = (
		<div className="flex justify-between items-center mb-[20px] mt-[43px] mx-[27px] lg:mt-[60px] lg:mx-[85px] 2xl:mb-[42px] 2xl:mt-[117px]">
			<h3 className="text-[#232164] font-bold text-xl lg:text-2xl 2xl:text-3xl">
				Security Question
			</h3>

			<img className="w-12" src={SecurityCard} alt="security card" />
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
		
		} catch (error) {
			setLoading(false);
			// const message =
			//   error.response && error.response.data.message
			//     ? error.response.data.message
			//     : error.message;
		}
	};
	console.log(id, choice, "id");
	return (
		<SignupWrapper headingText={headingText}>
			<div className="px-[27px] lg:mx-[55px]">
				<p className="text-[rgba(35,33,100,0.5)] mb-[30px] lg:mb-[37px] text-[12px] 2xl:text-base w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
					Security questions add an extra layer of security to your account; It
					is to verify if the account really belongs to you.
				</p>
				<div className="mb-[15px] 2xl:mb-[35px] w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
					<div className="flex flex-col">
						<label
							className="text-[13px] 2xl:text-lg text-[#232164] 2xl:mb-[15px] mb-[10px]"
							htmlFor={label}
						>
							Security Question
						</label>
						<select
							onChange={(e) => setId(e.target.value)}
							className="border-[0.5px] border-[#D5D8DA] 2xl:text-base text-[12px] h-[30px] 2xl:h-[40px] rounded-[5px]"
						>
							{question?.data?.map((newdata) => {
								return (
									<option value={newdata?.id} key={newdata?.id}>
										{newdata?.question}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<div className="mb-[26.25px] 2xl:mb-[35px] w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
					<div className="flex flex-col">
						<label
							className="text-[13px] 2xl:text-lg text-[#232164] 2xl:mb-[15px] mb-[10px]"
							htmlFor={label}
						>
					Your Answer
						</label>
						<input
							value={choice}
							onChange={(e) => setChoice(e.target.value)}
							className="border-[0.5px] border-[#D5D8DA] 2xl:text-base text-[12px] h-[30px] 2xl:h-[40px] rounded-[5px]"
						/>
					</div>
				</div>

				{errorMessage.length ? (
					<div className="w-[280px] bg-red-500 mb-3 p-2 rounded text-white text-center lg:w-[353.25px] 2xl:w-[471px]">
						{errorMessage}
					</div>
				) : (
					<></>
				)}

				<div className="w-[280px] lg:w-[353.25px] 2xl:w-[471px] mb-[58px] mt-[50px] lg:mb-[60px] 2xl:mb-[156px]">
					<Button
						onClick={() => {
							submitHandler();
							answers();
						}}
						bgColor="bg-colorSecondary"
					>
						{loading ? "Loading..." : "Continue"}
					</Button>
				</div>
			</div>
		</SignupWrapper>
	);
};

export default VendorSecurityQuestion;
