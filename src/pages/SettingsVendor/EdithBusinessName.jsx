/** @format */

import React, { } from "react";
import { useSelector } from "react-redux";
function EdithBusinessName({closeModal}) {
	const user = JSON.parse(localStorage?.getItem("dataKey"));
	console.log(user, "user datas");
	const { data } = useSelector((state) => state.user);
	return (
		<div
			class="relative z-10"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="flex mt-20 w-full items-end justify-center p-4 text-center sm:items-center sm:p-0 md:h-full lg:h-full">
					<div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
						<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
							<div class="sm:flex sm:items-start">
								<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
									<div>
										<div className=" mt-18 ml-5 flex-col items-center justify-center">
											<div className="flex border-b-2 justify-between  text-[#232164] font-semibold text-lg mb-20 mt-10">
												<div className="">
													Edit
													{"details".usertype === "CUSTOMER"
														? " Username"
														: " Business Name"}
												</div>
												<div className="">
													<h1 onClick={() => closeModal(false)} >Close X </h1>
												</div>
											</div>

											<div className="EditDone-Line"></div>

											<div className="text-[#232164]">
												<h5>
													Hello {"details"?.email}, we see that you are trying
													to change your
													{"details"?.usertype === "CUSTOMER"
														? " Username"
														: " Business Name"}
													. Please reach out to our Admin on 0700-8000-5000 or
													send an email to ScamTrustadmin@gmail.com
												</h5>
												<div className="grid justify-items-center">
													<button
				onClick={() => closeModal(false)}
														className="text-white bg-[#023b83] py-2 px-12 mt-8 rounded-md justify-center"
													>
														Okay
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EdithBusinessName;
