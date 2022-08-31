import React, { useState, useEffect } from "react";
import axios from "axios";
import "./settingsVendor.css";

import Toggle from "./toggle";

function PrivacySettings() {
	const [details, setDetails] = useState();
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

				console.log(data?.data.data, "user data");
				setDetails(data?.data?.data);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<div className="security-Settings">
				<label className="security-text">Push notification</label>
				<label className="security-text-hash">
					Control your notifications from here
				</label>
			</div>
			<div className="security-Line"></div>
			<div className="security-toggle down">
				{" "}
				<Toggle />{" "}
			</div>
			{ details?.usertype==="CUSTOMER"?"":
				<div>
					<div className="security-Settings">
						<label className="security-text">RC number</label>
						<label className="security-text2">7654321</label>
						<label className="security-text-hash">
							Control your notifications from here
						</label>
					</div>

					<div className="security-Line"></div>
					<div className="security-toggle up">
						{" "}
						<Toggle />{" "}
					</div>
				</div>
			}
		</div>
	);
}

export default PrivacySettings;
