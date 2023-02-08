/** @format */

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import AnimeList from "./AnimeList";
import Info from "../../../assets/images/svg/info.svg";
import Chat from "../../../assets/images/svg/chat.svg";
import SecuredBy from "../../../assets/images/svg/secured-by.svg";
import Add from "../../../assets/images/svg/add.svg";
import EmptyTxn from "../../../assets/images/svg/EmptyTxn.svg";
import { fetchUser } from "../../../services/auth";
import axios from "axios";
import useModal from "./AnimeList";
import { Link, useNavigate } from "react-router-dom";

const CustomerDashboard = (props ) => {
	const { setShowInitiateTransaction, setIsWithdrawing, setIsFunding } = props;
	const { isShowing, toggle } = useModal();
	const [transactionAmount, setTransactionAmount] = useState("");
	const [details, setDetails]=useState()
	const [userFromBackend, setUserFromBackend] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const customStyles = {
		content: {
			width: "50vh",
			color: "#01306B",
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			backgroundColor: "#ffffffff",
		},
	};
	let amount=userFromBackend?.walletBalance
	const balance= Math.round((amount + Number.EPSILON) * 100) / 100;    
	const setModalIsOpenToTrue = () => {
		setModalIsOpen(true);
	};

	const setModalIsOpenToFalse = (e) => {
		e.stopPropagation();
		setModalIsOpen(false);
	};

	const { user } = useSelector((state) => state.auth);

	console.log(userFromBackend);

	const onCreateTransactionClicked = () => {
		setShowInitiateTransaction((prevState) => !prevState);
	};

	const TRANSACTION_FEE = transactionAmount * 0.02;
	const TOTAL_AMOUNT = +TRANSACTION_FEE + +transactionAmount;

	useEffect(() => {
		(async () => setUserFromBackend(await fetchUser(user.data.access_token)))();
	}, []);
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/user/getdetails`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				// console.log(data?.data.data, "user data");
				setDetails(data?.data?.data);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log("details",userFromBackend);

	const navigate = useNavigate();

	const handleFaq = () => {
		navigate("/faq");
	}

	return (
		<div className="flex w-full px-2 flex-col md:flex-row gap-7 justify-between">
			<div className="min-w-[260px] mx-auto w-[70%] 2xl:w-[685px]">
				<div className="w-full bg-[#FFFEFE] lg:rounded-[24px] rounded-lg lg:px-[37px] px-5 py-3 lg:py-[29px] mb-[13px] hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
					<p className="font-semibold text-lg 2xl:text-2xl text-colorPrimary">
						{userFromBackend?.data.name}
					</p>
					<p className="font-semibold text-lg 2xl:text-2xl text-[#7D8287]">
						ID - {userFromBackend?.data.id}
					</p>

					<div className="border-b-2 mb-5 2xl:mb-[53px] border-b-colorGreen mt-[13px]" />

					<div className="flex justify-between">
						<div className="flex flex-col text-left">
							<h4 className="text-[#7d8287] font-normal 2xl:font-semibold text-sm 2xl:text-lg">
								Total Balance
							</h4>
							<h2 className="text-colorPrimary font-semibold text-sm 2xl:font-bold lg:text-lg 2xl:text-3xl">
								&#8358; {balance}
							</h2>
						</div>

						<div className="flex flex-col text-left">
							<h4 className="text-[#7d8287] font-normal 2xl:font-semibold text-sm 2xl:text-lg">
								Pending Balance
							</h4>
							<h2 className="text-[#7d8287] font-semibold text-sm 2xl:font-bold lg:text-lg 2xl:text-3xl">
								&#8358; {userFromBackend?.outgoingWalletBalance}
							</h2>
						</div>
					</div>

					<div className="flex justify-between mt-[20px] 2xl:mt-[53px]">
						<button
							onClick={() => setIsWithdrawing(true)}
							className="bg-[#E9303B] text-xs lg:text-base w-[100px] hover:shadow-xl transition-all duration-300 2xl:w-[143px] text-center text-white py-[9px] rounded-lg"
						>
							WITHDRAW
						</button>
						<button
							onClick={() => setIsFunding(true)}
							className="bg-colorGreen text-xs lg:text-base w-[100px] hover:shadow-xl transition-all duration-300 2xl:w-[143px] text-center text-white py-[9px] rounded-lg"
						>
							FUND
						</button>
					</div>
				</div>

				{/* FEE CALCULATOR */}
				<div className="w-full bg-[#FFFEFE] lg:rounded-[24px] rounded-lg lg:px-[37px] px-5 py-3 lg:py-[29px] mb-[13px] hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
					<p className="2xl:text-xl text-colorPrimary">Fee Calculator</p>

					<div className="border-b-2 mb-5 2xl:mb-[53px] border-b-colorGreen mt-[13px]" />

					<div className="">
						<div className="flex justify-between items-center text-left mb-4 2xl:mb-5">
							<h4 className="text-colorPrimary font-medium lg:font-semibold text-xs lg:text-sm 2xl:text-lg">
								Enter Transaction amount:
							</h4>
							<input
								type="text"
								value={transactionAmount}
								onChange={(e) => setTransactionAmount(e.target.value)}
								placeholder="Enter amount"
								className="w-[100px] lg:w-[144px] ml-4 inline-block text-[10px] h-7 2xl:h-[34px] items-center border focus:outline-none border-[#E6E7E8] placeholder:text-[8px] 2xl:placeholder:text-xs pl-6 rounded-md"
							/>
						</div>
						<div className="flex justify-between items-center text-left mb-4 2xl:mb-5">
							<h4 className="text-colorPrimary font-medium lg:font-semibold text-xs lg:text-sm 2xl:text-lg">
								Transaction fee:
							</h4>
							<input
								type="text"
								value={TRANSACTION_FEE === 0 ? "" : TRANSACTION_FEE}
								disabled
								className="w-[100px] lg:w-[144px] ml-4 inline-block text-[10px] h-7 2xl:h-[34px] items-center disabled:bg-[#E6E7E8] border focus:outline-none border-[#E6E7E8] placeholder:text-[8px] 2xl:placeholder:text-xs pl-6 rounded-md"
							/>
						</div>
						<div className="flex justify-between items-center text-left mb-4 2xl:mb-5">
							<h4 className="text-colorPrimary font-medium lg:font-semibold text-xs lg:text-sm 2xl:text-lg">
								Total amount:
							</h4>
							<input
								type="text"
								disabled
								value={TOTAL_AMOUNT === 0 ? "" : TOTAL_AMOUNT}
								className="w-[100px] lg:w-[144px] ml-4 inline-block text-[10px] h-7 2xl:h-[34px] items-center disabled:bg-[#E6E7E8] border focus:outline-none border-[#E6E7E8] placeholder:text-[8px] 2xl:placeholder:text-xs pl-6 rounded-md"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row justify-around text-colorPrimary">
					<div onClick={handleFaq} className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#FFEFD9] rounded-3xl mb-3 lg:mb-0 lg:mr-5">
						<div className="bg-[#ff9300] mb-4 grid place-content-center h-[46px] w-[46px] rounded-full">
							<img
								className="w-[23px] h-[23px] object-contain"
								src={Info}
								alt="info"
							/>
						</div>
						<h6 className="font-semibold text-xl">FAQs</h6>
						<p>Find answers instantly</p>
					</div>

					<div
						onClick={setModalIsOpenToTrue}
						className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#E2D8F1] rounded-3xl"
					>
						<div className="bg-[#5F0AC3] mb-4 grid place-content-center h-[46px] w-[46px] rounded-full">
							<img
								className="w-[23px] h-[23px] object-contain"
								src={Chat}
								alt="chat"
							/>
						</div>
						<h6 className="font-semibold text-xl">Chat</h6>
						<div 
						>
							<button>Click to chat</button>

							<Modal
								isOpen={modalIsOpen}
								style={customStyles}
								onRequestClose={setModalIsOpenToFalse}
							>
								<button className='pl-28 pt-5 text-lg md:pl-5 lg:pl-16' onClick={setModalIsOpenToFalse}>X</button>
								<AnimeList />
							</Modal>
						</div>
					</div>
				</div>

				<div className="hidden md:flex justify-center mt-[50px] mb-5">
					<img src={SecuredBy} alt="secured by scam trust" />
				</div>
			</div>

			<div className="w-full h-[100%] overflow-y-scroll py-3 lg:py-8 px-4 lg:px-12 bg-white rounded-[24px]">
				<div className="w-full mb-3 font-medium 2xl:font-bold text-xs lg:text-base 2xl:text-lg text-colorPrimary flex justify-between items-start border-b border-b-[#CFD8DC]">
					<p className="border-b-[3px] border-b-colorSecondary pb-5 cursor-pointer hover:opacity-70">
						All
					</p>
					<p className="cursor-pointer hover:opacity-70 hover:border-b-[3px] hover:border-b-colorSecondary transition-all duration-300">
						Outgoing
					</p>
					<p className="cursor-pointer hover:opacity-70 hover:border-b-[3px] hover:border-b-colorSecondary transition-all duration-300">
						Cancelled{" "}
					</p>
					<p className="cursor-pointer hover:opacity-70 hover:border-b-[3px] hover:border-b-colorSecondary transition-all duration-300">
						Completed
					</p>
				</div>

				<div className="flex justify-between mb-[10px]">
					<div />
					<button
						onClick={onCreateTransactionClicked}
						className="bg-colorGreen text-xs lg:text-base flex text-white items-center rounded-md px-2 py-2 lg:py-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-700"
					>
						<span>Create transaction</span>
						<img src={Add} alt="add" className="mb-[-6px]" />
					</button>
				</div>

				<div className="overflow-x-auto mx-auto relative">
					<table className="w-full text-left">
						<thead className="text-sm font-bold text-[#A6A6A6]">
							<tr className="flex justify-center items-start">
								<th scope="col" className="py-3 px-6">
									Transactions
								</th>
								<th scope="col" className="py-3 px-6">
									Vendor name
								</th>
								<th scope="col" className="py-3 px-6">
									Amount
								</th>
								<th scope="col" className="py-3 px-6">
									Date
								</th>
							</tr>
						</thead>
						<tbody className="text-colorPrimary font-medium text-xs">
							{TRANSACTIONS.map((transaction, idx) => {
								const { amount, date, status, vName } = transaction;
								const bgColor =
									status === "Awaiting approval"
										? "#eee"
										: status === "Completed"
										? "#89D39D61"
										: status === "On-going"
										? "#FEF28B66"
										: status === "Cancelled" && "#FF989E78";
								return (
									<tr key={idx}>
										<th
											scope="row"
											className="py-4 flex items-center px-6 font-medium whitespace-nowrap"
										>
											<div
												className={`w-[25px] h-[25px] bg-[${bgColor}] rounded-md mr-2`}
											></div>
											<div className="flex flex-col">
												<p>Iphone 11...</p>
												<p>{status}</p>
											</div>
										</th>
										<td className="py-4 px-6">{vName}</td>
										<td className="py-4 px-6">₦ {amount}</td>
										<td className="py-4 px-6">{date}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className="min-h-[60vh] min-w-full mx-auto w-full grid place-content-center">
					<img
						src={EmptyTxn}
						className="w-[149.6px] mb-4 mx-auto h-[149.6px]"
						alt="empty-transaction"
					/>
					<p className="text-center font-medium text-2xl">
						No recent transaction yet
					</p>
				</div>
			</div>

			<div className="lg:hidden md:hidden my-7 flex items-center justify-center">
				<img src={SecuredBy} className="ml-5" alt="secured by scam trust" />
			</div>
		</div>
	);
};

const TRANSACTIONS = [
	// {
	//   status: "Awaiting approval",
	//   vName: "Ridic Ventures",
	//   amount: "250,000.00",
	//   date: "25th May, 2022",
	// },
	// {
	//   status: "Completed",
	//   vName: "Ridic Ventures",
	//   amount: "250,000.00",
	//   date: "25th May, 2022",
	// },
	// {
	//   status: "On-going",
	//   vName: "Ridic Ventures",
	//   amount: "250,000.00",
	//   date: "25th May, 2022",
	// },
	// {
	//   status: "Cancelled",
	//   vName: "Ridic Ventures",
	//   amount: "250,000.00",
	//   date: "25th May, 2022",
	// },
	// {
	//   status: "Awaiting approval",
	//   vName: "Ridic Ventures",
	//   amount: "250,000.00",
	//   date: "25th May, 2022",
	// },
	// {
	//   status: "Completed",
	//   vName: "Ridic Ventures",
	//   amount: "250,000.00",
	//   date: "25th May, 2022",
	// },
	// {
	//   status: "On-going",
	//   vName: "Ridic Ventures",
	//   amount: "250,000.00",
	//   date: "25th May, 2022",
	// },
	// {
	//   status: "Cancelled",
	//   vName: "Ridic Ventures",
	//   amount: "250,000.00",
	//   date: "25th May, 2022",
	// },
];

export default CustomerDashboard;
