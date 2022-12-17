import React, { useState ,useEffect} from "react";
import "./settingsVendor.css";

import shielgg from "../../images/shielgg.png";
import Frame318 from "../../images/Frame318.png";
import SideBar from "../SideBar/SideBar";
import PrivacySettings from "./PrivacySettings";
import SecuritySettings from "./SecuritySettings";
import GeneralSettings from "./GeneralSettings";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import "../../index.css";

function SettingsVendor() {
	const [details,setDetails]=useState()
	const handleSelect = () => {
		setSelect(!select);
		setSelect2(false);
		setSelect3(false);
	};

	const [select, setSelect] = useState(true);

	const handleSelect2 = () => {
		setSelect2(!select2);
		setSelect(false);
		setSelect3(false);
	};
	const [select2, setSelect2] = useState(false);

	const handleSelect3 = () => {
		setSelect3(!select3);
		setSelect(false);
		setSelect2(false);
	};
	const [select3, setSelect3] = useState(false);

	const handleCheck = () => {
		setChecked(!checked);
	};
	const [checked, setChecked] = useState(false);

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
	return (
		<div>
			<Layout className="containerSettings" name="Settings">
				<div className="containerSettings2">
					<div className={checked ? "Center active" : "Center"}>
						<img className="CenterTopImg" src={shielgg} alt="Scam Trust" />
					</div>

					<div className={checked ? "CenterBottom active" : "CenterBottom"}>
						<div className="vendorNameSettings">
							<h1>{details?.name}</h1>
						</div>

						<div className="CenterImg1">
							<div className="CenterImg2">
								<div className="CenterImg3">
									<img
										className="CenterImage1"
										src={Frame318}
										alt="Scam Trust"
									/>
								</div>
							</div>
						</div>
						<div className="CenterGeneralSettings">
							<div className="GeneralSettings">
								<div className="category">
									{select ? (
										<h6 className="Selection active">General Settings</h6>
									) : (
										<h6 className="Selection" onClick={handleSelect}>
											General Settings
										</h6>
									)}
									{select2 ? (
										<h6 className="Selection active">Security Settings</h6>
									) : (
										<h6 className="Selection" onClick={handleSelect2}>
											Security Settings
										</h6>
									)}
									{select3 ? (
										<h6 className="Selection active">Privacy Settings</h6>
									) : (
										<h6 className="Selection" onClick={handleSelect3}>
											Privacy Settings
										</h6>
									)}
								</div>

								<div
									className={select ? "form-GeneralSettings white-bg" : "hide"}
								>
									<GeneralSettings />
								</div>
								<div
									className={
										select2 ? "password-GeneralSettings white-bg" : "hide"
									}
								>
									<SecuritySettings />
								</div>

								<div className={select3 ? "security-GeneralSettings" : "hide"}>
									<PrivacySettings />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <SideBar /> */}
			</Layout>
		</div>
	);
}

export default SettingsVendor;
