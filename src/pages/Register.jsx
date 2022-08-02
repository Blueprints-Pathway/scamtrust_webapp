import Logo from "../components/branding/Logo/Logo";
import CustomerTestimony from "../components/CustomerTestimony/CustomerTestimony";
import Button from "../components/UI/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { registerAsync } from "../components/redux/Auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Register = (rcComponent) => {
	const [Name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [industry, setIndustry] = useState();
	const [industryData, setIndustryData] = useState();
	const [businessData, setBusinesData] = useState();
	const [businessType, setBusinessType] = useState();
	const [location, setLocaion] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [vendor, setVendor] = useState();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		async function GetIndustry() {
			try {
				const API_URL =
					"https://scamtrust.herokuapp.com/api/v1/misc/list/industries";
				const config = {
					headers: {
						"Content-Type": "application/json",
					},
				};
				//   console.log(payload);
				const request = await axios.get(API_URL, config);
				const response = request?.data;
				setIndustryData(response?.data);

				return response;
			} catch (error) {
				console.log(error.response);
			}
		}
		GetIndustry();
	}, []);
	useEffect(() => {
		async function GetBusiness() {
			try {
				const API_URL =
					"https://scamtrust.herokuapp.com/api/v1/misc/list/businesstypes";
				const config = {
					headers: {
						"Content-Type": "application/json",
					},
				};
				//   console.log(payload);
				const request = await axios.get(API_URL, config);
				const response = request?.data;
				setBusinesData(response?.data);

				return response;
			} catch (error) {
				console.log(error.response);
			}
		}
		GetBusiness();
	}, []);
	const register = async (e) => {
		e.preventDefault();
		try {
			const payload = {
				name: Name,
				email,
				phone,
				industry,
				business_type_id: businessType,
				location,
				password_confirmation: confirmPassword,
				password,
				type: vendor,
			};

			dispatch(registerAsync(payload));
			navigate("/dashboard")
			console.log("hello");
		} catch (error) {
			console.log("ERROR");
		}
	};
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen font-secondary">
			{/* Left Grid Content */}
			<div className="font-secondary px-[33px] md:px-[66.75px] 2xl:px-[89px] py-[19px] md:py-[38.25px] 2xl:py-[51px] flex flex-col justify-between">
				<Logo />
				<div className="2xl:mt-[106px] mt-[25px] md:mt-[79.5px] mb-[126.75px] 2xl:mb-[169px] px-[30px] md:px-[74.25px] 2xl:px-[99px]">
					<h2 className="font-extrabold w-[200px] md:w-[393.75px] 2xl:w-[525px] text-lg 2xl:text-2xl text-colorPrimary mb-[52.75px] 2xl:mb-[70px]">
						Let&apos;s get you started with your{" "}
						<span className="text-[#3AB75D]">ScamTrust</span> Vendor account
					</h2>

					<form onSubmit={register}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
							<div className="relative">
								<label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
									Business Name
									<input
										name="business_name"
										type="text"
										value={Name}
										onChange={(e) => setName(e.target.value)}
										className={`border-[0.5px] w-full ${
											rcComponent && "h-[35px]"
										} border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
									/>
								</label>
							</div>
							{/* <InputGroup type="text"  label="Business Name" /> */}
							<div className="relative">
								<label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
									Email Adress
									<input
										name="email"
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className={`border-[0.5px] w-full ${
											rcComponent && "h-[35px]"
										} border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
									/>
								</label>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
							<div className="relative">
								<label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
									Phone Number
									<input
										name="phonea-number"
										type="string"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										className={`border-[0.5px] w-full ${
											rcComponent && "h-[35px]"
										} border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
									/>
								</label>
							</div>
							<label className=" text-[13px] 2xl:text-lg text-colorTertiary 2xl:mb-[15px] mb-[10px]">
								Industry Type
								<select
									value={industry}
									onChange={(e) => setIndustry(e.target.value)}
									className="border-[0.5px] border-[#D5D8DA] 2xl:text-base text-[12px] h-[30px] 2xl:h-[40px] rounded-[5px]"
									name="industry"
									id=""
								>
									<option>Select Industry Type</option>
									{industryData?.map((industryData, idx) => {
										return (
											<>
												{" "}
												<option key={idx} value={industryData?.id}>
													{industryData?.name}
												</option>
											</>
										);
									})}
								</select>
							</label>
						</div>
						<div className="  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
							<div className="relative">
								<label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
									Business Adress
									<input
										name="business_adress"
										type="text"
										value={location}
										onChange={(e) => setLocaion(e.target.value)}
										className={`border-[0.5px] w-full ${
											rcComponent && "h-[35px]"
										} border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
									/>
								</label>
							</div>
							<label className="  text-[13px] 2xl:text-lg text-colorTertiary 2xl:mb-[15px] mb-[10px]">
								Business Type
								<select
									onChange={(e) => setBusinessType(e.target.value)}
									value={businessType}
									className=" border-[0.5px] border-[#D5D8DA] 2xl:text-base text-[12px] h-[30px] 2xl:h-[40px] rounded-[5px]"
									name="business_type"
								>
									<option>Select Business Type</option>
									{businessData?.map((businessData) => {
										return (
											<>
												{" "}
												<option value={businessData?.id}>
													{businessData?.name}
												</option>
											</>
										);
									})}
								</select>
							</label>
						</div>

						<div className="  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
							<div className="relative">
								<label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
									Password
									<input
										name="password"
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className={`border-[0.5px] w-full ${
											rcComponent && "h-[35px]"
										} border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
									/>
								</label>
							</div>
							<label className="  text-[13px] 2xl:text-lg text-colorTertiary 2xl:mb-[15px] mb-[10px]">
								Confirm Password
								<input
									name="confirm-password"
									type="password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									className={`border-[0.5px] w-full ${
										rcComponent && "h-[35px]"
									} border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
								/>
							</label>
						</div>
						<div className="  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
							<div className="relative">
								<label className="  text-[13px] 2xl:text-lg text-colorTertiary 2xl:mb-[15px] mb-[10px]">
									Type of Seller
									<select
										onChange={(e) => setVendor(e.target.value)}
										value={vendor}
										className=" border-[0.5px] border-[#D5D8DA] 2xl:text-base text-[12px] h-[30px] 2xl:h-[40px] rounded-[5px]"
										name="business_type"
									>
										<option>Select Business Type</option>
										<option value="vendor">Vendor</option>
									</select>
								</label>
							</div>
						</div>
						<div className="2xl:mt-[20px] text-[8px] 2xl:text-[11px] mt-[15px] mb-[13px] 2xl:mb-[18px]">
							<input type="checkbox" />
							<span className="ml-[10px]">
								I agree to{" "}
								<span className="text-colorPrimary">Scam Trust&apos;s</span>{" "}
								Terms of Service and Privacy Policy
							</span>
						</div>

						<div>
							<Button type="submit">Proceed to verify RC Number</Button>
						</div>
					</form>
				</div>
				<div className="flex justify-between 2xl:text-base text-[12px]">
					<div />
					<a className="text-colorPrimary underline" href="#">
						Go back to Website
					</a>
				</div>
			</div>

			{/* Right Grid Content */}
			<div className="bg-[#F9F9F9] relative lg:block hidden">
				<CustomerTestimony />
			</div>
		</div>
	);
};

export default Register;
