/** @format */
import { useEffect, useState, useReducer } from "react";
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
import logo from "../../assets/loader-img.png";
import { fetchUser } from "../../services/auth";
import NotAvailable from "../../components/Pages/Wallet/NotAvailable";
import axios from "axios";
import Modal from "react-modal";
import AnimeList from "../../components/Pages/CustDashboard/AnimeList";
import WithdrawFunds from "../../components/Pages/CustDashboard/WithdrawFunds";

const Wallet = () => {
	const [showFundWallet, setShowFundWallet] = useState(false);
	const [showConfirmAccount, setShowConfirmAccont] = useState(false);
	const [available, setAvailable] = useState(false);
	const [availableBalanceInfo, setAvailableBalanceInfo] = useState(false);
	const [outgoingBalanceInfo, setOutgoingBalanceInfo] = useState(false);
	const [primaryAccountBalanceInfo, primaryABalanceInfo] = useState(false);
	const [isFunding, setIsFunding] = useState(false);
	const [userFromBackend, setUserFromBackend] = useState();
	const [details, setDetails] = useState("");
	const { user } = useSelector((state) => state.auth);
	const [modalOpen, setModalIsOpen] = useState(false);
	const [isWithdrawing, setIsWithdrawing] = useState(false);
	const [showBalance, setShowBalance] = useState(false);
	const [reducerValue, forcedUpdate] = useReducer((x) => x + 1, 0);
	const [wallethistroy, setWalletHistroy] = useState();
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
	let amount = userFromBackend?.walletBalance;
	const balance = Math.round((amount + Number.EPSILON) * 100) / 100;
	useEffect(() => {
		(async () => setUserFromBackend(await fetchUser(user.data.access_token)))();
	}, [reducerValue]);

	console.log(userFromBackend, "eeeee");

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
				const API_URL = `${process.env.REACT_APP_BASE_URL}/user/getdetails`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				setDetails(data?.data.data);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reducerValue]);

	useEffect(() => {
		(async () => {
			try {
				const API_URL = `${process.env.REACT_APP_BASE_URL}/wallet/transactions
				`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				
				setWalletHistroy(data?.data?.data);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reducerValue]);

	const handleWithdraw = () => {
		setIsWithdrawing((prevState) => !prevState);
	};

	const handleBalance = () => {
		setShowBalance(!showBalance);
	};

	return (
		<Layout>
			<div>
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
				{isWithdrawing ? (
					<WithdrawFunds
						setIsWithdrawing={setIsWithdrawing}
						availableBalance={userFromBackend?.walletBalance}
						bankAccounts={userFromBackend?.data?.bank_accounts}
						forcedUpdate={forcedUpdate}
						userName={userFromBackend?.data?.username}
						//    startWithdrawFunds={isWithdrawing}
					/>
				) : (
					<></>
				)}

				<div className="w-full">
					<div className="pl-5 mx-[-10px]">
						<div className="z-20 flex-column md:flex md:items-start md:justify-between items-center justify-center">
							<div className="grid-cols-1 rounded-3xl bg-white w-full md:px-4 md:mr-5 lg:px-16 2xl:px-12 py-8 px-4 lg:py-16 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
								<div className="flex justify-between items-center pb-1 border-b-2 border-b-[#3AB75D] mb-4">
									<p className="font-bold text-xl 2xl:text-2xl">Account</p>
									<p className="font-medium text-xl 2xl:text-2xl text-colorPrimary">
										{details?.username === null
											? details?.name
											: details?.username}
									</p>
								</div>

								<div className="flex justify-between">
									<div />

									<img
										onClick={handleBalance}
										src={Eye}
										alt="eye"
										className="mb-3 cursor-pointer"
									/>
								</div>

								<div className="flex justify-between ">
									<div>
										<p className="font-medium text-xl md:text-xl lg:text-2xl 2xl:text-3xl text-colorSecondary mb-2">
											{showBalance ? (
												"₦*****"
											) : (
												<span>&#8358; {balance.toFixed(2)}</span>
											)}
										</p>
										<p className="font-medium flex mb-8 2xl:mb-12 md:text-lg text-sm 2xl:text-xl text-colorPrimary">
											<span>Available Balance</span>

											<div className="relative">
												<img
													className="3xl:ml-5 ml-3 cursor-pointer py-1 lg:py-2"
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
											onClick={handleWithdraw}
											className="font-medium bg-[#E9303B] w-28 hover:shadow-md transition-shadow duration-300 text-white py-3 rounded-md cursor-pointer"
										>
											WITHDRAW
										</button>
									</div>

									<div>
										<p className="font-medium text-xl md:text-xl lg:text-2xl 2xl:text-3xl text-colorSecondary mb-2">
											{showBalance ? (
												"₦*****"
											) : (
												<span>
													&#8358;{" "}
													{userFromBackend?.outgoingWalletBalance == null
														? userFromBackend?.incomingWalletBalance.toFixed(2)
														: userFromBackend?.outgoingWalletBalance?.toFixed(
																2
														  )}
												</span>
											)}
										</p>

										<p className="font-medium mb-8 flex md:text-lg text-sm 2xl:text-xl text-colorPrimary">
											<span>
												{details?.usertype === "CUSTOMER"
													? "Outgoing Balance"
													: "Incoming Balance"}
											</span>

											<div className="relative">
												<img
													className="3xl:ml-5 ml-3 cursor-pointer py-1 lg:py-2"
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
										{details?.usertype === "CUSTOMER" ? (
											<button
												// onClick={() => setIsFunding(true)}
												onClick={confirmAccountHandler}
												className="font-medium text-sm bg-[#3AB75D] w-28 hover:shadow-md transition-shadow duration-300 text-white py-3 rounded-md"
											>
												Fund
											</button>
										) : null}
									</div>
									{/* <DepositFunds isFunding={isFunding} setIsFunding={setIsFunding} /> */}
								</div>

								<div className="mt-[30px]">
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
											className="cursor-pointer font-medium flex md:text-lg text-sm 2xl:text-xl mb-3 mr-[20px]"
										>
											<img
												className="2xl:ml-5 mr-3"
												src={CopyBlack}
												alt="more_info"
											/>
											<span>{details?.virtual_account?.account_number}</span>
										</p>
									</div>
									<div className="bg-[#EAEAEA] flex-col md:flex-row rounded-2xl mb-1 flex justify-between p-5">
										<div className="text-sm 2xl:text-xl">
											<p>
												<span className="text-colorSecondary">
													&#8358; {userFromBackend?.withdrawnAmount}
												</span>{" "}
												Withdrawn so far
											</p>
											<p className="font-medium">
												{details?.virtual_account?.account_number}{" "}
												{userFromBackend?.name}
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

							{/* W A L L E T    H I S T O R Y */}

							<div className="grid-cols-1 w-full md:h-[62rem] lg:h-[58rem] bg-[#F2F2F2] rounded-[25px] py-14 mt-7 md:mt-0 px-8">
								<h5 className="font-medium text-xl">Wallet History</h5>
								<div className="overflow-x-auto mx-auto relative">
									<table className="w-full text-center">
										<tbody className="text-colorPrimary font-medium text-xs">
											{wallethistroy?.map((history, id) => {
												
												return (
													<tr
														key={id}
														className="grid grid-cols-4 border-b border-b-[#707070]"
													>
														<td
															scope="row"
															className="py-4 text-[#707070] flex items-center font-medium whitespace-nowrap"
														>
															{history?.date}
														</td>
														<td className="py-4 px-6 text-left">
															<div className="flex flex-col">
																<p className="font-medium text-colorPrimary">
																	Status
																</p>
																<p className="text-[#707070]">
																	{history?.status}
																</p>
																<br />
																<p className="text-[#707070]">
																	{history?.tracking_reference}
																</p>
															</div>
														</td>
														<td className="py-4 px-6">₦ {history?.amount}</td>
														<td className="py-4">
															<div className="items-center w-[87px] py-2 rounded-md justify-end bg-white inline-block">
																<div
																	className={`${
																		history?.type === "CREDIT"
																			? "bg-colorSecondary"
																			: "bg-[#FF0000]"
																	} w-3 h-3 inline-block rounded-full mr-[10px]`}
																/>
																<p
																	className={`${
																		history?.type === "CREDIT"
																			? "text-colorSecondary"
																			: "text-[#FF0000]"
																	} text-colorSecondary inline-block`}
																>
																	{history?.type === "CREDIT"
																		? "Credit"
																		: "Debit"}
																</p>
															</div>
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>

								{wallethistroy?.length < 1?<div className="min-h-[60vh] min-w-full mx-auto w-full grid place-content-center">
									<img
										src={EmptyTxn}
										className="w-[149.6px] mb-4 mx-auto h-[149.6px]"
										alt="empty-transaction"
									/>
									<p className="text-center font-medium text-2xl">
										No recent transaction yet
									</p>
								</div>:null}
							</div>
						</div>

						{/* F A Q  & C H A T   */}
						<div className="flex justify-center items-center bg-white mt-7 py-14 flex-col md:float-left md:mt-[-32rem] lg:mt-[-23rem] md:mx-0 px-[45px] md:px-20 lg:px-[88px] lg:flex-row rounded-3xl text-colorPrimary">
							<div
								onClick={() => navigate("/faq")}
								className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#FFEFD9] rounded-3xl mb-3 lg:mb-0 lg:mr-5"
							>
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
								<p>Start a conversation now</p>
								<Modal
									isOpen={modalOpen}
									style={customStyles}
									onRequestClose={setModalIsOpenToFalse}
								>
									<button
										className="pl-28 pt-5 text-lg md:pl-5 lg:pl-16"
										onClick={setModalIsOpenToFalse}
									>
										X
									</button>
									<AnimeList />
								</Modal>
							</div>
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
