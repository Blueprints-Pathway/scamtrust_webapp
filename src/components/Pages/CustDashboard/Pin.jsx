import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

import Success from "./Sucess";
function Pin({
	setShow,
	setIsWithdrawing,
	amount,
	selectedBank,
	accountNumber,
}) {
	const [pin, setPin] = useState();
	const [withdraws, setWithdraws] = useState();
	const [hide, setHide] = useState(false);
	
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	console.log("user amount", selectedBank);
	const withdraw = async () => {
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/wallet/withdrawal`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};
			const payload = {
				amount: amount,
				bank_id: selectedBank,
				account_number: accountNumber,
				pin: pin,
			};

			const data = await axios.post(API_URL, payload, config);

			setWithdraws(data?.status);
		} catch (error) {
			// Alert.alert("failed login details");
			console.log(error, "errrors");
		}
	};
	const navigates = () => {
		if (withdraws === 201 || withdraws === 204) {
		} else {
			swal("wrong pin!", "You submitted the wrong information!", "error");
		}
	};
	return (
		<div>
			<div className="w-screen h-screen fixed z-40 top-0 left-0 bg-[rgba(23,23,23,0.54)]" />
			<div
				// onSubmit={handleSubmit(onContinueClicked)}
				className="fixed text-colorPrimary rounded-xl top-1/2 p-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:max-w-[700px] xl:[1000px] md:p-10 w-[90%] mx-auto bg-white"
			>
				<div className="flex border-b pb-3 border-b-[#EAEAEA] justify-between items-center mb-11 md:mb-16">
					<p className="font-semibold text-xl md:text-[30px]">Withdrawal</p>
					<p
						onClick={() => {
							setShow(false);
							setIsWithdrawing(false);
						}}
						className="font-extrabold cursor-pointer text-lg md:text-[25px]"
					>
						Close x
					</p>
				</div>

				<div className="mb-11 md:mb-16">
					<label className="text-xl md:text-3xl block" htmlFor="amount">
						Transaction pin
					</label>
					<input
						value={pin}
						onChange={(e) => setPin(e.target.value)}
						name="pin"
						placeholder="Enter transaction pin
						"
						className={`block placeholder:text-[#E5E7E9] focus:outline-none w-full p-2 border-b border-b-[#C0C0C0]`}
					/>
				</div>

				<div className="flex justify-between items-center">
					{/* <img src={SecuredBy} alt="SecuredByScamTrust" /> */}
					<button
						type="submit"
						onClick={() => {
							setHide(true);
							withdraw();
						}}
						className="bg-colorPrimary text-white px-7 py-3 rounded-md"
					>
						Continue
					</button>
				</div>
			</div>
			{hide && <Success setDisplay={setHide} setShow={setShow} setIsWithdrawing={setIsWithdrawing}/>}
		</div>
	);
}

export default Pin;
