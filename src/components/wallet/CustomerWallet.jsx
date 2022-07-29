import React from "react";
import logo from "../../images/ScanTrust logo.svg";
// import Nav from "../nav/Nav";
import WalletNav from "../nav/WalletNav";
import SideNav from "../sideNav/SideNav";
// import "./Dashboard.css";

function CustomerWallet() {
	return (
		<div className="container-fluid mx-auto ">
			<div className="flex flex-row">
				<div className="inline-flex">
                    <SideNav />
                </div>
				<div className="grow">
					<WalletNav />
					<div className="grid grid-cols-1 gap-4">
						<div className="p-5 ">
							<div className="grid grid-cols-1 gap-10">
								<div className="p-5 rounded-lg bg-white border ">
									<div className="mb-2 flex justify-between grid-cols-2">
										<h6
											style={{
												backgroundColor: "white",
											}}
											className=""
										>
											Account
										</h6>
										<h6
											style={{
												fontFamily: "Poppins",
												fontStyle: "normal",
												fontWeight: "500",
												fontSize: "20px",
												lineHeight: "36px",
												/* identical to box height */

												color: "#232164",
											}}
											className=""
										>
											Ridic Ventures
										</h6>
									</div>
									<hr
										className="border-1"
										style={{
											border: "solid #86D19B",
										}}
									/>

									<div className="py-3 ">
										<div className="flex justify-end ">
											<span>
												<i
													className="far  fa-eye pointer-events-none    transform -translate-y-1/2 "
													viewBox="0 0 20 20"
													fill="currentColor"
													id="myInput"
												></i>
											</span>
										</div>
										<div className="grid  justify-between grid-cols-2">
											<div>
												<h4 className="">N500,000.00</h4>
												<h6>Available Balance</h6>
											</div>
											<div>
												<h4>N250,000.00</h4>
												<h6>Incoming Balance</h6>
											</div>
										</div>
									</div>

									<div className="py-3">
										<div className="grid  justify-between grid-cols-2">
											<div>
												<button
													className="btn font-bold py-2 px-4 rounded"
													style={{
														background: "#E9303B",
														borderRadius: "8.10345px",
														fontFamily: "Poppins",
														fontStyle: "normal",
														fontWeight: "600",
														fontSize: "14px",
														lineHeight: "21px",

														alignItems: "center",
														width: "143px",
														height: "47px",
														color: " #FFFFFF",
													}}
												>
													WITHDRAW
												</button>
											</div>
											<div>
												<button
													className="btn font-bold py-2 px-4 rounded"
													style={{
														width: "143px",
														height: "47px",
														background: "#3AB75D",
														borderRadius: "8.10345px",
														fontFamily: "Poppins",
														fontStyle: "normal",
														fontWeight: "600",
														fontSize: "14px",
														lineHeight: "21px",

														alignItems: "center",
														color: " #FFFFFF",
													}}
												>
													Fund
												</button>
											</div>
										</div>
										<span>Primary Account</span>
										<div
											className="p-5 mt-5 rounded-lg border flex justify-between grid-cols-2"
											style={{
												backgroundColor: "#EAEAEA",
											}}
										>
											<h5 className=" my-2">
												<span style={{ color: "#126A2B" }}>#1,000,3455</span>{" "}
												withdrawn so far <br />
												3065359232 first bank sadiq aminu
											</h5>
											<hr className="border-1" style={{}} />
											<div className="my-3">
												<div className="flex justify-between mb-2">
													<button
														className="btn font-bold py-2 px-4 rounded"
														style={{
															fontFamily: "Poppins",
															fontStyle: "normal",
															fontWeight: "600",
															fontSize: "16px",

															/* identical to box height */

															background: "#232164",

															color: "#FFFFFF",
														}}
													>
														Add Account
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2  ">
									<div
										className="p-5 m-5 h-44 rounded-lg border"
										style={{
											backgroundColor: "#FFEFD9",
											borderRadius: "24px",
										}}
									>
										<div>
											<span
												style={{
													backgroundColor: "#FFEFD9",
													fontFamily: "Poppins",
													fontStyle: "normal",
													fontWeight: "600",
													fontSize: "20px",
													lineHeight: "30px",
													display: "flex",
													alignItems: "flex-end",
													color: "#232164",
												}}
											>
												FAQs
											</span>
											<h2
												style={{
													backgroundColor: "#FFEFD9",
													fontFamily: "poppins",
													fontStyle: "normal",
													fontWeight: "200",
													fontSize: "12px",
													lineHeight: "26px",
													/* or 284% */

													color: "#1B1B1B",
												}}
											>
												Find answers instantly
											</h2>
										</div>
									</div>

									<div
										className="p-5 m-5 rounded-lg h-44  border"
										style={{
											backgroundColor: " #E2D8F1",
											borderRadius: "24px",
										}}
									>
										<div>
											<span
												style={{
													backgroundColor: " #E2D8F1",
													fontFamily: "Poppins",
													fontStyle: "normal",
													fontWeight: "600",
													fontSize: "20px",
													lineHeight: "30px",
													display: "flex",
													alignItems: "flex-end",
													color: "#232164",
												}}
											>
												Chat
											</span>
											<h2
												style={{
													backgroundColor: " #E2D8F1",
													fontFamily: "poppins",
													fontStyle: "normal",
													fontWeight: "200",
													fontSize: "12px",
													lineHeight: "26px",
													/* or 284% */

													color: "#1B1B1B",
												}}
											>
												Start a conversation now
											</h2>
										</div>
									</div>
								</div>
								<div
									className="mt-5 flex"
									style={{
										justifyContent: "center",
									}}
								>
									<h2>Secured by</h2>
									<div>
										<img
											alt="logo"
											style={{
												width: "50px",
												height: "20px",
												display: "inline",
											}}
											src={logo}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="p-5">
							{" "}
							<div
								style={{ backgroundColor: "#F2F2F2" }}
								className="p-5 rounded-lg bg-white border"
							>
								<div className="mb-2 flex justify-between">
									<span>Wallet Histroy</span>
									{/* <span>OutGoing</span>
									<span>Cancelled</span>
									<span>Completed</span> */}
								</div>
								<hr className="border-1" style={{}} />

								<div className="py-3 ">
									{/* <div className="flex justify-end mb-4">
										<span>
											<button
												className=" hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
												style={{
													backgroundColor: "#3AB75D",
												}}
											>
												Create Transaction{" "}
												<i
													className="fas fa-plus  my-2 mx-1 p-0.5"
													style={{
														borderRadius: "50px",
														color: "black",
														background: "#FFFFFF",
														boxShadow:
															"3.03571px 3.03571px 6.07143px rgba(100, 96, 96, 0.25",
													}}
												></i>
											</button>
										</span>
									</div> */}
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
									<div className=" flex justify-between grid-cols-4">
										<div>
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												Iphone 11 ....
											</h4>
											<small
												style={{
													fontFamily: "poppins",
													fontStyle: "normal",

													fontSize: "10px",
												}}
											>
												Awaiting approval
											</small>
										</div>{" "}
										<div className="">
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
											>
												Ridic Ventures
											</h4>
										</div>{" "}
										<div className="">
											{" "}
											<h4
												style={{
													fontFamily: "Lato",
													fontStyle: "normal",
													fontWeight: "500",
													fontSize: "16px",
													lineHeight: "46px",
													color: "#232164",
												}}
												className=""
											>
												N500,000.00
											</h4>
										</div>{" "}
										<div>
											<span
												style={{
													color: "#A6A6A6",
												}}
											>
												<button
													className=" m-2 bg-white font-bold py-1 px-4 rounded"
													style={{ color: "green" }}
												>
													Credit
												</button>
											</span>
										</div>
									</div>

									<hr className="border-1" style={{}} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CustomerWallet;
