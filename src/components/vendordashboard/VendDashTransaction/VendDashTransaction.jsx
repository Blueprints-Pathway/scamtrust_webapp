/** @format */

import React, { useState, useEffect } from "react";
import "./VendDashTransaction.css";
import { Tabs } from "antd";
import axios from "axios";
import { data } from "../../../data/data";
import { Table } from "antd";
// import axios fr
const VendDashTransaction = () => {
	const [showCanceled, setShowCanceled] = useState(false);
	const [showCompleted, setShowCompleted] = useState(false);
	const [showOngoing, setShowOngoing] = useState(false);
	const [showAccepted, setShowAccepted] = useState(false);
	const [outgoing, setOutGoing] = useState();
	const [completeData, setCompleteData] = useState();
	const [cancelData, setCancelData] = useState();
	const [out, setOut] = useState();
	const [done, setDone] = useState();
	const [cancels, setCancels] = useState();
	const [active, setActive] = useState("alltransaction");
	const [accepted, setAccepted] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [view, setView] = useState();
	const TabPanel = Tabs;
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `${process.env.REACT_APP_BASE_URL}/transaction/lists/vendor`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${"user_details"?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config).finally(() => {
					setIsLoading(false);
				});
				console.log(data?.data?.data, "datas");
				const mappeddata = data?.data?.data?.map((data) => data);
				const datas = mappeddata?.filter(
					(filtered) => filtered?.status === "PENDING VENDOR ACCEPTANCE"
				);
				const datacompleted = mappeddata?.filter(
					(filtered) => filtered?.status === "COMPLETED"
				);
				const datacancelled = mappeddata?.filter(
					(filtered) => filtered?.status === "CANCELLED BY VENDOR"
				);
				const dataaccepted = mappeddata?.filter(
					(filtered) => filtered?.status === "ACCEPTED BY VENDOR"
				);
				setOut(datas);
				setDone(datacompleted);
				setCancels(datacancelled);
				setAccepted(dataaccepted);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `${process.env.REACT_APP_BASE_URL}/transaction/lists/vendor/ongoing`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${"user_details"?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				console.log(data?.data.data, "out");
				setOutGoing(data?.data?.data);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const API_URL = `${process.env.REACT_APP_BASE_URL}/transaction/lists/vendor/cancelled`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${"user_details"?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				console.log(data?.data.data, "completed");
				setCancelData(data?.data?.data);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const API_URL = `${process.env.REACT_APP_BASE_URL}/transaction/lists/vendor/completed`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${"user_details"?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				console.log(data?.data.data, "completed");
				setCompleteData(data?.data?.data);
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getTransaction = async () => {
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/transaction/view/${view}`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${"user_details"?.data?.access_token}`,
				},
			};

			const data = await axios.get(API_URL, config);

			console.log(data, "view on customer");

			// console.log(values, "values");
			// return response;
		} catch (error) {
			console.log(error, "errorss");
		}
	};
	return (
		<div className="vendor-dash-tab-wrapper">
			{/* TRANSACTION */}
			<h2 className="vendor-transcation">Transcation</h2>
			<div className="vendor-dash-transaction-tab">
				<table style={{ width: "" }}>
					<tr style={{ borderBottom: "1px solid #3C3E4D" }}>
						<td
							style={{
								width: "160px",
								fontSize: "16px",
								paddingTop: "12px",
								paddingBottom: "12px",
								color: "#023A81",
							}}
							className="thead"
						>
							All
						</td>
						<td style={{ width: "150px", fontSize: "16px" }} className="thead">
							Outgoing
						</td>
						<td style={{ width: "120px", fontSize: "16px" }} className="thead">
							Completed
						</td>
						<td style={{ fontSize: "16px" }} className="thead">
							Cancelled
						</td>
					</tr>
					<tr>
						<td style={{ width: "160px" }} className="thead">
							Transaction
						</td>
						<td style={{ width: "150px" }} className="thead">
							Vendorname
						</td>
						<td style={{ width: "120px" }} className="thead">
							Amount
						</td>
						<td className="thead">Date</td>
					</tr>
					{data.map((item, key) => {
						return (
							<tr key={item.id} style={{ marginBottom: "50px" }}>
								<td style={{ paddingTop: "12px", paddingBottom: "12px" }}>
									<div className="transcation">
										<img src={item.imgUrl} alt="" />
										<div>
											<h5 className="transaction-details">{item.phone}</h5>
											<h5 className="transaction-status">{item.status}</h5>
										</div>
									</div>
								</td>
								<td className="transaction-details">{item.name}</td>
								<td style={{}} className="transaction-details">
									{item.amount}
								</td>
								<td style={{}} className="transaction-details">
									{item.date}
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default VendDashTransaction;
