import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/white.svg";
import Dashboard from "../../images/dashboard.svg";
import settings from "../../images/setting.svg";
import wallet from "../../images/Wallet.svg";
import transfer from "../../images/transfer.svg";
import shield from "../../images/shield.svg";
import log from "../../images/log.svg";
import support from "../../images/support.svg";
import "./sidebar.css";
import { FaTimes } from "react-icons/fa";

function SideNav({ close, menuActive }) {
	const navigate = useNavigate();
	// 	const wallets =()=>{
	// navigate("/wallet")
	// 	}
	return (
		<aside class="" aria-label="Sidebar ">
			<div
				className={`w-64 lg:inline-flex overflow-y-auto py-4 px-3 bg-gray-50 rounded flex flex-col  sideNav ${
					menuActive ? "active" : ""
				}`}
			>
				<div className="lg:hidden">
					<FaTimes
						onClick={close}
						style={{ color: "#fff" }}
						className="float-right"
					/>
				</div>
				<div className="justify-center py-4 inline-flex">
					<img className="item-center" src={logo} />
				</div>
				<div className="grow py-5 flex flex-col justify-between">
					<ul class="space-y-2">
						<li>
							<a
								href="/"
								class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<img src={Dashboard} />
								<span class="ml-3 sidebtn">Dashboard</span>
							</a>
						</li>

						<li>
							<a
								href="#"
								class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<img src={transfer} />
								<Link
									to="/transaction"
									class="flex-1 ml-3 sidebtn whitespace-nowrap"
								>
									TRANSACTIONS
								</Link>
							</a>
						</li>
						<li>
							<Link
								to="/wallet"
								class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<img src={wallet} />
								<Link
									to="/wallet"
									class="flex-1 ml-3 whitespace-nowrap sidebtn"
								>
									WALLET
								</Link>
							</Link>
						</li>
						<li>
							<span
								href="#"
								class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<img src={settings} />
								<Link
									to="/settingsVendor"
									class="flex-1 ml-3 whitespace-nowrap sidebtn"
								>
									SETTINGS
								</Link>
							</span>
						</li>
					</ul>
					<div>
						<ul class="pb-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
							<li>
								<Link
									to="#"
									class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
								>
									<img src={support} />
									<span class="ml-4">Support</span>
								</Link>
							</li>

							<li>
								<Link
									to="/signin"
									class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
								>
									<img src={log} />
									<span class="ml-3">Log Out</span>
								</Link>
							</li>
						</ul>
						<div>
							<img src={shield} style={{ width: "90%" }} alt="logo" />
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
}

export default SideNav;
