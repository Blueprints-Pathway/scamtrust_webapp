/** @format */

import React, { useState, useEffect } from "react";

import "./settingsVendor.css";
import shielgg from "../../assets/images/shielgg 4.svg";
import cross from "../../assets/images/cross.svg";
import banks from "../../assets/images/bank.svg";
import scamTrustLogo from "../../assets/images/Group114(1).png";
import { useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import encrypted from "../../assets/images/encrypted.png";
import { ThreeDots } from "react-loader-spinner";
function CashAccount({ closeModal }) {
	const [closed2, setClosed2] = useState(false);
	const [Edit2, setEdit2] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [accountName, setAccountName] = useState("");
	const [bankSelected, setSelectedBank] = useState("");
	const [bankSelectedId, setSelectedBankId] = useState("");
	const [accountNameError, setAccountNameError] = useState(false);
	const [accountNumber, setAccountNumber] = useState("");
	const handleEdit = () => {
		setStageOne(!stageOne);
		console.log("add");
	};
	const handleEdit2 = () => {
		setStageTwo(!stageTwo);
		// closeModal(false);
	};
	const handleEdit3 = () => {
		setStageThree(!stageThree);
	};

	const [stageOne, setStageOne] = useState(false);
	const [stageTwo, setStageTwo] = useState(false);
	const [stageThree, setStageThree] = useState(false);
	const [bank, setBank] = useState([]);
	const [bankList, setBankList] = useState([]);

	const { data } = useSelector((state) => state.user);

	console.log(data, "hellos");

	const mappeddata = data?.bankAccounts?.map((datas) => datas);

	console.log(mappeddata.length, "maps data");

	const auth = useSelector((state) => state?.auth?.data?.access_token);
	useEffect(() => {
		const details = async () => {
			try {
				const API_URL = `${process.env.REACT_APP_BASE_URL}/misc/get/banks`;
				const config = {
					headers: {
						"Content-Type": "application/json",
					},
				};
				const data = await axios.get(API_URL, config);
				console.log(data, "bank data");
				setBank(data?.data?.data);
				setBankList(data?.data?.data);
			} catch (error) {
				// Alert.alert("failed login details");
				console.log(error, "errors");
			}
		};
		details();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const searchHandler = (event) => {
		setSelectedBank(event.target.value);
		setBankList(
			bank.filter((bank) =>
				bank.name
					.trim()
					.toLowerCase()
					.includes(event.target.value.trim().toLowerCase())
			)
		);
	};
	const addAccount = async (e) => {
		if (bankSelected.length < 1) {
			return;
		}

		setIsLoading(true);
		e.preventDefault();
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/settings/change/bank/account`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth}`,
				},
			};
			const payload = {
				account_number: accountNumber,
				bank: bankSelectedId,
			};
			const data = await axios.post(API_URL, payload, config);
			console.log(data.data, "data"); // status message
			setIsLoading(false);
			handleEdit2();

			swal({
				icon: "success",
				text: data.data.message,
			});
			// setEmail(data?.data?.data);
		} catch (error) {
			//data.status

			console.log(error, "error");
			setIsLoading(false);

			swal({
				icon: "error",
				text:
					error.response.data.message.responseMessage ||
					"An Unexpected Error Occured",
			});
		}
	};
	let SearchList = (
		<p class="flex-column justify-center items-center">LOADING....</p>
	);
	if (bank.length === 0) {
		SearchList = (
			<p class="flex-column justify-center items-center">LOADING....</p>
		);
	} else if (bankList.length === 0) {
		SearchList = (
			<p class="flex-column justify-center items-center">
				BANK IS NOT AVAILABLE!
			</p>
		);
	} else {
		SearchList = bankList?.map((allbannk, index) => {
			return (
				<div
					onClick={(e) => {
						setSelectedBank(e.currentTarget.innerText);
						setSelectedBankId(e.target.id);
						console.log(e.target.id, "id");
						console.log(bankSelected, "bank selcted");
					}}
					aria-current="true"
					class="block w-full my-2 cursor-pointer border-2  bg-primary-100 p-4 text-primary-600  focus:outline-none border border-colorPrimary rounded-md w-full px-3 py-1.5 text-gray-700 active:bg-blue-600"
					value={allbannk?.name}
					id={allbannk.code}
				>
					{allbannk?.name}
				</div>
			);
		});
	}

	return (
		<>
			<div
				// class="relative z-10"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true"
			>
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

				<div class="fixed flex justify-start z-10 sm:w-5/6 md:w-2/4 EditDone-card">
					<div className="sm:w-5/6 md:w-full">
						<div className=" mx-10 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-20">
							<div className="">Add Cashout Account</div>
							<div className="ml-10">
								<h1 onClick={() => closeModal(false)}>Close X </h1>
							</div>
						</div>
						<div className="EditDone-Line"></div>
						<div>
							<div className="input-field-EditSettings grid">
								<div className="account-card mx-10 -mt-7">
									<div onClick={handleEdit} className=" mt-2 ml-3 md:shrink-0">
										<img src={cross} />
									</div>
									<h5 className="addAccount">Add Bank Account</h5>
								</div>
								<div className="flex justify-center">
									<div className="mt-10 p-4">
										<p>Secured by</p>
									</div>
									<div>
										<img
											className="object-right mt-3 "
											src={scamTrustLogo}
											alt="Scam Trust"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{stageOne && (
				<div
					className={
						closed2 ? "EditDone active" : Edit2 ? "EditDone" : "EditDone active"
					}
					// class="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

					<div class="fixed flex justify-start  z-10 sm:w-5/6 md:w-2/4 EditDone-card">
						<div className="sm:w-5/6 md:w-full">
							<div className=" mx-5 flex border-b-2 md:justify-between justify-around  text-[#232164] font-semibold text-lg mb-5 mt-5">
								<div className="">Add Cash Account</div>
								<div className="ml-5 md:ml-10">
									<h1 onClick={() => closeModal(false)}>Close X </h1>
								</div>
							</div>
							<div className="EditDone-Line"></div>
							<div className="md:mx-20 justify-center ">
								<div className=" md:mx-0 mx-5 md:mb-2 ">
									<label
										className="text-lg md:text-lg block text-[#7D8287] "
										for="amount"
									>
										Bank
									</label>
									<div
										className=" md:pl-3  flex  py-1 border-2 rounded-2xl bankinput
"
									>
										<div className="px-3">
											<img src={banks} />
										</div>
										<div>
											<input
												onChange={searchHandler}
												value={bankSelected}
												type="search"
												className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding
		 px-6 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600
		  focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600
		   dark:placeholder:text-neutral-200  placeholder:pl-5"
												placeholder="Search Bank"
												aria-label="Search"
												aria-describedby="button-addon2"
											/>
											<div class="flex-column justify-center items-center overflow-y-scroll scroll w-156 h-[30px] ">
												{isLoading ? (
													<ThreeDots
														height="80"
														width="80"
														radius="9"
														color="#0357bf"
														ariaLabel="three-dots-loading"
														wrapperStyle={{}}
														wrapperClassName=""
														visible={true}
													/>
												) : (
													SearchList
												)}
											</div>
										</div>
									</div>

									{accountNameError && (
										<p className="text-red-600">{accountNameError}</p>
									)}
								</div>
								<div className=" md:mx-0 mx-5 md:mb-5 ">
									<label
										className="text-lg md:text-lg block text-[#7D8287] "
										for="amount"
									>
										Account Number
									</label>
									<div
										className=" pl-3  flex  py-1 border-2 rounded-2xl bankinput
"
									>
										<div className="">
											<p className="mt-2">123</p>
										</div>
										<div>
											<input
												value={accountNumber}
												onChange={(e) => {
													setAccountNumber(e.target.value);
													setAccountNameError(false);
												}}
												name="name"
												type="number"
												placeholder="Enter your business account number"
												className="mt-2 mx-10 my-2 w-full bankinput border-none p-1"
											/>
										</div>
									</div>

									{accountNameError && (
										<p className="text-red-600">{accountNameError}</p>
									)}
								</div>
								<div className=" md:mx-0 mx-5   ">
									<label
										className="text-lg md:text-lg block text-[#7D8287] mb-1"
										for="amount"
									>
										Acount Name
									</label>
									<div
										className=" pl-3  pr-20 py-1 border-2 rounded-2xl bankinput
"
									>
										<div>
											<input
												value={accountName}
												onChange={(e) => {
													setAccountName(e.target.value);
													setAccountNameError(false);
												}}
												name="name"
												type="text"
												placeholder="Account Name"
												className="mt-2 mx-10 my-2 w-full bankinput border-none p-1"
											/>
										</div>
									</div>

									{accountNameError && (
										<p className="text-red-600">{accountNameError}</p>
									)}
								</div>

								<div className="flex justify-between">
									<div className="flex mx-5 md:mx-1 ">
										<div className="md:mt-10 mt-5">
											<p>Secured by</p>
										</div>
										<div></div>

										<img
											className="object-right mt-3 md:h-20 h-10"
											src={scamTrustLogo}
											alt="Scam Trust"
										/>
									</div>
									<div className=" rounded-xl md:my-5 px-6 py-3 my-5 md:mx-0 mx-3 bg-[#232164]">
										<button
											type="submit"
											onClick={addAccount}
											className="text-white "
										>
											Add Account
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{stageTwo && (
				<div
					className={
						closed2 ? "EditDone active" : Edit2 ? "EditDone" : "EditDone active"
					}
					// class="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

					<div class="fixed flex justify-start  z-10 sm:w-5/6 md:w-2/4 EditDone-card">
						<div className="sm:w-5/6 md:w-full">
							<div className=" mx-5 flex border-b-2 md:justify-between justify-around  text-[#232164] font-semibold text-lg mb-5 mt-5">
								<div className="">Add Cash Account</div>
								<div className="ml-5 md:ml-10">
									<h1 onClick={() => closeModal(false)}>Close X </h1>
								</div>
							</div>
							<div className="EditDone-Line"></div>
							{mappeddata?.map((newdata, index) => {
								return (
									<div className="md:mx-20 justify-center ">
										<div className=" md:mx-0 mx-5 md:mb-2 ">
											<div
												className={` md:pl-3 mt-10 grid  border-2 rounded-2xl  h-28 ${
													index === 0
														? "bg-[#3AB75D]"
														: "bg-[#024CA9] opacity-75"
												} 
    `}
												// style={{ backgroundColor: getBackGroundColor(newdata) }}
											>
												<div className="flex justify-between mx-10 text-[#ffffff] md:mt-3 ">
													<p>{data?.data?.name || data?.data?.username}</p>
													<div className="h-10">
														<img src={shielgg} className="h-20 mr-5" />
													</div>
												</div>
												<div className="flex justify-between mx-10 mt-5 text-[#ffffff]">
													<p>{newdata?.account_name}</p>
													<div>
														<p>{newdata?.account_number}</p>
													</div>
												</div>
												<div></div>
											</div>
										</div>
									</div>
								);
							})}

							<div className="flex justify-between mx-10">
								<div className="flex mx-5 md:mx-1 ">
									<div className="md:mt-10 mt-5">
										<p>Secured by</p>
									</div>
									<div></div>

									<img
										className="object-right mt-3 md:h-20 h-10"
										src={scamTrustLogo}
										alt="Scam Trust"
									/>
								</div>
								<div className=" rounded-xl md:my-5 px-10 py-3 my-5 md:mx-0 mx-3 bg-[#232164]">
									<button
										type="submit"
										onClick={handleEdit3}
										className="text-white "
									>
										Done
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{stageThree && (
				<div
					className={
						closed2 ? "EditDone active" : Edit2 ? "EditDone" : "EditDone active"
					}
					// class="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div class=" inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

					<div class="fixed flex justify-start  z-10 sm:w-5/6 md:w-2/4 EditDone-card">
						<div className="sm:w-5/6 md:w-full">
							<div className=" mx-10 flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-20">
								<div className="">Add Cash Account</div>
								<div className="ml-10">
									<h1 onClick={() => closeModal(false)}>Close X </h1>
								</div>
							</div>
							<div className="EditDone-Line"></div>

							<div className="md:shrink-0 mx-10 grid">
								<div className=" place-self-center ">
									<img src={encrypted} alt="Scam Trust" />
								</div>
							</div>
							<div className="EditDone-OTPForm">
								{/* <TokenPhone complete={setStageThree} /> */}
								<div className=" my-10 text-slate-500 text-center overflow-hidden">
									You just added {accountNumber} ,{bankSelected}
									<br /> as a new cashout account
									<div className="number1"></div>
								</div>

								<div className="successEditLong-otp"></div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default CashAccount;
