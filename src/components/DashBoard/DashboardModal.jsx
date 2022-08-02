import React, { useState } from "react";
import Nav from "../nav/Nav";
import SideNav from "../sideNav/SideNav";
import transaction from "../../images/transactions.svg";
import wallet from "../../images/wallets.svg";
import kyc from "../../images/kyc.svg";
import faq from "../../images/faq.svg";
import chat from "../../images/chat.svg";
import "./Modal.css"
export default function DashboardModal() {
	const [showModal, setShowModal] = useState(true);
	return (
		<div className="container-fluid mx-auto ">
			<div className="flex flex-row">
				<div className="inline-flex">
					<SideNav />
				</div>
				<div className="grow">
					<Nav />
				</div>
				{showModal ? (
					<>
						<div className=" items-center justify-evenly flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  focus:outline-none">
							<div className=" my-6 mx-6 max-w-screen-xl">
								{/*content*/}
								<div
									className="border-0  rounded-lg shadow-lg flex flex-col w-full  outline-none focus:outline-none"
									style={{
										backgroundColor: "#EAEAEA",
									}}
								>
									{/*header*/}
									<div className=" items-start justify-between p-5 border-solid border-slate-200 rounded-t">
										<h3 className="text-3xl font-semibold">
											Welcome to ScamTrust!
										</h3>
										<small>Get secuired by ScamTrust</small>
									</div>
									{/*body*/}
									<div className="grid">
										<h3 className="px-6 py-2 started">Get Started</h3>
										<div className="relative p-6 grid sm:grid-cols-1 md:grid-cols-3 gap-4 content-center ">
											<div
												className="p-5 grid place-content-center m-5 h-44 rounded-lg border"
												style={{
													backgroundColor: "#FFFF",
												}}
											>
												<div>
													<span
														className=" "
														style={{
															fontFamily: "Poppins",
															fontStyle: "normal",
															fontWeight: "600",
															fontSize: "18px",
															lineHeight: "27px",
															display: "flex",
															alignItems: "flex",

															color: "#262466",
														}}
													>
														<img alt="#" className="px-2 " src={transaction} />
														Create New Transaction
													</span>
												</div>
											</div>
											<div
												className="p-5 grid place-content-center m-5 h-44 rounded-lg border"
												style={{
													backgroundColor: "#FFFF",
												}}
											>
												<div className="flex justify-center">
													<span
														style={{
															fontFamily: "Poppins",
															fontStyle: "normal",
															fontWeight: "600",
															fontSize: "18px",
															lineHeight: "27px",
															display: "flex",
															alignItems: "flex-center",

															color: "#262466",
														}}
													>
														<img className="px-2" alt="#" src={wallet} /> Fund
														your wallet
													</span>
												</div>
											</div>
											<div
												className="p-5 grid place-content-center m-5 h-44 rounded-lg border"
												style={{
													backgroundColor: "#FFFF",
												}}
											>
												<div className="flex justify-center">
													<span
														style={{
															fontFamily: "Poppins",
															fontStyle: "normal",
															fontWeight: "600",
															fontSize: "18px",
															lineHeight: "27px",
															display: "flex",
															alignItems: "flex-end",

															color: "#262466",
														}}
													>
														<img className="px-2" alt="#" src={kyc} />
														Complete KYC
													</span>
												</div>
											</div>
										</div>
										<h3 className="px-6 help">Need help?</h3>
										<div className="relative p-6 grid sm:grid-cols-1 md:grid-cols-3 gap-4 content-center">
											<div
												className="p-5 grid place-content-center m-5 h-44 rounded-lg border"
												style={{
													backgroundColor: "#FFFF",
												}}
											>
												<div className="flex justify-center">
													<span
														style={{
															fontFamily: "Poppins",
															fontStyle: "normal",
															fontWeight: "600",
															fontSize: "18px",
															lineHeight: "27px",
															display: "flex",
															alignItems: "flex-end",

															color: "#262466",
														}}
													>
														<img className="px-2" alt="#" src={faq} />
														FAQs
													</span>
												</div>
											</div>
											<div
												className="p-5 grid place-content-center m-5 h-44 rounded-lg border"
												style={{
													backgroundColor: "#FFFF",
												}}
											>
												<div className="flex justify-center">
													<span
														style={{
															fontFamily: "Poppins",
															fontStyle: "normal",
															fontWeight: "600",
															fontSize: "18px",
															lineHeight: "27px",
															display: "flex",
															alignItems: "flex-end",

															color: "#262466",
														}}
													>
														<img className="px-2" alt="#" src={chat} />
														Chat with us
													</span>
												</div>
											</div>
										</div>
									</div>
									{/*footer*/}
									<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
										<button
											className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
											Close
										</button>
										<button
											className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
											Save Changes
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				) : null}
			</div>
			{/* </div> */}
		</div>
	);
}
