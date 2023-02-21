/** @format */
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";
import axios from "axios";
import InputCode from "./Token";
const inputClassName =
	"h-[30px] w-[30px] focus:border-[#D5D8DA] focus:outline-none text-center rounded text-colorPrimary text-xl border-[#D5D8DA] border-[1px] bg-[#fff]";

const handleFormSumit = (data) => {
	const vendorSignupDetails = JSON.parse(localStorage.getItem("vendor-signup"));

	console.log(vendorSignupDetails, "vendor details");
	const vendorSignupData = { ...vendorSignupDetails, ...data };

	localStorage.setItem("vendor-signup", JSON.stringify(vendorSignupData));
};

const VendorSetpin = () => {
	const [loading, setLoading] = useState(false);
	const [code, setCode] = useState([...Array(4)].map(() => ""));
	const [dataSet, setDataSet] = useState([]);
	const [confirmCode, setConfirmCode] = useState([...Array(4)].map(() => ""));
	const navigate = useNavigate();
	// const [pins, setpins]=useState()

	// const firstInput = useRef();
	// const secondInput = useRef();
	// const thirdInput = useRef();
	// const fourthInput = useRef();

	// const fifthInput = useRef();
	// const sixthInput = useRef();
	// const seventhInput = useRef();
	// const eigthInput = useRef();

	const handleSubmit = () => {
		navigate("/vendor-signup-security-question");
	};

	const headingText = (
		<h3 className="font-extrabold text-lg 2xl:text-2xl 2xl:mb-[100px] mb-[75px] px-8 mx-8 mt-8 pt-5 text-[#262466]">
			{" "}
			Let&apos;s help you secure your{" "}
			<span className="text-colorSecondary">ScamTrust</span> Vendor account.
			Kindly set your <span className="text-colorSecondary"> password</span> and{" "}
			<span className="text-colorSecondary"> transaction pin.</span>
		</h3>
	);
	const newData = code.toString();

	const getData = parseFloat(newData.replace(/,/g, ""));
	console.log(getData, "number");
	//   Pushing the input to the next field
	// const handleInputChange = (event) => {
	// 	const { maxLength, value, name } = event.target;
	// 	const result =value.concat()

	// 	setpins(result)
	// 	switch (name) {
	// 		case "input1":
	// 			if (value.length >= maxLength) {
	// 				secondInput.current?.focus();
	// 			}
	// 			break;
	// 		case "input2":
	// 			if (value.length >= maxLength) {
	// 				thirdInput.current?.focus();
	// 			}
	// 			break;
	// 		case "input3":
	// 			if (value.length >= maxLength) {
	// 				fourthInput.current?.focus();
	// 			}
	// 			break;
	// 		case "input4":
	// 			if (value.length >= maxLength) {
	// 				fifthInput.current?.focus();
	// 			}
	// 			break;
	// 		case "input5":
	// 			if (value.length >= maxLength) {
	// 				sixthInput.current?.focus();
	// 			}
	// 			break;
	// 		case "input6":
	// 			if (value.length >= maxLength) {
	// 				seventhInput.current?.focus();
	// 			}
	// 			break;
	// 		case "input7":
	// 			if (value.length >= maxLength) {
	// 				eigthInput.current?.focus();
	// 			}
	// 			break;
	// 		case "input8":
	// 			if (value.length >= maxLength) {
	// 				eigthInput.current?.focus();
	// 			}
	// 			break;
	// 		default:
	// 			break;
	// 	}

	// };

	const pinRegister = async (data) => {
		const user_auth = JSON.parse(localStorage.getItem("auth"));
		console.log(user_auth, "auth");
		const vendorSignupDetails = JSON.parse(
			localStorage?.getItem("vendor-signup")
		);
		const vendorSignupData = { ...vendorSignupDetails, ...data };
		console.log(vendorSignupData, "data");
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/set-pin`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_auth}`,
				},
			};
			const payload = {
				pin: getData,
			};

			const data = await axios.post(API_URL, payload, config);

			console.log(data,"user datas");
		} catch (error) {
			console.log(error, "errorss");
		}
	};
	const getResgister = async (data) => {
		const vendorSignupDetails = JSON.parse(
			localStorage.getItem("vendor-signup")
		);
		const vendorSignupData = { ...vendorSignupDetails, ...data };
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/auth/register`;
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const payload = {
				name: vendorSignupData?.name,
				email: vendorSignupData?.email,
				phone: vendorSignupData?.phone,
				industry: vendorSignupData?.industry,
				business_type_id: vendorSignupData?.business_type_id,
				location: vendorSignupData?.location,
				password: vendorSignupData?.password,
				password_confirmation: vendorSignupData.password,
				type: vendorSignupData?.type,
			};

			const data = await axios.post(API_URL, payload, config);

			console.log(data?.data?.data?.access_token, "user datas");
			setDataSet(data?.data?.data);
			localStorage.setItem(
				"auth",
				JSON.stringify(data?.data?.data?.access_token)
			);
		} catch (error) {
			console.log(error, "errorss");
		}
	};
	useEffect(() => {
		handleFormSumit();
		getResgister();
	}, []);

	console.log(code, "pin");
	return (
		<div className="mb-12">
			<SignupWrapper headingText={headingText} showSecuredLogo={true}>
				<div className="w-[248.25px] 2xl:w-[331px] mx-auto">
					<p className="text-center text-[#7D8287] text-[11px]">
						To set up your pin, input your 4-digit code and confirm it below.
					</p>

					<div className="mb-[20px] mt-3">
						<p className="text-base font-medium pb-2 flex px-10">
							Transaction pin
						</p>
						<div className="mb-[1.46rem] flex justify-between mx-10">
							{/* <input
								maxLength={1}
								ref={firstInput}
								name="input1"
								onChange={handleInputChange}
								className={inputClassName}
							/>
							<input
								maxLength={1}
								ref={secondInput}
								name="input2"
								onChange={handleInputChange}
								className={inputClassName}
							/>
							<input
								maxLength={1}
								ref={thirdInput}
								name="input3"
								onChange={handleInputChange}
								className={inputClassName}
							/>
							<input
								maxLength={1}
								ref={fourthInput}
								name="input4"
								onChange={handleInputChange}
								className={inputClassName}
							/> */}
							<div className="grid  p-3  justify-items-center">
								<InputCode
									length={4}
									code={code}
									setCode={setCode}
									label="Code Label"
									loading={loading}
									onComplete={(code) => {
										setLoading(true);
										setTimeout(() => setLoading(false), 10000);
									}}
								/>
							</div>
						</div>
					</div>

					<div className="mb-[20px]">
						<p className="text-base font-medium pb-2 flex px-10">
							Confirm transaction pin
						</p>
						<div className="mb-[1.46rem] flex justify-between mx-10">
							<InputCode
								length={4}
								code={confirmCode}
								setCode={setConfirmCode}
								label="Code Label"
								loading={loading}
								onComplete={(confirmCode) => {
									setLoading(true);
									setTimeout(() => setLoading(false), 10000);
								}}
							/>
						</div>
					</div>

					<div className="2xl:mt-[40px] mb-[105px] 2xl:mb-[140px] mt-[30px]">
						<Button
							onClick={() => {
								pinRegister();
								handleSubmit();
								
							}}
							forwardIcon={true}
						>
							Set security question
						</Button>
					</div>
				</div>
			</SignupWrapper>
		</div>
	);
};

export default VendorSetpin;
