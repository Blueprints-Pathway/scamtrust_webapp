/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import SecuredBy from "../../../assets/images/svg/secured-by.svg";

const fundSchema = yup.object().shape({
	amount: yup
		.number("Amount should be a number")
		.positive("Amount cannot be negative")
		.required("Account is a required field"),
	account: yup.string().required("Account is a required field"),
});

const DepositFunds = (props) => {
	const { isFunding, setIsFunding } = props;
	const [bank, setBank] = useState();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(fundSchema),
	});

	const navigate = useNavigate();

	const closeFunding = () => {
		navigate("/customer-dashboard");
		setIsFunding(false);
	};

	const onContinueClicked = (data) => {
		console.log(data);
		setIsFunding(false);
	};
  const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/misc/get/banks`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						// Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				// console.log(data?.data.data, "user data");
				setBank(data?.data?.data);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (typeof window !== "undefined") {
			if (window) document.body.style.overflow = "hidden";
		}

		if (!isFunding) {
			if (typeof window !== "undefined") {
				if (window) document.body.style.overflow = "unset";
			}
		}
	}, [isFunding]);

	if (!isFunding) return <></>;

	return (
		<div>
			<div className="w-screen h-screen fixed z-40 top-0 left-0 bg-[rgba(23,23,23,0.54)]" />
			<form
				onSubmit={handleSubmit(onContinueClicked)}
				className="fixed text-colorPrimary rounded-xl top-1/2 p-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:max-w-[700px] xl:[1000px] md:p-10 w-[90%] mx-auto bg-white"
			>
				<div className="flex border-b pb-3 border-b-[#EAEAEA] justify-between items-center mb-11 md:mb-16">
					<p className="font-semibold text-xl md:text-[30px]">Fund wallet</p>
					<p
						onClick={closeFunding}
						className="font-extrabold cursor-pointer text-lg md:text-[25px]"
					>
						Close x
					</p>
				</div>

				<div className="mb-11 md:mb-16">
					<label className="text-xl md:text-3xl block" htmlFor="amount">
						Amount
					</label>
					<input
						{...register("amount")}
						name="amount"
						placeholder="Enter amount"
						className={`block placeholder:text-[#E5E7E9] ${
							errors.amount ? "border-b-red-600" : ""
						} focus:outline-none w-full p-2 border-b border-b-[#C0C0C0]`}
					/>
					{errors.amount && (
						<p className="text-red-600">{errors.amount.message}</p>
					)}
				</div>

				<div className="mb-32 md:mb-40 relative">
					<label className="text-xl mb-2 md:text-3xl block" htmlFor="amount">
						Destination account
					</label>
					<select
						{...register("account")}
						className={`block ${
							errors.account ? "border-red-600" : ""
						} focus:outline-none border border-colorPrimary rounded-md w-full px-3 py-1.5 text-gray-700`}
					>
					
						{bank.map((newbank)=>{
              console.log(newbank, "new");
              return(
<option >{newbank?.name} </option>
              )
            })}
				
					</select>

					{errors.account && (
						<p className="text-red-600 mt-2">{errors.account.message}</p>
					)}
				</div>

				<div className="flex justify-between items-center">
					<img src={SecuredBy} alt="SecuredByScamTrust" />
					<button
						type="submit"
						className="bg-colorPrimary text-white px-7 py-3 rounded-md"
					>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
};

export default DepositFunds;
