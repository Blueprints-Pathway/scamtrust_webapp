/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";
import Eye from "../../assets/images/svg/eye.svg";
import Info from "../../assets/images/svg/info.svg";
import Chat from "../../assets/images/svg/chat.svg";
import MoreInfo from "../../assets/images/svg/more-info.svg";
import CopyBlack from "../../assets/images/svg/copy-black.svg";
import FundWallet from "../../components/Pages/Wallet/FundWallet";
import ConfirmAccount from "../../components/Pages/Wallet/ConfirmAccount";
import EmptyTxn from "../../assets/images/svg/EmptyTxn.svg";
import { fetchUser } from "../../services/auth";
import NotAvailable from "../../components/Pages/Wallet/NotAvailable";
import axios from "axios";
import Modal from "react-modal";
import AnimeList from "../../components/Pages/CustDashboard/AnimeList";
import WithdrawFunds from "../../components/Pages/CustDashboard/WithdrawFunds";
import DepositFunds from "../../components/Pages/CustDashboard/DepositFunds";





const Wallet = () => {
	const [showFundWallet, setShowFundWallet] = useState(false);
	const [showConfirmAccount, setShowConfirmAccont] = useState(false);
	const [available, setAvailable] = useState(false);
	const [availableBalanceInfo, setAvailableBalanceInfo] = useState(false);
	const [outgoingBalanceInfo, setOutgoingBalanceInfo] = useState(false);
	const [primaryAccountBalanceInfo, primaryABalanceInfo] = useState(false);
	const [isFunding, setIsFunding] = useState(false);
	const [userFromBackend, setUserFromBackend] = useState(null);
	const [details, setDetails] = useState();
	const { user } = useSelector((state) => state.auth);
	const [modalOpen, setModalIsOpen] = useState(false);
	const [isWithdrawing, setIsWithdrawing] = useState(false);
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
	const setModalIsOpenToTrue = () => {
		setModalIsOpen(true);
	};

	const setModalIsOpenToFalse = (e) => {
		e.stopPropagation();
		setModalIsOpen(false);
	};
	let amount=userFromBackend?.walletBalance
	const balance= Math.round((amount + Number.EPSILON) * 100) / 100;  
	useEffect(() => {
		(async () => setUserFromBackend(await fetchUser(user.data.access_token)))();
	}, []);

	console.log(userFromBackend);

	const toggleAvailableBalanceInfo = () =>
		setAvailableBalanceInfo((prevState) => !prevState);
	const toggleOutgoingBalanceInfo = () =>
		setOutgoingBalanceInfo((prevState) => !prevState);
	const togglePrimaryAccountBalanceInfo = () =>
		primaryABalanceInfo((prevState) => !prevState);

	const fundWalletHandler = () => {
		setShowFundWallet((prevState) => !prevState);
	};

	const confirmAccountHandler = () => {
		setShowConfirmAccont((prevState) => !prevState);
	};

	const navigate = useNavigate();
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
	console.log(details, "wallet details");
	
	return (
		<Layout>
			<FundWallet
				setShowConfirmAccont={setShowConfirmAccont}
				fundWalletHandler={fundWalletHandler}
				showFundWallet={showFundWallet}
			/>
			<ConfirmAccount
				setShowFundWallet={setShowFundWallet}
				showConfirmAccount={showConfirmAccount}
				setShowConfirmAccont={setShowConfirmAccont}
			/>
			<div className="w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<div className="grid-cols-1 rounded-3xl bg-white w-full px-5 md:px-9 2xl:px-12 py-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
							<div className="flex justify-between pb-1 border-b-2 border-b-colorSecondary mb-4">
								<p className="font-bold text-xl 2xl:text-2xl">Account</p>
								<p className="font-medium text-xl 2xl:text-2xl text-colorPrimary">
									Ridic Ventures
								</p>
							</div>

							<div className="flex justify-between">
								<div />
								<img src={Eye} alt="eye" className="mb-3 cursor-pointer" />
							</div>

							<div className="flex justify-between ">
								<div>
									<p className="font-medium md:text-xl 2xl:text-3xl text-colorSecondary mb-2">
										&#8358; {balance}
									</p>
									<p className="font-medium flex mb-8 2xl:mb-12 md:text-lg text-sm 2xl:text-xl text-colorPrimary">
										<span>Available Balance</span>

										<div className="relative">
											<img
												className="3xl:ml-5 ml-3 cursor-pointer py-2"
												src={MoreInfo}
												alt="more_info"
												onClick={toggleAvailableBalanceInfo}
											/>
											{availableBalanceInfo ? (
												<div className="md:px-4 w-[70px] text-[8px] md:w-[185px] md:text-[10px] border-black border md:py-1 bg-white absolute top-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2">
													Balance available means
												</div>
											) : (
												<></>
											)}
										</div>
									</p>
									<button
										onClick={() => setIsWithdrawing(true)}
										className="font-medium bg-[#E9303B] w-24 hover:shadow-md transition-shadow duration-300 text-white py-3 rounded-md"
									>
										WITHDRAW
									</button>
									{isWithdrawing ? (
        <WithdrawFunds
          setIsWithdrawing={setIsWithdrawing}
          startWithdrawFunds={isWithdrawing}
        
        />
      ) : (
        <></>
      )}
								</div>
								
								<div>
									<p className="font-medium md:text-xl 2xl:text-3xl text-colorSecondary mb-2">
										&#8358; {userFromBackend?.outgoingWalletBalance}
									</p>
									<p className="font-medium mb-8 flex md:text-lg text-sm 2xl:text-xl text-colorPrimary">
										<span>Outgoing Balance</span>

										<div className="relative">
											<img
												className="3xl:ml-5 ml-3 cursor-pointer py-2"
												src={MoreInfo}
												alt="more_info"
												onClick={toggleOutgoingBalanceInfo}
											/>
											{outgoingBalanceInfo ? (
												<div className="md:px-4 w-[70px] text-[8px] md:w-[185px] md:text-[10px] border-black border md:py-1 bg-white absolute top-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2">
													Pending balance available means
												</div>
											) : (
												<></>
											)}
										</div>
									</p>
									<button
										onClick={() => setIsFunding(true)}
										className="font-medium bg-colorGreen w-24 hover:shadow-md transition-shadow duration-300 text-white py-3 rounded-md"
									>
										Fund
									</button>
								</div>
								<DepositFunds isFunding={isFunding} setIsFunding={setIsFunding} />
							</div>

							<div className="mt-[45px]">
								<div className="flex justify-between">
									<p className="font-medium items-center flex md:text-lg text-sm 2xl:text-xl mb-2">
										<span>Primary Account</span>

										<div className="relative">
											<img
												className="3xl:ml-5 w-3 h-3 ml-3 cursor-pointer"
												src={MoreInfo}
												alt="more_info"
												onClick={togglePrimaryAccountBalanceInfo}
											/>
											{primaryAccountBalanceInfo ? (
												<div className="px-4 w-[185px] text-[10px] border-black border py-1 bg-white absolute top-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2">
													Primary available means
												</div>
											) : (
												<></>
											)}
										</div>
									</p>
									<p
										onClick={confirmAccountHandler}
										className="cursor-pointer font-medium flex md:text-lg text-sm 2xl:text-xl mb-2"
									>
										<img
											className="2xl:ml-5 mr-3"
											src={CopyBlack}
											alt="more_info"
										/>
										<span>{details?.virtual_account?.account_number}</span>
									</p>
								</div>
								<div className="bg-[#EAEAEA] flex-col md:flex-row rounded-2xl mb-5 flex justify-between p-5">
									<div className="text-sm 2xl:text-xl">
										<p>
											<span className="text-colorSecondary">
												&#8358; 1,100,000.00
											</span>{" "}
											Withdrawn so far
										</p>
										<p className="font-medium">
											2009419261 {userFromBackend?.name}
										</p>
									</div>
									<button
										onClick={() => setAvailable(true)}
										className="px-2 py-1 mt-3 md:mt-0 text-[8px] md:text-base 2xl:px-4 2xl:py-3 bg-colorPrimary text-white rounded-md"
									>
										Add Account
									</button>
								</div>
								{available ? <NotAvailable /> : null}
							</div>
						</div>

						<div className="flex bg-white mt-4 py-14 flex-col lg:flex-row justify-between rounded-3xl text-colorPrimary">
							
							<div 
							onClick={() => navigate('/faq')}
							className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#FFEFD9] rounded-3xl mb-3 lg:mb-0 lg:mr-5">
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
							className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#E2D8F1] rounded-3xl">
								<div className="bg-[#5F0AC3] mb-4 grid place-content-center h-[46px] w-[46px] rounded-full">
									<img
										className="w-[23px] h-[23px] object-contain"
										src={Chat}
										alt="chat"
									/>
								</div>
								<h6 className="font-semibold text-xl">Chat</h6>
								<p>Start a conversation now</p>
							<Modal
								isOpen={modalOpen}
								style={customStyles}
								onRequestClose={setModalIsOpenToFalse}
							>
								<button className='pl-28 pt-5 text-lg md:pl-5 lg:pl-16' onClick={setModalIsOpenToFalse}>X</button>
								<AnimeList />
							</Modal>
							</div>
						</div>
					</div>
					<div className="grid-cols-1 w-full bg-[#F2F2F2] rounded-[25px] py-14 px-8">
						<h5 className="font-medium text-xl">Wallet History</h5>
						<div className="overflow-x-auto mx-auto relative">
							<table className="w-full text-center">
								<tbody className="text-colorPrimary font-medium text-xs">
									{WALLET_HISTORY.map((history, idx) => {
										const { credit, vName, vNo, amount, date } = history;
										return (
											<tr
												key={idx}
												className="grid grid-cols-4 border-b border-b-[#707070]"
											>
												<td
													scope="row"
													className="py-4 text-[#707070] flex items-center font-medium whitespace-nowrap"
												>
													{date}
												</td>
												<td className="py-4 px-6 text-left">
													<div className="flex flex-col">
														<p className="font-medium text-colorPrimary">
															{vName}
														</p>
														<p className="text-[#707070]">{vNo}</p>
													</div>
												</td>
												<td className="py-4 px-6">₦ {amount}</td>
												<td className="py-4">
													<div className="items-center w-[87px] py-2 rounded-md justify-end bg-white inline-block">
														<div
															className={`${
																credit ? "bg-colorSecondary" : "bg-[#FF0000]"
															} w-3 h-3 inline-block rounded-full mr-[10px]`}
														/>
														<p
															className={`${
																credit
																	? "text-colorSecondary"
																	: "text-[#FF0000]"
															} text-colorSecondary inline-block`}
														>
															{credit ? "Credit" : "Debit"}
														</p>
													</div>
												</td>
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
				</div>
			</div>
		</Layout>
	);
};

export default Wallet;

const WALLET_HISTORY = [
	// {
	//   credit: true,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
	// {
	//   credit: false,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
	// {
	//   credit: true,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
	// {
	//   credit: false,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
	// {
	//   credit: true,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
	// {
	//   credit: false,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
	// {
	//   credit: true,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
	// {
	//   credit: false,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
	// {
	//   credit: true,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
	// {
	//   credit: false,
	//   vName: "Ilerioluwa Brown",
	//   vNo: "TR-5347906",
	//   amount: "500,000",
	//   date: "10th Jan 2022",
	// },
];
