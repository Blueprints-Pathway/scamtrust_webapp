import React from "react";
import notify from "../../images/notify.svg";
import { FaBars, FaTimes } from "react-icons/fa";

function WalletNav({ open, menuActive }) {
	return (
		<div className="lg:container shadow-md sticky top-0 mx-auto">
			<div>
				<nav className="flex mb-4  rounded">
					<div
						className="lg:container grow-1 flex flex-row justify-between items-center mx-auto walletnav"
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "70px",
						}}
					>
						<div className="p-3 lg:hidden">
							<FaBars onClick={open} />
						</div>
						<a
							href="https://flowbite.com/"
							className="basis-1/4 items-center hidden lg:inline-flex"
						>
							<h1
								className="px-9"
								style={{
									fontFamily: "Poppins",
									fontStyle: "normal",
									fontWeight: "600",
									fontSize: "23px",
									lineHeight: "45px",
									/* identical to box height */

									display: "flex",
									alignItems: "flex-end",

									color: "#232164",
								}}
							>
								Wallet
							</h1>
						</a>

						<div className="basis-5/7 sm:basis-4/6">
							<div className="flex flex-row justify-between items-center gap-5">
								<label class="relative bloc basis-full md:basis-2/3 ">
									<span class="sr-only">Search</span>

									<input
										style={{
											borderRadius: "68.6051px",
										}}
										className="px-2 w-full placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
										placeholder="Search for anything..."
										type="text"
										name="search"
									/>
									<i class="fa-solid fa-magnifying-glass"></i>
								</label>

								<div className="basis-1/3 hidden lg:inline-flex">
									<span>Profile</span>
								</div>
							</div>
						</div>

						<div className="basic-2/7 sm:basis-1/6">
							<div className="flex flex-row gap-5">
								<div className="grow-1">
									<img src={notify} style={{ width: "20px" }} alt="img1" />
								</div>
								<div className="mr-2">
									{/* <img src="" alt="img2" /> */}
									<span className="bg-red-300 rounded-full text-white p-1 md:p-3">
										AO
									</span>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default WalletNav;
