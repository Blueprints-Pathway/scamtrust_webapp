/** @format */

import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import SecuredBy from "../../../assets/images/svg/secured-by.svg";
import Pin from "./Pin";
import { useNavigate } from "react-router-dom";
import BankSelect from "./BankSelect";

const withdrawSchema = yup.object().shape({
	amount: yup
		.number("Amount should be a number")
		.positive("Amount cannot be negative")
		.required("Account is a required field"),
	account: yup.string().required("Account is a required field"),
	accountNumber: yup
		.number("Account Number should be a number")
		.required("Account Number  is a required field"),
	account: yup.string().required("Account Number  is a required field"),
});

const WithdrawFunds = (props) => {
	const [amount, setAmount] = useState('');
	const [accountNumber, setAccountNumber] = useState('');
	const [bankName, setBankName] = useState('');
	const [bank, setBank] = useState();
	const [amountError, setAmountError] = useState(false);
	const [accountNumberError, setAccountNumberError] = useState(false);
	const [selectedBank, setSelectedBank] = useState('9 PAYMENT SOLUTIONS BANK');
	const [show, setShow] = useState(false);
	const { startWithdrawFunds, setIsWithdrawing, availableBalance, userName } = props;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(withdrawSchema),
	});

	// const navigate = useNavigate();

	const closeWithdraw = () => {
		setIsWithdrawing(false);
	};
	const withDrawFunds = () => {
		if(+amount === null || amount === ''){
			setAmountError('Input a valid digit!')
			console.log('valid digit 1')
			return;

		}
		if (+amount <= 0) {
			setAmountError('Amount must be greater than zero!');
			console.log('valid digit 2')
			return;
		}
		if (+amount > availableBalance) {
			setAmountError('Amount Exceeded Your Wallet Balance');
			console.log('valid digit 2')
			return;
		}
		if(+accountNumber === null || accountNumber === ''){
			setAccountNumberError('Input a valid digit!')
			console.log('valid digit 2')
			return;

		}
		if(+accountNumber.length !== 10){
			setAccountNumberError('Input a valid Account Number!')
			console.log('valid digit 2')
			return;

		}
		
		setShow(true);
	}

	useEffect(() => {
		const details = async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/misc/get/banks`;
				const config = {
					headers: {
						"Content-Type": "application/json",
					},
				};
				const data = await axios.get(API_URL, config);

				setBank(data?.data?.data);
			} catch (error) {
				// Alert.alert("failed login details");
				console.log(error, "errors");
			}
		};
		details();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// console.log(bank, "banks");
	
	return (
		<div>
			<div className="w-screen h-screen fixed z-40 top-0 left-0 bg-[rgba(23,23,23,0.54)]" />
			{show === true ? (
				""
			) : (
				<div
					// onSubmit={handleSubmit(onContinueClicked)}
					className="fixed text-colorPrimary rounded-xl top-1/2 p-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:max-w-[700px] xl:[1000px] md:p-10 w-[90%] mx-auto bg-white"
				>
					<div className="flex border-b pb-3 border-b-[#EAEAEA] justify-between items-center mb-11 md:mb-16">
						<p className="font-semibold text-xl md:text-[30px]">Withdrawal</p>
						<p
							onClick={closeWithdraw}
							className="font-extrabold cursor-pointer text-lg md:text-[25px]"
						>
							Close x
						</p>
					</div>

					<div className="mb-11 md:mb-16">
						<label className="text-xl md:text-3xl block" for="amount">
							Amount
						</label>
						<input
							{...register("amount")}
							value={amount}
							onChange={(e) =>{ setAmount(e.target.value); setAmountError(false)}}
							name="amount"
							type="number"
							placeholder="Enter amount"
							className={`block placeholder:text-[#E5E7E9] ${
								amountError ? "border-b-red-600" : ""
							} focus:outline-none w-full p-2 border-b border-b-[#C0C0C0]`}
						/>
						{amountError && (
							<p className="text-red-600">{amountError}</p>
						)}
					</div>
					<div className="mb-11 md:mb-16">
						<label className="text-xl md:text-3xl block" htmlFor="amount">
							Account Number
						</label>
						<input
							{...register("accountNumber")}
							value={accountNumber}
							onChange={(e) => {setAccountNumber(e.target.value); setAccountNumberError(false) }}
							name="amount"
							type="number"
							placeholder="Enter Account Number"
							className={`block placeholder:text-[#E5E7E9] ${
								accountNumberError ? "border-b-red-600" : ""
							} focus:outline-none w-full p-2 border-b border-b-[#C0C0C0]`}
						/>
						{accountNumberError && (
							<p className="text-red-600">{accountNumberError}</p>
						)}
					</div>
					{/* <div className="mb-32 md:mb-40 relative">
						<label className="text-xl mb-2 md:text-3xl block" htmlFor="amount">
							Destinations account
						</label>
						<select
							onChange={(e) =>{ setSelectedBank(e.target.value); }}
							className={`block ${
								errors.account ? "border-red-600" : ""
							} focus:outline-none border border-colorPrimary rounded-md w-full px-3 py-1.5 text-gray-700`}
						>
							{bank?.map(
								(allbannk, index) => {
									// console.log(selectedBank, "all bank");
									// console.log(allbannk[index].name);
									return (
										<option value={allbannk?.name} id={allbannk.name} >
											{allbannk?.name}
										</option>)
									}
								)
								}
						</select>

						{errors.account && (
							<p className="text-red-600 mt-2">{errors.account.message}</p>
						)}
					</div> */}

					<div className="flex justify-between items-center">
						<img src={SecuredBy} alt="SecuredByScamTrust" />
						<button
							type="submit"
							onClick={
								withDrawFunds
							}
							className="bg-colorPrimary text-white px-7 py-3 rounded-md"
						>
							Continue
						</button>
					</div>
				</div>
			)}
			{show && (
				<BankSelect
					selectedBank={selectedBank}
					setShow={setShow}
					setIsWithdrawing={setIsWithdrawing}
					amount={amount}
					accountNumber={accountNumber}
					userName = {userName}
				/>
			)}
		</div>
	);
};

export default WithdrawFunds;
