import React from "react";

function Nav() {
	return (
		<div className="container mx-auto">
			<diV>
				<nav className="  sm:px-4 py-4  rounded">
					<div
						className="container flex flex-row justify-between items-center mx-auto"
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "70px",
						}}
					>
						<a href="https://flowbite.com/" className="basis-1/4 items-center">
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
								Dashboard
							</h1>
						</a>

						<div className=" basis-1/2">
							<div className="flex flex-row justify-between items-center gap-5">
								<label class="relative bloc basis-2/3">
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

								<div className="basis-1/3">
									<span>Profile</span>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</diV>
		</div>
	);
}

export default Nav;
